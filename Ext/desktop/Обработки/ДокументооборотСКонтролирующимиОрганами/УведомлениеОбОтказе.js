﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбОтказе',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:547px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Уведомление об отказе',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:497px;height:506px;',
			height: 506,width: 497,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:483px;height:171px;',
			height: 171,width: 483,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'Ошибки',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:483px;height:171px;',
			height: 171,width: 483,
			columns:
			[
				{
					text:'Описание',
					width:'111',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Код ошибки',
					width:'89',
					dataIndex:'КодОшибки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Описание',
					},
					{
						name:'КодОшибки',
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
						var грид = Ext.getCmp('Ошибки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбОтказеСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбОтказеСобытия");
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
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:177px;width:483px;height:303px;',
			height: 303,width: 483,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'По фалйам',
			style: 'position:absolute;left:0px;top:3px;width:483px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ВыявлНарФайл',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:23px;width:483px;height:280px;',
			height: 280,width: 483,
			columns:
			[
				{
					text:'Описание',
					width:'111',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Код ошибки',
					width:'89',
					dataIndex:'КодОшибки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Описание',
					},
					{
						name:'КодОшибки',
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
						var грид = Ext.getCmp('ВыявлНарФайл');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбОтказеСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбОтказеСобытия");
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
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя обработанного файла:',
			style: 'position:absolute;left:6px;top:6px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяОбрабФайла',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:6px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Идентификатор файла:',
			style: 'position:absolute;left:6px;top:30px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдФайл',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:30px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Идентификатор документа:',
			style: 'position:absolute;left:6px;top:54px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдДок',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:54px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата и время направления файла:',
			style: 'position:absolute;left:6px;top:78px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаВремяПредст',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:78px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата поступления файла:',
			style: 'position:absolute;left:6px;top:102px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаПрием',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:102px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:6px;top:126px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КНД',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:126px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование формы:',
			style: 'position:absolute;left:6px;top:150px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаимОтч',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:150px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Номер корректировки:',
			style: 'position:absolute;left:6px;top:174px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомКорр',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:174px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Отчетный год:',
			style: 'position:absolute;left:6px;top:198px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетГод',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:198px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Код отчетного периода:',
			style: 'position:absolute;left:6px;top:222px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Период',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:222px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Версия формата:',
			style: 'position:absolute;left:6px;top:246px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВерсФорм',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:246px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Проверившая программа:',
			style: 'position:absolute;left:6px;top:270px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПрогрКомпл',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:270px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Дата формирования уведомления:',
			style: 'position:absolute;left:6px;top:294px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаФормУвед',
			width: 298,
			height: 19,
			style: 'position:absolute;left:191px;top:294px;width:298px;height:19px;',
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
			style: 'position:absolute;left:0px;top:522px;width:513px;height:25px;',
			width: 513,
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