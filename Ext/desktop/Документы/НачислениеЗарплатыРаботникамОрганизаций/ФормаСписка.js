﻿Ext.require(['Данные.Документы.НачислениеЗарплатыРаботникамОрганизаций'], function () 
{
	Ext.define('Документы.НачислениеЗарплатыРаботникамОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Начисления зарплаты сотрудникам организаций',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:355px;',
			height: 355,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'120',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Организация',
					width:'121',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Период начисления',
					width:'160',
					dataIndex:'КолонкаЗаголовка',
					flex:1,
				},
				{
					text:'Месяц',
					width:'100',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Период начисления',
					width:'120',
					dataIndex:'ПериодНачисления',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Сотрудники',
					width:'100',
					dataIndex:'КраткийСоставДокумента',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникамОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'Организация',
					},
					{
						name:'КолонкаЗаголовка',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'ПериодНачисления',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'КраткийСоставДокумента',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
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
					text:'Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Провести',
				},
				{
					text:'Отмена проведения',
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
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
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
					text:'',
				},
				{
					text:'',
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
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Создать документы на выплату зарплаты',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:19px;',
			height: 19,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:92px;top:0px;width:220px;height:19px;',
		},
					]
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