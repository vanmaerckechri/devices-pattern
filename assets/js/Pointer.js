var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Pointer = function()
	{
		this.keys = {
			0: 'clickLeft',
			1: 'clickmiddle',
			2: 'clickright',
		};

		JSPATTERN.Device.call(this, this.keys);

		this.infos.axes = {x:0, y:0};
		this.isDown = false;
	};

	JSPATTERN.Pointer.prototype = Object.create(JSPATTERN.Device.prototype);
	JSPATTERN.Pointer.prototype.constructor = JSPATTERN.Pointer;

	JSPATTERN.Pointer.prototype.initEvents = function()
	{
		var self = this;

		var pointerDown = 'pointerdown';
		var pointerUp = 'pointerup';
		var pointerMove = 'pointermove';

		if(window.navigator.msPointerEnabled)
		{
			pointerDown = 'MSPointerDown';
			pointerUp = 'MSPointerUp';
			pointerMove = 'MSPointerMove';
		}

		window.addEventListener(pointerDown, function(e)
		{
			console.log('down')
        	self.updateUsedKeys(e, true);
        	self.updateAxes(e);
    	});

    	window.addEventListener(pointerUp, function(e)
		{
			console.log('up')
        	self.updateUsedKeys(e, false);
    	});

    	window.addEventListener(pointerMove, function(e)
		{
			console.log('move')
        	self.updateAxes(e);
    	});
	};

	JSPATTERN.Pointer.prototype.updateAxes = function(e)
	{
		this.infos.axes.x = e.pageX;
		this.infos.axes.y = e.pageY;
	};
}());