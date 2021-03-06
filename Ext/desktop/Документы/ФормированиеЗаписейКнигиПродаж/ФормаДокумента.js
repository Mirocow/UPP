﻿Ext.require(['Данные.Документы.ФормированиеЗаписейКнигиПродаж'], function () 
{
	Ext.define('Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:709px;height:446px;',
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
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:394px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 611,
			height: 19,
			style: 'position:absolute;left:90px;top:394px;width:611px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По реализации со ставкой НДС 0%',
			style: 'position:absolute;left:8px;top:81px;width:199px;height:15px;',
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
					Ext.require(['Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
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
					Ext.require(['Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:102px;width:693px;height:286px;',
			height: 286,width: 693,
			items:
			[
				{
					items:
					[
		{
			id: 'Реализация',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
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
					text:'Покупатель',
					width:'120',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'120',
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
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Договор комиссии',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
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
					text:'Событие',
					width:'120',
					dataIndex:'Событие',
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
					text:'Сторнирующая запись доп. листа',
					width:'80',
					dataIndex:'СторнирующаяЗаписьДопЛиста',
					flex:1,
				},
				{
					text:'Корректируемый период',
					width:'80',
					dataIndex:'КорректируемыйПериод',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПродаж/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Покупатель',
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
						name:'ДоговорКонтрагента',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'Событие',
					},
					{
						name:'Состояние',
					},
					{
						name:'ЗаписьДополнительногоЛиста',
					},
					{
						name:'СторнирующаяЗаписьДопЛиста',
					},
					{
						name:'КорректируемыйПериод',
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
						var грид = Ext.getCmp('Реализация');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
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
			id: 'Авансы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
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
					text:'Счет-фактура',
					width:'120',
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
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Событие',
					width:'120',
					dataIndex:'Событие',
					flex:1,
				},
				{
					text:'Запись доп. листа',
					width:'80',
					dataIndex:'ЗаписьДополнительногоЛиста',
					flex:1,
				},
				{
					text:'Сторнирующая запись доп. листа',
					width:'80',
					dataIndex:'СторнирующаяЗаписьДопЛиста',
					flex:1,
				},
				{
					text:'Корректируемый период',
					width:'80',
					dataIndex:'КорректируемыйПериод',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПродаж/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Покупатель',
					},
					{
						name:'ДоговорКонтрагента',
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
						name:'Событие',
					},
					{
						name:'ЗаписьДополнительногоЛиста',
					},
					{
						name:'СторнирующаяЗаписьДопЛиста',
					},
					{
						name:'КорректируемыйПериод',
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
						var грид = Ext.getCmp('Авансы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
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
			id: 'НачисленКУплате',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'N',
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
					width:'100',
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
					text:'Событие',
					width:'120',
					dataIndex:'Событие',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПродаж/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Покупатель',
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
						name:'Событие',
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
						var грид = Ext.getCmp('НачисленКУплате');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
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
			id: 'ВосстановленПоАвансам',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
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
					text:'Сторнирующая запись доп. листа',
					width:'80',
					dataIndex:'СторнирующаяЗаписьДопЛиста',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПродаж/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'СторнирующаяЗаписьДопЛиста',
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
						var грид = Ext.getCmp('ВосстановленПоАвансам');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
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
			id: 'Восстановлен',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'N',
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
					text:'Поставщик',
					width:'100',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'100',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Счет учета НДС',
					width:'100',
					dataIndex:'СчетУчетаНДС',
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
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПродаж/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Покупатель',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'СчетУчетаНДС',
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
						var грид = Ext.getCmp('Восстановлен');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
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
			id: 'НеОтражаетсяВКниге',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид начисления',
					width:'120',
					dataIndex:'ВидНачисления',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'120',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Покупатель',
					width:'120',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'120',
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
					width:'120',
					dataIndex:'СуммаБезНДС',
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
					text:'Событие',
					width:'120',
					dataIndex:'Событие',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаписейКнигиПродаж/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидНачисления',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'Покупатель',
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
						name:'ДокументОплаты',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'Событие',
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
						var грид = Ext.getCmp('НеОтражаетсяВКниге');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаписейКнигиПродаж.ФормаДокументаСобытия");
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
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать сторнирующие записи доп. листов вручную',
			style: 'position:absolute;left:329px;top:33px;width:372px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:709px;height:25px;',
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