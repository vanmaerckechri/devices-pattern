var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Device = function(keys)
	{
		this.keys = keys;
		this.usedKeys = [];
		this.initEvents();
	};

	JSPATTERN.Device.prototype =
	{
		initEvents: function(){},

		getInfos: function()
		{
			return {usedKeys: this.usedKeys};
		},

		updateUsedKeys: function(e, device, isActive)
		{
			var keyCode = null;

			if (device == 'mouse')
			{
				keyCode = this.keys[e.button];
			}
			else if (device == 'keyboard')
			{
				keyCode = this.keys[e.keyCode];
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
		}
	};
}());