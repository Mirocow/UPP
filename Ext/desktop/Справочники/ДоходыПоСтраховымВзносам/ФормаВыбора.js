﻿Ext.require(['Данные.Справочники.ДоходыПоСтраховымВзносам'], function () 
{
	Ext.define('Справочники.ДоходыПоСтраховымВзносам.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:766px;height:426px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Способы учета доходов сотрудников при исчислении страховых взносов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:750px;height:340px;',
			height: 340,width: 750,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДоходыПоСтраховымВзносам").data,
					fields: ['Ссылка','Картинка','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоходыПоСтраховымВзносам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДоходыПоСтраховымВзносам.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДоходыПоСтраховымВзносам.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:766px;height:25px;',
			width: 766,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидаДохода',
			text: 'НадписьВидаДохода',
			style: 'position:absolute;left:8px;top:379px;width:750px;height:39px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});