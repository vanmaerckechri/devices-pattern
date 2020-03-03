var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.DragDrop = function()
	{
		this.isBusyToDrag = false;
		this.dragPosition = {x:0, y:0};
		this.dropPosition = {x:0, y:0};
	}

	JSPATTERN.DragDrop.prototype =
	{
		getPositions: function(deviceInfos, ui)
		{
			this.updateDragPosition(deviceInfos);
			this.updateDropPosition(deviceInfos);

			return {drag: this.dragPosition, drop: this.dropPosition};
		},

		updatePositions: function(deviceInfos, lastAction, isBudyToDrag)
		{
			this.isBusyToDrag = isBudyToDrag;
			this[lastAction].x = deviceInfos.axes.x;
			this[lastAction].y = deviceInfos.axes.y;
		},

		updateDragPosition: function(deviceInfos)
		{
			if (this.isBusyToDrag === false && deviceInfos.usedKeys.indexOf('clickLeft') != -1)
			{
				this.updatePositions(deviceInfos, 'dragPosition', true);
			}
		},

		updateDropPosition: function(deviceInfos)
		{
			if (this.isBusyToDrag === true && deviceInfos.usedKeys.indexOf('clickLeft') == -1)
			{
				this.updatePositions(deviceInfos, 'dropPosition', false);
			}
		}

	};
}());