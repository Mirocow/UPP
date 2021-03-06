﻿Ext.require(['Данные.Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаВводаСтавкиНалога',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:304px;height:330px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ставки налога',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			text: 'НДС',
			style: 'position:absolute;left:8px;top:10px;width:286px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:160px;top:45px;width:127px;height:19px;',
			width: 127,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Акциз',
			style: 'position:absolute;left:8px;top:105px;width:286px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтавкаАкциз',
			style: 'position:absolute;left:160px;top:211px;width:127px;height:19px;',
			width: 127,
			height: 19,
		},
		{
			xtype: 'fieldset',
			title: 'Вид ставки налога по акцизу',
			style: 'position:absolute;left:8px;top:125px;width:197px;height:60px;',
		},
		{
			xtype: 'fieldset',
			title: 'Ставка НДС',
			style: 'position:absolute;left:8px;top:32px;width:288px;height:60px;',
		},
		{
			xtype: 'fieldset',
			title: 'Ставка акциза',
			style: 'position:absolute;left:8px;top:197px;width:288px;height:100px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Ставка налога (НДС):',
			style: 'position:absolute;left:20px;top:49px;width:136px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Освобождение от уплаты налога',
			style: 'position:absolute;left:20px;top:71px;width:191px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Твердые (специфические)',
			style: 'position:absolute;left:20px;top:143px;width:155px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Адвалорные',
			style: 'position:absolute;left:20px;top:163px;width:155px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Ставка налога (акциз):',
			style: 'position:absolute;left:20px;top:215px;width:136px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Освобождение от уплаты налога',
			style: 'position:absolute;left:20px;top:235px;width:191px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Акциз уплачен иному органу',
			style: 'position:absolute;left:20px;top:255px;width:191px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Товар не является подакцизным',
			style: 'position:absolute;left:20px;top:275px;width:191px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:305px;width:304px;height:25px;',
			width: 304,
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