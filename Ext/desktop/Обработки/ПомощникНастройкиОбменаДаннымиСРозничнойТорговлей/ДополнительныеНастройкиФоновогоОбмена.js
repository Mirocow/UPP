﻿Ext.require(['Данные.Обработки.ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей'], function () 
{
	Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей.ДополнительныеНастройкиФоновогоОбмена',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:494px;height:209px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Дополнительные настройки фонового обмена',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьИнформацияОФоновомОбмене',
			text: 'Сопоставление объектов в двух информационных базах будет выполнено в фоновом режиме. При этом в каждый пакет данных, передаваемый при обмене данными, будет добавляться дополнительная информация о соответствии объектов',
			style: 'position:absolute;left:8px;top:8px;width:478px;height:64px;',
		},
		{
			xtype: 'button',
			name: 'ВыполнитьПодсчетОбъектовДляКоторыхНужноСопоставление',
			text: 'Подсчитать',
			style: 'position:absolute;left:328px;top:157px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоОбъектовДляСопоставления',
			text: 'Количество объектов для сопоставления: ???',
			style: 'position:absolute;left:8px;top:157px;width:315px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДополняемыхОбъектов',
			text: 'Дополнять пакет до фиксированного количества объектов:',
			style: 'position:absolute;left:8px;top:133px;width:315px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоОбъектовДляФоновогоОбмена',
			style: 'position:absolute;left:328px;top:133px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Добавлять фиксированное количество объектов для сопоставление при каждом обмене',
			style: 'position:absolute;left:8px;top:77px;width:478px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Дополнять пакет обмена до фиксированного числа объектов',
			style: 'position:absolute;left:8px;top:101px;width:478px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:184px;width:494px;height:25px;',
			width: 494,
			height: 25,
			dock: 'bottom',
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
					text:'Отмена',
				},
			]
		},
	]
	});
});