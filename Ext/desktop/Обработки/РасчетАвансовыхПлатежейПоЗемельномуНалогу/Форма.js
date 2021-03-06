﻿Ext.require(['Данные.Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу'], function () 
{
	Ext.define('Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:787px;height:402px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Расчет авансовых платежей по земельному налогу',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 308,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:33px;width:308px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:284px;width:771px;height:24px;',
			width: 771,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'АвансовыеПлатежи',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:308px;width:771px;height:61px;',
			height: 61,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код ОКАТО',
					width:'100',
					dataIndex:'КодОКАТО',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетАвансовыхПлатежейПоЗемельномуНалогу/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'КодОКАТО',
					},
					{
						name:'Сумма',
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
						var грид = Ext.getCmp('АвансовыеПлатежи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:787px;height:25px;',
			width: 787,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				{
					text:'Регистрация земельных участков',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: 'НадписьПериодСоставленияОтчета',
			style: 'position:absolute;left:470px;top:33px;width:100px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:445px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:576px;top:33px;width:20px;height:19px;',
		},
		{
			id: 'ЗемельныеУчастки',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:85px;width:771px;height:189px;',
			height: 189,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код категории земель',
					width:'80',
					dataIndex:'КодКатегорииЗемель',
					flex:1,
				},
				{
					text:'Кадастровый номер',
					width:'120',
					dataIndex:'КадастровыйНомер',
					flex:1,
				},
				{
					text:'Кадастровая стоимость',
					width:'120',
					dataIndex:'КадастроваяСтоимость',
					flex:1,
				},
				{
					text:'Доля (числитель)',
					width:'71',
					dataIndex:'ДоляВПравеОбщейСобственностиЧислитель',
					flex:1,
				},
				{
					text:'Доля (знаменатель)',
					width:'71',
					dataIndex:'ДоляВПравеОбщейСобственностиЗнаменатель',
					flex:1,
				},
				{
					text:'Налоговая ставка',
					width:'60',
					dataIndex:'НалоговаяСтавка',
					flex:1,
				},
				{
					text:'Налоговая база',
					width:'100',
					dataIndex:'НалоговаяБаза',
					flex:1,
				},
				{
					text:'Сумма налога',
					width:'100',
					dataIndex:'СуммаНалога',
					flex:1,
				},
				{
					text:'Налоговая льгота',
					width:'120',
					dataIndex:'НалоговаяЛьгота',
					flex:1,
				},
				{
					text:'Кол. мес. владения',
					width:'60',
					dataIndex:'КоличествоМесяцевВладения',
					flex:1,
				},
				{
					text:'Кол. мес. льготы',
					width:'60',
					dataIndex:'КоличествоМесяцевПримененияЛьготы',
					flex:1,
				},
				{
					text:'Сумма налога к уплате',
					width:'77',
					dataIndex:'СуммаНалогаКуплате',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'103',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'Период строительства',
					width:'67',
					dataIndex:'ПериодСтроительства',
					flex:1,
				},
				{
					text:'КБК',
					width:'117',
					dataIndex:'КБК',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетАвансовыхПлатежейПоЗемельномуНалогу/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'КодКатегорииЗемель',
					},
					{
						name:'КадастровыйНомер',
					},
					{
						name:'КадастроваяСтоимость',
					},
					{
						name:'ДоляВПравеОбщейСобственностиЧислитель',
					},
					{
						name:'ДоляВПравеОбщейСобственностиЗнаменатель',
					},
					{
						name:'НалоговаяСтавка',
					},
					{
						name:'НалоговаяБаза',
					},
					{
						name:'СуммаНалога',
					},
					{
						name:'НалоговаяЛьгота',
					},
					{
						name:'КоличествоМесяцевВладения',
					},
					{
						name:'КоличествоМесяцевПримененияЛьготы',
					},
					{
						name:'СуммаНалогаКуплате',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'ПериодСтроительства',
					},
					{
						name:'КБК',
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
						var грид = Ext.getCmp('ЗемельныеУчастки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:61px;width:771px;height:24px;',
			width: 771,
			height: 24,
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:787px;height:25px;',
			width: 787,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
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