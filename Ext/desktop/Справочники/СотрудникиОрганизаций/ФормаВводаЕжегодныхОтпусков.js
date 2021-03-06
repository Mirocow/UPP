﻿Ext.require(['Данные.Справочники.СотрудникиОрганизаций'], function () 
{
	Ext.define('Справочники.СотрудникиОрганизаций.ФормаВводаЕжегодныхОтпусков',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:266px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ежегодные отпуска сотрудника',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:7px;width:384px;height:24px;',
			width: 384,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			id: 'ЕжегодныеОтпуска',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:31px;width:384px;height:202px;',
			height: 202,width: 384,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'140',
					dataIndex:'ВидЕжегодногоОтпуска',
					flex:1,
				},
				{
					text:'Количество дней отпуска в год',
					width:'170',
					dataIndex:'КоличествоДнейОтпускаВГод',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','ВидЕжегодногоОтпуска','КоличествоДнейОтпускаВГод',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидЕжегодногоОтпуска',
					},
					{
						name:'КоличествоДнейОтпускаВГод',
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
						var грид = Ext.getCmp('ЕжегодныеОтпуска');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаВводаЕжегодныхОтпусковСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаВводаЕжегодныхОтпусковСобытия");
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
			style: 'position:absolute;left:0px;top:241px;width:400px;height:25px;',
			width: 400,
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
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});