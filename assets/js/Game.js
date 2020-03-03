var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Game = function()
	{
		JSPATTERN.State.call(this);
	};

	JSPATTERN.Game.prototype = Object.create(JSPATTERN.State.prototype);

	JSPATTERN.Game.prototype.mainLoop = function(ui, keys, mouse, dragDrop)
	{
		this.listenKeyboard(ui, keys);
		this.listenMouse(ui, mouse, dragDrop);
	};

	JSPATTERN.Game.prototype.listenMouse = function(ui, mouse, dragDrop)
	{
		ui.displayMouseButtons(mouse.usedKeys);
		ui.displayMouseAxes(mouse.axes);
		ui.displayDeviceDragDrop(dragDrop.getPositions(mouse));
	};
}());