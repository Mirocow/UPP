﻿Ext.require(['Данные.Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций'], function () 
{
	Ext.define('Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:477px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ввод сведений о плановых удержаниях сотрудников организации',
	
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
			style: 'position:absolute;left:8px;top:33px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:132px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:306px;top:33px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:392px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:425px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 518,
			height: 19,
			style: 'position:absolute;left:94px;top:425px;width:518px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:240px;width:604px;height:24px;',
			width: 604,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'По сотруднику',
				},
			]
		},
		{
			id: 'Удержания',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:264px;width:604px;height:154px;',
			height: 154,width: 604,
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
					width:'120',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Удержание',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Действие',
					width:'64',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Период с',
					width:'66',
					dataIndex:'ДатаДействия',
					flex:1,
				},
				{
					text:'...по',
					width:'66',
					dataIndex:'ДатаДействияКонец',
					flex:1,
				},
				{
					text:'Показатели для расчета удержаний',
					width:'250',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Показатель 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Показатель 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Показатель 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Показатель 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Показатель 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Основание',
					width:'120',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидРасчета',
					},
					{
						name:'Действие',
					},
					{
						name:'ДатаДействия',
					},
					{
						name:'ДатаДействияКонец',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'ДокументОснование',
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
						var грид = Ext.getCmp('Удержания');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			width: 620,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:306px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:392px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:604px;height:93px;',
			height: 93,width: 604,
			columns:
			[
				{
					text:'Сотрудник',
					width:'220',
					dataIndex:'Физлицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Физлицо',
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
						Ext.require(['Справочники.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:101px;width:604px;height:24px;',
			width: 604,
			height: 24,
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Сотрудники',
			style: 'position:absolute;left:8px;top:85px;width:604px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Удержания',
			style: 'position:absolute;left:8px;top:224px;width:604px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:452px;width:620px;height:25px;',
			width: 620,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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