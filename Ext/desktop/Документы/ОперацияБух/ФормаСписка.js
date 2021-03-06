﻿Ext.require(['Данные.Документы.ОперацияБух'], function () 
{
	Ext.define('Документы.ОперацияБух.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Операции (бухгалтерский и налоговый учет)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:157px;',
			height: 157,width: 764,
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
					text:'Организация',
					width:'200',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Сумма операции',
					width:'120',
					dataIndex:'СуммаОперации',
					flex:1,
				},
				{
					text:'Содержание',
					width:'120',
					dataIndex:'Содержание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОперацияБух/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Организация',
					},
					{
						name:'СуммаОперации',
					},
					{
						name:'Содержание',
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
						Ext.require(['Справочники.ОперацияБух.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОперацияБух.ФормаСпискаСобытия");
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
					text:'Действия',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				{
					text:'Печать по умолчанию',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаОрганизация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:220px;width:764px;height:242px;',
			height: 242,width: 764,
			items:
			[
				{
					items:
					[
		{
			id: 'ТабличноеПолеДвиженияБУ',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:750px;height:210px;',
			height: 210,width: 750,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'98',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'98',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'98',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'100',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Валюта Дт',
					width:'100',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Вал. сумма Дт',
					width:'100',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'80',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'106',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'64',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'64',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'100',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Валюта Кт',
					width:'100',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Вал. сумма Кт',
					width:'100',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'100',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Номер журнала',
					width:'100',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОперацияБух/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'СчетКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
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
						var грид = Ext.getCmp('ТабличноеПолеДвиженияБУ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОперацияБух.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОперацияБух.ФормаСпискаСобытия");
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
			id: 'ТабличноеПолеДвиженияНУ',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:750px;height:210px;',
			height: 210,width: 750,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'80',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Вид учета Дт',
					width:'100',
					dataIndex:'ВидУчетаДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'150',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'150',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'150',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'80',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'80',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Вид учета Кт',
					width:'100',
					dataIndex:'ВидУчетаКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'150',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'150',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'150',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Сумма',
					width:'150',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'150',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ журнала',
					width:'100',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОперацияБух/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетДт',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'ВидУчетаДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СчетКт',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'ВидУчетаКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
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
						var грид = Ext.getCmp('ТабличноеПолеДвиженияНУ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОперацияБух.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОперацияБух.ФормаСпискаСобытия");
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
	]
	});
});