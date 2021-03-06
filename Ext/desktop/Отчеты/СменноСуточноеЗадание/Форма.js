﻿Ext.require(['Данные.Отчеты.СменноСуточноеЗадание'], function () 
{
	Ext.define('Отчеты.СменноСуточноеЗадание.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			width: 604,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:60px;width:588px;height:96px;',
			height: 96,width: 588,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиРабочийЦентр',
			width: 304,
			height: 19,
			style: 'position:absolute;left:284px;top:0px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рабочий центр:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:0px;width:180px;height:19px;',
			width: 180,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиЗаказ',
			width: 304,
			height: 19,
			style: 'position:absolute;left:284px;top:24px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказ:',
			style: 'position:absolute;left:0px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПроект',
			width: 304,
			height: 19,
			style: 'position:absolute;left:284px;top:48px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:0px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:48px;width:180px;height:19px;',
			width: 180,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:24px;width:180px;height:19px;',
			width: 180,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатура',
			width: 304,
			height: 19,
			style: 'position:absolute;left:284px;top:72px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:0px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:72px;width:180px;height:19px;',
			width: 180,
			height: 19,
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});