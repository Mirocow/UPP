﻿Ext.require(['Данные.Документы.ВнутреннееПеремещениеСредствПриБюджетировании'], function () 
{
	Ext.define('Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Внутренние перемещения средств при бюджетировании',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Период',
					width:'80',
					dataIndex:'ПериодПланирования',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'120',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'120',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'ЦФО',
					width:'120',
					dataIndex:'ЦФО',
					flex:1,
				},
				{
					text:'ЦФО - приемник',
					width:'163',
					dataIndex:'ЦФОПриемник',
					flex:1,
				},
				{
					text:'Проект',
					width:'137',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Состояние',
					width:'120',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнутреннееПеремещениеСредствПриБюджетировании/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ПериодПланирования',
					},
					{
						name:'Сценарий',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'Сумма',
					},
					{
						name:'ЦФО',
					},
					{
						name:'ЦФОПриемник',
					},
					{
						name:'Проект',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Состояние',
					},
					{
						name:'Ответственный',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаСпискаСобытия");
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
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				{
					text:'',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});