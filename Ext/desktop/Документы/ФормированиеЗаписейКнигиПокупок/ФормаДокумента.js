﻿Ext.require(['Данные.Документы.ФормированиеЗаписейКнигиПокупок'], function () 
{
	Ext.define('Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:709px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:709px;height:25px;',
			width: 709,
			height: 25,
			items:
			[
				{
					text:'Заполнить документ',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:369px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 611,
			height: 19,
			style: 'position:absolute;left:90px;top:369px;width:611px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предъявлен к вычету НДС 0%',
			style: 'position:absolute;left:8px;top:81px;width:176px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:329px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 282,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:419px;top:57px;width:282px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:99px;width:693px;height:267px;',
			height: 267,width: 693,
			items:
			[
				{
					items:
					[
		{
			id: 'ВычетПоПриобретеннымЦенностям',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ отгрузки',
					width:'120',
					dataIndex:'ДокументОтгрузки',
					flex:1,
				},
				{
					text:'Состояние',
					width:'120',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'120',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'120',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'120',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'% НДС',
					width:'90',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'120',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Счет учета НДС',
					width:'80',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Запись доп. листа',
					width:'60',
					dataIndex:'ЗаписьДополнительногоЛиста',
					flex:1,
				},
				{
					text:'Корректируемый период',
					width:'80',
					dataIndex:'КорректируемыйПериод',
					flex:1,
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
					dataIndex:'ИсправленныйСчетФактура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПокупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументОтгрузки',
					},
					{
						name:'Состояние',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'Поставщик',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'ЗаписьДополнительногоЛиста',
					},
					{
						name:'КорректируемыйПериод',
					},
					{
						name:'ИсправленныйСчетФактура',
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
						var грид = Ext.getCmp('ВычетПоПриобретеннымЦенностям');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			width: 679,
			height: 24,
			items:
			[
				'-',
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'НДСсАвансов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Покупатель',
					width:'120',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ отгрузки',
					width:'120',
					dataIndex:'ДокументОтгрузки',
					flex:1,
				},
				{
					text:'Состояние',
					width:'120',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'120',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Дата зачета аванса',
					width:'80',
					dataIndex:'ДатаСобытия',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'% НДС',
					width:'90',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Валюта документа',
					width:'60',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Сумма по документу-основанию',
					width:'120',
					dataIndex:'ВалютнаяСумма',
					flex:1,
				},
				{
					text:'Запись доп. листа',
					width:'80',
					dataIndex:'ЗаписьДополнительногоЛиста',
					flex:1,
				},
				{
					text:'Корректируемый период',
					width:'80',
					dataIndex:'КорректируемыйПериод',
					flex:1,
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
					dataIndex:'ИсправленныйСчетФактура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПокупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Покупатель',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'ДокументОтгрузки',
					},
					{
						name:'Состояние',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'ДатаСобытия',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ВалютнаяСумма',
					},
					{
						name:'ЗаписьДополнительногоЛиста',
					},
					{
						name:'КорректируемыйПериод',
					},
					{
						name:'ИсправленныйСчетФактура',
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
						var грид = Ext.getCmp('НДСсАвансов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			width: 679,
			height: 24,
			items:
			[
				'-',
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'НДСсАвансовВыданных',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'120',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'120',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'% НДС',
					width:'96',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Запись доп. листа',
					width:'80',
					dataIndex:'ЗаписьДополнительногоЛиста',
					flex:1,
				},
				{
					text:'Корректируемый период',
					width:'80',
					dataIndex:'КорректируемыйПериод',
					flex:1,
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
					dataIndex:'ИсправленныйСчетФактура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПокупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Поставщик',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'ЗаписьДополнительногоЛиста',
					},
					{
						name:'КорректируемыйПериод',
					},
					{
						name:'ИсправленныйСчетФактура',
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
						var грид = Ext.getCmp('НДСсАвансовВыданных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			width: 679,
			height: 24,
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ВычетНДСПоНалоговомуАгенту',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'120',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'120',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ поступления',
					width:'120',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'% НДС',
					width:'80',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'120',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Документ отгрузки',
					width:'120',
					dataIndex:'ДокументОтгрузки',
					flex:1,
				},
				{
					text:'Состояние',
					width:'120',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Запись доп. листа',
					width:'80',
					dataIndex:'ЗаписьДополнительногоЛиста',
					flex:1,
				},
				{
					text:'Корректируемый период',
					width:'100',
					dataIndex:'КорректируемыйПериод',
					flex:1,
				},
				{
					text:'Счет учета НДС',
					width:'96',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
					dataIndex:'ИсправленныйСчетФактура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПокупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'Поставщик',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДокументОтгрузки',
					},
					{
						name:'Состояние',
					},
					{
						name:'ЗаписьДополнительногоЛиста',
					},
					{
						name:'КорректируемыйПериод',
					},
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'ИсправленныйСчетФактура',
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
						var грид = Ext.getCmp('ВычетНДСПоНалоговомуАгенту');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			width: 679,
			height: 24,
			items:
			[
				'-',
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ВычетПриИзмененииСтоимостиВСторонуУменьшения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'100',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Покупатель',
					width:'100',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'100',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'% НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'100',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'100',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Счет учета НДС',
					width:'100',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
					dataIndex:'ИсправленныйСчетФактура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПокупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'Поставщик',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'ИсправленныйСчетФактура',
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
						var грид = Ext.getCmp('ВычетПриИзмененииСтоимостиВСторонуУменьшения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПокупок.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			width: 679,
			height: 24,
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Имеется решение о возмещении НДС',
			style: 'position:absolute;left:190px;top:81px;width:215px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:709px;height:25px;',
			width: 709,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});