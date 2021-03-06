﻿Ext.require(['Данные.Отчеты.МониторЭффективности'], function () 
{
	Ext.define('Отчеты.МониторЭффективности.НастройкаПоказателя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:404px;height:296px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка показателя',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОсновнаяРасшифровка.Представление',
			width: 302,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:33px;width:302px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.МониторЭффективности.НастройкаПоказателяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.МониторЭффективности.НастройкаПоказателяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.МониторЭффективности.НастройкаПоказателяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.МониторЭффективности.НастройкаПоказателяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИсточникДанных',
			text: 'Отчет:',
			style: 'position:absolute;left:8px;top:33px;width:85px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:84px;width:388px;height:179px;',
			height: 179,width: 388,
			items:
			[
				{
					items:
					[
		{
			id: 'ПараметрыПоказателя',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:147px;',
			height: 147,width: 374,
			columns:
			[
				{
					text:'Параметр',
					width:'174',
					dataIndex:'ПараметрПредставление',
					flex:1,
				},
				{
					text:'Значение',
					width:'150',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МониторЭффективности/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПараметрПредставление',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('ПараметрыПоказателя');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МониторЭффективности.НастройкаПоказателяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МониторЭффективности.НастройкаПоказателяСобытия");
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТрендНижняяГраница',
			style: 'position:absolute;left:63px;top:27px;width:90px;height:19px;',
			width: 90,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТрендВерхняяГраница',
			style: 'position:absolute;left:243px;top:27px;width:90px;height:19px;',
			width: 90,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: '<=',
			style: 'position:absolute;left:153px;top:27px;width:21px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: '% <=',
			style: 'position:absolute;left:210px;top:27px;width:27px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Границы динамики',
			style: 'position:absolute;left:6px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИндикаторТрендНижняяГраница',
			width: 36,
			height: 19,
			style: 'position:absolute;left:6px;top:27px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИндикаторТрендСредняяГраница',
			width: 36,
			height: 19,
			style: 'position:absolute;left:174px;top:27px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИндикаторТрендВерхняяГраница',
			width: 36,
			height: 19,
			style: 'position:absolute;left:344px;top:27px;width:36px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СостояниеНижняяГраница',
			style: 'position:absolute;left:63px;top:81px;width:90px;height:19px;',
			width: 90,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СостояниеВерхняяГраница',
			style: 'position:absolute;left:243px;top:81px;width:90px;height:19px;',
			width: 90,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: '<=',
			style: 'position:absolute;left:153px;top:81px;width:21px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: '<=',
			style: 'position:absolute;left:210px;top:81px;width:27px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИндикаторСостояниеНижняяГраница',
			width: 36,
			height: 19,
			style: 'position:absolute;left:6px;top:81px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИндикаторСостояниеСредняяГраница',
			width: 36,
			height: 19,
			style: 'position:absolute;left:174px;top:81px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИндикаторСостояниеВерхняяГраница',
			width: 36,
			height: 19,
			style: 'position:absolute;left:344px;top:81px;width:36px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СписокРасшифровок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:374px;height:123px;',
			height: 123,width: 374,
			columns:
			[
				{
					text:'Представление',
					width:'159',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Расшифровка',
					width:'170',
					dataIndex:'ПредставлениеРасшифровки',
					flex:1,
				},
				{
					text:'Настройка',
					width:'170',
					dataIndex:'НаименованиеНастройкиОтчета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МониторЭффективности/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Представление',
					},
					{
						name:'ПредставлениеРасшифровки',
					},
					{
						name:'НаименованиеНастройкиОтчета',
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
						var грид = Ext.getCmp('СписокРасшифровок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МониторЭффективности.НастройкаПоказателяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МониторЭффективности.НастройкаПоказателяСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:24px;',
			width: 374,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:9px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПоказателя',
			width: 302,
			height: 19,
			style: 'position:absolute;left:94px;top:9px;width:302px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:57px;width:85px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'НастройкаОсновнойРасшифровки.Представление',
			width: 302,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:57px;width:302px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.МониторЭффективности.НастройкаПоказателяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.МониторЭффективности.НастройкаПоказателяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.МониторЭффективности.НастройкаПоказателяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.МониторЭффективности.НастройкаПоказателяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:271px;width:404px;height:25px;',
			width: 404,
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