﻿Ext.require(['Данные.Отчеты.РегламентированныйОтчетКосвенныеНалогиТамСоюз'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетКосвенныеНалогиТамСоюз.ФормаОтчета2010Кв3',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:488px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Декларация по косвенным налогам при ввозе товаров из государств - членов таможенного союза',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			width: 670,
			height: 25,
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Расширить поле бланка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:584px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:74px;width:654px;height:48px;',
			height: 48,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
			width: 32,
			height: 19,
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаСдачи',
			width: 80,
			height: 19,
			style: 'position:absolute;left:82px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:170px;top:24px;width:246px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:423px;top:24px;width:116px;height:19px;',
			width: 116,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:554px;top:24px;width:49px;height:19px;',
			width: 49,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:433px;width:654px;height:24px;',
			height: 24,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:5px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 391,
			height: 19,
			style: 'position:absolute;left:263px;top:5px;width:391px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Статус.Представление',
			width: 119,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:47px;top:5px;width:119px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетКосвенныеНалогиТамСоюз.ФормаОтчета2010Кв3События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетКосвенныеНалогиТамСоюз.ФормаОтчета2010Кв3События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетКосвенныеНалогиТамСоюз.ФормаОтчета2010Кв3События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетКосвенныеНалогиТамСоюз.ФормаОтчета2010Кв3События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:122px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
				},
				{
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись54',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:338px;top:238px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:238px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:238px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел2',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел2',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел2',
			text: '',
			style: 'position:absolute;left:265px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел2',
			text: '',
			style: 'position:absolute;left:354px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел2',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'СобратьДанные',
			text: 'Собрать данные из Приложений к декларации',
			style: 'position:absolute;left:11px;top:238px;width:252px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_Прил1',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:238px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_Прил1',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:238px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел2_Прил1',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел2_Прил1',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел2_Прил1',
			text: '',
			style: 'position:absolute;left:265px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел2_Прил1',
			text: '',
			style: 'position:absolute;left:354px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел2_Прил1',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись54',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:338px;top:238px;width:136px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:654px;height:37px;',
			height: 37,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:35px;',
			height: 35,width: 654,
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:463px;width:670px;height:25px;',
			width: 670,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печатать сразу бланк формы с двухмерным штрихкодом PDF417',
				},
				{
					text:'Показать бланк формы с двухмерным штрихкодом PDF417',
				},
				'-',
				{
					text:'Печатать сразу',
				},
				{
					text:'Показать бланк',
				},
			]
		},
	]
	});
});