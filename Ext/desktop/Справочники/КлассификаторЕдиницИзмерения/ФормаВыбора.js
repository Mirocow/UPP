﻿Ext.require(['Данные.Справочники.КлассификаторЕдиницИзмерения'], function () 
{
	Ext.define('Справочники.КлассификаторЕдиницИзмерения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Классификатор единиц измерения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокКлассификаторЕдиницИзмерения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:480px;height:280px;',
			height: 280,width: 480,
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
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'220',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Международное сокращение',
					width:'40',
					dataIndex:'МеждународноеСокращение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.КлассификаторЕдиницИзмерения").data,
					fields: ['Ссылка','Картинка','Код','Наименование','НаименованиеПолное','МеждународноеСокращение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлассификаторЕдиницИзмерения/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'НаименованиеПолное',
					},
					{
						name:'МеждународноеСокращение',
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
						var грид = Ext.getCmp('СписокКлассификаторЕдиницИзмерения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КлассификаторЕдиницИзмерения.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КлассификаторЕдиницИзмерения.ФормаВыбораСобытия");
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