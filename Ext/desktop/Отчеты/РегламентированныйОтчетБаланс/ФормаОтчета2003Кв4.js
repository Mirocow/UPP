﻿Ext.require(['Данные.Отчеты.РегламентированныйОтчетБаланс'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетБаланс.ФормаОтчета2003Кв4',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:487px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Баланс',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			width: 716,
			height: 25,
			items:
			[
				{
					text:'Проверить в Интернете',
				},
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Подготовить к отправке и подписать',
				},
				{
					text:'Подготовить к отправке',
				},
				'-',
				{
					text:'Показать отправки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:462px;width:716px;height:25px;',
			width: 716,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:630px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:74px;width:700px;height:52px;',
			height: 52,width: 700,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
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
			style: 'position:absolute;left:170px;top:24px;width:116px;height:19px;',
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
			style: 'position:absolute;left:301px;top:24px;width:49px;height:19px;',
			width: 49,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:124px;width:700px;height:304px;',
			height: 304,width: 700,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:261px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиБаланс',
			style: 'position:absolute;left:226px;top:261px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийБаланс',
			width: 348,
			height: 19,
			style: 'position:absolute;left:352px;top:261px;width:348px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиБаланс',
			text: 'Добавить',
			style: 'position:absolute;left:134px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиБаланс',
			text: 'Удалить',
			style: 'position:absolute;left:220px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтроки',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:0px;top:285px;width:132px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:432px;width:700px;height:22px;',
			height: 22,width: 700,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:3px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 437,
			height: 19,
			style: 'position:absolute;left:263px;top:3px;width:437px;height:19px;',
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
			style: 'position:absolute;left:47px;top:3px;width:119px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетБаланс.ФормаОтчета2003Кв4События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетБаланс.ФормаОтчета2003Кв4События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетБаланс.ФормаОтчета2003Кв4События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетБаланс.ФормаОтчета2003Кв4События");
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
			style: 'position:absolute;left:8px;top:33px;width:700px;height:37px;',
			height: 37,width: 700,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:2px;top:0px;width:698px;height:35px;',
			height: 35,width: 698,
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
	]
	});
});