﻿Ext.require(['Данные.Справочники.ОстаткиОтпусков'], function () 
{
	Ext.define('Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатков',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:477px;height:297px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Остатки отпусков прошлых лет',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:477px;height:25px;',
			width: 477,
			height: 25,
			items:
			[
				{
					text:'Заполнить остатки отпусков',
				},
				'-',
				{
					text:'Настроить автоматическое заполнение...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			id: 'СотрудникиОрганизаций',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:225px;height:256px;',
			height: 256,width: 225,
			columns:
			[
				{
					text:'Наименование',
					width:'131',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Физлицо',
					width:'350',
					dataIndex:'Физлицо.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ОстаткиОтпусков").data,
					fields: ['Ссылка','Наименование','Физлицо.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусков/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Физлицо',
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
						var грид = Ext.getCmp('СотрудникиОрганизаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатковСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатковСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'Остатки',
			xtype: 'grid',
			style: 'position:absolute;left:239px;top:123px;width:230px;height:140px;',
			height: 140,width: 230,
			columns:
			[
				{
					text:'Год работы',
					width:'100',
					dataIndex:'ГодРаботы',
					flex:1,
				},
				{
					text:'С',
					width:'80',
					dataIndex:'ДатаНачалаРабочегоГода',
					flex:1,
				},
				{
					text:'По',
					width:'80',
					dataIndex:'ДатаОкончанияРабочегоГода',
					flex:1,
				},
				{
					text:'Количество дней',
					width:'70',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ОстаткиОтпусков").data,
					fields: ['Ссылка','ГодРаботы','ДатаНачалаРабочегоГода','ДатаОкончанияРабочегоГода','Количество',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусков/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ГодРаботы',
					},
					{
						name:'ДатаНачалаРабочегоГода',
					},
					{
						name:'ДатаОкончанияРабочегоГода',
					},
					{
						name:'Количество',
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
						var грид = Ext.getCmp('Остатки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатковСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатковСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: 'НадписьСотрудник',
			style: 'position:absolute;left:239px;top:33px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОстаток',
			text: 'Остатки отпуска заполнены. Программа будет рассчитывать остатки для всех рабочих лет, следующих за последним рабочим годом, на который заполнены остатки',
			style: 'position:absolute;left:239px;top:56px;width:230px;height:67px;',
		},
		{
			xtype: 'button',
			name: 'Изменить',
			text: 'Изменить',
			style: 'position:absolute;left:239px;top:268px;width:101px;height:21px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});