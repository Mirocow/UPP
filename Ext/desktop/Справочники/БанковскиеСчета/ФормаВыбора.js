﻿Ext.require(['Данные.Справочники.БанковскиеСчета'], function () 
{
	Ext.define('Справочники.БанковскиеСчета.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Банковские счета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:259px;',
			height: 259,width: 764,
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
					text:'Вид счета',
					width:'120',
					dataIndex:'ВидСчета',
					flex:1,
				},
				{
					text:'Номер счета',
					width:'160',
					dataIndex:'НомерСчета',
					flex:1,
				},
				{
					text:'Валюта',
					width:'64',
					dataIndex:'ВалютаДенежныхСредств.Представление',
					flex:1,
				},
				{
					text:'Банк',
					width:'220',
					dataIndex:'Банк.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.БанковскиеСчета").data,
					fields: ['Ссылка','Картинка','Код','Наименование','ВидСчета','НомерСчета','ВалютаДенежныхСредств.Представление','Банк.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/БанковскиеСчета/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидСчета',
					},
					{
						name:'НомерСчета',
					},
					{
						name:'ВалютаДенежныхСредств',
					},
					{
						name:'Банк',
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
						Ext.require(['Справочники.БанковскиеСчета.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.БанковскиеСчета.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
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