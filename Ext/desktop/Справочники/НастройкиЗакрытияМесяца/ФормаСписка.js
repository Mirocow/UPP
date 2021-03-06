﻿Ext.require(['Данные.Справочники.НастройкиЗакрытияМесяца'], function () 
{
	Ext.define('Справочники.НастройкиЗакрытияМесяца.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:868px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Настройки закрытия месяца',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:701px;height:259px;',
			height: 259,width: 701,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'284',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата начала действия настройки',
					width:'203',
					dataIndex:'ДатаНачалаДействияНастройки',
					flex:1,
				},
				{
					text:'УУ',
					width:'49',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'БУ',
					width:'36',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'НУ',
					width:'30',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиЗакрытияМесяца").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Наименование','ДатаНачалаДействияНастройки','ОтражатьВУправленческомУчете','ОтражатьВБухгалтерскомУчете','ОтражатьВНалоговомУчете',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиЗакрытияМесяца/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ДатаНачалаДействияНастройки',
					},
					{
						name:'ОтражатьВУправленческомУчете',
					},
					{
						name:'ОтражатьВБухгалтерскомУчете',
					},
					{
						name:'ОтражатьВНалоговомУчете',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиЗакрытияМесяца.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиЗакрытияМесяца.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиЗакрытияМесяца").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиЗакрытияМесяца/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиЗакрытияМесяца.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиЗакрытияМесяца.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:868px;height:25px;',
			width: 868,
			height: 25,
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});