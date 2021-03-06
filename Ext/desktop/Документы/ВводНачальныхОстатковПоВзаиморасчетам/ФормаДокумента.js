﻿Ext.require(['Данные.Документы.ВводНачальныхОстатковПоВзаиморасчетам'], function () 
{
	Ext.define('Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:723px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ввод начальных остатков по взаиморасчетам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:104px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:186px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 118,
			height: 19,
			style: 'position:absolute;left:206px;top:33px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:392px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 619,
			height: 19,
			style: 'position:absolute;left:96px;top:392px;width:619px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:92px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:104px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:723px;height:25px;',
			width: 723,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:723px;height:25px;',
			width: 723,
			height: 25,
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
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:104px;width:707px;height:258px;',
			height: 258,width: 707,
			items:
			[
				{
					items:
					[
		{
			id: 'ДанныеПоРасчетам',
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:30px;width:695px;height:201px;',
			height: 201,width: 695,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'150',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'150',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма в валюте взаиморасчетов',
					width:'110',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс на дату операции',
					width:'80',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
					dataIndex:'КратностьВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма (упр)',
					width:'110',
					dataIndex:'СуммаУпр',
					flex:1,
				},
				{
					text:'Сумма (регл)',
					width:'110',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Сумма (регл) с учетом переоценки',
					width:'110',
					dataIndex:'СуммаРеглСУчетомПереоценки',
					flex:1,
				},
				{
					text:'Счет расчетов ',
					width:'60',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковПоВзаиморасчетам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'ВалютаВзаиморасчетов',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'КратностьВзаиморасчетов',
					},
					{
						name:'СуммаУпр',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'СуммаРеглСУчетомПереоценки',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
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
						var грид = Ext.getCmp('ДанныеПоРасчетам');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:6px;width:695px;height:24px;',
			width: 695,
			height: 24,
			items:
			[
				'-',
				'-',
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:694px;height:24px;',
			width: 694,
			height: 24,
			items:
			[
				'-',
				'-',
			]
		},
		{
			id: 'ДанныеПоАвансам',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:694px;height:201px;',
			height: 201,width: 694,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'150',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'150',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма в валюте взаиморасчетов',
					width:'110',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс на дату операции',
					width:'80',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
					dataIndex:'КратностьВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма (упр)',
					width:'110',
					dataIndex:'СуммаУпр',
					flex:1,
				},
				{
					text:'Сумма (регл)',
					width:'110',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Сумма (регл) с учетом переоценки',
					width:'110',
					dataIndex:'СуммаРеглСУчетомПереоценки',
					flex:1,
				},
				{
					text:'Счет авансов',
					width:'60',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковПоВзаиморасчетам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'ВалютаВзаиморасчетов',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'КратностьВзаиморасчетов',
					},
					{
						name:'СуммаУпр',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'СуммаРеглСУчетомПереоценки',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
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
						var грид = Ext.getCmp('ДанныеПоАвансам');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия");
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
			id: 'ДанныеПоРезервамПоСомнительнымДолгам',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:65px;width:693px;height:167px;',
			height: 167,width: 693,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'150',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Счет расчетов',
					width:'100',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Сумма БУ',
					width:'100',
					dataIndex:'СуммаБУ',
					flex:1,
				},
				{
					text:'Сумма НУ',
					width:'100',
					dataIndex:'СуммаНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковПоВзаиморасчетам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
					{
						name:'СуммаБУ',
					},
					{
						name:'СуммаНУ',
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
						var грид = Ext.getCmp('ДанныеПоРезервамПоСомнительнымДолгам');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:41px;width:693px;height:24px;',
			width: 693,
			height: 24,
			items:
			[
				{
					text:'Заполнить по сомнительной задолженности',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:693px;height:36px;',
			height: 36,width: 693,
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
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:416px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:490px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:350px;top:33px;width:63px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать проводки',
			style: 'position:absolute;left:104px;top:81px;width:147px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:368px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 619,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:368px;width:619px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в регистрах расчетов организации',
			style: 'position:absolute;left:258px;top:81px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеВБухучете',
			text: 'Отражение в БУ:',
			style: 'position:absolute;left:8px;top:81px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в регистре взаиморасчетов по документам',
			style: 'position:absolute;left:416px;top:57px;width:299px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});