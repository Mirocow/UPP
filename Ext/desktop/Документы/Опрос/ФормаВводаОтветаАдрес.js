﻿Ext.require(['Данные.Документы.Опрос'], function () 
{
	Ext.define('Документы.Опрос.ФормаВводаОтветаАдрес',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:330px;height:249px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ответ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Регион:',
			style: 'position:absolute;left:8px;top:29px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Регион',
			width: 220,
			height: 19,
			style: 'position:absolute;left:102px;top:29px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Район:',
			style: 'position:absolute;left:8px;top:53px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Район',
			width: 220,
			height: 19,
			style: 'position:absolute;left:102px;top:53px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Город:',
			style: 'position:absolute;left:8px;top:77px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Город',
			width: 220,
			height: 19,
			style: 'position:absolute;left:102px;top:77px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Нас. пункт:',
			style: 'position:absolute;left:8px;top:101px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаселенныйПункт',
			width: 220,
			height: 19,
			style: 'position:absolute;left:102px;top:101px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Улица:',
			style: 'position:absolute;left:8px;top:125px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Улица',
			width: 220,
			height: 19,
			style: 'position:absolute;left:102px;top:125px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Дом:',
			style: 'position:absolute;left:8px;top:149px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Дом',
			width: 36,
			height: 19,
			style: 'position:absolute;left:102px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Корпус:',
			style: 'position:absolute;left:138px;top:149px;width:52px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Корпус',
			width: 36,
			height: 19,
			style: 'position:absolute;left:190px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Квартира:',
			style: 'position:absolute;left:226px;top:149px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Квартира',
			width: 36,
			height: 19,
			style: 'position:absolute;left:286px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 220,
			height: 19,
			style: 'position:absolute;left:102px;top:197px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:197px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Индекс:',
			style: 'position:absolute;left:8px;top:173px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Индекс',
			width: 60,
			height: 19,
			style: 'position:absolute;left:102px;top:173px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Адрес',
			style: 'position:absolute;left:8px;top:8px;width:314px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:330px;height:25px;',
			width: 330,
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
			]
		},
	]
	});
});