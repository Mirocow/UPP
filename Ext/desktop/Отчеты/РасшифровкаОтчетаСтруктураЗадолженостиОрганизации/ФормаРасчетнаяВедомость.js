﻿Ext.require(['Данные.Отчеты.РасшифровкаОтчетаСтруктураЗадолженостиОрганизации'], function () 
{
	Ext.define('Отчеты.РасшифровкаОтчетаСтруктураЗадолженостиОрганизации.ФормаРасчетнаяВедомость',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:879px;height:487px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Расшифровка отчета ',
	
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