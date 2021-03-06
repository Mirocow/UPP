﻿Ext.require(['Данные.Документы.ПередачаТоваров'], function () 
{
	Ext.define('Документы.ПередачаТоваров.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:415px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отобрать заказы покупателей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:41px;width:644px;height:167px;',
			height: 167,width: 644,
			items:
			[
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеДатаОтгрузки',
			width: 102,
			height: 19,
			style: 'position:absolute;left:258px;top:64px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:64px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОтргузки',
			text: 'Дата отгрузки:',
			style: 'position:absolute;left:16px;top:64px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:8px;width:210px;height:19px;',
			width: 210,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеРезервов',
			text: 'Наличие резервов:',
			style: 'position:absolute;left:16px;top:8px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:40px;width:210px;height:19px;',
			width: 210,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Состояние отгрузки:',
			style: 'position:absolute;left:16px;top:40px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:364px;top:8px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:318px;top:64px;width:42px;height:19px;',
			width: 42,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:96px;width:210px;height:19px;',
			width: 210,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОплаты',
			style: 'position:absolute;left:318px;top:120px;width:42px;height:19px;',
			width: 42,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:120px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОплаты',
			text: 'Состояние оплаты:',
			style: 'position:absolute;left:16px;top:96px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОплаты',
			text: 'Дата оплаты:',
			style: 'position:absolute;left:16px;top:120px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеДатаОплаты',
			width: 102,
			height: 19,
			style: 'position:absolute;left:258px;top:120px;width:102px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:630px;height:114px;',
			height: 114,width: 630,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаТоваров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ТабличноеПолеОтбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаТоваров.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаТоваров.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:281px;height:24px;',
			width: 281,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:406px;top:4px;width:219px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:413px;top:17px;width:233px;height:19px;',
			width: 233,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВариантОтбора',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:325px;top:17px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:84px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:188px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'За период с:',
			style: 'position:absolute;left:16px;top:17px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:168px;top:17px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:17px;width:19px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:227px;width:644px;height:25px;',
			width: 644,
			height: 25,
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				{
					text:'Инвертировать',
				},
				'-',
				{
					text:'Вверх',
				},
				{
					text:'Вниз',
				},
				'-',
				{
					text:'По возрастанию',
				},
				{
					text:'По убыванию',
				},
				'-',
				{
					text:'Настройка списка',
				},
				'-',
				{
					text:'Анализ',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			id: 'ТабличноеПолеЗаказы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:250px;width:644px;height:131px;',
			height: 131,width: 644,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'НеЗаполнять',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Переносить',
					flex:1,
				},
				{
					text:'БУ',
					width:'20',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'НУ',
					width:'20',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'23',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Дата',
					width:'110',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'90',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'80',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'110',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Контактное лицо',
					width:'100',
					dataIndex:'КонтактноеЛицоКонтрагента',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Валюта',
					width:'30',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Ост. отгр.',
					width:'80',
					dataIndex:'ЗаказыОстаток',
					flex:1,
				},
				{
					text:'Кол.',
					width:'30',
					dataIndex:'ЗаказыКоличество',
					flex:1,
				},
				{
					text:'Ост. опл.',
					width:'80',
					dataIndex:'РасчетыОстаток',
					flex:1,
				},
				{
					text:'Рез.',
					width:'35',
					dataIndex:'РезервыКоличество',
					flex:1,
				},
				{
					text:'Разм.',
					width:'35',
					dataIndex:'РазмещенияКоличество',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'80',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Тип скидки',
					width:'80',
					dataIndex:'ТипСкидкиНаценки',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Дата отгрузки',
					width:'80',
					dataIndex:'ДатаОтгрузки',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Склад/группа',
					width:'100',
					dataIndex:'СкладГруппа',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Проведен',
					width:'70',
					dataIndex:'Проведен',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаТоваров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НеЗаполнять',
					},
					{
						name:'Переносить',
					},
					{
						name:'ОтражатьВБухгалтерскомУчете',
					},
					{
						name:'ОтражатьВНалоговомУчете',
					},
					{
						name:'Ссылка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'КонтактноеЛицоКонтрагента',
					},
					{
						name:'СуммаДокумента',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ЗаказыОстаток',
					},
					{
						name:'ЗаказыКоличество',
					},
					{
						name:'РасчетыОстаток',
					},
					{
						name:'РезервыКоличество',
					},
					{
						name:'РазмещенияКоличество',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'ТипСкидкиНаценки',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДатаОтгрузки',
					},
					{
						name:'Организация',
					},
					{
						name:'СкладГруппа',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Проведен',
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
						var грид = Ext.getCmp('ТабличноеПолеЗаказы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаТоваров.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаТоваров.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Заказы',
			style: 'position:absolute;left:8px;top:212px;width:644px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:390px;width:660px;height:25px;',
			width: 660,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<<Назад',
				},
				'-',
				{
					text:'Перенести',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:419px;top:36px;width:233px;height:19px;',
			width: 233,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Способ заполнения:',
			style: 'position:absolute;left:311px;top:36px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:92px;width:644px;height:280px;',
			height: 280,width: 644,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:630px;height:24px;',
			width: 630,
			height: 24,
			items:
			[
				{
					text:'Обнулить столбец добавляемых в документ',
				},
				{
					text:'Заполнить столбец добавляемых в документ',
				},
			]
		},
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'100',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Код',
					width:'47',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'77',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Склад/Склад заказа',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Добавить в документ',
					width:'86',
					dataIndex:'ДобавитьВДокумент',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'71',
					dataIndex:'Запланировано',
					flex:1,
				},
				{
					text:'Осталось отгрузить',
					width:'73',
					dataIndex:'ОсталосьОтгрузить',
					flex:1,
				},
				{
					text:'Заполнено',
					width:'71',
					dataIndex:'Заполнено',
					flex:1,
				},
				{
					text:'Резерв по заказу',
					width:'100',
					dataIndex:'РезервПоЗаказу',
					flex:1,
				},
				{
					text:'Свободный остаток',
					width:'100',
					dataIndex:'СвободныйОстаток',
					flex:1,
				},
				{
					text:'Остаток по организации',
					width:'100',
					dataIndex:'ОстатокПоОрганизации',
					flex:1,
				},
				{
					text:'Можно отгрузить',
					width:'100',
					dataIndex:'МожноОтгрузить',
					flex:1,
				},
				{
					text:'Метка остатки по складу',
					width:'104',
					dataIndex:'МеткаОстаткиПоСкладу',
					flex:1,
				},
				{
					text:'Приоритет по складам',
					width:'96',
					dataIndex:'ПриоритетПоСкладам',
					flex:1,
				},
				{
					text:'Флаг заполнено',
					width:'100',
					dataIndex:'ФлагЗаполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаТоваров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Склад',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ДобавитьВДокумент',
					},
					{
						name:'Запланировано',
					},
					{
						name:'ОсталосьОтгрузить',
					},
					{
						name:'Заполнено',
					},
					{
						name:'РезервПоЗаказу',
					},
					{
						name:'СвободныйОстаток',
					},
					{
						name:'ОстатокПоОрганизации',
					},
					{
						name:'МожноОтгрузить',
					},
					{
						name:'МеткаОстаткиПоСкладу',
					},
					{
						name:'ПриоритетПоСкладам',
					},
					{
						name:'ФлагЗаполнено',
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
						var грид = Ext.getCmp('Товары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаТоваров.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаТоваров.ФормаОтбораЗаказовСобытия");
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
		{
			xtype: 'label',
			text: 'Заполнение табличных частей',
			style: 'position:absolute;left:8px;top:14px;width:644px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Товары',
			style: 'position:absolute;left:23px;top:38px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:419px;top:61px;width:233px;height:19px;',
			width: 233,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьЗаполнениеСкладов',
			text: 'Приоритет складов:',
			style: 'position:absolute;left:311px;top:61px;width:104px;height:19px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:390px;width:658px;height:25px;',
			width: 658,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Далее>>',
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