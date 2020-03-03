var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Ui = function()
	{
		this.viewMouseX = document.getElementById('mouseX');
		this.viewMouseY = document.getElementById('mouseY');
		this.viewMouseButtons = document.getElementById('mouseButtons');
		this.viewKeyboardKeys = document.getElementById('keyboardKeys');
		this.deviceDragPosition = document.getElementById('deviceDragPosition');
		this.deviceDropPosition = document.getElementById('deviceDropPosition');
	};

	JSPATTERN.Ui.prototype = 
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

		displayMouseButtons: function(mouseButtons)
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

		displayMouseAxes: function(mouseAxes)
		{
			if (mouseAxes)
			{
				this.viewMouseX.textContent = mouseAxes.x;
				this.viewMouseY.textContent = mouseAxes.y;
			}
		},

		displayDeviceDragDrop: function(dragDrop)
		{
			this.deviceDragPosition.textContent = 'x: ' + dragDrop.drag.x + ', y: ' + dragDrop.drag.y;
			this.deviceDropPosition.textContent =  'x: ' + dragDrop.drop.x + ', y: ' + dragDrop.drop.y;
		}
	}
}());