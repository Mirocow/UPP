﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаИзмененияФИО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:310px;height:108px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Фамилия, имя, отчество сотрудника',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Фамилия:',
			style: 'position:absolute;left:8px;top:8px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 220,
			height: 19,
			style: 'position:absolute;left:82px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Имя:',
			style: 'position:absolute;left:8px;top:32px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 220,
			height: 19,
			style: 'position:absolute;left:82px;top:32px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Отчество:',
			style: 'position:absolute;left:8px;top:56px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 220,
			height: 19,
			style: 'position:absolute;left:82px;top:56px;width:220px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:83px;width:310px;height:25px;',
			width: 310,
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