﻿Ext.require(['Данные.Отчеты.РегламентированныйОтчетРасчетПлатыОкрСредаСвод'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетРасчетПлатыОкрСредаСвод.ФормаОтчета2006кв3',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:447px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Расчет платы за негативное воздействие на окружающую среду (сводная форма)',
	
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
					text:'Заполнить',
				},
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:81px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРасчет',
			text: 'Добавить',
			style: 'position:absolute;left:396px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРасчет',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРасчет',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРасчет',
			text: '',
			style: 'position:absolute;left:370px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРасчет',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел1',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел1',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1',
			text: '',
			style: 'position:absolute;left:266px;top:241px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1',
			text: '',
			style: 'position:absolute;left:355px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:241px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:327px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:327px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел2',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел2',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел2',
			text: '',
			style: 'position:absolute;left:266px;top:241px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел2',
			text: '',
			style: 'position:absolute;left:355px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел2',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:327px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:327px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:327px;top:265px;width:148px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел3',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел3',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел3',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел3',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел3',
			text: '',
			style: 'position:absolute;left:266px;top:241px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел3',
			text: '',
			style: 'position:absolute;left:355px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел3',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:241px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРасчет',
			text: '999 из 999',
			style: 'position:absolute;left:288px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел4',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел4',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел4',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел4',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел4',
			text: '',
			style: 'position:absolute;left:266px;top:241px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел4',
			text: '',
			style: 'position:absolute;left:355px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел4',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:241px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:241px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:241px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:241px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:241px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел5',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел5',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел5',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел5',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:241px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел5',
			text: '',
			style: 'position:absolute;left:266px;top:241px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел5',
			text: '',
			style: 'position:absolute;left:355px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел5',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:241px;width:80px;height:19px;',
		},
					]
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
			style: 'position:absolute;left:8px;top:33px;width:654px;height:48px;',
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
			style: 'position:absolute;left:228px;top:0px;width:32px;height:19px;',
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
			style: 'position:absolute;left:82px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:170px;top:27px;width:116px;height:19px;',
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
			style: 'position:absolute;left:301px;top:27px;width:49px;height:19px;',
			width: 49,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:362px;top:27px;width:247px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:391px;width:654px;height:25px;',
			height: 25,width: 654,
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
			style: 'position:absolute;left:183px;top:6px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 391,
			height: 19,
			style: 'position:absolute;left:263px;top:6px;width:391px;height:19px;',
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
			style: 'position:absolute;left:47px;top:6px;width:119px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетРасчетПлатыОкрСредаСвод.ФормаОтчета2006кв3События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетРасчетПлатыОкрСредаСвод.ФормаОтчета2006кв3События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетРасчетПлатыОкрСредаСвод.ФормаОтчета2006кв3События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетРасчетПлатыОкрСредаСвод.ФормаОтчета2006кв3События");
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
			style: 'position:absolute;left:0px;top:422px;width:670px;height:25px;',
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