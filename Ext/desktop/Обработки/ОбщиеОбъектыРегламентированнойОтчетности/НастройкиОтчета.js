﻿Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.НастройкиОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:497px;height:476px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки отчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:483px;height:435px;',
			height: 435,width: 483,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:468px;height:403px;',
			height: 403,width: 468,
			tabBar:{hidden:true},
			items:
			[
				{
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:469px;height:24px;',
			width: 469,
			height: 24,
			items:
			[
				{
					text:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять все флажки в текущей колонке',
				},
			]
		},
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:469px;height:378px;',
			height: 378,width: 469,
			columns:
			[
				{
					text:'Страницы',
					width:'241',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Показывать',
					width:'68',
					dataIndex:'ПоказатьСтраницу',
					flex:1,
				},
				{
					text:'Печатать',
					width:'68',
					dataIndex:'ВыводНаПечать',
					flex:1,
				},
				{
					text:'Выгружать',
					width:'68',
					dataIndex:'ВыгрузитьСтраницу',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Представление',
					},
					{
						name:'ПоказатьСтраницу',
					},
					{
						name:'ВыводНаПечать',
					},
					{
						name:'ВыгрузитьСтраницу',
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
						var грид = Ext.getCmp('Дерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбщиеОбъектыРегламентированнойОтчетности.НастройкиОтчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбщиеОбъектыРегламентированнойОтчетности.НастройкиОтчетаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
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
			style: 'position:absolute;left:0px;top:451px;width:497px;height:25px;',
			width: 497,
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});