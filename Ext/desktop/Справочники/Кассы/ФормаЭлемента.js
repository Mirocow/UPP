﻿Ext.require(['Данные.Справочники.Кассы'], function () 
{
	Ext.define('Справочники.Кассы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:515px;height:189px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Кассы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:405px;top:84px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 60,
			height: 19,
			style: 'position:absolute;left:447px;top:84px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:84px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 310,
			height: 19,
			style: 'position:absolute;left:94px;top:84px;width:310px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа касс:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Родитель.Представление',
			width: 413,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:57px;width:413px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Кассы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Кассы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Кассы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Кассы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДенежныхСредств',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:108px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВалютаДенежныхСредств.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:108px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Кассы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Кассы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Кассы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Кассы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:515px;height:25px;',
			width: 515,
			height: 25,
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственноеЛицо',
			text: 'Ответственное лицо:',
			style: 'position:absolute;left:8px;top:129px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ОтветственноеЛицо.Представление',
			width: 310,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:134px;width:310px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Кассы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Кассы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Кассы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Кассы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаИстория',
			text: 'История...',
			style: 'position:absolute;left:431px;top:134px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Владелец.Представление',
			width: 413,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:33px;width:413px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Кассы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Кассы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Кассы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Кассы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:164px;width:515px;height:25px;',
			width: 515,
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