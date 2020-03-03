var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Pointer = function()
	{
		this.posFirst = {x:0, y:0};
		this.posCurrent = {x:0, y:0};
		this.posLast = {x:0, y:0};
		this.usedKeys = [];
		this.initEvents();
	};

	JSPATTERN.Pointer.prototype.initEvents = function()
	{
		window.addEventListener('mousedown', this.updateFirstPosition.bind(this, 'mouse'));
		window.addEventListener('touchstart', this.updateFirstPosition.bind(this, 'touchScreen'));
		window.addEventListener('mousemove', this.updateCurrentPosition.bind(this));
		window.addEventListener('touchmove', this.updateCurrentPosition.bind(this));
		window.addEventListener('mouseup', this.updateLastPosition.bind(this));
		window.addEventListener('touchend', this.updateLastPosition.bind(this));
		window.addEventListener('touchcancel', this.updateLastPosition.bind(this));
	};

	JSPATTERN.Pointer.prototype.updateFirstPosition = function(device, e)
	{
		this.updateUsedKeys(e, device, true);
		if (e.touches)
		{
			if (e.touches.length > 1)
			{
				return;
			}
			else
			{
				e = e.touches[0];
			}
		}
		this.posFirst = {x: e.clientX, y: e.clientY};
	};

	JSPATTERN.Pointer.prototype.updateCurrentPosition = function(e)
	{
		e = e.touches ? e.touches[0] : e;
		this.posCurrent = {x: e.clientX, y: e.clientY};
	};

	JSPATTERN.Pointer.prototype.updateLastPosition = function(e)
	{
		console.log(e.type)
		this.posLast = this.posCurrent;
		this.updateUsedKeys(e.type, false);
	};

	JSPATTERN.Pointer.prototype.updateUsedKeys = function(e, device, isActive)
	{
		var keyCode = null;

		if (device == 'mouse')
		{
			var buttons = ['leftBtn', 'middleBtn', 'rightBtn'];
			keyCode = buttons[e.button];
		}
		else
		{
			keyCode = 'touchStart';
		}

		if (keyCode)
		{
			// key is pressed and it is not already registered
			var index = this.usedKeys.indexOf(keyCode);
			if (isActive)
			{
				if (index == -1)
				{
					this.usedKeys.push(keyCode);
				}
			}
			else
			{
				this.usedKeys.splice(index, 1);
			}
		}
	};

	JSPATTERN.Pointer.prototype.getTranslation = function()
	{
		var x = this.posCurrent.x - this.posFirst.x;
		var y = this.posCurrent.y - this.posFirst.y;
		return {x: x, y: y};
	};

	JSPATTERN.Pointer.prototype.getInfos = function()
	{
		return {usedKeys: this.usedKeys, posFirst: this.posFirst, posCurrent: this.posCurrent, posLast: this.posLast};
	};
}());