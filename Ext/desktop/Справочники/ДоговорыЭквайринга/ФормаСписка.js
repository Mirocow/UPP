﻿Ext.require(['Данные.Справочники.ДоговорыЭквайринга'], function () 
{
	Ext.define('Справочники.ДоговорыЭквайринга.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Договоры эквайринга',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:642px;height:259px;',
			height: 259,width: 642,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'175',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Эквайрер',
					width:'209',
					dataIndex:'Эквайрер.Представление',
					flex:1,
				},
				{
					text:'Договор',
					width:'194',
					dataIndex:'Договор',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДоговорыЭквайринга").data,
					fields: ['Ссылка','Картинка','Код','Наименование','Эквайрер.Представление','Договор',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыЭквайринга/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Эквайрер',
					},
					{
						name:'Договор',
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
						Ext.require(['Справочники.ДоговорыЭквайринга.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДоговорыЭквайринга.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			width: 658,
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