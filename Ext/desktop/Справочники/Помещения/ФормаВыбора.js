﻿Ext.require(['Данные.Справочники.Помещения'], function () 
{
	Ext.define('Справочники.Помещения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:543px;height:347px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Помещения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:543px;height:25px;',
			width: 543,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:527px;height:307px;',
			height: 307,width: 527,
			columns:
			[
				{
					text:'Территория',
					width:'120',
					dataIndex:'Территория',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Свободно С',
					width:'100',
					dataIndex:'СвободноС',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Помещения").data,
					fields: ['Ссылка','Территория','Наименование','СвободноС',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Помещения/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Территория',
					},
					{
						name:'Наименование',
					},
					{
						name:'СвободноС',
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
						Ext.require(['Справочники.Помещения.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Помещения.ФормаВыбораСобытия");
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
	]
	});
});