﻿Ext.require(['Данные.Отчеты.РегламентированныйОтчетАвансыПоЕСН'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетАвансыПоЕСН.ФормаОтчета2004Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:460px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Авансы по ЕСН',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
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
			style: 'position:absolute;left:8px;top:83px;width:764px;height:346px;',
			height: 346,width: 764,
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
			xtype: 'label',
			name: 'Надпись13',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:234px;top:302px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:462px;top:303px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:5px;width:232px;height:19px;',
			width: 232,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
			width: 117,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2',
			width: 397,
			height: 19,
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
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
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:5px;width:232px;height:19px;',
			width: 232,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_1',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
			width: 117,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2_1',
			width: 397,
			height: 19,
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
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
			name: 'НадписьСтатикСтраницРаздел3',
			text: '999 из 999',
			style: 'position:absolute;left:417px;top:302px;width:64px;height:19px;text-align:center;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:5px;width:232px;height:19px;',
			width: 232,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_3',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
			width: 117,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2_3',
			width: 397,
			height: 19,
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
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
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел3',
			text: 'Добавить',
			style: 'position:absolute;left:522px;top:302px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел3',
			text: 'Удалить',
			style: 'position:absolute;left:602px;top:302px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел3',
			text: '',
			style: 'position:absolute;left:391px;top:302px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел3',
			text: '',
			style: 'position:absolute;left:487px;top:302px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел3',
			text: 'Перейти',
			style: 'position:absolute;left:686px;top:302px;width:76px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:274px;width:762px;height:24px;',
			height: 24,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:5px;width:232px;height:19px;',
			width: 232,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел3',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
			width: 117,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел3',
			width: 397,
			height: 19,
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
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
			name: 'КнопкаДобавитьДопСтрокиПриложениеА',
			text: 'Добавить',
			style: 'position:absolute;left:598px;top:303px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложениеА',
			text: 'Удалить',
			style: 'position:absolute;left:682px;top:303px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:691px;top:6px;width:82px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:50px;',
			height: 50,width: 764,
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
			style: 'position:absolute;left:273px;top:0px;width:32px;height:19px;',
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
			width: 96,
			height: 19,
			style: 'position:absolute;left:116px;top:24px;width:96px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:116px;top:0px;width:96px;height:19px;',
			width: 96,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЧисленностьМ1',
			style: 'position:absolute;left:457px;top:24px;width:48px;height:19px;',
			width: 48,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЧисленностьМ2',
			style: 'position:absolute;left:582px;top:24px;width:48px;height:19px;',
			width: 48,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЧисленностьМ3',
			style: 'position:absolute;left:704px;top:24px;width:48px;height:19px;',
			width: 48,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:315px;top:0px;width:116px;height:19px;',
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
			style: 'position:absolute;left:446px;top:0px;width:49px;height:19px;',
			width: 49,
			height: 19,
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
			style: 'position:absolute;left:0px;top:435px;width:780px;height:25px;',
			width: 780,
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