var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.GameUi = function()
	{
		this.viewMouseX = document.getElementById('mouseX');
		this.viewMouseY = document.getElementById('mouseY');
		this.viewMouseButtons = document.getElementById('mouseButtons');
		this.viewKeyboardKeys = document.getElementById('keyboardKeys');
		this.deviceDragPosition = document.getElementById('deviceDragPosition');
		this.deviceDropPosition = document.getElementById('deviceDropPosition');
	};

	JSPATTERN.GameUi.prototype = 
	{	
		displayKeys: function(keys)
		{
			if (keys.length > 0)
			{
				this.viewKeyboardKeys.textContent = keys;
			}
			else
			{
				this.viewKeyboardKeys.textContent = '';
			}
		},

		displayPointerButtons: function(mouseButtons)
		{
			if (mouseButtons.length > 0)
			{
				this.viewMouseButtons.textContent = mouseButtons;
			}
			else
			{
				this.viewMouseButtons.textContent = '';
			}
		},

		displayPointerPositions: function(posCurrent)
		{
			this.viewMouseX.textContent = posCurrent.x;
			this.viewMouseY.textContent = posCurrent.y;
		},

		displayDeviceDragDrop: function(posFirst, posLast)
		{
			this.deviceDragPosition.textContent = 'x: ' + posFirst.x + ', y: ' + posFirst.y;
			this.deviceDropPosition.textContent =  'x: ' + posLast.x + ', y: ' + posLast.y;
		}
	}
}());