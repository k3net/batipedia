var start, flashStart, currentTask = 0, evaluating = false, evalTime, currentTaskStart, currentFlash = [], lang, score = 0;
var lastX, lastY, dragStartX, dragStartY, dragged, idleTimeout;

$(document).ready( function()
{
	start = new Date().getTime();

  var qs = getUrlVars();
  if(typeof qs.l != 'undefined'){
    pageStart(qs.l);
  }

	setInterval( function()
	{
		eachFrame();
	}, 50 );

	$( "#common .next_btn").click( function ()
	{
		initTask( ++currentTask );
	} );

	$( "#common .reset_btn").click( function ()
	{
		var task = content.tasks[ currentTask ];
		$( "#page_drag .answers .answer" ).each( function( idx, element )
		{
			$( element ).find( "#mark" ).removeClass( "right wrong" );
			$( element ).animate( { "left": task.answers[ idx ].x, "top": task.answers[ idx ].y } );
		} );
	} );

	$( "#common .check_btn").click( function ()
	{
		var task = content.tasks[ currentTask ];
		if ( task.type == "drag" )
		{
			$( "#page_drag .answers .answer" ).each( function( idx, element )
			{
				$( element ).find( "#mark" ).removeClass( "right wrong" );
				$( element ).find( "#mark" ).css( "opacity", 1 );
				if ( task.snap )
				{
					var dest = getAnswerDestination( task, idx );
					if ( dest )
					{
						$( element ).find( "#mark" ).addClass( "right" );
						var width = $( element ).width();
						$( element ).animate( { "left": dest.x[ lang ] + dest.width / 2 - width / 2, "top": dest.y[ lang ] } );
					}
					else
					{
						$( element ).find( "#mark" ).addClass( "wrong" );
						$( element ).animate( { "left": task.answers[ idx ].x, "top": task.answers[ idx ].y } );
					}
				}
				else
				{
					$( element ).animate( { "left": task.answers[ idx ].rightX, "top": task.answers[ idx ].rightY } );
				}
			} );
		}
	} );

	$( "#common .again_btn").click( function ()
	{
    top.location.reload();
	} );

	$( "#page_start .hu_btn").click( function (){
    pageStart('hu');
	});

	$( "#page_start .en_btn").click( function (){
    pageStart('en');
	});

	$( "#page_start .hr_btn").click( function (){
    pageStart('hr');
	});
});

