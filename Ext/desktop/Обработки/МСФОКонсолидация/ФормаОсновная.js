﻿Ext.require(['Данные.Обработки.МСФОКонсолидация'], function () 
{
	Ext.define('Обработки.МСФОКонсолидация.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:254px;height:122px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Консолидация МСФО',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:254px;height:25px;',
			width: 254,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Тип консолидации',
			style: 'position:absolute;left:8px;top:33px;width:238px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Консолидация по отчетности',
			style: 'position:absolute;left:14px;top:54px;width:172px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Консолидация по информационной базе',
			style: 'position:absolute;left:14px;top:74px;width:232px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:97px;width:254px;height:25px;',
			width: 254,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});