var JSPATTERN = JSPATTERN || {};

(function()
{
	"use strict";

	JSPATTERN.Main = function()
	{
		// 0: menu, 1: game
		this.state = 1;
		this.gameUi = new JSPATTERN.GameUi();
		this.keyboard = new JSPATTERN.Keyboard();
		this.pointer = new JSPATTERN.Pointer(window);
		this.menu = new JSPATTERN.Menu();
		this.game = new JSPATTERN.Game();
		this.run();
	};

	JSPATTERN.Main.prototype =
	{
		run: function()
		{
			window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
			this.mainLoop();
		},

		mainLoop: function()
		{
			this.manageState();
			requestAnimationFrame(this.mainLoop.bind(this));
		},

		manageState: function()
		{
			var keys = this.keyboard.getInfos();
			var pointer = this.pointer.getInfos();

			if (this.state === 0)
			{
				this.menu.mainLoop(this.gameUi, keys);
			}
			else if (this.state === 1)
			{
				this.game.mainLoop(this.gameUi, keys, pointer);
			}
		}
	};

	JSPATTERN.main = new JSPATTERN.Main();

}());