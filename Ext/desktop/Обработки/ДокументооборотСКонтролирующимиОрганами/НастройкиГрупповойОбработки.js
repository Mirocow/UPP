﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НастройкиГрупповойОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:534px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры групповой обработки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			text: 'Действие при некритичных уведомлениях',
			style: 'position:absolute;left:8px;top:100px;width:518px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Действие при возникновении ошибок',
			style: 'position:absolute;left:8px;top:243px;width:518px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:29px;width:518px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Перед тем как приступить к групповой обработке необходимо задать ее параметры.',
			style: 'position:absolute;left:8px;top:12px;width:518px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Укажите, как должна вести себя программа при возникновении ситуаций, требующих внимания пользователя, например таких, как предупреждение о наличии незавершенных циклов обмена, связанных с отправляемым отчетом, или о наличии аналогичных уже отправленных отчетов.',
			style: 'position:absolute;left:14px;top:120px;width:512px;height:43px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Укажите, как должна вести себя программа при возникновении критичных ошибок, например при работе с цифровыми сертификатами или при невозможности определить реквизиты участников обмена.',
			style: 'position:absolute;left:14px;top:265px;width:512px;height:41px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Объекты групповой обработки:',
			style: 'position:absolute;left:8px;top:35px;width:247px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВидОбъектов',
			text: 'ВидОбъектов',
			style: 'position:absolute;left:268px;top:35px;width:258px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Количество объектов:',
			style: 'position:absolute;left:8px;top:55px;width:247px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КоличествоОбъектов',
			text: 'КоличествоОбъектов',
			style: 'position:absolute;left:268px;top:55px;width:258px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Действие:',
			style: 'position:absolute;left:8px;top:75px;width:247px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Действие',
			text: 'Действие',
			style: 'position:absolute;left:268px;top:75px;width:258px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:93px;width:518px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:359px;width:518px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:8px;width:518px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Игнорировать и продолжать групповую обработку',
			style: 'position:absolute;left:14px;top:171px;width:278px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прерывать текущее действие, но продолжать групповую обработку',
			style: 'position:absolute;left:14px;top:195px;width:367px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прерывать групповую обработку',
			style: 'position:absolute;left:14px;top:219px;width:191px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Продолжать групповую обработку',
			style: 'position:absolute;left:14px;top:314px;width:197px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прерывать групповую обработку',
			style: 'position:absolute;left:14px;top:337px;width:197px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:534px;height:25px;',
			width: 534,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Приступить к обработке',
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