﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:924px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Транспортные сообщения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:924px;height:25px;',
			width: 924,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:908px;height:405px;',
			height: 405,width: 908,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'124',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Дата транспортировки',
					width:'144',
					dataIndex:'ДатаТранспорта',
					flex:1,
				},
				{
					text:'Тип',
					width:'120',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Цикл обмена',
					width:'120',
					dataIndex:'ЦиклОбмена',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'120',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Получатель',
					width:'120',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'120',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Статус',
					width:'112',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'От кого (адрес)',
					width:'120',
					dataIndex:'ОтКогоАдрес',
					flex:1,
				},
				{
					text:'От кого (представление)',
					width:'120',
					dataIndex:'ОтКогоПредставление',
					flex:1,
				},
				{
					text:'Основание',
					width:'120',
					dataIndex:'Основание',
					flex:1,
				},
				{
					text:'Тема',
					width:'120',
					dataIndex:'Тема',
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
						name:'Дата',
					},
					{
						name:'ДатаТранспорта',
					},
					{
						name:'Тип',
					},
					{
						name:'ЦиклОбмена',
					},
					{
						name:'Отправитель',
					},
					{
						name:'Получатель',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'Статус',
					},
					{
						name:'ОтКогоАдрес',
					},
					{
						name:'ОтКогоПредставление',
					},
					{
						name:'Основание',
					},
					{
						name:'Тема',
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
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаСпискаСобытия");
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