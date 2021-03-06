﻿Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВыбораОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:386px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выберите отчет',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ЖурналОтчетов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:9px;width:684px;height:344px;',
			height: 344,width: 684,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование отчета',
					width:'120',
					dataIndex:'НаименованиеОтчета',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Период',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'ИФНС',
					width:'48',
					dataIndex:'КодИМНС',
					flex:1,
				},
				{
					text:'Вид',
					width:'36',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'84',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'84',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'100',
					dataIndex:'Периодичность',
					flex:1,
				},
				{
					text:'Источник отчета',
					width:'350',
					dataIndex:'ИсточникОтчета',
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
						name:'Картинка',
					},
					{
						name:'НаименованиеОтчета',
					},
					{
						name:'Организация',
					},
					{
						name:'Период',
					},
					{
						name:'КодИМНС',
					},
					{
						name:'Вид',
					},
					{
						name:'Комментарий',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'Периодичность',
					},
					{
						name:'ИсточникОтчета',
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
						var грид = Ext.getCmp('ЖурналОтчетов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВыбораОтчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВыбораОтчетаСобытия");
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
			style: 'position:absolute;left:0px;top:361px;width:700px;height:25px;',
			width: 700,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Новый',
				},
				'-',
				{
					text:'ОК',
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