﻿Ext.require(['Данные.Обработки.КонсольОтчетов'], function () 
{
	Ext.define('Обработки.КонсольОтчетов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:713px;height:484px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Консоль отчетов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:713px;height:24px;',
			width: 713,
			height: 24,
			items:
			[
				'-',
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				'-',
				{
					text:'Вывести в таблицу',
				},
				{
					text:'Диаграмма',
				},
				{
					text:'Сводная таблица',
				},
				{
					text:'Сводная диаграмма',
				},
				'-',
				{
					text:'Копия результата',
				},
				'-',
				{
					text:'Настройки',
				},
				{
					text:'Сохранить настройки отчета',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:160px;width:701px;height:320px;',
			height: 320,width: 701,
			tabBar:{hidden:true},
			items:
			[
				{
				},
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:32px;top:0px;width:251px;height:20px;',
			width: 251,
			height: 20,
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид:',
			style: 'position:absolute;left:4px;top:0px;width:24px;height:20px;text-align:left;',
		},
					]
				},
				{
				},
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:32px;top:0px;width:251px;height:20px;',
			width: 251,
			height: 20,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Вид:',
			style: 'position:absolute;left:4px;top:0px;width:24px;height:20px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:25px;width:713px;height:130px;',
			height: 130,width: 713,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:17px;top:26px;width:146px;height:26px;',
			width: 146,
			height: 26,
			items:
			[
			]
		},
		{
			id: 'ДеревоЗапросов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:7px;width:179px;height:122px;',
			height: 122,width: 179,
			columns:
			[
				{
					text:'Отчет',
					width:'150',
					dataIndex:'Отчет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Отчет',
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
						var грид = Ext.getCmp('ДеревоЗапросов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:190px;top:6px;width:517px;height:123px;',
			height: 123,width: 517,
			items:
			[
				{
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:487px;height:97px;',
			height: 97,width: 487,
			columns:
			[
				{
					text:'',
					width:'20',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			width: 24,
			height: 97,
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ИзмеренияСтроки',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:236px;height:97px;',
			height: 97,width: 236,
			columns:
			[
				{
					text:'Строки',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'40',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ИзмеренияСтроки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ИзмеренияКолонки',
			xtype: 'grid',
			style: 'position:absolute;left:265px;top:6px;width:222px;height:97px;',
			height: 97,width: 222,
			columns:
			[
				{
					text:'Колонки',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'40',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ИзмеренияКолонки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Для создания нового отчета необходимо нажать правой клавишей мыши на списке отчетов и выбрать в появившемся меню пункт "Добавить".',
			style: 'position:absolute;left:8px;top:4px;width:499px;height:69px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			width: 32,
			height: 24,
			items:
			[
				{
					text:' > ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			width: 32,
			height: 24,
			items:
			[
				{
					text:' < ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			width: 24,
			height: 97,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'По умолчанию',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПоляДляПорядка',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:236px;height:97px;',
			height: 97,width: 236,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
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
						var грид = Ext.getCmp('ПоляДляПорядка');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'Порядок',
			xtype: 'grid',
			style: 'position:absolute;left:265px;top:6px;width:222px;height:97px;',
			height: 97,width: 222,
			columns:
			[
				{
					text:'Порядок',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'60',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
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
						var грид = Ext.getCmp('Порядок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			width: 32,
			height: 24,
			items:
			[
				{
					text:' > ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			width: 32,
			height: 24,
			items:
			[
				{
					text:' < ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			width: 24,
			height: 97,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'По умолчанию',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПоляДляВыбранных',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:236px;height:97px;',
			height: 97,width: 236,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
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
						var грид = Ext.getCmp('ПоляДляВыбранных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ВыбранныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:265px;top:6px;width:222px;height:97px;',
			height: 97,width: 222,
			columns:
			[
				{
					text:'Выбранное поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
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
						var грид = Ext.getCmp('ВыбранныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			width: 32,
			height: 24,
			items:
			[
				{
					text:' > ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			width: 32,
			height: 24,
			items:
			[
				{
					text:' < ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			width: 24,
			height: 97,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				{
					text:'По умолчанию',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:209px;top:29px;width:175px;height:19px;',
			width: 175,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:209px;top:50px;width:175px;height:19px;',
			width: 175,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:209px;top:8px;width:175px;height:19px;',
			width: 175,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Размещение группировок',
			style: 'position:absolute;left:7px;top:29px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Размещение реквизитов группировок',
			style: 'position:absolute;left:7px;top:50px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Вариант оформления',
			style: 'position:absolute;left:7px;top:8px;width:198px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Фиксированный макет',
			style: 'position:absolute;left:397px;top:8px;width:108px;height:28px;',
		},
		{
			xtype: 'button',
			name: 'Макет',
			text: 'Макет',
			style: 'position:absolute;left:397px;top:50px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Размещение итогов',
			style: 'position:absolute;left:7px;top:71px;width:107px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:209px;top:71px;width:175px;height:19px;',
			width: 175,
			height: 19,
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:23px;top:57px;width:144px;height:24px;',
			width: 144,
			height: 24,
			items:
			[
				{
					text:'Расшифровка...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:199px;top:13px;width:34px;height:24px;',
			width: 34,
			height: 24,
			items:
			[
				{
					text:'Выполнить отчет',
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