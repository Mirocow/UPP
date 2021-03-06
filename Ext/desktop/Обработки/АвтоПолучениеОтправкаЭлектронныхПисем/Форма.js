﻿Ext.require(['Данные.Обработки.АвтоПолучениеОтправкаЭлектронныхПисем'], function () 
{
	Ext.define('Обработки.АвтоПолучениеОтправкаЭлектронныхПисем.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Автополучение/отправка электронных писем',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			width: 604,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			id: 'УчетныеЗаписиАвтоматическогоТранспортаПисем',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:320px;',
			height: 320,width: 588,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'220',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Адрес электронной почты',
					width:'220',
					dataIndex:'АдресЭлектроннойПочты',
					flex:1,
				},
				{
					text:'Время последнего обновления',
					width:'180',
					dataIndex:'ВремяПоследнегоПолучения',
					flex:1,
				},
				{
					text:'Действие',
					width:'180',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Интервал обновления, мин',
					width:'160',
					dataIndex:'ИнтервалОбновления',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АвтоПолучениеОтправкаЭлектронныхПисем/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'АдресЭлектроннойПочты',
					},
					{
						name:'ВремяПоследнегоПолучения',
					},
					{
						name:'Действие',
					},
					{
						name:'ИнтервалОбновления',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('УчетныеЗаписиАвтоматическогоТранспортаПисем');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АвтоПолучениеОтправкаЭлектронныхПисем.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АвтоПолучениеОтправкаЭлектронныхПисем.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});