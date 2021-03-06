﻿Ext.require(['Данные.Справочники.ВидыРаспределенияПоПроектам'], function () 
{
	Ext.define('Справочники.ВидыРаспределенияПоПроектам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:548px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Виды распределения по проектам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:532px;height:280px;',
			height: 280,width: 532,
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
					width:'72',
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
					text:'Метод распределения',
					width:'120',
					dataIndex:'МетодРаспределения.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ВидыРаспределенияПоПроектам").data,
					fields: ['Ссылка','Картинка','Код','Наименование','МетодРаспределения.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыРаспределенияПоПроектам/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'МетодРаспределения',
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
						Ext.require(['Справочники.ВидыРаспределенияПоПроектам.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВидыРаспределенияПоПроектам.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			width: 548,
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