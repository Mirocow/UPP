﻿Ext.require(['Данные.Обработки.КалендарьБухгалтера'], function () 
{
	Ext.define('Обработки.КалендарьБухгалтера.ФормаКалендаря',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:669px;height:571px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Календарь бухгалтера',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:669px;height:25px;',
			width: 669,
			height: 25,
			items:
			[
				{
					text:'Обновить',
				},
				'-',
				{
					text:'День',
				},
				'-',
				{
					text:'Неделя',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДляОрганизации',
			text: 'Для организации:',
			style: 'position:absolute;left:8px;top:33px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ДляОрганизации.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:110px;top:33px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КалендарьБухгалтера.ФормаКалендаряСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КалендарьБухгалтера.ФормаКалендаряСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КалендарьБухгалтера.ФормаКалендаряСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КалендарьБухгалтера.ФормаКалендаряСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:532px;top:91px;width:130px;height:19px;',
			width: 130,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:533px;top:66px;width:23px;height:15px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:573px;top:63px;width:89px;height:19px;',
			width: 89,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:63px;width:514px;height:480px;',
			height: 480,width: 514,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ТаблицаСобытийКалендаря',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:469px;',
			height: 469,width: 502,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'КартинкаОповещение',
					flex:1,
				},
				{
					text:'В срок до',
					width:'63',
					dataIndex:'Срок',
					flex:1,
				},
				{
					text:'Период',
					width:'85',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Название отчета/налога',
					width:'250',
					dataIndex:'НазваниеОтчетаИлиНалога',
					flex:1,
				},
				{
					text:'Налогоплательщик',
					width:'250',
					dataIndex:'Кто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарьБухгалтера/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КартинкаОповещение',
					},
					{
						name:'Срок',
					},
					{
						name:'Период',
					},
					{
						name:'НазваниеОтчетаИлиНалога',
					},
					{
						name:'Кто',
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
						var грид = Ext.getCmp('ТаблицаСобытийКалендаря');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КалендарьБухгалтера.ФормаКалендаряСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КалендарьБухгалтера.ФормаКалендаряСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:295px;top:28px;width:218px;height:24px;',
			width: 218,
			height: 24,
			items:
			[
				{
					text:'Открыть',
				},
				{
					text:'Оповещение',
				},
				{
					text:'Перейти к дате',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: '  Сдача отчетности',
			style: 'position:absolute;left:522px;top:450px;width:140px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: '  Уплата налога',
			style: 'position:absolute;left:522px;top:474px;width:140px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: '  Ближайшее событие',
			style: 'position:absolute;left:522px;top:498px;width:140px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: '  Напомнить',
			style: 'position:absolute;left:522px;top:522px;width:140px;height:21px;',
		},
		{
			xtype: 'label',
			text: 'Легенда',
			style: 'position:absolute;left:522px;top:429px;width:140px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:546px;width:669px;height:25px;',
			width: 669,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
	});
});