﻿Ext.require(['Данные.Отчеты.ПлатежныйКалендарьЗаказы'], function () 
{
	Ext.define('Отчеты.ПлатежныйКалендарьЗаказы.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:354px;height:412px;',
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:338px;height:371px;',
			height: 371,width: 338,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 96,
			height: 19,
			style: 'position:absolute;left:96px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:194px;top:6px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 96,
			height: 19,
			style: 'position:absolute;left:212px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:310px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ДетализацияПоПериодам.Представление',
			width: 137,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:193px;top:30px;width:137px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Детализация по периодам:',
			style: 'position:absolute;left:6px;top:30px;width:186px;height:19px;',
		},
		{
			id: 'ОсновныеГруппировки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:122px;width:324px;height:83px;',
			height: 83,width: 324,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Группировка',
					width:'273',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПлатежныйКалендарьЗаказы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Использование',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('ОсновныеГруппировки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:98px;width:324px;height:24px;',
			width: 324,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Основные группировки',
			style: 'position:absolute;left:6px;top:78px;width:324px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Дополнительные группировки',
			style: 'position:absolute;left:6px;top:210px;width:324px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ДополнительныеГруппировки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:254px;width:324px;height:91px;',
			height: 91,width: 324,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Группировка',
					width:'275',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПлатежныйКалендарьЗаказы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Использование',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('ДополнительныеГруппировки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:230px;width:324px;height:24px;',
			width: 324,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:324px;height:313px;',
			height: 313,width: 324,
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
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'120',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПлатежныйКалендарьЗаказы/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПлатежныйКалендарьЗаказы.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:324px;height:24px;',
			width: 324,
			height: 24,
			items:
			[
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:354px;height:25px;',
			width: 354,
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
					text:'Справка',
				},
			]
		},
	]
	});
});