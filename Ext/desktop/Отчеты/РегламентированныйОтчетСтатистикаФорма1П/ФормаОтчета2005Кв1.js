﻿Ext.require(['Данные.Отчеты.РегламентированныйОтчетСтатистикаФорма1П'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФорма1П.ФормаОтчета2005Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:429px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Форма № 1-предприятие',
	
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
				{
					text:'Очистить',
				},
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:61px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
				},
				{
				},
				{
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел4_6',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел4_6',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:342px;top:265px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:342px;top:265px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:115px;top:241px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись45',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:342px;top:265px;width:136px;height:19px;text-align:left;',
		},
					]
				},
				{
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел8',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел8',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел10',
			text: '999 из 999',
			style: 'position:absolute;left:288px;top:241px;width:64px;height:19px;text-align:center;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел9',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел9',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел10',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел10',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел10',
			text: '',
			style: 'position:absolute;left:265px;top:241px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел10',
			text: '',
			style: 'position:absolute;left:354px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел10',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел10',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел10',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
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
			style: 'position:absolute;left:8px;top:33px;width:654px;height:28px;',
			height: 28,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаСдачи',
			width: 80,
			height: 19,
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:168px;top:0px;width:116px;height:19px;',
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
			style: 'position:absolute;left:299px;top:0px;width:49px;height:19px;',
			width: 49,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:371px;width:654px;height:24px;',
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
					Ext.require(['Отчеты.РегламентированныйОтчетСтатистикаФорма1П.ФормаОтчета2005Кв1События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетСтатистикаФорма1П.ФормаОтчета2005Кв1События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетСтатистикаФорма1П.ФормаОтчета2005Кв1События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетСтатистикаФорма1П.ФормаОтчета2005Кв1События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
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
			style: 'position:absolute;left:0px;top:404px;width:670px;height:25px;',
			width: 670,
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