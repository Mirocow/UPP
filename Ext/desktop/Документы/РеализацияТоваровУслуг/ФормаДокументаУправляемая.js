﻿Ext.require(['Данные.Документы.РеализацияТоваровУслуг'], function () 
{
	Ext.define('Документы.РеализацияТоваровУслуг.ФормаДокументаУправляемая',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:0px;height:0px;',
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
		],
	}],
	dockedItems:
	[
	]
	});
});