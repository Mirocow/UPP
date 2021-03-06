﻿Ext.require(['Данные.Документы.СведенияОВзносахИСтраховомСтажеСПВ1'], function () 
{
	Ext.define('Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:846px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Сведения о взносах и страховом стаже для установления трудовой пенсии (СПВ-1)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:428px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 621,
			height: 19,
			style: 'position:absolute;left:97px;top:428px;width:621px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:846px;height:25px;',
			width: 846,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принято в ПФР',
			style: 'position:absolute;left:732px;top:428px;width:106px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:830px;height:41px;',
			height: 41,width: 830,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:830px;height:35px;',
			height: 35,width: 830,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:74px;width:830px;height:130px;',
			height: 130,width: 830,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:439px;top:0px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:525px;top:0px;width:80px;height:19px;',
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
			style: 'position:absolute;left:625px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 318,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:0px;width:318px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:439px;top:24px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Исполнитель.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:525px;top:24px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Руководитель.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:48px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:218px;top:48px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ДолжностьРуководителя.Представление',
			width: 126,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:286px;top:48px;width:126px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц',
			text: 'Категория застрахованных лиц:',
			style: 'position:absolute;left:0px;top:103px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'КатегорияЗастрахованныхЛиц.Представление',
			width: 206,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:182px;top:103px;width:206px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Отчетный период:',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетныйПериод',
			width: 318,
			height: 19,
			style: 'position:absolute;left:94px;top:24px;width:318px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипСведений1',
			text: 'Тип сведений:',
			style: 'position:absolute;left:0px;top:79px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:439px;top:48px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки',
			width: 80,
			height: 19,
			style: 'position:absolute;left:525px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:97px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующие',
			style: 'position:absolute;left:182px;top:79px;width:109px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющие',
			style: 'position:absolute;left:299px;top:79px;width:89px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:204px;width:830px;height:217px;',
			height: 217,width: 830,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:830px;height:24px;',
			width: 830,
			height: 24,
			items:
			[
				{
					text:'Суммы взносов',
				},
			]
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:830px;height:177px;',
			height: 177,width: 830,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'220',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Страховой номер',
					width:'120',
					dataIndex:'СтраховойНомерПФР',
					flex:1,
				},
				{
					text:'Дата составления',
					width:'100',
					dataIndex:'ДатаСоставления',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'80',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'80',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'80',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'160',
					dataIndex:'КолонкаСтраховая',
					flex:1,
				},
				{
					text:'Начислено',
					width:'80',
					dataIndex:'НачисленоСтраховая',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'80',
					dataIndex:'УплаченоСтраховая',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'160',
					dataIndex:'КолонкаНакопительная',
					flex:1,
				},
				{
					text:'Начислено',
					width:'80',
					dataIndex:'НачисленоНакопительная',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'80',
					dataIndex:'УплаченоНакопительная',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СведенияОВзносахИСтраховомСтажеСПВ1/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'СтраховойНомерПФР',
					},
					{
						name:'ДатаСоставления',
					},
					{
						name:'Фамилия',
					},
					{
						name:'Имя',
					},
					{
						name:'Отчество',
					},
					{
						name:'КолонкаСтраховая',
					},
					{
						name:'НачисленоСтраховая',
					},
					{
						name:'УплаченоСтраховая',
					},
					{
						name:'КолонкаНакопительная',
					},
					{
						name:'НачисленоНакопительная',
					},
					{
						name:'УплаченоНакопительная',
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
						var грид = Ext.getCmp('РаботникиОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Застрахованные лица',
			style: 'position:absolute;left:0px;top:0px;width:830px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			style: 'position:absolute;left:0px;top:455px;width:846px;height:25px;',
			width: 846,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Программой CheckXML',
				},
				{
					text:'Программой CheckUFA',
				},
			]
		},
	]
	});
});