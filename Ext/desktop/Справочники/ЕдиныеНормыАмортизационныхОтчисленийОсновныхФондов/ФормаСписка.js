﻿Ext.require(['Данные.Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов'], function () 
{
	Ext.define('Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:731px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Единые нормы амортизационных отчислений на полное восстановление основных фондов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:185px;top:33px;width:538px;height:280px;',
			height: 280,width: 538,
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
					width:'82',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'280',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Норма ам. отчислений (%)',
					width:'98',
					dataIndex:'НормаАмортизационныхОтчислений',
					flex:1,
				},
				{
					text:'% от стоимости / 1000 км',
					width:'100',
					dataIndex:'ПроцентОтСтоимостиМашины',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование','НормаАмортизационныхОтчислений','ПроцентОтСтоимостиМашины',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'НормаАмортизационныхОтчислений',
					},
					{
						name:'ПроцентОтСтоимостиМашины',
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
						Ext.require(['Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:731px;height:25px;',
			width: 731,
			height: 25,
			items:
			[
				'-',
				{
					text:'Загрузить классификатор',
				},
			]
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:171px;height:280px;',
			height: 280,width: 171,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаСпискаСобытия");
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