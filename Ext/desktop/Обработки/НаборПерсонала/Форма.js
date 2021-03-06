﻿Ext.require(['Данные.Обработки.НаборПерсонала'], function () 
{
	Ext.define('Обработки.НаборПерсонала.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:925px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Набор персонала',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:878px;height:25px;',
			width: 878,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Кадровое планирование...',
				},
				{
					text:'Вакансии...',
				},
				{
					text:'Источники информации...',
				},
				{
					text:'Состояния кандидатов...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				'-',
				{
					text:'Кадровое планирование...',
				},
				'-',
				{
					text:'Вакансии...',
				},
				'-',
				{
					text:'Источники информации...',
				},
				'-',
				{
					text:'Состояния кандидатов...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:703px;top:33px;width:214px;height:539px;',
			height: 539,width: 214,
			tabBar:{hidden:true},
			items:
			[
				{
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:689px;height:539px;',
			height: 539,width: 689,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:24px;width:689px;height:159px;',
			height: 159,width: 689,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ТабличноеПолеНеразобранныеПисьма',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:31px;width:275px;height:128px;',
			height: 128,width: 275,
			columns:
			[
				{
					text:'Тема',
					width:'172',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'99',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'27',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Не рассмотрено',
					width:'100',
					dataIndex:'НеРассмотрено',
					flex:1,
				},
				{
					text:'Рассмотреть после',
					width:'100',
					dataIndex:'РассмотретьПосле',
					flex:1,
				},
				{
					text:'Статус письма',
					width:'100',
					dataIndex:'СтатусПисьма',
					flex:1,
				},
				{
					text:'Значение группировки',
					width:'100',
					dataIndex:'ЗначениеГруппировки',
					flex:1,
				},
				{
					text:'Отправитель адрес электронной почты',
					width:'100',
					dataIndex:'ОтправительАдресЭлектроннойПочты',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'100',
					dataIndex:'ДатаПолучения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НаборПерсонала/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Тема',
					},
					{
						name:'Отправитель',
					},
					{
						name:'Ссылка',
					},
					{
						name:'НеРассмотрено',
					},
					{
						name:'РассмотретьПосле',
					},
					{
						name:'СтатусПисьма',
					},
					{
						name:'ЗначениеГруппировки',
					},
					{
						name:'ОтправительАдресЭлектроннойПочты',
					},
					{
						name:'ДатаПолучения',
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
						var грид = Ext.getCmp('ТабличноеПолеНеразобранныеПисьма');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НаборПерсонала.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НаборПерсонала.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:609px;height:24px;',
			width: 609,
			height: 24,
			items:
			[
				{
					text:'Принять как кандидата...',
				},
				{
					text:'Привязать к существующему кандидату',
				},
				'-',
				{
					text:'Открыть...',
				},
				{
					text:'Пометить как прочтенное',
				},
				'-',
				{
					text:'Переместить в нежелательную почту',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:609px;top:0px;width:80px;height:24px;',
			width: 80,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Все письма...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОПисьме',
			text: 'С данным отправителем ранее уже велась переписка',
			style: 'position:absolute;left:302px;top:31px;width:180px;height:33px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:191px;width:689px;height:348px;',
			height: 348,width: 689,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ТабличноеПолеЗаявкиКандидатов',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:53px;width:229px;height:295px;',
			height: 295,width: 229,
			columns:
			[
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'100',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Значение группировки',
					width:'100',
					dataIndex:'ЗначениеГруппировки',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НаборПерсонала/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Представление',
					},
					{
						name:'Ссылка',
					},
					{
						name:'ЗначениеГруппировки',
					},
					{
						name:'Количество',
					},
					{
						name:'Наименование1',
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
						var грид = Ext.getCmp('ТабличноеПолеЗаявкиКандидатов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НаборПерсонала.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НаборПерсонала.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:25px;width:596px;height:24px;',
			width: 596,
			height: 24,
			items:
			[
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:588px;top:25px;width:101px;height:24px;',
			width: 101,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Все кандидаты...',
				},
			]
		},
		{
			id: 'ТабличноеПолеПерепискаПоЗаявке',
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:268px;width:146px;height:80px;',
			height: 80,width: 146,
			columns:
			[
				{
					text:'Есть вложения',
					width:'21',
					dataIndex:'ЕстьВложения',
					flex:1,
				},
				{
					text:'От кого',
					width:'100',
					dataIndex:'ОтправительПредставление',
					flex:1,
				},
				{
					text:'Кому',
					width:'100',
					dataIndex:'КомуПредставление',
					flex:1,
				},
				{
					text:'Дата отправления',
					width:'140',
					dataIndex:'ДатаОтправления',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НаборПерсонала/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ЕстьВложения',
					},
					{
						name:'ОтправительПредставление',
					},
					{
						name:'КомуПредставление',
					},
					{
						name:'ДатаОтправления',
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
						var грид = Ext.getCmp('ТабличноеПолеПерепискаПоЗаявке');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НаборПерсонала.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НаборПерсонала.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:264px;top:212px;width:342px;height:24px;',
			width: 342,
			height: 24,
			items:
			[
				{
					text:'Ответить',
				},
				'-',
				{
					text:'Новое письмо',
				},
				{
					text:'Скопировать письмо',
				},
				{
					text:'Изменить письмо',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Ответить всем',
				},
				{
					text:'Переслать',
				},
				'-',
				{
					text:'Установить """"Рассмотрено""""',
				},
				{
					text:'Установить """"Не рассмотрено""""',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:235px;top:68px;width:454px;height:96px;',
			height: 96,width: 454,
			tabBar:{hidden:true},
			items:
			[
				{
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:878px;top:0px;width:47px;height:25px;',
			width: 47,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Переключить видимость справки формы',
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