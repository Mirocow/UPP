﻿Ext.require(['Данные.Справочники.ГрафикиРаботы'], function () 
{
	Ext.define('Справочники.ГрафикиРаботы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:388px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Графики работы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:372px;height:280px;',
			height: 280,width: 372,
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
				{
					text:'Тип графика',
					width:'120',
					dataIndex:'ТипГрафика',
					flex:1,
				},
				{
					text:'Суммированный учет рабочего времени',
					width:'60',
					dataIndex:'СуммированныйУчетРабочегоВремени',
					flex:1,
				},
				{
					text:'Первый выходной',
					width:'120',
					dataIndex:'ПервыйВыходной.Представление',
					flex:1,
				},
				{
					text:'Второй выходной',
					width:'120',
					dataIndex:'ВторойВыходной.Представление',
					flex:1,
				},
				{
					text:'Дата отсчета',
					width:'80',
					dataIndex:'ДатаОтсчета',
					flex:1,
				},
				{
					text:'Длительность рабочей недели',
					width:'80',
					dataIndex:'ДлительностьРабочейНедели',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ГрафикиРаботы").data,
					fields: ['Ссылка','Картинка','Наименование','ТипГрафика','СуммированныйУчетРабочегоВремени','ПервыйВыходной.Представление','ВторойВыходной.Представление','ДатаОтсчета','ДлительностьРабочейНедели',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикиРаботы/ВыбратьПоСсылке/100', timeout: 200},
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
					{
						name:'ТипГрафика',
					},
					{
						name:'СуммированныйУчетРабочегоВремени',
					},
					{
						name:'ПервыйВыходной',
					},
					{
						name:'ВторойВыходной',
					},
					{
						name:'ДатаОтсчета',
					},
					{
						name:'ДлительностьРабочейНедели',
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
						Ext.require(['Справочники.ГрафикиРаботы.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрафикиРаботы.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:388px;height:25px;',
			width: 388,
			height: 25,
			items:
			[
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
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
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
				'-',
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
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
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
		],
	}],
	dockedItems:
	[
	]
	});
});