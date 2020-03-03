var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Game = function(){};

	JSPATTERN.Game.prototype.mainLoop = function(ui, keyboard, pointer)
	{
		this.listenKeyboard(ui, keyboard);
		this.listenPointer(ui, pointer);
	};

	JSPATTERN.Game.prototype.listenKeyboard = function(ui, keyboard)
	{
		ui.displayKeys(keyboard.usedKeys);
	};

	JSPATTERN.Game.prototype.listenPointer = function(ui, pointer)
	{
		ui.displayPointerButtons(pointer.usedKeys);
		ui.displayPointerPositions(pointer.posCurrent);
		ui.displayDeviceDragDrop(pointer.posFirst, pointer.posLast);
	};
}());