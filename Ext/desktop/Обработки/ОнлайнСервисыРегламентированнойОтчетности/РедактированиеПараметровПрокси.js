﻿Ext.require(['Данные.Обработки.ОнлайнСервисыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.РедактированиеПараметровПрокси',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:323px;height:133px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ошибка доступа в Интернет',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя пользователя:',
			style: 'position:absolute;left:9px;top:59px;width:111px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПользователя',
			width: 190,
			height: 19,
			style: 'position:absolute;left:125px;top:56px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Пароль:',
			style: 'position:absolute;left:9px;top:84px;width:111px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Пароль',
			width: 190,
			height: 19,
			style: 'position:absolute;left:125px;top:81px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Если для доступа в Интернет необходима авторизация на прокси-сервере, задайте параметры авторизации ниже.',
			style: 'position:absolute;left:8px;top:8px;width:307px;height:32px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:46px;width:307px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:108px;width:323px;height:25px;',
			width: 323,
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