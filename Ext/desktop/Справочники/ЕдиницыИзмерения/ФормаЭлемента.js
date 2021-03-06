﻿Ext.require(['Данные.Справочники.ЕдиницыИзмерения'], function () 
{
	Ext.define('Справочники.ЕдиницыИзмерения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:250px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Единицы измерения',
	
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
			style: 'position:absolute;left:340px;top:79px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:382px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:79px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 220,
			height: 19,
			style: 'position:absolute;left:118px;top:79px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:33px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Владелец',
			width: 344,
			height: 19,
			style: 'position:absolute;left:118px;top:33px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаПоКлассификатору',
			text: 'По классификатору:',
			style: 'position:absolute;left:8px;top:56px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаПоКлассификатору.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:118px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ЕдиницыИзмерения.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ЕдиницыИзмерения.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ЕдиницыИзмерения.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ЕдиницыИзмерения.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВес',
			text: 'Вес:',
			style: 'position:absolute;left:8px;top:102px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Вес',
			style: 'position:absolute;left:118px;top:102px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициент',
			text: 'Содержит:',
			style: 'position:absolute;left:8px;top:148px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Коэффициент',
			style: 'position:absolute;left:118px;top:148px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			width: 470,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОбъем',
			text: 'Объем:',
			style: 'position:absolute;left:8px;top:125px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Объем',
			style: 'position:absolute;left:118px;top:125px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПорогОкругления',
			text: 'Округлять с:',
			style: 'position:absolute;left:8px;top:171px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПорогОкругления',
			style: 'position:absolute;left:118px;top:171px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При округлении предупреждать о нецелых местах',
			style: 'position:absolute;left:8px;top:198px;width:438px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОбОкруглении',
			text: 'НадписьИнформацияОбОкруглении',
			style: 'position:absolute;left:210px;top:171px;width:236px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:225px;width:470px;height:25px;',
			width: 470,
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