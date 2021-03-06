﻿Ext.require(['Данные.Отчеты.СправкаРасчетНормированияРасходов'], function () 
{
	Ext.define('Отчеты.СправкаРасчетНормированияРасходов.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:259px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:234px;width:413px;height:25px;',
			width: 413,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:399px;height:221px;',
			height: 221,width: 399,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:30px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 306,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:30px;width:306px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетНормированияРасходов.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетНормированияРасходов.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетНормированияРасходов.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетНормированияРасходов.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Выводить данные',
			style: 'position:absolute;left:6px;top:54px;width:384px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:75px;width:384px;height:126px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период:',
			style: 'position:absolute;left:17px;top:36px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			width: 126,
			height: 19,
			style: 'position:absolute;left:93px;top:36px;width:126px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});