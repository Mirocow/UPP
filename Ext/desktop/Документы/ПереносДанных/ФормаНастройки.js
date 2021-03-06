﻿Ext.require(['Данные.Документы.ПереносДанных'], function () 
{
	Ext.define('Документы.ПереносДанных.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:365px;height:365px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка состава регистров',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:349px;height:324px;',
			height: 324,width: 349,
			items:
			[
				{
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			width: 335,
			height: 24,
			items:
			[
				{
					text:'Отметить все регистры',
				},
				{
					text:'Снять отметку со всех регистров',
				},
				{
					text:'Инвертировать отметки',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			width: 335,
			height: 24,
			items:
			[
				{
					text:'Отметить все регистры',
				},
				{
					text:'Снять отметку со всех регистров',
				},
				{
					text:'Инвертировать отметки',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			width: 335,
			height: 24,
			items:
			[
				{
					text:'Отметить все регистры',
				},
				{
					text:'Снять отметку со всех регистров',
				},
				{
					text:'Инвертировать отметки',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:340px;width:365px;height:25px;',
			width: 365,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
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