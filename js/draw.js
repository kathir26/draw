 
window.onload = function() {
 
  document.ontouchmove = function(e){ e.preventDefault(); }
 
  var canvas  = document.getElementById('canvas_draw');
  var canvastop = canvas.offsetTop
 
  var context = canvas.getContext("2d");
 
  var lastx;
  var lasty;
 
  context.strokeStyle = "#000000";
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.lineWidth = 5;
 
  function clear() {
    context.fillStyle = "#ffffff";
    context.rect(0, 0, 300, 300);
    context.fill();
  }
 
  function dot(x,y) {
    context.beginPath();
    context.fillStyle = "#000000";
    context.arc(x,y,1,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.closePath();
  }
 
  function line(fromx,fromy, tox,toy) {
    context.beginPath();
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.stroke();
    context.closePath();
  }
 
  canvas.ontouchstart = function(event){                   
    event.preventDefault();                 
    
    lastx = event.touches[0].clientX;
    lasty = event.touches[0].clientY - canvastop;
 
    dot(lastx,lasty);
  }
 
  canvas.ontouchmove = function(event){                   
    event.preventDefault();                 
 
    var newx = event.touches[0].clientX;
    var newy = event.touches[0].clientY - canvastop;
 
    line(lastx,lasty, newx,newy);
    
    lastx = newx;
    lasty = newy;
  }
 
 
  var clearButton = document.getElementById('clear')
  clearButton.onclick = clear
 
  clear()
}
function color_picker()
{
	$('#color_pallete').ColorPicker({
		flat: true,
		color: '#00ff00',
		onChange: function(hsb, hex, rgb) {
			$('#colorSelector2 div').css('backgroundColor', '#' + hex);
			$('#color').val('#' + hex);
		},
		onSubmit: function(hsb, hex, rgb) {
			$('#colorSelector2 div').css('backgroundColor', '#' + hex);
			$('#colorSelector2').click();
		}
	});
	$('#color_pallete>div').css('position', 'absolute');
	var widt = false;
	$('#colorSelector2').click(function(e) {
		$('#color_pallete').stop().animate({height: widt ? 0 : 173}, 500);
		widt = !widt;
		e.stopPropagation();
	});
	$('.colorpicker').click(function(e) {
		e.stopPropagation();
	});
	$("body").click(function() {
	  $('#color_pallete').stop().animate({height: 0}, 500);
	  widt = false;
	});
}