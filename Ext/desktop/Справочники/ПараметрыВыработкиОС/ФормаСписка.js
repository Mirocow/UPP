﻿Ext.require(['Данные.Справочники.ПараметрыВыработкиОС'], function () 
{
	Ext.define('Справочники.ПараметрыВыработкиОС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:362px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры выработки ОС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:346px;height:280px;',
			height: 280,width: 346,
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
					text:'Ед. изм.',
					width:'54',
					dataIndex:'ЕдиницаИзмерения.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПараметрыВыработкиОС").data,
					fields: ['Ссылка','Картинка','Код','Наименование','ЕдиницаИзмерения.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПараметрыВыработкиОС/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ЕдиницаИзмерения',
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
						Ext.require(['Справочники.ПараметрыВыработкиОС.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПараметрыВыработкиОС.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:362px;height:25px;',
			width: 362,
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