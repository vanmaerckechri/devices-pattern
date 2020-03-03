var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.State = function(){};

	JSPATTERN.State.prototype = 
	{	
		mainLoop: function(){},

		listenKeyboard: function(ui, keys)
		{
			ui.displayKeys(keys.usedKeys);
		},

		listenMouse: function(ui, mouse)
		{
			ui.displayMouseButtons(mouse.usedKeys);
			ui.displayMouseAxes(mouse.axes);
		},
	};
}());