﻿Ext.require(['Данные.Обработки.ЗагрузкаДанныхCommerceML'], function () 
{
	Ext.define('Обработки.ЗагрузкаДанныхCommerceML.Настройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:442px;height:132px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки загрузки данных',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Записывать документы в режиме обмена данными',
			style: 'position:absolute;left:8px;top:8px;width:283px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарийКДокументамИСправочникам',
			text: 'Начало комментария для документов и справочников:',
			style: 'position:absolute;left:8px;top:57px;width:283px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 403,
			height: 19,
			style: 'position:absolute;left:31px;top:80px;width:403px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически создавать недостающие договоры',
			style: 'position:absolute;left:8px;top:32px;width:283px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:107px;width:442px;height:25px;',
			width: 442,
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