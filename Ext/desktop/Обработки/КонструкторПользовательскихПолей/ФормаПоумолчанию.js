﻿Ext.require(['Данные.Обработки.КонструкторПользовательскихПолей'], function () 
{
	Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаПоумолчанию',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:64px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Это вспомогательная форма, предназначенная для открытия модального диалога с информацией о том, что обработка является сервисной. ВИЗУАЛЬНО НЕ ОТОБРАЖАЕТСЯ.',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:48px;text-align:center;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});