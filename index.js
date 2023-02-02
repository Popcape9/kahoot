$(function() {
	$("#sendUser").click(function() {
		activeWindows.innerHTML++;
		return launchWin();
	});
	$("#removeUser").click(function() {
		activeWindows.innerHTML = 0;
		_1.close();
	});
});
var _1; //global
function launchWin() {
	_1 = window.open("http://www.kahoot.it", "_blank", "height=210, width=320");
}