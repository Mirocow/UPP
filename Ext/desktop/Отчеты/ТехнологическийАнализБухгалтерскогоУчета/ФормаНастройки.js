﻿Ext.require(['Данные.Отчеты.ТехнологическийАнализБухгалтерскогоУчета'], function () 
{
	Ext.define('Отчеты.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:679px;height:293px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры анализа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:10px;top:8px;width:663px;height:252px;',
			height: 252,width: 663,
			items:
			[
				{
					items:
					[
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:618px;height:220px;',
			height: 220,width: 618,
			columns:
			[
				{
					text:'Название анализа/операции',
					width:'280',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Выполнять',
					width:'67',
					dataIndex:'Настройка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическийАнализБухгалтерскогоУчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Представление',
					},
					{
						name:'Настройка',
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
						var грид = Ext.getCmp('Дерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаУстановитьВсе',
			text: '',
			style: 'position:absolute;left:631px;top:6px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСнятьВсе',
			text: '',
			style: 'position:absolute;left:631px;top:35px;width:24px;height:24px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:426px;height:25px;',
			width: 426,
			height: 25,
			items:
			[
				{
					text:'Восстановить',
				},
			]
		},
		{
			id: 'Проводки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:36px;width:649px;height:190px;',
			height: 190,width: 649,
			columns:
			[
				{
					text:'Дт',
					width:'100',
					dataIndex:'Дт',
					flex:1,
				},
				{
					text:'Кт',
					width:'100',
					dataIndex:'Кт',
					flex:1,
				},
				{
					text:'ДтИсключение',
					width:'100',
					dataIndex:'ДтИскл',
					flex:1,
				},
				{
					text:'КтИсключение',
					width:'100',
					dataIndex:'КтИскл',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Инструкция',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическийАнализБухгалтерскогоУчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Дт',
					},
					{
						name:'Кт',
					},
					{
						name:'ДтИскл',
					},
					{
						name:'КтИскл',
					},
					{
						name:'Инструкция',
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
						var грид = Ext.getCmp('Проводки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПС',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:649px;height:220px;',
			height: 220,width: 649,
			columns:
			[
				{
					text:'Наименование счета',
					width:'100',
					dataIndex:'ИмяСчетаНУ',
					flex:1,
				},
				{
					text:'Код',
					width:'100',
					dataIndex:'КодСчетаБУ',
					flex:1,
				},
				{
					text:'Валютный',
					width:'100',
					dataIndex:'Валютный',
					flex:1,
				},
				{
					text:'Количественный',
					width:'100',
					dataIndex:'Количественный',
					flex:1,
				},
				{
					text:'Вид счета',
					width:'100',
					dataIndex:'ТипСчета',
					flex:1,
				},
				{
					text:'Субконто1',
					width:'100',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто2',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто3',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическийАнализБухгалтерскогоУчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяСчетаНУ',
					},
					{
						name:'КодСчетаБУ',
					},
					{
						name:'Валютный',
					},
					{
						name:'Количественный',
					},
					{
						name:'ТипСчета',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто3',
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
						var грид = Ext.getCmp('ПС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:268px;width:679px;height:25px;',
			width: 679,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
	]
	});
});