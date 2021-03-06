﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РасширенныеНастройкиУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:468px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Расширенные настройки учетной записи',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Не формировать автоматически подтверждения на входящие сообщения',
			style: 'position:absolute;left:14px;top:33px;width:397px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Общие',
			style: 'position:absolute;left:8px;top:8px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:216px;width:452px;height:37px;',
			height: 37,width: 452,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Дополнительные возможности',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать сервис онлайн-проверки отчетности',
			style: 'position:absolute;left:6px;top:22px;width:283px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сервис доступен только абонентам спец. оператора связи ООО "Такском".',
			style: 'position:absolute;left:30px;top:254px;width:430px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не обращаться к ключевому контейнеру при автоматическом обмене',
			style: 'position:absolute;left:14px;top:56px;width:379px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:154px;width:452px;height:31px;',
			height: 31,width: 452,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Особый идентификатор системы отправителя (при обмене с ПФР):',
			style: 'position:absolute;left:6px;top:3px;width:363px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификаторСистемыОтправителяПФР',
			width: 80,
			height: 19,
			style: 'position:absolute;left:372px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Является учетной записью уполномоченного представителя (УП)',
			style: 'position:absolute;left:14px;top:79px;width:358px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:30px;top:96px;width:430px;height:50px;',
			height: 50,width: 430,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование УП (для ИП - ФИО):',
			style: 'position:absolute;left:0px;top:10px;width:182px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолноеНаименованиеУполномоченногоПредставителя',
			width: 246,
			height: 19,
			style: 'position:absolute;left:184px;top:6px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'ИНН/КПП:',
			style: 'position:absolute;left:0px;top:35px;width:182px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИННУполномоченногоПредставителя',
			width: 130,
			height: 19,
			style: 'position:absolute;left:184px;top:31px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: '/',
			style: 'position:absolute;left:318px;top:31px;width:9px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КППУполномоченногоПредставителя',
			width: 101,
			height: 19,
			style: 'position:absolute;left:329px;top:31px;width:101px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:185px;width:452px;height:31px;',
			height: 31,width: 452,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Особый идентификатор системы отпр. (при обмене с Росстатом):',
			style: 'position:absolute;left:6px;top:3px;width:363px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификаторСистемыОтправителяФСГС',
			width: 80,
			height: 19,
			style: 'position:absolute;left:372px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:468px;height:25px;',
			width: 468,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'По умолчанию',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Открыть справку',
				},
			]
		},
	]
	});
});