﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РезультатГрупповойОнлайнПроверки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:759px;height:341px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Результаты проверки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаРезультатов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:743px;height:300px;',
			height: 300,width: 743,
			columns:
			[
				{
					text:'Документ',
					width:'270',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Тип документа',
					width:'90',
					dataIndex:'ТипФайлаОтчета',
					flex:1,
				},
				{
					text:'Результат',
					width:'182',
					dataIndex:'РезультатПроверки',
					flex:1,
				},
				{
					text:'Дополнительно',
					width:'139',
					dataIndex:'Дополнительно',
					flex:1,
				},
				{
					text:'Имя файла отчета',
					width:'100',
					dataIndex:'ИмяФайлаОтчета',
					flex:1,
				},
				{
					text:'Результат проверки стр',
					width:'100',
					dataIndex:'РезультатПроверкиСтр',
					flex:1,
				},
				{
					text:'Тип протокола',
					width:'100',
					dataIndex:'ТипПротокола',
					flex:1,
				},
				{
					text:'Протокол',
					width:'100',
					dataIndex:'ИмяФайлаПротокола',
					flex:1,
				},
				{
					text:'Исходное имя файла протокола',
					width:'100',
					dataIndex:'ИсходноеИмяФайлаПротокола',
					flex:1,
				},
				{
					text:'Полное имя файла выгрузки',
					width:'100',
					dataIndex:'ПолноеИмяФайлаВыгрузки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Документ',
					},
					{
						name:'ТипФайлаОтчета',
					},
					{
						name:'РезультатПроверки',
					},
					{
						name:'Дополнительно',
					},
					{
						name:'ИмяФайлаОтчета',
					},
					{
						name:'РезультатПроверкиСтр',
					},
					{
						name:'ТипПротокола',
					},
					{
						name:'ИмяФайлаПротокола',
					},
					{
						name:'ИсходноеИмяФайлаПротокола',
					},
					{
						name:'ПолноеИмяФайлаВыгрузки',
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
						var грид = Ext.getCmp('ТаблицаРезультатов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.РезультатГрупповойОнлайнПроверкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.РезультатГрупповойОнлайнПроверкиСобытия");
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:759px;height:25px;',
			width: 759,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});