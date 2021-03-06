﻿Ext.require(['Данные.Обработки.СтруктураЗависимостейОборотов'], function () 
{
	Ext.define('Обработки.СтруктураЗависимостейОборотов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:519px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Структура зависимостей оборотов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:519px;height:25px;',
			width: 519,
			height: 25,
			items:
			[
			]
		},
		{
			id: 'ТабДеревоЗависимостей',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:503px;height:320px;',
			height: 320,width: 503,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтруктураЗависимостейОборотов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТабДеревоЗависимостей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СтруктураЗависимостейОборотов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СтруктураЗависимостейОборотов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Сценарий.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.СтруктураЗависимостейОборотов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.СтруктураЗависимостейОборотов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.СтруктураЗависимостейОборотов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.СтруктураЗависимостейОборотов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'На дату:',
			style: 'position:absolute;left:330px;top:33px;width:48px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 132,
			height: 19,
			style: 'position:absolute;left:379px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:503px;height:24px;',
			width: 503,
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
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:519px;height:25px;',
			width: 519,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
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