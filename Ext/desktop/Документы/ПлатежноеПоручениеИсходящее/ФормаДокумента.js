﻿Ext.require(['Данные.Документы.ПлатежноеПоручениеИсходящее'], function () 
{
	Ext.define('Документы.ПлатежноеПоручениеИсходящее.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:485px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Платежное поручение исходящее',
	
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
			style: 'position:absolute;left:8px;top:32px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:92px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от',
			style: 'position:absolute;left:174px;top:32px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:192px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:80px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:92px;top:80px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчет',
			text: 'Банковский счет:',
			style: 'position:absolute;left:336px;top:80px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетОрганизации.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:429px;top:80px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель',
			text: 'Получатель:',
			style: 'position:absolute;left:8px;top:104px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:104px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчетПолучателя',
			text: 'Банковский счет:',
			style: 'position:absolute;left:336px;top:104px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетКонтрагента.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:429px;top:104px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа',
			text: 'Вид платежа:',
			style: 'position:absolute;left:491px;top:56px;width:71px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОчередность',
			text: 'Очередность:',
			style: 'position:absolute;left:336px;top:56px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОчередностьПлатежа',
			style: 'position:absolute;left:429px;top:56px;width:57px;height:19px;',
			width: 57,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:128px;width:642px;height:257px;',
			height: 257,width: 642,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:30px;width:627px;height:201px;',
			height: 201,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: '% НДС:',
			style: 'position:absolute;left:0px;top:48px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:72px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:',
			style: 'position:absolute;left:321px;top:0px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокументРасчеты',
			text: 'Сумма:',
			style: 'position:absolute;left:321px;top:48px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:0px;top:24px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сделка',
			width: 213,
			height: 19,
			style: 'position:absolute;left:414px;top:0px;width:213px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:77px;top:24px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДС',
			style: 'position:absolute;left:77px;top:72px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаДокументаРасчеты',
			style: 'position:absolute;left:414px;top:48px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтавкаНДС.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:48px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:120px;width:77px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредств.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:120px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья1',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:5px;width:74px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 167,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:0px;width:167px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаПодборДоговор',
			text: 'Подбор',
			style: 'position:absolute;left:249px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДокументПланированияПлатежа.Представление',
			width: 213,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:119px;width:213px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Заявка',
			text: 'Заявка:',
			style: 'position:absolute;left:321px;top:119px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			width: 220,
			height: 19,
			style: 'position:absolute;left:77px;top:95px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:95px;width:77px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявкаПрочие',
			text: 'Заявка:',
			style: 'position:absolute;left:323px;top:5px;width:65px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектПрочие',
			text: 'Проект:',
			style: 'position:absolute;left:323px;top:29px;width:72px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетовПлан',
			style: 'position:absolute;left:414px;top:143px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПлан',
			text: 'Курс заявки:',
			style: 'position:absolute;left:321px;top:143px;width:72px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПлатежаПлан',
			style: 'position:absolute;left:414px;top:167px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПлан',
			text: 'Сумма заявки:',
			style: 'position:absolute;left:321px;top:167px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурсаЗаявки',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:519px;top:143px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетов',
			text: 'USD',
			style: 'position:absolute;left:520px;top:48px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:321px;top:72px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:321px;top:96px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасчетовСКонтрагентом.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:72px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасчетовПоАвансам.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:96px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовРаботник',
			text: 'Сумма:',
			style: 'position:absolute;left:322px;top:24px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовРаботник',
			text: 'Курс:',
			style: 'position:absolute;left:178px;top:24px;width:39px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПланРаботник',
			text: 'Сумма заявки:',
			style: 'position:absolute;left:322px;top:96px;width:77px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:321px;top:24px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументРасчетовСКонтрагентом',
			width: 213,
			height: 19,
			style: 'position:absolute;left:414px;top:24px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентомНУ',
			text: 'Счет НУ:',
			style: 'position:absolute;left:324px;top:75px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт1',
			text: 'Субконто НУ Дт1:',
			style: 'position:absolute;left:324px;top:99px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт2',
			text: 'Субконто НУ Дт2:',
			style: 'position:absolute;left:324px;top:123px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт3',
			text: 'Субконто НУ Дт3:',
			style: 'position:absolute;left:324px;top:147px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокументаПодотчетник',
			text: 'Сумма:',
			style: 'position:absolute;left:327px;top:30px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявкаПодотчетник',
			text: 'Заявка:',
			style: 'position:absolute;left:327px;top:54px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПланПодотчетник',
			text: 'Курс заявки:',
			style: 'position:absolute;left:327px;top:79px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПланПодотчетник',
			text: 'Сумма платежа по заявке:',
			style: 'position:absolute;left:327px;top:102px;width:83px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПодотчетник',
			text: 'Курс:',
			style: 'position:absolute;left:164px;top:30px;width:52px;height:19px;text-align:center;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'РасшифровкаПлатежа',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:627px;height:155px;',
			height: 155,width: 627,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'130',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'89',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'80',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма платежа',
					width:'100',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'% НДС',
					width:'57',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'100',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'100',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Счет учета расчетов по авансам',
					width:'100',
					dataIndex:'СчетУчетаРасчетовПоАвансам',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'100',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'Проект',
					width:'133',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Заявка на расходование средств',
					width:'178',
					dataIndex:'ДокументПланированияПлатежа',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов по документу планирования',
					width:'100',
					dataIndex:'КурсВзаиморасчетовПлан',
					flex:1,
				},
				{
					text:'Сумма платежа по документу планирования',
					width:'100',
					dataIndex:'СуммаПлатежаПлан',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПлатежноеПоручениеИсходящее/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
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
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'СуммаПлатежа',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
					{
						name:'СчетУчетаРасчетовПоАвансам',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'Проект',
					},
					{
						name:'ДокументПланированияПлатежа',
					},
					{
						name:'КурсВзаиморасчетовПлан',
					},
					{
						name:'СуммаПлатежаПлан',
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
						var грид = Ext.getCmp('РасшифровкаПлатежа');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:296px;height:24px;',
			width: 296,
			height: 24,
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:322px;top:21px;width:305px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Расшифровка платежа',
			style: 'position:absolute;left:4px;top:0px;width:620px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПеречислениеЗаработнойПлаты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:619px;height:146px;',
			height: 146,width: 619,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Ведомость',
					width:'271',
					dataIndex:'Ведомость',
					flex:1,
				},
				{
					text:'Сумма к выплате',
					width:'139',
					dataIndex:'СуммаКВыплате',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'195',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'Заявка на расходование средств',
					width:'175',
					dataIndex:'ДокументПланированияПлатежа',
					flex:1,
				},
				{
					text:'Проект',
					width:'121',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПлатежноеПоручениеИсходящее/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Ведомость',
					},
					{
						name:'СуммаКВыплате',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'ДокументПланированияПлатежа',
					},
					{
						name:'Проект',
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
						var грид = Ext.getCmp('ПеречислениеЗаработнойПлаты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Ведомости на выплату заработной платы',
			style: 'position:absolute;left:6px;top:7px;width:619px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:23px;width:619px;height:24px;',
			width: 619,
			height: 24,
			items:
			[
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
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
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
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредствПрочие.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:5px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДокументПланированияПлатежаПрочие.Представление',
			width: 213,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:5px;width:213px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПроектПрочие',
			width: 213,
			height: 19,
			style: 'position:absolute;left:414px;top:29px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:75px;width:71px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетУчета.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:75px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт1',
			text: 'Субконто Дт1:',
			style: 'position:absolute;left:0px;top:99px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СубконтоДт1.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:99px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт2',
			text: 'Субконто Дт2:',
			style: 'position:absolute;left:0px;top:123px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СубконтоДт2.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:123px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт3',
			text: 'Субконто Дт3:',
			style: 'position:absolute;left:0px;top:147px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СубконтоДт3.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:147px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасчетовСКонтрагентомНУ.Представление',
			width: 93,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:75px;width:93px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СубконтоНУДт1.Представление',
			width: 213,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:99px;width:213px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СубконтоНУДт2.Представление',
			width: 213,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:123px;width:213px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СубконтоНУДт3.Представление',
			width: 213,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:147px;width:213px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Работник:',
			style: 'position:absolute;left:0px;top:0px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ФизЛицо.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:0px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорЗайма.Представление',
			width: 213,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:0px;width:213px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорЗайма',
			text: 'Договор займа:',
			style: 'position:absolute;left:322px;top:0px;width:92px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВалютаВзаиморасчетовРаботник.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:24px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовРаботник',
			text: 'Валюта:',
			style: 'position:absolute;left:0px;top:24px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетовРаботник',
			style: 'position:absolute;left:219px;top:24px;width:78px;height:19px;',
			width: 78,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетовРаботник',
			style: 'position:absolute;left:414px;top:24px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяРаботник',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:72px;width:75px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредствРаботник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:72px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДокументПланированияПлатежаРаботник.Представление',
			width: 213,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:48px;width:213px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявкаДоговорЗайма',
			text: 'Заявка:',
			style: 'position:absolute;left:322px;top:48px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПроектРаботник',
			width: 220,
			height: 19,
			style: 'position:absolute;left:77px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектРаботник',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:48px;width:72px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетовПланРаботник',
			style: 'position:absolute;left:414px;top:72px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПланРаботник',
			text: 'Курс заявки:',
			style: 'position:absolute;left:322px;top:72px;width:72px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПлатежаПланРаботник',
			style: 'position:absolute;left:414px;top:96px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурсаЗаявкиРаботник',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:516px;top:72px;width:111px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатья3',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:0px;width:74px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредствПеревод.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:77px;top:0px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:178px;top:24px;width:119px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчетника',
			text: 'Валюта:',
			style: 'position:absolute;left:0px;top:30px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодотчетник',
			text: 'Подотчетник:',
			style: 'position:absolute;left:0px;top:6px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументПодотчетник',
			text: 'Аванс. отчет:',
			style: 'position:absolute;left:0px;top:54px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПогашенияАванса',
			text: 'Срок аванса:',
			style: 'position:absolute;left:327px;top:6px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПодотчетник',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:103px;width:79px;height:27px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектПодотчетник',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:79px;width:79px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВалютаВзаиморасчетовПодотчетник.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:79px;top:30px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ФизЛицоПодотчетник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:79px;top:6px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'РасчетныйДокументРаботника.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:79px;top:54px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетовПодотчетник',
			style: 'position:absolute;left:221px;top:30px;width:78px;height:19px;',
			width: 78,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредствПодотчетник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:79px;top:103px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПроектПодотчетник',
			width: 220,
			height: 19,
			style: 'position:absolute;left:79px;top:79px;width:220px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПогашенияАванса',
			width: 100,
			height: 19,
			style: 'position:absolute;left:413px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаДокументаПодотчетник',
			style: 'position:absolute;left:413px;top:30px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДокументПланированияПлатежаПодотчетник.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:413px;top:54px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетовПланПодотчетник',
			style: 'position:absolute;left:413px;top:79px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПлатежаПланПодотчетник',
			style: 'position:absolute;left:413px;top:103px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурсаЗаявкиПодотчетник',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:520px;top:79px;width:107px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчетник',
			text: 'USD',
			style: 'position:absolute;left:520px;top:30px;width:40px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумент',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:83px;top:6px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:190px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:327px;top:6px;width:89px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Без разбиения',
			style: 'position:absolute;left:420px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:525px;top:6px;width:108px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НазначениеПлатежа',
			style: 'position:absolute;left:83px;top:145px;width:552px;height:55px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПлательщика',
			style: 'position:absolute;left:194px;top:20px;width:441px;height:40px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПолучателя',
			style: 'position:absolute;left:194px;top:80px;width:441px;height:40px;',
		},
		{
			xtype: 'label',
			text: 'Текст плательщика',
			style: 'position:absolute;left:3px;top:4px;width:632px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Текст получателя',
			style: 'position:absolute;left:3px;top:64px;width:632px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Текст назначения платежа',
			style: 'position:absolute;left:3px;top:125px;width:632px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьИННПлательщика',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:20px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИННПлательщика',
			width: 88,
			height: 19,
			style: 'position:absolute;left:83px;top:20px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПППлательщика',
			text: 'КПП:',
			style: 'position:absolute;left:6px;top:41px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПППлательщика',
			width: 88,
			height: 19,
			style: 'position:absolute;left:83px;top:41px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННПолучателя',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:80px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИННПолучателя',
			width: 88,
			height: 19,
			style: 'position:absolute;left:83px;top:80px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПППолучателя',
			text: 'КПП:',
			style: 'position:absolute;left:6px;top:101px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПППолучателя',
			width: 88,
			height: 19,
			style: 'position:absolute;left:83px;top:101px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьИННПлательщика',
			text: '',
			style: 'position:absolute;left:173px;top:20px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьКПППлательщика',
			text: '',
			style: 'position:absolute;left:173px;top:41px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьИННПолучателя',
			text: '',
			style: 'position:absolute;left:173px;top:80px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьКПППолучателя',
			text: '',
			style: 'position:absolute;left:173px;top:101px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'кнЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:3px;top:145px;width:77px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:7px;top:79px;width:629px;height:100px;',
			height: 100,width: 629,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПоказательДаты',
			text: 'Дата документа:',
			style: 'position:absolute;left:322px;top:54px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПоказательДаты',
			width: 100,
			height: 19,
			style: 'position:absolute;left:420px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательНомера',
			text: 'Номер документа:',
			style: 'position:absolute;left:0px;top:54px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательНомера',
			width: 177,
			height: 19,
			style: 'position:absolute;left:124px;top:54px;width:177px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательОснования',
			text: 'Основание платежа:',
			style: 'position:absolute;left:0px;top:0px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательТипа',
			text: 'Тип платежа:',
			style: 'position:absolute;left:0px;top:81px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:124px;top:27px;width:177px;height:19px;',
			width: 177,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательПериода',
			text: 'Налоговый период:',
			style: 'position:absolute;left:0px;top:27px;width:114px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:124px;top:81px;width:505px;height:19px;',
			width: 505,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:124px;top:0px;width:505px;height:19px;',
			width: 505,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательДатыТаможня',
			text: 'Дата документа:',
			style: 'position:absolute;left:322px;top:54px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательНомераТаможня',
			text: 'Номер документа:',
			style: 'position:absolute;left:0px;top:54px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательОснованияТаможня',
			text: 'Основание платежа:',
			style: 'position:absolute;left:0px;top:0px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательТипаТаможня',
			text: 'Тип платежа:',
			style: 'position:absolute;left:0px;top:81px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательПериодаТаможня',
			text: 'Код таможенного органа:',
			style: 'position:absolute;left:0px;top:27px;width:114px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательДатыПрочее',
			text: 'Дата документа:',
			style: 'position:absolute;left:322px;top:54px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательНомераПрочее',
			text: 'Номер документа:',
			style: 'position:absolute;left:0px;top:54px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательОснованияПрочее',
			text: 'Основание платежа:',
			style: 'position:absolute;left:0px;top:0px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательТипаПрочее',
			text: 'Тип платежа:',
			style: 'position:absolute;left:0px;top:81px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательПериодаПрочее',
			text: 'Период:',
			style: 'position:absolute;left:0px;top:27px;width:114px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:322px;top:27px;width:307px;height:24px;',
			height: 24,width: 307,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьГодПериодаПлатежа',
			text: 'Год периода:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГодПлатежа',
			style: 'position:absolute;left:98px;top:0px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПлатежа',
			text: 'Полугодие:',
			style: 'position:absolute;left:206px;top:0px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПериодПлатежа',
			style: 'position:absolute;left:267px;top:0px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа',
			text: 'Дата периода:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа',
			width: 100,
			height: 19,
			style: 'position:absolute;left:99px;top:0px;width:100px;height:19px;',
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
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПоказательДатыТаможня',
			width: 100,
			height: 19,
			style: 'position:absolute;left:420px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательНомераТаможня',
			width: 177,
			height: 19,
			style: 'position:absolute;left:124px;top:54px;width:177px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:124px;top:81px;width:505px;height:19px;',
			width: 505,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:124px;top:0px;width:505px;height:19px;',
			width: 505,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательПериодаТаможня',
			width: 177,
			height: 19,
			style: 'position:absolute;left:124px;top:27px;width:177px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПоказательДатыПрочее',
			width: 100,
			height: 19,
			style: 'position:absolute;left:420px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательНомераПрочее',
			width: 177,
			height: 19,
			style: 'position:absolute;left:124px;top:54px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательПериодаПрочее',
			width: 177,
			height: 19,
			style: 'position:absolute;left:124px;top:27px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательОснованияПрочее',
			width: 177,
			height: 19,
			style: 'position:absolute;left:124px;top:0px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательТипаПрочее',
			width: 177,
			height: 19,
			style: 'position:absolute;left:124px;top:81px;width:177px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКодБК',
			text: 'КБК:',
			style: 'position:absolute;left:6px;top:52px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодБК',
			width: 177,
			height: 19,
			style: 'position:absolute;left:131px;top:52px;width:177px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодОКАТО',
			text: 'Код ОКАТО:',
			style: 'position:absolute;left:329px;top:52px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодОКАТО',
			width: 140,
			height: 19,
			style: 'position:absolute;left:427px;top:52px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусСоставителя',
			text: 'Статус составителя:',
			style: 'position:absolute;left:6px;top:28px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:131px;top:28px;width:505px;height:19px;',
			width: 505,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВидПеречисленияВБюджет',
			text: 'Вид перечисления:',
			style: 'position:absolute;left:329px;top:4px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПеречисленияВБюджет.Представление',
			width: 140,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:4px;width:140px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Перечисление в бюджет',
			style: 'position:absolute;left:131px;top:4px;width:177px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			width: 658,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидПлатежа',
			width: 87,
			height: 19,
			style: 'position:absolute;left:562px;top:56px;width:87px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтразитьВ',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:32px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:56px;width:304px;height:19px;',
			height: 19,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Оплачено:',
			style: 'position:absolute;left:0px;top:0px;width:85px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОплаты',
			width: 80,
			height: 19,
			style: 'position:absolute;left:84px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЧастичнаяОплата',
			text: 'Частичная оплата. Остаток 5 000 000 руб',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:19px;',
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'опер. учете',
			style: 'position:absolute;left:429px;top:32px;width:74px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:506px;top:32px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:577px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:409px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Подразделение.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:409px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:409px;width:88px;height:19px;',
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
			style: 'position:absolute;left:429px;top:409px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПлатежноеПоручениеИсходящее.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:8px;top:387px;width:641px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 557,
			height: 19,
			style: 'position:absolute;left:92px;top:433px;width:557px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:433px;width:80px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:460px;width:658px;height:25px;',
			width: 658,
			height: 25,
			dock: 'bottom',
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
					text:'ОК',
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