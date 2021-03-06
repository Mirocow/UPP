﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НастройкиГрупповойПечати',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:230px;height:253px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Выбрано циклов обмена: ',
			style: 'position:absolute;left:8px;top:8px;width:138px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Укажите виды документов для печати:',
			style: 'position:absolute;left:8px;top:39px;width:214px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исходный документ',
			style: 'position:absolute;left:14px;top:67px;width:208px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подтверждение отправки',
			style: 'position:absolute;left:14px;top:90px;width:208px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Протокол',
			style: 'position:absolute;left:14px;top:136px;width:208px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Надпись3',
			style: 'position:absolute;left:149px;top:8px;width:73px;height:15px;text-align:center;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:27px;width:214px;height:5px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Уведомление об уточнении',
			style: 'position:absolute;left:14px;top:159px;width:208px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Протокол приема 2-НДФЛ',
			style: 'position:absolute;left:14px;top:182px;width:208px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Реестр сведений 2-НДФЛ',
			style: 'position:absolute;left:14px;top:205px;width:208px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подтверждение получения (ПФР)',
			style: 'position:absolute;left:14px;top:113px;width:208px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:228px;width:230px;height:25px;',
			width: 230,
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
					text:'Отмена',
				},
			]
		},
	]
	});
});