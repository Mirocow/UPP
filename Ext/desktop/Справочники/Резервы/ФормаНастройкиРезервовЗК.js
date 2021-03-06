﻿Ext.require(['Данные.Справочники.Резервы'], function () 
{
	Ext.define('Справочники.Резервы.ФормаНастройкиРезервовЗК',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:483px;height:249px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Форма',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:31px;width:467px;height:185px;',
			height: 185,width: 467,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:24px;',
			width: 453,
			height: 24,
			items:
			[
				{
					text:'Дополнительные начисления организаций',
				},
				{
					text:'',
				},
			]
		},
		{
			id: 'БазовыеВидыРасчета',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:453px;height:129px;',
			height: 129,width: 453,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'167',
					dataIndex:'ВидРасчета',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Резервы").data,
					fields: ['Ссылка','НомерСтроки','ВидРасчета',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Резервы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидРасчета',
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
						var грид = Ext.getCmp('БазовыеВидыРасчета');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Резервы.ФормаНастройкиРезервовЗКСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Резервы.ФормаНастройкиРезервовЗКСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:25px;',
			width: 453,
			height: 25,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			id: 'НаборЗаписейРазмерыОтчислений',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:453px;height:128px;',
			height: 128,width: 453,
			columns:
			[
				{
					text:'Период',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'240',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Размер (%)',
					width:'60',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Резерв',
					width:'120',
					dataIndex:'Резерв',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Резервы").data,
					fields: ['Ссылка','Период','Организация','Размер','Резерв',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Резервы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'Размер',
					},
					{
						name:'Резерв',
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
						var грид = Ext.getCmp('НаборЗаписейРазмерыОтчислений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Резервы.ФормаНастройкиРезервовЗКСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Резервы.ФормаНастройкиРезервовЗКСобытия");
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
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:7px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 384,
			height: 19,
			style: 'position:absolute;left:91px;top:7px;width:384px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:483px;height:25px;',
			width: 483,
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