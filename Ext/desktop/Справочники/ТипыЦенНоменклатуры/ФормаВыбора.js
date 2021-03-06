﻿Ext.require(['Данные.Справочники.ТипыЦенНоменклатуры'], function () 
{
	Ext.define('Справочники.ТипыЦенНоменклатуры.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Типы цен номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:480px;height:259px;',
			height: 259,width: 480,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'ВалютаЦены.Представление',
					flex:1,
				},
				{
					text:'Базовый тип цен',
					width:'239',
					dataIndex:'БазовыйТипЦен.Представление',
					flex:1,
				},
				{
					text:'Рассчитывается',
					width:'90',
					dataIndex:'Рассчитывается',
					flex:1,
				},
				{
					text:'Процент',
					width:'49',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТипыЦенНоменклатуры").data,
					fields: ['Ссылка','Картинка','Код','Наименование','ВалютаЦены.Представление','БазовыйТипЦен.Представление','Рассчитывается','ПроцентСкидкиНаценки',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТипыЦенНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВалютаЦены',
					},
					{
						name:'БазовыйТипЦен',
					},
					{
						name:'Рассчитывается',
					},
					{
						name:'ПроцентСкидкиНаценки',
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
						Ext.require(['Справочники.ТипыЦенНоменклатуры.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТипыЦенНоменклатуры.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:496px;height:25px;',
			width: 496,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});