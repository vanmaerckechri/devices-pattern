var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Menu = function(){};

	JSPATTERN.Menu.prototype.mainLoop = function(ui, keyboard, pointer)
	{
		this.listenKeyboard(ui, keyboard);
		this.listenPointer(ui, pointer);
	}

	JSPATTERN.Menu.prototype.listenKeyboard = function(ui, keyboard){};
	
	JSPATTERN.Menu.prototype.listenPointer = function(ui, pointer){};
}());