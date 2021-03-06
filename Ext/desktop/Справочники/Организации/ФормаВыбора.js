﻿Ext.require(['Данные.Справочники.Организации'], function () 
{
	Ext.define('Справочники.Организации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:503px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Организации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:487px;height:280px;',
			height: 280,width: 487,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Префикс',
					width:'60',
					dataIndex:'Префикс',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'ИНН',
					width:'84',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'КПП',
					width:'63',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Регистрационный номер ПФР',
					width:'98',
					dataIndex:'РегистрационныйНомерПФР',
					flex:1,
				},
				{
					text:'Головная организация',
					width:'350',
					dataIndex:'ГоловнаяОрганизация.Представление',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'100',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Код по ОКПО',
					width:'70',
					dataIndex:'КодПоОКПО',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'77',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'Код ИФНС',
					width:'28',
					dataIndex:'КодИМНС',
					flex:1,
				},
				{
					text:'Юр. / физ. лицо',
					width:'100',
					dataIndex:'ЮрФизЛицо.Представление',
					flex:1,
				},
				{
					text:'Районный коэффициент',
					width:'49',
					dataIndex:'РайонныйКоэффициент',
					flex:1,
				},
				{
					text:'Районный коэффициент РФ',
					width:'49',
					dataIndex:'РайонныйКоэффициентРФ',
					flex:1,
				},
				{
					text:'Территориальные условия ПФР',
					width:'21',
					dataIndex:'ТерриториальныеУсловияПФР.Представление',
					flex:1,
				},
				{
					text:'Основной банковский счет',
					width:'350',
					dataIndex:'ОсновнойБанковскийСчет.Представление',
					flex:1,
				},
				{
					text:'Вид ставок ЕСН и ПФР',
					width:'100',
					dataIndex:'ВидСтавокЕСНиПФР.Представление',
					flex:1,
				},
				{
					text:'Наименование плательщика при перечислении налогов',
					width:'350',
					dataIndex:'НаименованиеПлательщикаПриПеречисленииНалогов',
					flex:1,
				},
				{
					text:'Отражать в регламентированном учете',
					width:'70',
					dataIndex:'ОтражатьВРегламентированномУчете',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Организации").data,
					fields: ['Ссылка','Картинка','Код','Префикс','Наименование','ИНН','КПП','РегистрационныйНомерПФР','ГоловнаяОрганизация.Представление','НаименованиеПолное','КодПоОКПО','КодПоОКАТО','КодИМНС','ЮрФизЛицо.Представление','РайонныйКоэффициент','РайонныйКоэффициентРФ','ТерриториальныеУсловияПФР.Представление','ОсновнойБанковскийСчет.Представление','ВидСтавокЕСНиПФР.Представление','НаименованиеПлательщикаПриПеречисленииНалогов','ОтражатьВРегламентированномУчете',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Организации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Префикс',
					},
					{
						name:'Наименование',
					},
					{
						name:'ИНН',
					},
					{
						name:'КПП',
					},
					{
						name:'РегистрационныйНомерПФР',
					},
					{
						name:'ГоловнаяОрганизация',
					},
					{
						name:'НаименованиеПолное',
					},
					{
						name:'КодПоОКПО',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КодИМНС',
					},
					{
						name:'ЮрФизЛицо',
					},
					{
						name:'РайонныйКоэффициент',
					},
					{
						name:'РайонныйКоэффициентРФ',
					},
					{
						name:'ТерриториальныеУсловияПФР',
					},
					{
						name:'ОсновнойБанковскийСчет',
					},
					{
						name:'ВидСтавокЕСНиПФР',
					},
					{
						name:'НаименованиеПлательщикаПриПеречисленииНалогов',
					},
					{
						name:'ОтражатьВРегламентированномУчете',
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
						Ext.require(['Справочники.Организации.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Организации.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:503px;height:25px;',
			width: 503,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});