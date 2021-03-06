﻿Ext.require(['Данные.Обработки.КонструкторСпецификаций'], function () 
{
	Ext.define('Обработки.КонструкторСпецификаций.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Конструктор спецификаций',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:408px;',
			height: 408,width: 764,
			items:
			[
				{
					items:
					[
		{
			id: 'ДеревоСпецификаций',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:374px;height:336px;',
			height: 336,width: 374,
			columns:
			[
				{
					text:'Вид норматива',
					width:'41',
					dataIndex:'ВидСтроки',
					flex:1,
				},
				{
					text:'Наименование',
					width:'174',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'128',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Вид номенклатуры',
					width:'100',
					dataIndex:'ВидНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'66',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'47',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'100',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Вид воспроизводства',
					width:'100',
					dataIndex:'ВидВоспроизводства',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'125',
					dataIndex:'ОсновнаяСпецификация',
					flex:1,
				},
				{
					text:'Формула',
					width:'68',
					dataIndex:'Формула',
					flex:1,
				},
				{
					text:'Указание норматива',
					width:'111',
					dataIndex:'УказаниеНорматива',
					flex:1,
				},
				{
					text:'Списание комплектующей',
					width:'138',
					dataIndex:'СписаниеКомплектующей',
					flex:1,
				},
				{
					text:'Свойства',
					width:'80',
					dataIndex:'СвойствоДляСписания',
					flex:1,
				},
				{
					text:'Номер строки спецификации',
					width:'64',
					dataIndex:'НомерСтрокиСпецификации',
					flex:1,
				},
				{
					text:'Исх. спецификация',
					width:'84',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Вид норматива',
					width:'71',
					dataIndex:'ВидНорматива',
					flex:1,
				},
				{
					text:'Есть спецификации',
					width:'76',
					dataIndex:'ЕстьСпецификации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ВидНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ВидВоспроизводства',
					},
					{
						name:'ОсновнаяСпецификация',
					},
					{
						name:'Формула',
					},
					{
						name:'УказаниеНорматива',
					},
					{
						name:'СписаниеКомплектующей',
					},
					{
						name:'СвойствоДляСписания',
					},
					{
						name:'НомерСтрокиСпецификации',
					},
					{
						name:'Спецификация',
					},
					{
						name:'ВидНорматива',
					},
					{
						name:'ЕстьСпецификации',
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
						var грид = Ext.getCmp('ДеревоСпецификаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:374px;height:24px;',
			width: 374,
			height: 24,
			items:
			[
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Дерево спецификаций',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Номенклатура',
			style: 'position:absolute;left:386px;top:6px;width:370px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:386px;top:207px;width:370px;height:175px;',
			height: 175,width: 370,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'СписокСпецификацииНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:98px;width:370px;height:77px;',
			height: 77,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Версия',
					width:'40',
					dataIndex:'КодВерсии',
					flex:1,
				},
				{
					text:'Наименование',
					width:'157',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Активная',
					width:'20',
					dataIndex:'Активная',
					flex:1,
				},
				{
					text:'Вид',
					width:'70',
					dataIndex:'ВидСпецификации',
					flex:1,
				},
				{
					text:'Состояние',
					width:'75',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата утверждения',
					width:'84',
					dataIndex:'ДатаУтверждения',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'КодВерсии',
					},
					{
						name:'Наименование',
					},
					{
						name:'Активная',
					},
					{
						name:'ВидСпецификации',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаУтверждения',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('СписокСпецификацииНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СписокХарактеристикиНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:66px;',
			height: 66,width: 370,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('СписокХарактеристикиНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:72px;width:369px;height:26px;',
			width: 369,
			height: 26,
			items:
			[
				{
					text:'Установить основную спецификацию на выбранную дату',
				},
				{
					text:'Установить основную спецификацию на рабочую дату',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:369px;height:24px;',
			width: 369,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'Новая группа',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Уровень вверх',
				},
				{
					text:'Уровень вниз',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Версии спецификации',
				},
					]
				},
				{
					text:'Создать версию',
				},
				'-',
				{
					text:'Печать спецификации',
				},
			]
		},
		{
			id: 'СписокСпецификацииОтдельный',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:370px;height:151px;',
			height: 151,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Версия',
					width:'40',
					dataIndex:'КодВерсии',
					flex:1,
				},
				{
					text:'Наименование',
					width:'172',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Активная',
					width:'20',
					dataIndex:'Активная',
					flex:1,
				},
				{
					text:'Вид',
					width:'70',
					dataIndex:'ВидСпецификации',
					flex:1,
				},
				{
					text:'Состояние',
					width:'96',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата утверждения',
					width:'129',
					dataIndex:'ДатаУтверждения',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'КодВерсии',
					},
					{
						name:'Наименование',
					},
					{
						name:'Активная',
					},
					{
						name:'ВидСпецификации',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаУтверждения',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('СписокСпецификацииОтдельный');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия");
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
			xtype: 'panel',
			style: 'position:absolute;left:386px;top:22px;width:370px;height:179px;',
			height: 179,width: 370,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'СписокНоменклатура',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:107px;width:370px;height:72px;',
			height: 72,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'70',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'100',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Артикул ',
					width:'90',
					dataIndex:'Артикул',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Артикул',
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
						var грид = Ext.getCmp('СписокНоменклатура');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:24px;',
			width: 370,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ДеревоНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:370px;height:77px;',
			height: 77,width: 370,
			columns:
			[
				{
					text:'Наименование',
					width:'216',
					dataIndex:'Картинка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
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
						var грид = Ext.getCmp('ДеревоНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия");
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:25px;',
			width: 370,
			height: 25,
			items:
			[
			]
		},
		{
			id: 'СписокНоменклатураОтдельный',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:370px;height:154px;',
			height: 154,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'100',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Артикул ',
					width:'90',
					dataIndex:'Артикул',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Артикул',
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
						var грид = Ext.getCmp('СписокНоменклатураОтдельный');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонструкторСпецификаций.ОсновнаяФормаСобытия");
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
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Выводить спецификации на дату:',
			style: 'position:absolute;left:6px;top:6px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 80,
			height: 19,
			style: 'position:absolute;left:190px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разворачивать дерево спецификаций',
			style: 'position:absolute;left:384px;top:51px;width:372px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В списках чередовать цвета строк',
			style: 'position:absolute;left:6px;top:74px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить возвратные отходы',
			style: 'position:absolute;left:384px;top:95px;width:372px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Редактировать в диалоге',
			style: 'position:absolute;left:6px;top:51px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запрашивать подтверждение при установке основной спецификации',
			style: 'position:absolute;left:6px;top:279px;width:378px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Настройка дерева спецификаций',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'При изменении спецификации',
			style: 'position:absolute;left:6px;top:238px;width:750px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить выходные изделия',
			style: 'position:absolute;left:384px;top:73px;width:372px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'При вводе новой строки',
			style: 'position:absolute;left:6px;top:168px;width:378px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьВыводитьДляНоменклатуры',
			text: 'Выводить в доп. информацию для номенклатуры:',
			style: 'position:absolute;left:6px;top:120px;width:258px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВыводитьДляНоменклатуры.Представление',
			width: 110,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:274px;top:120px;width:110px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать дерево номенклатуры',
			style: 'position:absolute;left:6px;top:96px;width:378px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Конечная продукция:',
			style: 'position:absolute;left:6px;top:303px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: true,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КонечнаяПродукция.Представление',
			width: 255,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:129px;top:303px;width:255px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Конечная характеристика продукции:',
			style: 'position:absolute;left:6px;top:327px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: true,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КонечнаяХарактеристикаПродукции.Представление',
			width: 255,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:129px;top:327px;width:255px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоУровней',
			text: 'Количество уровней разворота дерева:',
			style: 'position:absolute;left:6px;top:144px;width:258px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоУровней',
			style: 'position:absolute;left:274px;top:144px;width:110px;height:19px;',
			width: 110,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Устанавливать спецификацию как основную',
			style: 'position:absolute;left:6px;top:257px;width:378px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Формировать отчеты по дереву спецификаций',
			style: 'position:absolute;left:384px;top:168px;width:372px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Добавлять новую строку спецификации',
			style: 'position:absolute;left:6px;top:192px;width:378px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выводить меню',
			style: 'position:absolute;left:6px;top:212px;width:378px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'На количество выходных изделий по спецификации',
			style: 'position:absolute;left:384px;top:192px;width:372px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'На единицу выходного изделия',
			style: 'position:absolute;left:384px;top:212px;width:372px;height:15px;',
		},
			]
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