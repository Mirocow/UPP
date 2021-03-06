﻿Ext.require(['Данные.Обработки.КонструкторПользовательскихПолей'], function () 
{
	Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаИнтервал',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:356px;height:136px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Конструктор пользовательского поля',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:119px;top:84px;width:203px;height:19px;',
			width: 203,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьНижняяГраница',
			text: 'Нижняя граница:',
			style: 'position:absolute;left:8px;top:84px;width:107px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:119px;top:36px;width:203px;height:19px;',
			width: 203,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВерхняяГраница',
			text: 'Верхняя граница:',
			style: 'position:absolute;left:8px;top:36px;width:107px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:119px;top:60px;width:203px;height:19px;',
			width: 203,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьЗначение',
			text: 'Значение:',
			style: 'position:absolute;left:8px;top:60px;width:107px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:8px;width:107px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 203,
			height: 19,
			style: 'position:absolute;left:119px;top:8px;width:203px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:111px;width:356px;height:25px;',
			width: 356,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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