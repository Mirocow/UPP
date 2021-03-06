﻿Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ИнформацияДляПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Особенности текущей версии подсистемы ""Регламентированная отчетность""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Не открывать это окно автоматически',
			style: 'position:absolute;left:5px;top:430px;width:220px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:720px;height:25px;',
			width: 720,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});