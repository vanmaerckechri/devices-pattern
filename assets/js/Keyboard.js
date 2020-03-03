var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Keyboard = function()
	{
		this.keys = {
			37: 'arrowLeft',
			38: 'arrowUp',
			39: 'arrowRight',
			40: 'arrowDown'
		};

		JSPATTERN.Device.call(this, this.keys);
	};

	JSPATTERN.Keyboard.prototype = Object.create(JSPATTERN.Device.prototype);
	JSPATTERN.Keyboard.prototype.constructor = JSPATTERN.Keyboard;

	JSPATTERN.Keyboard.prototype.initEvents = function()
	{
		var self = this;
		window.addEventListener('keydown', function(e)
		{
        	self.updateUsedKeys(e, 'keyboard', true);
    	});
    	window.addEventListener('keyup', function(e)
		{
        	self.updateUsedKeys(e, 'keyboard', false);
    	});
	};
}());