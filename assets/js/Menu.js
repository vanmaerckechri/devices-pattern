var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Menu = function()
	{		
		JSPATTERN.State.call(this);
	};

	JSPATTERN.Menu.prototype = Object.create(JSPATTERN.State.prototype);

	JSPATTERN.Menu.prototype.mainLoop = function(ui, keys, mouse)
	{
		this.listenKeyboard(ui, keys);
		this.listenMouse(ui, mouse);
	}
}());