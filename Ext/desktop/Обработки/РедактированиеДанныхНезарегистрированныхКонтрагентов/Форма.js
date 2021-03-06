﻿Ext.require(['Данные.Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов'], function () 
{
	Ext.define('Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:548px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регистрация данных нового клиента',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			width: 548,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:118px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеКонтрагента',
			width: 412,
			height: 19,
			style: 'position:absolute;left:128px;top:33px;width:412px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЮрФизЛицо.Представление',
			width: 144,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:128px;top:58px;width:144px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Юр/Физлицо:',
			style: 'position:absolute;left:8px;top:58px;width:118px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОсновнойВидДеятельностиКонтрагента.Представление',
			width: 412,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:128px;top:129px;width:412px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Осн.вид деятельности:',
			style: 'position:absolute;left:8px;top:129px;width:118px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеКонтрагентаПолное',
			width: 412,
			height: 19,
			style: 'position:absolute;left:128px;top:106px;width:412px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Наименование полное:',
			style: 'position:absolute;left:8px;top:106px;width:118px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Покупатель',
			style: 'position:absolute;left:279px;top:58px;width:82px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поставщик',
			style: 'position:absolute;left:371px;top:58px;width:81px;height:16px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:154px;width:532px;height:183px;',
			height: 183,width: 532,
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительноеОписание',
			width: 435,
			height: 19,
			style: 'position:absolute;left:89px;top:138px;width:435px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Доп. описание:',
			style: 'position:absolute;left:6px;top:138px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидТелефонаКонтрагента.Представление',
			width: 94,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:60px;top:10px;width:94px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код:',
			style: 'position:absolute;left:162px;top:10px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодГородаТелефонаКонтрагента',
			width: 39,
			height: 19,
			style: 'position:absolute;left:204px;top:10px;width:39px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Номер:',
			style: 'position:absolute;left:248px;top:10px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерТелефонаКонтрагента',
			width: 80,
			height: 19,
			style: 'position:absolute;left:293px;top:10px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Доб.:',
			style: 'position:absolute;left:379px;top:10px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДобавочныйНомерТелефонаКонтрагента',
			width: 42,
			height: 19,
			style: 'position:absolute;left:419px;top:10px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Адрес:',
			style: 'position:absolute;left:7px;top:38px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидАдресаКонтрагента.Представление',
			width: 94,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:60px;top:38px;width:94px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Город:',
			style: 'position:absolute;left:162px;top:38px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГородКонтрагента',
			width: 320,
			height: 19,
			style: 'position:absolute;left:204px;top:38px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Улица:',
			style: 'position:absolute;left:162px;top:62px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УлицаКонтрагента',
			width: 320,
			height: 19,
			style: 'position:absolute;left:204px;top:62px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Дом:',
			style: 'position:absolute;left:162px;top:86px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДомКонтрагента',
			width: 38,
			height: 19,
			style: 'position:absolute;left:204px;top:86px;width:38px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Корпус:',
			style: 'position:absolute;left:248px;top:86px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КорпусКонтрагента',
			width: 39,
			height: 19,
			style: 'position:absolute;left:293px;top:86px;width:39px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Е-mail:',
			style: 'position:absolute;left:7px;top:112px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидЭлектроннойПочтыКонтрагента.Представление',
			width: 94,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:60px;top:112px;width:94px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыКонтрагента',
			width: 320,
			height: 19,
			style: 'position:absolute;left:204px;top:112px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Адрес:',
			style: 'position:absolute;left:162px;top:112px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Телефон:',
			style: 'position:absolute;left:6px;top:10px;width:53px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Фамилия И.О.:',
			style: 'position:absolute;left:12px;top:11px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОКонтактногоЛица',
			width: 401,
			height: 19,
			style: 'position:absolute;left:123px;top:34px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Телефон:',
			style: 'position:absolute;left:70px;top:90px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидТелефонаКонтактногоЛица.Представление',
			width: 94,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:123px;top:90px;width:94px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Код:',
			style: 'position:absolute;left:225px;top:90px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодГородаТелефонаКонтактногоЛица',
			width: 42,
			height: 19,
			style: 'position:absolute;left:264px;top:90px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Номер:',
			style: 'position:absolute;left:311px;top:90px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерТелефонаКонтактногоЛица',
			width: 80,
			height: 19,
			style: 'position:absolute;left:357px;top:90px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Доб.:',
			style: 'position:absolute;left:442px;top:90px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДобавочныйНомерТелефонаКонтактногоЛица',
			width: 42,
			height: 19,
			style: 'position:absolute;left:482px;top:90px;width:42px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидЭлектроннойПочтыКонтактногоЛица.Представление',
			width: 94,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:123px;top:115px;width:94px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Адрес:',
			style: 'position:absolute;left:225px;top:115px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыКонтактногоЛица',
			width: 132,
			height: 19,
			style: 'position:absolute;left:264px;top:115px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Е-mail:',
			style: 'position:absolute;left:70px;top:115px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьКонтактногоЛица',
			width: 401,
			height: 19,
			style: 'position:absolute;left:123px;top:58px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Должность:',
			style: 'position:absolute;left:12px;top:58px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяКонтактногоЛица',
			width: 121,
			height: 19,
			style: 'position:absolute;left:273px;top:10px;width:121px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчествоКонтактногоЛица',
			width: 125,
			height: 19,
			style: 'position:absolute;left:399px;top:10px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Представление:',
			style: 'position:absolute;left:12px;top:34px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФамилияКонтактногоЛица',
			width: 145,
			height: 19,
			style: 'position:absolute;left:123px;top:10px;width:145px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:548px;height:25px;',
			width: 548,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Зарегистрировать',
				},
				{
					text:'Зарегистрировать и открыть',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись63',
			text: 'ОКОПФ:',
			style: 'position:absolute;left:8px;top:82px;width:118px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-clear-trigger',
			name: 'ОКОПФ.Представление',
			width: 144,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:128px;top:82px;width:144px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'ИНН:',
			style: 'position:absolute;left:279px;top:82px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:313px;top:82px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:425px;top:82px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 62,
			height: 19,
			style: 'position:absolute;left:461px;top:82px;width:62px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаГенарацииКПП',
			text: '',
			style: 'position:absolute;left:399px;top:82px;width:20px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:548px;height:25px;',
			width: 548,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Зарегистрировать',
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