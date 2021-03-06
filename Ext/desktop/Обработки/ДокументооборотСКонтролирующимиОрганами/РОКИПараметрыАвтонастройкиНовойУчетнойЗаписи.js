﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИПараметрыАвтонастройкиНовойУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:456px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры организации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Укажите организацию, для которой необходимо настроить параметры учетной записи налогоплательщика, или задайте ее ИНН/КПП.\r\nЭти параметры необходимы для обращения к серверу Интернет, на котором хранятся настройки.',
			style: 'position:absolute;left:8px;top:103px;width:440px;height:57px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:95px;width:440px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 425,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:23px;top:200px;width:425px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИПараметрыАвтонастройкиНовойУчетнойЗаписиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИПараметрыАвтонастройкиНовойУчетнойЗаписиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИПараметрыАвтонастройкиНовойУчетнойЗаписиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИПараметрыАвтонастройкиНовойУчетнойЗаписиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:25px;top:251px;width:171px;height:44px;',
			height: 44,width: 171,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:1px;width:69px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'КПП:',
			style: 'position:absolute;left:0px;top:28px;width:69px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 97,
			height: 19,
			style: 'position:absolute;left:74px;top:0px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 97,
			height: 19,
			style: 'position:absolute;left:74px;top:25px;width:97px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Перед настройкой необходимо установить в системе личные сертификаты при помощи сервисов криптопровайдера.',
			style: 'position:absolute;left:8px;top:60px;width:440px;height:32px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:168px;width:440px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:58px;width:440px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Возможность автоматической настройки параметров учетной записи доступна только абонентам специализированного оператора связи - компании "Такском".',
			style: 'position:absolute;left:71px;top:12px;width:377px;height:40px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:8px;top:177px;width:93px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Параметры:',
			style: 'position:absolute;left:8px;top:227px;width:93px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:456px;height:25px;',
			width: 456,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Продолжить',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});