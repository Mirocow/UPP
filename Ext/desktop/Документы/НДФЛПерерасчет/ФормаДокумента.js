﻿Ext.require(['Данные.Документы.НДФЛПерерасчет'], function () 
{
	Ext.define('Документы.НДФЛПерерасчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:697px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Перерасчет НДФЛ',
	
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
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НДФЛПерерасчет.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НДФЛПерерасчет.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НДФЛПерерасчет.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НДФЛПерерасчет.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Перерасчет за:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:324px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 593,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:324px;width:593px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НДФЛПерерасчет.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НДФЛПерерасчет.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НДФЛПерерасчет.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НДФЛПерерасчет.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:349px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 593,
			height: 19,
			style: 'position:absolute;left:96px;top:349px;width:593px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:9px;top:123px;width:680px;height:24px;',
			width: 680,
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
					text:'Подбор',
				},
			]
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:9px;top:147px;width:680px;height:171px;',
			height: 171,width: 680,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Физическое лицо',
					width:'120',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'100',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'По ставке 13 (30)%',
					width:'80',
					dataIndex:'НалогПоСтавке13',
					flex:1,
				},
				{
					text:'Вычет личный',
					width:'80',
					dataIndex:'ПримененныйВычетЛичный',
					flex:1,
				},
				{
					text:'Вычеты на детей',
					width:'360',
					dataIndex:'КолонкаЗаголовок',
					flex:1,
				},
				{
					text:'...на первого',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетей',
					flex:1,
				},
				{
					text:'  двойной',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейДвойной',
					flex:1,
				},
				{
					text:' второй',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейДвойнойВторой',
					flex:1,
				},
				{
					text:'...на второго',
					width:'60',
					dataIndex:'ПримененныйВычетНаВторогоРебенка',
					flex:1,
				},
				{
					text:' двойной',
					width:'60',
					dataIndex:'ПримененныйВычетНаВторогоРебенкаДвойной',
					flex:1,
				},
				{
					text:' второй',
					width:'60',
					dataIndex:'ПримененныйВычетНаВторогоРебенкаДвойнойВторой',
					flex:1,
				},
				{
					text:'... на третьего ',
					width:'60',
					dataIndex:'ПримененныйВычетНаТретьегоРебенка',
					flex:1,
				},
				{
					text:'  двойной',
					width:'60',
					dataIndex:'ПримененныйВычетНаТретьегоРебенкаДвойной',
					flex:1,
				},
				{
					text:' второй',
					width:'60',
					dataIndex:'ПримененныйВычетНаТретьегоРебенкаДвойнойВторой',
					flex:1,
				},
				{
					text:'...инвалидов',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейИнвалидов',
					flex:1,
				},
				{
					text:'  двойной',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейИнвалидовДвойной',
					flex:1,
				},
				{
					text:' второй',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейИнвалидовДвойнойВторой',
					flex:1,
				},
				{
					text:'Вычеты имущественные',
					width:'160',
					dataIndex:'КолонкаЗаголовокИмущественный',
					flex:1,
				},
				{
					text:'Расходы',
					width:'80',
					dataIndex:'ПримененныйВычетИмущественныйРасход',
					flex:1,
				},
				{
					text:'%% по кредитам',
					width:'80',
					dataIndex:'ПримененныйВычетИмущественныйПроцентыПоКредитам',
					flex:1,
				},
				{
					text:'%% при перекредитовании',
					width:'80',
					dataIndex:'ПримененныйВычетИмущественныйПроцентыПриПерекредитовании',
					flex:1,
				},
				{
					text:'По ставке 9 (30)%',
					width:'80',
					dataIndex:'НалогПоСтавке09',
					flex:1,
				},
				{
					text:'По ставке  35 (30)%',
					width:'83',
					dataIndex:'НалогПоСтавке35',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛПерерасчет/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ПодразделениеОрганизации',
					},
					{
						name:'НалогПоСтавке13',
					},
					{
						name:'ПримененныйВычетЛичный',
					},
					{
						name:'КолонкаЗаголовок',
					},
					{
						name:'ПримененныйВычетНаДетей',
					},
					{
						name:'ПримененныйВычетНаДетейДвойной',
					},
					{
						name:'ПримененныйВычетНаДетейДвойнойВторой',
					},
					{
						name:'ПримененныйВычетНаВторогоРебенка',
					},
					{
						name:'ПримененныйВычетНаВторогоРебенкаДвойной',
					},
					{
						name:'ПримененныйВычетНаВторогоРебенкаДвойнойВторой',
					},
					{
						name:'ПримененныйВычетНаТретьегоРебенка',
					},
					{
						name:'ПримененныйВычетНаТретьегоРебенкаДвойной',
					},
					{
						name:'ПримененныйВычетНаТретьегоРебенкаДвойнойВторой',
					},
					{
						name:'ПримененныйВычетНаДетейИнвалидов',
					},
					{
						name:'ПримененныйВычетНаДетейИнвалидовДвойной',
					},
					{
						name:'ПримененныйВычетНаДетейИнвалидовДвойнойВторой',
					},
					{
						name:'КолонкаЗаголовокИмущественный',
					},
					{
						name:'ПримененныйВычетИмущественныйРасход',
					},
					{
						name:'ПримененныйВычетИмущественныйПроцентыПоКредитам',
					},
					{
						name:'ПримененныйВычетИмущественныйПроцентыПриПерекредитовании',
					},
					{
						name:'НалогПоСтавке09',
					},
					{
						name:'НалогПоСтавке35',
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
						Ext.require(['Справочники.НДФЛПерерасчет.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛПерерасчет.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:697px;height:25px;',
			width: 697,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				'-',
				{
					text:'Рассчитать',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцОтражения',
			text: 'Отразить в расчетах с сотрудниками:',
			style: 'position:absolute;left:231px;top:81px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодВзаиморасчетов',
			width: 266,
			height: 19,
			style: 'position:absolute;left:423px;top:81px;width:266px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:96px;top:81px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Сотрудники организации',
			style: 'position:absolute;left:8px;top:107px;width:681px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:697px;height:25px;',
			width: 697,
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