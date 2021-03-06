﻿Ext.require(['Данные.Документы.ЗаказПокупателя'], function () 
{
	Ext.define('Документы.ЗаказПокупателя.ФормаФормированияРеализаций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:744px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Оформление документов ""Реализация товаров и услуг""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы',
			style: 'position:absolute;left:18px;top:67px;width:138px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открывать формы документов ',
			style: 'position:absolute;left:18px;top:85px;width:180px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать документы',
			style: 'position:absolute;left:18px;top:103px;width:129px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:112px;top:125px;width:239px;height:19px;',
			width: 239,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьМакетРеализации',
			text: 'печатная форма:',
			style: 'position:absolute;left:18px;top:125px;width:91px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы',
			style: 'position:absolute;left:18px;top:250px;width:138px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открывать формы документов',
			style: 'position:absolute;left:18px;top:274px;width:180px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать документы',
			style: 'position:absolute;left:18px;top:298px;width:129px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать документы',
			style: 'position:absolute;left:18px;top:226px;width:154px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:33px;width:360px;height:167px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:205px;width:360px;height:163px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:744px;height:25px;',
			width: 744,
			height: 25,
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Показывать форму настройки при формировании документов',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Записывать документы',
			style: 'position:absolute;left:18px;top:50px;width:145px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПечататьРеализациюНаПринтер',
			text: 'печатать на:',
			style: 'position:absolute;left:112px;top:174px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПечататьСФНаПринтер',
			text: 'печатать на:',
			style: 'position:absolute;left:112px;top:342px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы',
			style: 'position:absolute;left:387px;top:244px;width:138px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открывать формы документов',
			style: 'position:absolute;left:387px;top:262px;width:180px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать документы',
			style: 'position:absolute;left:387px;top:298px;width:129px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Записывать документы',
			style: 'position:absolute;left:387px;top:226px;width:145px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:376px;top:205px;width:360px;height:163px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПечататьПКОНаПринтер',
			text: 'печатать на:',
			style: 'position:absolute;left:487px;top:342px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить флаг "Оплачено"',
			style: 'position:absolute;left:387px;top:280px;width:170px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:376px;top:33px;width:360px;height:167px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открывать документы',
			style: 'position:absolute;left:387px;top:77px;width:146px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМакетРасходныйОрдерНаТовары',
			text: 'печатная форма:',
			style: 'position:absolute;left:387px;top:125px;width:91px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:487px;top:125px;width:239px;height:19px;',
			width: 239,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПечататьРасходныйОрдерНаТоварыНаПринтер',
			text: 'печатать на:',
			style: 'position:absolute;left:487px;top:174px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать документы',
			style: 'position:absolute;left:387px;top:50px;width:160px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать документы',
			style: 'position:absolute;left:387px;top:103px;width:129px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ПоказыватьФорму',
			style: 'position:absolute;left:702px;top:322px;width:13px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидПередачи',
			text: 'Вид передачи',
			style: 'position:absolute;left:282px;top:50px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровРеализации',
			text: 'количество экземпляров:',
			style: 'position:absolute;left:112px;top:149px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭкземпляровРеализации',
			style: 'position:absolute;left:251px;top:149px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровДокументаОрдер',
			text: 'количество экземпляров:',
			style: 'position:absolute;left:487px;top:149px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭкземпляровДокументаОрдер',
			style: 'position:absolute;left:626px;top:149px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровСФ',
			text: 'количество экземпляров:',
			style: 'position:absolute;left:112px;top:319px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭкземпляровСФ',
			style: 'position:absolute;left:251px;top:319px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровПКО',
			text: 'количество экземпляров:',
			style: 'position:absolute;left:487px;top:319px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭкземпляровПКО',
			style: 'position:absolute;left:626px;top:319px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'принтер',
			style: 'position:absolute;left:220px;top:174px;width:65px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'экран',
			style: 'position:absolute;left:303px;top:174px;width:48px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'по складу',
			style: 'position:absolute;left:282px;top:67px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'по ордеру',
			style: 'position:absolute;left:282px;top:85px;width:68px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'принтер',
			style: 'position:absolute;left:220px;top:342px;width:65px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'экран',
			style: 'position:absolute;left:303px;top:342px;width:48px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'принтер',
			style: 'position:absolute;left:595px;top:174px;width:63px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'экран',
			style: 'position:absolute;left:678px;top:174px;width:48px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'принтер',
			style: 'position:absolute;left:595px;top:342px;width:65px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'экран',
			style: 'position:absolute;left:678px;top:342px;width:48px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:744px;height:25px;',
			width: 744,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать документы',
				},
			]
		},
	]
	});
});