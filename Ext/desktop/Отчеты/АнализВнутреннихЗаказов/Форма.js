﻿Ext.require(['Данные.Отчеты.АнализВнутреннихЗаказов'], function () 
{
	Ext.define('Отчеты.АнализВнутреннихЗаказов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:820px;height:450px;',
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
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			width: 548,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:555px;top:3px;width:265px;height:19px;',
			height: 19,width: 265,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:139px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаДату',
			text: 'На дату:',
			style: 'position:absolute;left:122px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период',
			text: 'Период',
			style: 'position:absolute;left:107px;top:0px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:28px;top:0px;width:55px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаНаДату',
			width: 80,
			height: 19,
			style: 'position:absolute;left:179px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод',
			text: '-',
			style: 'position:absolute;left:85px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод',
			text: '+',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:519px;top:0px;width:301px;height:25px;',
			width: 301,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Состояние исполнения заказа:',
			style: 'position:absolute;left:8px;top:33px;width:177px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не исполнен',
			style: 'position:absolute;left:203px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исполнен частично',
			style: 'position:absolute;left:303px;top:33px;width:125px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исполнен полностью',
			style: 'position:absolute;left:438px;top:33px;width:135px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включен в план закупок:',
			style: 'position:absolute;left:8px;top:54px;width:177px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не включен',
			style: 'position:absolute;left:203px;top:54px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включен частично',
			style: 'position:absolute;left:303px;top:54px;width:125px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включен полностью',
			style: 'position:absolute;left:438px;top:54px;width:135px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});