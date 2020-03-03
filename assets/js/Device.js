var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Device = function(keys)
	{
		this.keys = keys;
		this.infos = {usedKeys: []};
		this.initEvents();
	};

	JSPATTERN.Device.prototype =
	{
		initEvents: function(){},

		getInfos: function()
		{
			return this.infos;
		},

		updateUsedKeys: function(event, isActive)
		{
			// toggle mouse/touchScreen/keyboard

			var keyCode = null;

			if (event.pointerType)
			{
				if (event.pointerType == 'mouse')
				{
					keyCode = this.keys[event.button];
				}
				else
				{
					keyCode = this.keys[0];
				}
			}
			else
			{
				keyCode = this.keys[event.keyCode];
			}

			// does the code exist in keys ?
			if (keyCode)
			{
				event.preventDefault();
				var index = this.infos.usedKeys.indexOf(keyCode);
				// key is pressed and it is not already registered
				if (isActive)
				{
					if (index == -1)
					{
						this.infos.usedKeys.push(keyCode);
					}
				}
				else
				{
					this.infos.usedKeys.splice(index, 1);
				}
			}
		}
	};
}());