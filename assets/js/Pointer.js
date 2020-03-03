var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Pointer = function(container)
	{
		this.keys = {
			0: 'leftBtn',
			1: 'middleBtn',
			2: 'rightBtn'
		};
		this.container = container;
		this.posFirst = {x:0, y:0};
		this.posCurrent = {x:0, y:0};
		this.posLast = {x:0, y:0};
		this.usedKeys = [];
		this.isMoving = false;
		this.initEvents();

		JSPATTERN.Device.call(this, this.keys);
	};

	JSPATTERN.Pointer.prototype = Object.create(JSPATTERN.Device.prototype);
	JSPATTERN.Pointer.prototype.constructor = JSPATTERN.Pointer;

	JSPATTERN.Pointer.prototype.initEvents = function()
	{
		this.container.addEventListener('mousedown', this.updateFirstPosition.bind(this, 'mouse'));
		this.container.addEventListener('touchstart', this.updateFirstPosition.bind(this, 'touchScreen'), {passive: false});
		this.container.addEventListener('mousemove', this.updateCurrentPosition.bind(this));
		this.container.addEventListener('touchmove', this.updateCurrentPosition.bind(this));
		this.container.addEventListener('mouseup', this.updateLastPosition.bind(this));
		this.container.addEventListener('touchend', this.updateLastPosition.bind(this));
		this.container.addEventListener('touchcancel', this.updateLastPosition.bind(this));
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