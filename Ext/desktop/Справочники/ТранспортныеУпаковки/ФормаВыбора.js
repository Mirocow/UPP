﻿Ext.require(['Данные.Справочники.ТранспортныеУпаковки'], function () 
{
	Ext.define('Справочники.ТранспортныеУпаковки.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Транспортные упаковки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:608px;height:335px;',
			height: 335,width: 608,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'42',
					dataIndex:'НомерУпаковки',
					flex:1,
				},
				{
					text:'Наименование',
					width:'364',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'79',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Владелец',
					width:'350',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТранспортныеУпаковки").data,
					fields: ['Ссылка','Картинка','НомерУпаковки','Наименование','Коэффициент','Владелец',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТранспортныеУпаковки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерУпаковки',
					},
					{
						name:'Наименование',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Владелец',
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
						Ext.require(['Справочники.ТранспортныеУпаковки.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТранспортныеУпаковки.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			width: 624,
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