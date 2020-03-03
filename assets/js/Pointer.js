var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Pointer = function(container)
	{
		this.posFirst = {x:0, y:0};
		this.posCurrent = {x:0, y:0};
		this.posLast = {x:0, y:0};
		this.usedKeys = [];
		this.isMoving = false;
		this.initEvents(container);
	};

	JSPATTERN.Pointer.prototype.initEvents = function(container)
	{
		container.addEventListener('mousedown', this.updateFirstPosition.bind(this, 'mouse'));
		container.addEventListener('touchstart', this.updateFirstPosition.bind(this, 'touchScreen'), {passive: false});
		container.addEventListener('mousemove', this.updateCurrentPosition.bind(this));
		container.addEventListener('touchmove', this.updateCurrentPosition.bind(this));
		container.addEventListener('mouseup', this.updateLastPosition.bind(this));
		container.addEventListener('touchend', this.updateLastPosition.bind(this));
		container.addEventListener('touchcancel', this.updateLastPosition.bind(this));
	};

	JSPATTERN.Pointer.prototype.updateFirstPosition = function(device, e)
	{
		e.preventDefault();
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
		this.isMoving = true;
		e = e.touches ? e.touches[0] : e;
		this.posCurrent = {x: e.clientX, y: e.clientY};
	};

	JSPATTERN.Pointer.prototype.updateLastPosition = function(e)
	{
		this.updateUsedKeys(e.type, false);
		this.posLast = this.isMoving === true ? this.posCurrent : this.posFirst;
		this.isMoving = false;
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