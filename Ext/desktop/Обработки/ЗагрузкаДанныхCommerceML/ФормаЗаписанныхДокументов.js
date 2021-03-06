﻿Ext.require(['Данные.Обработки.ЗагрузкаДанныхCommerceML'], function () 
{
	Ext.define('Обработки.ЗагрузкаДанныхCommerceML.ФормаЗаписанныхДокументов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:379px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Загруженные документы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаЗаписанныхДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:76px;width:584px;height:270px;',
			height: 270,width: 584,
			columns:
			[
				{
					text:'Документ',
					width:'487',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Примечание',
					width:'147',
					dataIndex:'Примечание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Документ',
					},
					{
						name:'Примечание',
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
						var грид = Ext.getCmp('ТаблицаЗаписанныхДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаЗаписанныхДокументовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаЗаписанныхДокументовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:46px;width:584px;height:24px;',
			width: 584,
			height: 24,
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить/Снять пометку на удаление',
				},
				{
					text:'Удалить непосредственно',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗагруженныхДокументов',
			text: 'Надпись загрузки документов. Информация по загруженным документам приведена ниже:',
			style: 'position:absolute;left:47px;top:8px;width:545px;height:32px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:354px;width:600px;height:25px;',
			width: 600,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});