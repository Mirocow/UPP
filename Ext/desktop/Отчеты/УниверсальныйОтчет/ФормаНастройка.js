﻿Ext.require(['Данные.Отчеты.УниверсальныйОтчет'], function () 
{
	Ext.define('Отчеты.УниверсальныйОтчет.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:500px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:684px;height:459px;',
			height: 459,width: 684,
			items:
			[
				{
					items:
					[
		{
			id: 'ТабличноеПолеПоказатели',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:119px;width:670px;height:310px;',
			height: 310,width: 670,
			columns:
			[
				{
					text:'Представление',
					width:'100',
					dataIndex:'КолонкаПредставление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КолонкаПредставление',
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
						var грид = Ext.getCmp('ТабличноеПолеПоказатели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:95px;width:670px;height:24px;',
			width: 670,
			height: 24,
			items:
			[
				{
					text:'Установить пометки',
				},
				{
					text:'Снять пометки',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:363px;top:6px;width:313px;height:19px;',
			width: 313,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра',
			text: 'Раздел учета:',
			style: 'position:absolute;left:285px;top:6px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Показатели',
			style: 'position:absolute;left:6px;top:79px;width:670px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:466px;top:53px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Параметры',
			style: 'position:absolute;left:6px;top:32px;width:670px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отрицательное красным',
			style: 'position:absolute;left:6px;top:53px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить общие итоги',
			style: 'position:absolute;left:156px;top:53px;width:135px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить детальные записи',
			style: 'position:absolute;left:296px;top:53px;width:165px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:259px;height:19px;',
			height: 19,width: 259,
			tabBar:{hidden:true},
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
			name: 'ПолеВводаДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:139px;top:0px;width:16px;height:19px;text-align:center;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаНаДату',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаДату',
			text: 'На дату:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Период',
			text: 'Период',
			style: 'position:absolute;left:79px;top:0px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод',
			text: '-',
			style: 'position:absolute;left:57px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод',
			text: '+',
			style: 'position:absolute;left:211px;top:0px;width:20px;height:19px;',
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
			id: 'ТабличноеПолеИзмеренияСтроки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:320px;height:399px;',
			height: 399,width: 320,
			columns:
			[
				{
					text:'Группировки строк',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеИзмеренияСтроки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ТабличноеПолеИзмеренияКолонки',
			xtype: 'grid',
			style: 'position:absolute;left:356px;top:30px;width:320px;height:399px;',
			height: 399,width: 320,
			columns:
			[
				{
					text:'Группировки колонок',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеИзмеренияКолонки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:320px;height:24px;',
			width: 320,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:356px;top:6px;width:320px;height:24px;',
			width: 320,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:329px;top:30px;width:24px;height:399px;',
			width: 24,
			height: 399,
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие перенести в измерения строк',
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
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:48px;width:670px;height:24px;',
			width: 670,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
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
					text:'Закончить редактирование',
				},
			]
		},
		{
			id: 'ТабличноеПолеОтобранныеИнтервалы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:72px;width:670px;height:357px;',
			height: 357,width: 670,
			columns:
			[
				{
					text:'Граница интервала',
					width:'120',
					dataIndex:'ВГраница',
					flex:1,
				},
				{
					text:'Название',
					width:'120',
					dataIndex:'Название',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВГраница',
					},
					{
						name:'Название',
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
						var грид = Ext.getCmp('ТабличноеПолеОтобранныеИнтервалы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:88px;top:6px;width:588px;height:19px;',
			width: 588,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Отобранные интервалы',
			style: 'position:absolute;left:6px;top:32px;width:670px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:399px;',
			height: 399,width: 670,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			width: 670,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			width: 670,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ТабличноеПолеВыбранныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:399px;',
			height: 399,width: 670,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Размещение',
					width:'100',
					dataIndex:'КолонкаРазмещение',
					flex:1,
				},
				{
					text:'Положение',
					width:'100',
					dataIndex:'КолонкаПоложение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'КолонкаРазмещение',
					},
					{
						name:'КолонкаПоложение',
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
						var грид = Ext.getCmp('ТабличноеПолеВыбранныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
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
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			width: 670,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ТабличноеПолеПорядок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:399px;',
			height: 399,width: 670,
			columns:
			[
				{
					text:'Поле',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеПорядок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
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
			id: 'ТабличноеПолеУсловноеОформление',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:93px;width:670px;height:336px;',
			height: 336,width: 670,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Область',
					width:'100',
					dataIndex:'Области',
					flex:1,
				},
				{
					text:'Отбор',
					width:'100',
					dataIndex:'Отбор',
					flex:1,
				},
				{
					text:'Оформление',
					width:'100',
					dataIndex:'Оформление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Области',
					},
					{
						name:'Отбор',
					},
					{
						name:'Оформление',
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
						var грид = Ext.getCmp('ТабличноеПолеУсловноеОформление');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:69px;width:670px;height:24px;',
			width: 670,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Условное оформление',
			style: 'position:absolute;left:6px;top:53px;width:670px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Оформление отчета',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:128px;top:27px;width:548px;height:19px;',
			width: 548,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВариантОформления',
			text: 'Вариант оформления:',
			style: 'position:absolute;left:6px;top:27px;width:120px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			id: 'ТабличноеПолеПоказатели1',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:214px;height:149px;',
			height: 149,width: 214,
			columns:
			[
				{
					text:'Представление',
					width:'100',
					dataIndex:'КолонкаПредставление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КолонкаПредставление',
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
						var грид = Ext.getCmp('ТабличноеПолеПоказатели1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:214px;height:24px;',
			width: 214,
			height: 24,
			items:
			[
				{
					text:'Командная панель показатели установить пометки',
				},
				{
					text:'Командная панель показатели снять пометки',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Показатели',
			style: 'position:absolute;left:8px;top:81px;width:214px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеОтбор1',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:317px;width:684px;height:150px;',
			height: 150,width: 684,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеОтбор1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:293px;width:684px;height:24px;',
			width: 684,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:700px;height:25px;',
			width: 700,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:700px;height:25px;',
			width: 700,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			id: 'ТабличноеПолеИзмеренияСтроки1',
			xtype: 'grid',
			style: 'position:absolute;left:242px;top:121px;width:210px;height:149px;',
			height: 149,width: 210,
			columns:
			[
				{
					text:'Группировки строк',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеИзмеренияСтроки1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ТабличноеПолеИзмеренияКолонки1',
			xtype: 'grid',
			style: 'position:absolute;left:482px;top:121px;width:210px;height:149px;',
			height: 149,width: 210,
			columns:
			[
				{
					text:'Группировки колонок',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеИзмеренияКолонки1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:242px;top:97px;width:210px;height:24px;',
			width: 210,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:482px;top:97px;width:210px;height:24px;',
			width: 210,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Группировки строк',
			style: 'position:absolute;left:242px;top:81px;width:210px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Группировки колонок',
			style: 'position:absolute;left:482px;top:81px;width:210px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Отборы',
			style: 'position:absolute;left:8px;top:277px;width:684px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеПоказатели2',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:332px;height:149px;',
			height: 149,width: 332,
			columns:
			[
				{
					text:'Представление',
					width:'100',
					dataIndex:'КолонкаПредставление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КолонкаПредставление',
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
						var грид = Ext.getCmp('ТабличноеПолеПоказатели2');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:332px;height:24px;',
			width: 332,
			height: 24,
			items:
			[
				{
					text:'Командная панель показатели установить пометки',
				},
				{
					text:'Командная панель показатели снять пометки',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Показатели',
			style: 'position:absolute;left:8px;top:81px;width:332px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеОтбор2',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:317px;width:684px;height:150px;',
			height: 150,width: 684,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеОтбор2');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:293px;width:684px;height:24px;',
			width: 684,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ТабличноеПолеИзмеренияСтроки2',
			xtype: 'grid',
			style: 'position:absolute;left:360px;top:121px;width:332px;height:149px;',
			height: 149,width: 332,
			columns:
			[
				{
					text:'Группировки строк',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеИзмеренияСтроки2');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:360px;top:97px;width:332px;height:24px;',
			width: 332,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Группировки строк',
			style: 'position:absolute;left:360px;top:81px;width:332px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Отборы',
			style: 'position:absolute;left:8px;top:277px;width:684px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расширенная настройка',
			style: 'position:absolute;left:8px;top:478px;width:150px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расширенная настройка',
			style: 'position:absolute;left:8px;top:478px;width:150px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расширенная настройка',
			style: 'position:absolute;left:8px;top:478px;width:150px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:365px;top:8px;width:327px;height:19px;',
			width: 327,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра1',
			text: 'Раздел учета:',
			style: 'position:absolute;left:287px;top:8px;width:76px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:365px;top:8px;width:327px;height:19px;',
			width: 327,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра2',
			text: 'Раздел учета:',
			style: 'position:absolute;left:287px;top:8px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Параметры',
			style: 'position:absolute;left:8px;top:34px;width:684px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Параметры',
			style: 'position:absolute;left:8px;top:34px;width:684px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:468px;top:55px;width:205px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отрицательное красным',
			style: 'position:absolute;left:8px;top:55px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить общие итоги',
			style: 'position:absolute;left:158px;top:55px;width:135px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить детальные записи',
			style: 'position:absolute;left:298px;top:55px;width:165px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:468px;top:55px;width:205px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отрицательное красным',
			style: 'position:absolute;left:8px;top:55px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить общие итоги',
			style: 'position:absolute;left:158px;top:55px;width:135px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить детальные записи',
			style: 'position:absolute;left:298px;top:55px;width:165px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:259px;height:19px;',
			height: 19,width: 259,
			tabBar:{hidden:true},
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
			name: 'ПолеВводаДатаНач1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаКон1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода1',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС1',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо1',
			text: 'по',
			style: 'position:absolute;left:139px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаДату1',
			text: 'На дату:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период1',
			text: 'Период1',
			style: 'position:absolute;left:79px;top:0px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод1',
			text: 'Период:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаНаДату1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод1',
			text: '-',
			style: 'position:absolute;left:57px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод1',
			text: '+',
			style: 'position:absolute;left:211px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:259px;height:19px;',
			height: 19,width: 259,
			tabBar:{hidden:true},
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
			name: 'ПолеВводаДатаНач2',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаКон2',
			width: 80,
			height: 19,
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода2',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС2',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо2',
			text: 'по',
			style: 'position:absolute;left:139px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаДату2',
			text: 'На дату:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период2',
			text: 'Период2',
			style: 'position:absolute;left:79px;top:0px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод2',
			text: 'Период:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаНаДату2',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод2',
			text: '-',
			style: 'position:absolute;left:57px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод2',
			text: '+',
			style: 'position:absolute;left:211px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:455px;top:121px;width:24px;height:149px;',
			width: 24,
			height: 149,
			items:
			[
				{
					text:'',
				},
				{
					text:'Командная панель группировки действие перенести в измерения строк',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:700px;height:25px;',
			width: 700,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});