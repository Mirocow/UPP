﻿Ext.require(['Данные.Обработки.ФормированиеЦен'], function () 
{
	Ext.define('Обработки.ФормированиеЦен.ФормаНастройкиКолонок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:208px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Форма настройки показа колонок',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДеревоКолонок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:9px;width:409px;height:166px;',
			height: 166,width: 409,
			columns:
			[
				{
					text:'Колонка',
					width:'225',
					dataIndex:'КолонкаСтрока',
					flex:1,
				},
				{
					text:'Положение',
					width:'168',
					dataIndex:'ПоложениеКолонки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЦен/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КолонкаСтрока',
					},
					{
						name:'ПоложениеКолонки',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ДеревоКолонок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЦен.ФормаНастройкиКолонокСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЦен.ФормаНастройкиКолонокСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:183px;width:425px;height:25px;',
			width: 425,
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