function pageStart(lang)
{
  /*
  $( "#page_start" ).fadeOut( "slow", function ()
  {
    */
    currentTask = 0;
    score = 0;
    setLang( lang );
    initTask( currentTask );
    refreshIdleTimeout( );
    $('.home-link').attr('href','../index.html?l='+lang);
  //} );
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function refreshIdleTimeout( )
{
	if ( idleTimeout )
	{
		clearTimeout( idleTimeout );
	}

	idleTimeout = setTimeout( function()
	{
    /*
		$( "#page_test" ).hide();
		$( "#page_drag" ).hide();
		$( "#common").hide();
		$( "#page_start" ).show( );
    */
    top.location.href='../index.html';
	}, 60 * 1000);
}

function initTask( idx )
{
	if ( idx == content.tasks.length )
	{
		var percent = Math.round( 100 * score / totalScore() );
		$( "#common .dialog").fadeIn( "fast" );
		$( "#common .reset_btn").fadeOut( "fast" );
		$( "#common .check_btn").fadeOut( "fast" );
		$( "#common .next_btn").fadeOut( "fast" );
		$( "#common .time_btn").fadeOut( "fast" );

		if ( percent > 90 )
			$( "#common .dialog h1").html( getText( "eval100" ) );
		else
			if ( percent >= 60 )
				$( "#common .dialog h1").html( getText( "eval90" ) );
			else
				$( "#common .dialog h1").html( getText( "eval60" ) );
		$( "#common .dialog .score_btn td").html( Math.min( totalScore(), Math.round( score ) ) + "/" + Math.round( totalScore() ) + "" );
		return;
	}

	var task = content.tasks[ idx ];
	currentTaskStart = new Date().getTime();
	evaluating = false;
	$( "#common").fadeIn( "fast" );
	$( "#common .time_btn").fadeIn( "fast" );
	$( "#common .dialog").hide();

	$( window ).unbind( "mousedown");
	$( window ).unbind( "touchstart");
	$( window ).mousedown( function( event )
	{
		refreshIdleTimeout();
	} );
	$( window ).bind( "touchstart", function( event )
	{
		refreshIdleTimeout();
	} );

	if ( task.type == "test" )
	{
		$( "#common .next_btn").hide();
		$( "#common .reset_btn").hide();
		$( "#common .check_btn").hide();
		$( "#page_test" ).show();
		$( "#page_drag" ).hide();
		unselectAnswers();

		$( "#page_test .question" ).html( task[ lang ].question );
		$( "#page_test .answerpos1 td" ).html( task[ lang ].answers[ 0 ] );
		$( "#page_test .answerpos2 td" ).html( task[ lang ].answers[ 1 ] );
		$( "#page_test .answerpos3 td" ).html( task[ lang ].answers[ 2 ] );

		setBackground( "#page_test", task.background );

		$( "#page_test .answerpos1" ).unbind();
		$( "#page_test .answerpos2" ).unbind();
		$( "#page_test .answerpos3" ).unbind();

		$( "#page_test .answerpos1" ).click( function ()
		{
			unselectAnswers();
			$( "#page_test .answerpos1 #mark" ).addClass( task.rightAnswer == 1 ? "right" : "wrong" );
			evalTask( idx );
		} );
		$( "#page_test .answerpos2" ).click( function ()
		{
			unselectAnswers();
			$( "#page_test .answerpos2 #mark" ).addClass( task.rightAnswer == 2 ? "right" : "wrong" );
			evalTask( idx );
		} );
		$( "#page_test .answerpos3" ).click( function ()
		{
			unselectAnswers();
			$( "#page_test .answerpos3 #mark" ).addClass( task.rightAnswer == 3 ? "right" : "wrong" );
			evalTask( idx );
		} );
	}
	if ( task.type == "drag" )
	{
		$( "#common .next_btn").hide();
		if ( task.hideReset )
			$( "#common .reset_btn").hide();
		else
			$( "#common .reset_btn").show();
		$( "#common .check_btn").hide();
		$( "#page_test" ).hide();
		$( "#page_drag" ).show();

		setBackground( "#page_drag", task.background );
		$( "#page_drag .question h1" ).html( task[ lang ].question );
		$( "#page_drag .question h2" ).html( task[ lang ].question2 );

		var html = "", ls = "";
		for ( var i = 0; i < task.answers.length; i++ )
		{
			if ( task.answers[ i ].labelStyle )
				ls = task.answers[ i ].labelStyle;
			else
				ls = task.labelStyle;
			html += "<div class='answer unselectable' style='left: " + task.answers[ i ].x + "px; top: " + task.answers[ i ].y + "px;'><img src='" + task.answers[ i ].image + "'><div id='mark'></div><h1 class='" + ls + "'>" + task.answers[ i ].label[ lang ] + "</h1></div>";
		}
		$( "#page_drag .answers" ).html( html );

		html = "";
		for ( var i = 1; i <= 10; i++ )
		{
			var extra = task[ lang ][ "extra" + i ];
			if ( extra )
				html += "<div class='extra unselectable' style='left: " + extra.x + "px; top: " + extra.y + "px; text-align:" + extra.align + "'>" + extra.text + "</div>";
		}
		$( "#page_drag .extras" ).html( html );

		$( "#page_drag .answers .answer" ).each( function( idx, element )
		{
			$( element ).unbind( "mousedown" );
			$( element ).unbind( "touchstart" );
			$( element ).mousedown( function( event )
			{
				mousedown( event, element );
				event.stopPropagation();
				event.preventDefault();
			} );
			$( element ).bind( "touchstart", function( event )
			{
				event.pageX = event.originalEvent.touches[0].pageX;
				event.pageY = event.originalEvent.touches[0].pageY;
				mousedown( event, element );
				event.stopPropagation();
				event.preventDefault();
			} );
		} );
		$( window ).unbind( "mousemove");
		$( window ).unbind( "touchmove");
		$( window ).mousemove( function( event )
		{
			mousemove( event );
		} );
		$( window ).bind( "touchmove", function( event )
		{
			event.pageX = event.originalEvent.touches[0].pageX;
			event.pageY = event.originalEvent.touches[0].pageY;
			mousemove( event );
			event.stopPropagation();
			event.preventDefault();
		} );
		$( window ).unbind( "touchend");
		$( window ).unbind( "mouseup");
		$( window ).mouseup( function( event )
		{
			mouseup( event, task );
		} );
		$( window ).bind( "touchend", function( event )
		{
			mouseup( event, task );
			//event.stopPropagation();
			//event.preventDefault();
		} );
	}
}

function dbg( text )
{
	var html = $( ".dbg" ).html();

	html += "<br>" + text;
	$( ".dbg" ).html( html );
}

function mousedown( event, element )
{
	if ( !evaluating )
	{
		lastX = event.pageX;
		lastY = event.pageY;
		dragged = element;
		dragStartX = $( dragged ).position().left;
		dragStartY = $( dragged ).position().top;
	}
}

function mousemove( event )
{
	if ( lastX )
	{
		var left = $( dragged ).position().left;
		var top = $( dragged ).position().top;

		var newLeft = ( left + event.pageX - lastX );
		var newTop = ( top + event.pageY - lastY );
		var w = parseInt( $( dragged ).css( "width" ) );
		var h = parseInt( $( dragged ).css( "height" ) );

		if ( newLeft < 0 )
			newLeft = 0;
		if ( newLeft > 1920 - w )
			newLeft = 1920 - w;
		if ( newTop < 0 )
			newTop = 0;
		if ( newTop > 1080 - h )
			newTop = 1080 - h;

		$( dragged ).css( "left", newLeft + "px" );
		$( dragged ).css( "top", newTop + "px" );

		lastX = event.pageX;
		lastY = event.pageY;
	}
}

function mouseup( event, task )
{
	if ( lastX )
	{
		if ( task.snap )
		{
			var top = $( dragged ).position().top;
			var left = $( dragged ).position().left;
			var width = $( dragged ).width();
			var height = $( dragged ).height();
			for ( var i = 0; i < task.destinations.length; i++ )
				if ( Math.abs( task.destinations[ i ].x[ lang ] + task.destinations[ i ].width / 2 - ( left + width / 2 ) ) < width / 2 && Math.abs( task.destinations[ i ].y[ lang ] + task.destinations[ i ].height / 2 - ( top + height / 2 ) ) < height / 2 )
				{
					if ( occupiedDestination( task, i ) < 2 )
					{
						$( dragged ).animate( { left: ( task.destinations[ i ].x[ lang ] + task.destinations[ i ].width / 2 - width / 2 ), top: ( task.destinations[ i ].y[ lang ] /*+ task.destinations[ i ].height / 2 - height / 2*/ ) }, 500, function()
						{
							if ( !evaluating && checkDrag() )
								evalTask( currentTask );
						} );
					}
					else
					{
						$( dragged ).animate( { left: dragStartX, top: dragStartY }, 500, function()
						{
						} );
					}
					break;
				}
		}
		else
		{
			if ( !evaluating && checkDrag() )
				evalTask( currentTask );
		}
	}
	lastX = undefined;
	lastY = undefined;
	dragStartX = undefined;
	dragStartY = undefined;
}

function evalTask( idx, soft )
{
	var task = content.tasks[ idx ];
	evaluating = true;
	lastX = undefined;
	lastY = undefined;

	var time = new Date().getTime();
	evalTime = content.tasks[ currentTask ].time - ( time - currentTaskStart ) / 1000;
	if ( evalTime < 0 )
		evalTime = 0;

	if ( task.type == "test" )
	{
		if ( $( "#page_test .answerpos" + task.rightAnswer + " #mark" ).hasClass( "right" ) )
		{
			score += task.score;
		}
		else
		{
			$( "#page_test .answerpos" + task.rightAnswer + " #mark" ).addClass( "right" );
		}
		$( "#common .next_btn").fadeIn();
		startFlashing( [ $( "#page_test .answerpos" + task.rightAnswer + " #mark" ) ], function ()
		{
		} );
	}
	if ( task.type == "drag" )
	{
		var right = 0;
		var flash = [];
		/*$( "#page_drag .answers .answer" ).each( function( idx, element )
		{
			var top = $( element ).position().top;
			var left = $( element ).position().left;
			var width = $( element ).width();
			var height = $( element ).height();

			$( element ).find( "#mark" ).removeClass( "right wrong" );
			$( element ).find( "#mark" ).css( "left", ( task.iconPosition ? task.iconPosition.x : width * 0.8 ) + "px" );
			$( element ).find( "#mark" ).css( "top",  ( task.iconPosition ? task.iconPosition.y : height * 0.05 ) + "px" );
			flash.push( $( element ).find( "#mark" ) );
			var dest = getAnswerDestination( task, idx );
			if ( inRect( left + width / 2, top + height / 2, dest.x, dest.y, dest.width, dest.height ) )
			{
				$( element ).find( "#mark" ).addClass( "right" );
				right++;
			}
			else
				$( element ).find( "#mark" ).addClass( "wrong" );
		} );*/

		$( "#page_drag .answers .answer" ).each( function( idx, element )
		{
			$( element ).find( "#mark" ).removeClass( "right wrong" );
			$( element ).find( "#mark" ).css( "left", ( task.iconPosition ? task.iconPosition.x : width * 0.8 ) + "px" );
			$( element ).find( "#mark" ).css( "top",  ( task.iconPosition ? task.iconPosition.y : height * 0.05 ) + "px" );
		} );

		for ( var i = 0; i < task.destinations.length; i++ )
		{
			$( "#page_drag .answers .answer" ).each( function( idx, element )
			{
				var top = $( element ).position().top;
				var left = $( element ).position().left;
				var width = $( element ).width();
				var height = $( element ).height();

				var dest = task.destinations[ i ];
				if ( inRect( left + width / 2, top + height / 2, dest.x[ lang ], dest.y[ lang ], dest.width, dest.height ) )
				{
					flash.push( $( element ).find( "#mark" ) );
					if ( dest.name == task.answers[ idx ].rightAnswer )
					{
						$( element ).find( "#mark" ).addClass( "right" );
						right++;
					}
					else
						$( element ).find( "#mark" ).addClass( "wrong" );
				}

			} );
		}

		$( "#common .reset_btn").hide();
		$( "#common .next_btn").fadeIn();
		if ( task.destinations.length != right )
			$( "#common .check_btn").fadeIn();
		startFlashing( flash, function ()
		{
		} );
		if ( !soft ) {
			score += task.score * right;
		}
	}
}

function occupiedDestination( task, destIdx )
{
	var count = 0;
	$( "#page_drag .answers .answer" ).each( function( idx, element )
	{
		var top = $( element ).position().top;
		var left = $( element ).position().left;
		var width = $( element ).width();
		var height = $( element ).height();

		if ( inRect( left + width / 2, top + height / 2, task.destinations[ destIdx ].x[ lang ], task.destinations[ destIdx ].y[ lang ], task.destinations[ destIdx ].width, task.destinations[ destIdx ].height ) )
			count++;
	} );
	return count;
}

function checkDrag()
{
	var task = content.tasks[ currentTask ];
	var inside = 0;

	if ( task.type == "drag" )
	{
/*		$( "#page_drag .answers .answer" ).each( function( idx, element )
		{
			var top = $( element ).position().top;
			var left = $( element ).position().left;
			var width = $( element ).width();
			var height = $( element ).height();

			for ( var i = 0; i < task.destinations.length; i++ )
				if ( inRect( left + width / 2, top + height / 2, task.destinations[ i ].x, task.destinations[ i ].y, task.destinations[ i ].width, task.destinations[ i ].height ) )
					inside++;
		} );
		if ( inside == task.answers.length )
			return true; */

		for ( var i = 0; i < task.destinations.length; i++ )
		{
			$( "#page_drag .answers .answer" ).each( function( idx, element )
			{
				var top = $( element ).position().top;
				var left = $( element ).position().left;
				var width = $( element ).width();
				var height = $( element ).height();

				if ( inRect( left + width / 2, top + height / 2, task.destinations[ i ].x[ lang ], task.destinations[ i ].y[ lang ], task.destinations[ i ].width, task.destinations[ i ].height ) )
					inside++;
			} );
		}
		if ( inside == task.destinations.length )
			return true;
	}

	return false;
}

function getAnswerDestination( task, answerIdx )
{
	for ( var i = 0; i < task.destinations.length; i++ )
		if ( task.destinations[ i ].name == task.answers[ answerIdx ].rightAnswer )
			return task.destinations[ i ];
	return null;
}

function startFlashing( elements, callback )
{
	flashStart = new Date().getTime();
	currentFlash = elements;
	setTimeout( function()
	{
		currentFlash = [];
		callback();
	}, 1885 );
}

function inRect( x, y, rx, ry, rw, rh )
{
	if ( x > rx && x < rx + rw && y > ry && y < ry + rh )
		return true;
	return false;
}

function unselectAnswers()
{
	$( "#page_test .answerpos1 #mark" ).removeClass( "right" );
	$( "#page_test .answerpos2 #mark" ).removeClass( "right" );
	$( "#page_test .answerpos3 #mark" ).removeClass( "right" );
	$( "#page_test .answerpos1 #mark" ).removeClass( "wrong" );
	$( "#page_test .answerpos2 #mark" ).removeClass( "wrong" );
	$( "#page_test .answerpos3 #mark" ).removeClass( "wrong" );
}

function totalScore()
{
	var ret = 0;
	for ( var i = 0; i < content.tasks.length; i++ )
	{
		var task = content.tasks[ i ];
		if ( task.type == "test" )
			ret += task.score;
		if ( task.type == "drag" )
			ret += task.score * task.destinations.length;
	}
	return ret;
}

function getText( id )
{
	return content.texts[ id ][ lang ];
}

function setBackground( element, bg )
{
	$( element ).css( "background-image", "url( '" + bg + "')" );
}

function eachFrame( )
{
	var time = new Date().getTime();

	if ( currentFlash )
		for ( var i = 0; i < currentFlash.length; i++ )
		{
			//$( currentFlash[ i ] ).css( "opacity", 0.75 + Math.cos( ( time - start ) / 100 ) * 0.25 );
			currentFlash[ i ].css( "opacity", 0.75 + Math.cos( ( time - flashStart ) / 100 ) * 0.25 );
		}

	if ( currentTask < content.tasks.length )
	{
		var timeLeft = content.tasks[ currentTask ].time - ( time - currentTaskStart ) / 1000;
		if ( timeLeft < 0 )
			timeLeft = 0;
		if ( evaluating )
			$( "#common .time_btn td" ).html( evalTime.toFixed(1) );
		else
			$( "#common .time_btn td" ).html( timeLeft.toFixed(1) );
		if ( !evaluating && timeLeft == 0 )
		{
			evalTask( currentTask );
		}
	}
}

function setLang( newLang )
{
	lang = newLang;
	$( "#common .reset_btn td").html( content.texts.reset_btn[ lang ] );
	$( "#common .next_btn td").html( content.texts.next_btn[ lang ] );
	$( "#common .check_btn td").html( content.texts.check_btn[ lang ] );
	$( "#common .again_btn td").html( content.texts.again_btn[ lang ] );
}
