﻿Ext.require(['Данные.Документы.УстановкаСкидокНоменклатуры'], function () 
{
	Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:546px;height:59px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Установка скидок номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Группы',
			width: 304,
			height: 19,
			style: 'position:absolute;left:234px;top:8px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппы',
			text: 'Группы:',
			style: 'position:absolute;left:8px;top:8px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияГрупп',
			width: 127,
			height: 19,
			style: 'position:absolute;left:102px;top:8px;width:127px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:102px;top:32px;width:57px;height:19px;',
			width: 57,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентСкидки',
			text: 'Процент скидки:',
			style: 'position:absolute;left:8px;top:32px;width:89px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОграничениеСкидкиНаценки',
			style: 'position:absolute;left:289px;top:32px;width:55px;height:19px;',
			width: 55,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеСкидки',
			text: 'Ограничение скидки:',
			style: 'position:absolute;left:168px;top:32px;width:111px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:366px;top:32px;width:82px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Закрыть',
			text: 'Закрыть',
			style: 'position:absolute;left:456px;top:32px;width:82px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});