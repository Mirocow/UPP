﻿Ext.require(['Данные.Справочники.Контрагенты'], function () 
{
	Ext.define('Справочники.Контрагенты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:560px;height:454px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Контрагенты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
			width: 560,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Отчет',
				},
				'-',
				{
					text:'Файлы',
				},
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
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
					text:'Список событий',
				},
				{
					text:'Электронные письма (контрагент + контактные лица)',
				},
				{
					text:'Электронные письма (контрагент)',
				},
					]
				},
				'-',
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Написать письмо',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:61px;width:544px;height:336px;',
			height: 336,width: 544,
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Покупатель',
			style: 'position:absolute;left:363px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поставщик',
			style: 'position:absolute;left:454px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГоловнойКонтрагент',
			text: 'Головной контрагент:',
			style: 'position:absolute;left:119px;top:130px;width:117px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГоловнойКонтрагент.Представление',
			width: 298,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:238px;top:130px;width:298px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЮрФизЛицо',
			text: 'Юр. / физ. лицо:',
			style: 'position:absolute;left:6px;top:6px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЮрФизЛицо.Представление',
			width: 105,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:118px;top:6px;width:105px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:53px;width:530px;height:48px;',
			height: 48,width: 530,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодПоОКПО',
			text: 'Код по ОКПО:',
			style: 'position:absolute;left:339px;top:27px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКПО',
			width: 112,
			height: 19,
			style: 'position:absolute;left:418px;top:27px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 81,
			height: 19,
			style: 'position:absolute;left:242px;top:29px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 418,
			height: 19,
			style: 'position:absolute;left:112px;top:0px;width:418px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:112px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаГенарацииКПП',
			text: '',
			style: 'position:absolute;left:193px;top:29px;width:20px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументУдостоверяющийЛичность',
			text: 'Документ:',
			style: 'position:absolute;left:0px;top:24px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолноеФизЛицо',
			text: 'ФИО:',
			style: 'position:absolute;left:0px;top:0px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолноеФизЛицо',
			width: 418,
			height: 19,
			style: 'position:absolute;left:112px;top:0px;width:418px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:250px;top:24px;width:33px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 80,
			height: 19,
			style: 'position:absolute;left:286px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументУдостоверяющийЛичность2',
			width: 131,
			height: 19,
			style: 'position:absolute;left:112px;top:24px;width:131px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКПО1',
			text: 'Код по ОКПО:',
			style: 'position:absolute;left:372px;top:24px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКПО1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:450px;top:24px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:154px;width:530px;height:156px;',
			height: 156,width: 530,
			items:
			[
				{
					items:
					[
		{
			id: 'ВидыДеятельности',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:516px;height:106px;',
			height: 106,width: 516,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид деятельности',
					width:'120',
					dataIndex:'ВидДеятельности',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','ВидДеятельности','Ответственный',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидДеятельности',
					},
					{
						name:'Ответственный',
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
						var грид = Ext.getCmp('ВидыДеятельности');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:516px;height:24px;',
			width: 516,
			height: 24,
			items:
			[
				'-',
				{
					text:'Установить основным',
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
			name: 'Надежность',
			text: 'Надежность не указана',
			style: 'position:absolute;left:84px;top:6px;width:438px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:516px;height:124px;',
			height: 124,width: 516,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВажностьКлиента',
			text: 'Важность:',
			style: 'position:absolute;left:343px;top:31px;width:64px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтадияВзаимоотношений',
			text: 'Стадия взаимоотношений:',
			style: 'position:absolute;left:6px;top:30px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СтадияВзаимоотношений',
			text: 'Стадия взаимоотношений не указана',
			style: 'position:absolute;left:147px;top:31px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсточникИнформацииПриОбращении',
			text: 'Источник информации:',
			style: 'position:absolute;left:6px;top:6px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ABCКлассПокупателя',
			text: 'ABC-класс не указан',
			style: 'position:absolute;left:412px;top:31px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИсточникИнформации',
			text: 'Источник информации при обращении не указан',
			style: 'position:absolute;left:147px;top:6px;width:361px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'МенеджерыПокупателя',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:68px;',
			height: 68,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Менеджер покупателя',
					width:'457',
					dataIndex:'МенеджерПокупателя',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','МенеджерПокупателя',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'МенеджерПокупателя',
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
						var грид = Ext.getCmp('МенеджерыПокупателя');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			width: 502,
			height: 24,
			items:
			[
				{
					text:'Установить основным',
				},
			]
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
			name: 'НадписьНадежность',
			text: 'Надежность:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокВыполненияЗаказаПоставщиком',
			text: 'Срок выполнения заказа поставщиком (в днях):',
			style: 'position:absolute;left:6px;top:33px;width:252px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокВыполненияЗаказаПоставщиком',
			style: 'position:absolute;left:260px;top:33px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РасписаниеРаботыСтрокой',
			width: 202,
			height: 19,
			style: 'position:absolute;left:118px;top:106px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа контрагентов:',
			style: 'position:absolute;left:247px;top:30px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель.Представление',
			width: 174,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:362px;top:30px;width:174px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Входит в холдинг',
			style: 'position:absolute;left:6px;top:130px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Регион:',
			style: 'position:absolute;left:345px;top:106px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Регион.Представление',
			width: 112,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:106px;width:112px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись63',
			text: 'ОКОПФ:',
			style: 'position:absolute;left:6px;top:30px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-clear-trigger',
			name: 'ОКОПФ.Представление',
			width: 105,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:118px;top:30px;width:105px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Нерезидент',
			style: 'position:absolute;left:240px;top:6px;width:86px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Контактные лица:',
			style: 'position:absolute;left:6px;top:162px;width:530px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Адреса и телефоны:',
			style: 'position:absolute;left:6px;top:6px;width:530px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'ТелефоныКонтактногоЛица',
			text: 'Телефоны:',
			style: 'position:absolute;left:6px;top:295px;width:530px;height:15px;',
		},
		{
			id: 'КонтактнаяИнформация',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:530px;height:106px;',
			height: 106,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Вид',
					width:'145',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Представление',
					width:'172',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'89',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Тип','Вид','Представление','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Тип',
					},
					{
						name:'Вид',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('КонтактнаяИнформация');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:530px;height:24px;',
			width: 530,
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
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
					]
				},
				'-',
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
				'-',
				{
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				'-',
				{
					text:'Основная',
				},
			]
		},
		{
			id: 'КонтактныеЛицаКонтрагента',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:530px;height:87px;',
			height: 87,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Контактное лицо контрагента',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Роль ',
					width:'120',
					dataIndex:'РольКонтактногоЛица',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Наименование','Должность','РольКонтактногоЛица',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
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
					{
						name:'Должность',
					},
					{
						name:'РольКонтактногоЛица',
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
						var грид = Ext.getCmp('КонтактныеЛицаКонтрагента');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:530px;height:24px;',
			width: 530,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				'-',
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
					text:'Установить пометку удаления',
				},
				'-',
				'-',
				{
					text:'Контактные лица обновить',
				},
				'-',
				{
					text:'Установить основным',
				},
				'-',
				{
					text:'Написать письмо',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Договоры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:202px;width:530px;height:108px;',
			height: 108,width: 530,
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
					width:'64',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'156',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Ведение взаиморасчетов',
					width:'140',
					dataIndex:'ВедениеВзаиморасчетов',
					flex:1,
				},
				{
					text:'Вид договора',
					width:'110',
					dataIndex:'ВидДоговора',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Организация',
					width:'98',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Валюта взаиморасчетов',
					width:'128',
					dataIndex:'ВалютаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование','ВедениеВзаиморасчетов','ВидДоговора','Номер','Дата','Организация','ВалютаВзаиморасчетов',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВедениеВзаиморасчетов',
					},
					{
						name:'ВидДоговора',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'Организация',
					},
					{
						name:'ВалютаВзаиморасчетов',
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
						var грид = Ext.getCmp('Договоры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:178px;width:530px;height:24px;',
			width: 530,
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
					text:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
				},
				'-',
				{
					text:'Просмотр по владельцу',
				},
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
				'-',
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
					text:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
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
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Основной',
				},
			]
		},
		{
			id: 'БанковскиеСчета',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:530px;height:110px;',
			height: 110,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'66',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'264',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Банк',
					width:'230',
					dataIndex:'Банк',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование','Банк',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Банк',
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
						var грид = Ext.getCmp('БанковскиеСчета');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:530px;height:24px;',
			width: 530,
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
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Просмотр по владельцу',
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
				'-',
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
					text:'Установить пометку удаления',
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
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Основной',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРасписаниеРаботыСтрокой',
			text: 'Расписание работы:',
			style: 'position:absolute;left:6px;top:106px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Банковские счета:',
			style: 'position:absolute;left:6px;top:6px;width:530px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Договоры контрагентов:',
			style: 'position:absolute;left:6px;top:162px;width:530px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'События',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'',
					width:'29',
					dataIndex:'СостояниеСобытия',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'Важность',
					flex:1,
				},
				{
					text:'Номер',
					width:'44',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'48',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Вид события',
					width:'110',
					dataIndex:'ВидСобытия',
					flex:1,
				},
				{
					text:'Контактное лицо',
					width:'122',
					dataIndex:'КонтактноеЛицо',
					flex:1,
				},
				{
					text:'Описание события',
					width:'118',
					dataIndex:'ОписаниеСобытия',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'107',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','СостояниеСобытия','Важность','Номер','Дата','ВидСобытия','КонтактноеЛицо','ОписаниеСобытия','Ответственный',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'СостояниеСобытия',
					},
					{
						name:'Важность',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'ВидСобытия',
					},
					{
						name:'КонтактноеЛицо',
					},
					{
						name:'ОписаниеСобытия',
					},
					{
						name:'Ответственный',
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
						var грид = Ext.getCmp('События');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
			width: 530,
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
			id: 'Свойства',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'185',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'301',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','ПометкаУдаления','Свойство','Значение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('Свойства');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
			width: 530,
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
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'464',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Контрагенты").data,
					fields: ['Ссылка','Родитель.Представление','ПометкаУдаления','Принадлежность','Категория',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('Категории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
			width: 530,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
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
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ГруппаДоступаКонтрагента.Представление',
			width: 366,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:170px;top:14px;width:366px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Контрагенты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Контрагенты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись64',
			text: 'Группа доступа к контрагенту:',
			style: 'position:absolute;left:6px;top:14px;width:164px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:472px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 338,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:432px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:402px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КомментарийСтрокой',
			width: 458,
			height: 19,
			style: 'position:absolute;left:94px;top:402px;width:458px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:429px;width:560px;height:25px;',
			width: 560,
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