﻿Ext.require(['Данные.Обработки.ЗагрузкаДанныхИзТабличногоДокумента'], function () 
{
	Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСохраненияНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:411px;height:241px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Сохранение настройки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименованиеНастройки',
			text: 'Наименование настройки:',
			style: 'position:absolute;left:8px;top:8px;width:309px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеНастройки',
			width: 309,
			height: 19,
			style: 'position:absolute;left:8px;top:27px;width:309px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:329px;top:27px;width:74px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:329px;top:51px;width:74px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Удалить',
			text: 'Удалить',
			style: 'position:absolute;left:329px;top:75px;width:74px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать по умолчанию',
			style: 'position:absolute;left:8px;top:51px;width:309px;height:19px;',
		},
		{
			id: 'СписокНастроек',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:75px;width:309px;height:158px;',
			height: 158,width: 309,
			columns:
			[
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'Колонка1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхИзТабличногоДокумента/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Колонка1',
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
						var грид = Ext.getCmp('СписокНастроек');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСохраненияНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСохраненияНастройкиСобытия");
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
	]
	});
});