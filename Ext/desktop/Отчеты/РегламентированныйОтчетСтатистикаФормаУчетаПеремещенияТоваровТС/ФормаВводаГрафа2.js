﻿Ext.require(['Данные.Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаГрафа2',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:395px;height:244px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Графа 2. Получатель (ввод реквизитов)',
	
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
			name: 'ПолучательНаименование',
			style: 'position:absolute;left:121px;top:8px;width:266px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательУлицаНомерДома',
			width: 266,
			height: 19,
			style: 'position:absolute;left:121px;top:144px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательНаименование',
			text: 'Организация/ФИО физического лица:',
			style: 'position:absolute;left:8px;top:8px;width:106px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательУлицаНомерДома',
			text: 'Улица, номер дома:',
			style: 'position:absolute;left:8px;top:144px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ПолучательСтранаНаименование',
			width: 240,
			height: 19,
			style: 'position:absolute;left:147px;top:72px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательИндекс',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:48px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательОбласть',
			width: 266,
			height: 19,
			style: 'position:absolute;left:121px;top:96px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательРФ_ОГРН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:192px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательСтранаНаименование',
			text: 'Страна:',
			style: 'position:absolute;left:8px;top:72px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательИндекс',
			text: 'Почтовый индекс:',
			style: 'position:absolute;left:8px;top:48px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательОбласть',
			text: 'Область:',
			style: 'position:absolute;left:8px;top:96px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательНаселенныйПункт',
			width: 266,
			height: 19,
			style: 'position:absolute;left:121px;top:120px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательНаселенныйПункт',
			text: 'Населенный пункт:',
			style: 'position:absolute;left:8px;top:120px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательРФ_ОГРН',
			text: 'ОГРН/ОГРНИП:',
			style: 'position:absolute;left:8px;top:192px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательРФ_ИНН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательРФ_КПП',
			width: 101,
			height: 19,
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательРФ_ИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательРФ_КПП',
			text: 'КПП:',
			style: 'position:absolute;left:224px;top:168px;width:55px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательРБ_УНП',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательРБ_УНП',
			text: 'УНП:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательРК_БИН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательРК_БИН',
			text: 'БИН:',
			style: 'position:absolute;left:224px;top:168px;width:55px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолучательРК_ИИН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучательРК_ИИН',
			text: 'ИИН:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ПолучательСтранаКод',
			width: 23,
			height: 19,
			style: 'position:absolute;left:121px;top:72px;width:23px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:219px;width:395px;height:25px;',
			width: 395,
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