﻿Ext.require(['Данные.Отчеты.ОборотыМеждуСубконтоНалоговый'], function () 
{
	Ext.define('Отчеты.ОборотыМеждуСубконтоНалоговый.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет Обороты между субконто',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:20px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 84,
			height: 19,
			style: 'position:absolute;left:80px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:168px;top:33px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 84,
			height: 19,
			style: 'position:absolute;left:200px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:316px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:392px;top:33px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			width: 716,
			height: 25,
			items:
			[
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Възстанови стойностите...',
				},
				{
					text:'Съхрани стойностите...',
				},
				'-',
				{
					text:'Затвори',
				},
			]
		},
		{
			xtype: 'button',
			name: 'НастройкаПериода',
			text: '...',
			style: 'position:absolute;left:288px;top:33px;width:24px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидУчета',
			text: 'Вид учета:',
			style: 'position:absolute;left:576px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидУчета.Представление',
			width: 72,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:636px;top:33px;width:72px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});