var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Game = function()
	{
		JSPATTERN.State.call(this);
	};

	JSPATTERN.Game.prototype = Object.create(JSPATTERN.State.prototype);

	JSPATTERN.Game.prototype.mainLoop = function(ui, keyboard, pointer)
	{
		this.listenKeyboard(ui, keyboard);
		this.listenPointer(ui, pointer);
	};

	JSPATTERN.Game.prototype.listenPointer = function(ui, pointer)
	{
		ui.displayPointerButtons(pointer.usedKeys);
		ui.displayPointerPositions(pointer.posCurrent);
		ui.displayDeviceDragDrop(pointer.posFirst, pointer.posLast);
	};
}());