﻿Ext.require(['Данные.Отчеты.ПланыПроизводства'], function () 
{
	Ext.define('Отчеты.ПланыПроизводства.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
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
			style: 'position:absolute;left:0px;top:0px;width:508px;height:25px;',
			width: 508,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:513px;top:3px;width:259px;height:19px;',
			height: 19,width: 259,
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
			name: 'ПолеВводаДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:139px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаДату',
			text: 'На дату:',
			style: 'position:absolute;left:122px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период',
			text: 'Период',
			style: 'position:absolute;left:107px;top:0px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:28px;top:0px;width:55px;height:19px;',
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
			name: 'ПолеВводаНаДату',
			width: 80,
			height: 19,
			style: 'position:absolute;left:179px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод',
			text: '-',
			style: 'position:absolute;left:85px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод',
			text: '+',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:508px;top:0px;width:272px;height:25px;',
			width: 272,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПолеВводаТипЦен.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ПланыПроизводства.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПланыПроизводства.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ПланыПроизводства.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПланыПроизводства.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИспользоватьЦены',
			text: 'Использовать цены:',
			style: 'position:absolute;left:8px;top:33px;width:110px;height:19px;text-align:center;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});