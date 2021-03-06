﻿Ext.require(['Данные.Отчеты.ОборотыПоСтатьямБюджетов'], function () 
{
	Ext.define('Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:637px;height:418px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:637px;height:25px;',
			width: 637,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:81px;width:621px;height:49px;',
			height: 49,width: 621,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиЦФО',
			width: 349,
			height: 20,
			style: 'position:absolute;left:272px;top:0px;width:349px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПроект',
			width: 349,
			height: 20,
			style: 'position:absolute;left:272px;top:24px;width:349px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект',
			style: 'position:absolute;left:0px;top:24px;width:88px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:90px;top:24px;width:180px;height:20px;',
			width: 180,
			height: 20,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:90px;top:0px;width:180px;height:19px;',
			width: 180,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Сценарий.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СтатьяБаланса.Представление',
			width: 137,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:492px;top:57px;width:137px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Статья баланса:',
			style: 'position:absolute;left:338px;top:57px;width:153px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:338px;top:33px;width:56px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:396px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:494px;top:33px;width:15px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:511px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:609px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидДанныхОтчета.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Вид данных:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});