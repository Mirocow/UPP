﻿Ext.require(['Данные.Обработки.ОбновлениеРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбновлениеРегламентированнойОтчетности.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:83px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обновление регламентированной отчетности',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Данная форма используется в регламентных операциях и не предназначена для визуального показа.',
			style: 'position:absolute;left:8px;top:9px;width:384px;height:40px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:58px;width:400px;height:25px;',
			width: 400,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});