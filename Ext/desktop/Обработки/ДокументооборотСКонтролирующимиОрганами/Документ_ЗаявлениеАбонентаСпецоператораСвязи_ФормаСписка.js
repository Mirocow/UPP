﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:988px;height:440px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Заявления на подключение к электронному документообороту',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:988px;height:25px;',
			width: 988,
			height: 25,
			items:
			[
				{
					text:'Мастер заполнения',
				},
				{
					text:'Ручное заполнение',
				},
			]
		},
		{
			id: 'ТабличноеПолеЗаписейЭДО',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:972px;height:399px;',
			height: 399,width: 972,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'78',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'89',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Организация',
					width:'185',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Статус',
					width:'96',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата отправки',
					width:'115',
					dataIndex:'ДатаОтправкиЗаявления',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'100',
					dataIndex:'ДатаПолученияОтвета',
					flex:1,
				},
				{
					text:'Дополнительная информация',
					width:'186',
					dataIndex:'СтатусКомментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'Организация',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаОтправкиЗаявления',
					},
					{
						name:'ДатаПолученияОтвета',
					},
					{
						name:'СтатусКомментарий',
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
						var грид = Ext.getCmp('ТабличноеПолеЗаписейЭДО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаСпискаСобытия");
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