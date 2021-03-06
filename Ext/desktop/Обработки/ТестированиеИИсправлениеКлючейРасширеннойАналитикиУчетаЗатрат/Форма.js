﻿Ext.require(['Данные.Обработки.ТестированиеИИсправлениеКлючейРасширеннойАналитикиУчетаЗатрат'], function () 
{
	Ext.define('Обработки.ТестированиеИИсправлениеКлючейРасширеннойАналитикиУчетаЗатрат.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:196px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Тестирование и исправление ключей аналитики',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:29px;width:384px;height:93px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Проверки и режимы:',
			style: 'position:absolute;left:8px;top:9px;width:384px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Только тестирование',
			style: 'position:absolute;left:8px;top:127px;width:265px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Тестирование и исправление',
			style: 'position:absolute;left:8px;top:148px;width:265px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:171px;width:400px;height:25px;',
			width: 400,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
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