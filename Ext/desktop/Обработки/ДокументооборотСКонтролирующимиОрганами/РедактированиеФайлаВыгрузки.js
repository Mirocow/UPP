﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РедактированиеФайлаВыгрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:701px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Редактирование файла выгрузки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Текст',
			style: 'position:absolute;left:8px;top:38px;width:685px;height:382px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Имя файла:',
			style: 'position:absolute;left:8px;top:11px;width:65px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайла',
			width: 616,
			height: 19,
			style: 'position:absolute;left:77px;top:10px;width:616px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:33px;width:685px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:701px;height:25px;',
			width: 701,
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
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});