﻿Ext.require(['Данные.Справочники.НормативыОбслуживанияОС'], function () 
{
	Ext.define('Справочники.НормативыОбслуживанияОС.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:109px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Группа Нормативы обслуживания ОС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:314px;top:33px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:352px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 213,
			height: 19,
			style: 'position:absolute;left:93px;top:33px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:57px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель.Представление',
			width: 299,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:57px;width:299px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НормативыОбслуживанияОС.ФормаГруппыСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НормативыОбслуживанияОС.ФормаГруппыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НормативыОбслуживанияОС.ФормаГруппыСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НормативыОбслуживанияОС.ФормаГруппыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			width: 400,
			height: 25,
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:400px;height:25px;',
			width: 400,
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