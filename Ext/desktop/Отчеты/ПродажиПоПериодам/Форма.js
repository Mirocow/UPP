﻿Ext.require(['Данные.Отчеты.ПродажиПоПериодам'], function () 
{
	Ext.define('Отчеты.ПродажиПоПериодам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:900px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Продажи по периодам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:900px;height:25px;',
			width: 900,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:884px;height:539px;',
			height: 539,width: 884,
			items:
			[
				{
					items:
					[
		{
			id: 'ТабличноеПолеТовары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:870px;height:483px;',
			height: 483,width: 870,
			columns:
			[
				{
					text:'N',
					width:'40',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'200',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Поле_01',
					width:'200',
					dataIndex:'Поле_01',
					flex:1,
				},
				{
					text:'Поле_02',
					width:'200',
					dataIndex:'Поле_02',
					flex:1,
				},
				{
					text:'Поле_03',
					width:'200',
					dataIndex:'Поле_03',
					flex:1,
				},
				{
					text:'Поле_04',
					width:'200',
					dataIndex:'Поле_04',
					flex:1,
				},
				{
					text:'Поле_05',
					width:'200',
					dataIndex:'Поле_05',
					flex:1,
				},
				{
					text:'Поле_06',
					width:'200',
					dataIndex:'Поле_06',
					flex:1,
				},
				{
					text:'Поле_07',
					width:'200',
					dataIndex:'Поле_07',
					flex:1,
				},
				{
					text:'Поле_08',
					width:'200',
					dataIndex:'Поле_08',
					flex:1,
				},
				{
					text:'Поле_09',
					width:'200',
					dataIndex:'Поле_09',
					flex:1,
				},
				{
					text:'Поле_10',
					width:'200',
					dataIndex:'Поле_10',
					flex:1,
				},
				{
					text:'Поле_11',
					width:'200',
					dataIndex:'Поле_11',
					flex:1,
				},
				{
					text:'Поле_12',
					width:'200',
					dataIndex:'Поле_12',
					flex:1,
				},
				{
					text:'Поле_13',
					width:'200',
					dataIndex:'Поле_13',
					flex:1,
				},
				{
					text:'Поле_14',
					width:'200',
					dataIndex:'Поле_14',
					flex:1,
				},
				{
					text:'Поле_15',
					width:'200',
					dataIndex:'Поле_15',
					flex:1,
				},
				{
					text:'Поле_16',
					width:'200',
					dataIndex:'Поле_16',
					flex:1,
				},
				{
					text:'Поле_17',
					width:'200',
					dataIndex:'Поле_17',
					flex:1,
				},
				{
					text:'Поле_18',
					width:'200',
					dataIndex:'Поле_18',
					flex:1,
				},
				{
					text:'Поле_19',
					width:'200',
					dataIndex:'Поле_19',
					flex:1,
				},
				{
					text:'Поле_20',
					width:'200',
					dataIndex:'Поле_20',
					flex:1,
				},
				{
					text:'Поле_21',
					width:'200',
					dataIndex:'Поле_21',
					flex:1,
				},
				{
					text:'Поле_22',
					width:'200',
					dataIndex:'Поле_22',
					flex:1,
				},
				{
					text:'Поле_23',
					width:'200',
					dataIndex:'Поле_23',
					flex:1,
				},
				{
					text:'Поле_24',
					width:'200',
					dataIndex:'Поле_24',
					flex:1,
				},
				{
					text:'Поле_25',
					width:'200',
					dataIndex:'Поле_25',
					flex:1,
				},
				{
					text:'Поле_26',
					width:'200',
					dataIndex:'Поле_26',
					flex:1,
				},
				{
					text:'Поле_27',
					width:'200',
					dataIndex:'Поле_27',
					flex:1,
				},
				{
					text:'Поле_28',
					width:'200',
					dataIndex:'Поле_28',
					flex:1,
				},
				{
					text:'Поле_29',
					width:'200',
					dataIndex:'Поле_29',
					flex:1,
				},
				{
					text:'Поле_30',
					width:'200',
					dataIndex:'Поле_30',
					flex:1,
				},
				{
					text:'Поле_31',
					width:'200',
					dataIndex:'Поле_31',
					flex:1,
				},
				{
					text:'Поле_32',
					width:'200',
					dataIndex:'Поле_32',
					flex:1,
				},
				{
					text:'Поле_33',
					width:'200',
					dataIndex:'Поле_33',
					flex:1,
				},
				{
					text:'Поле_34',
					width:'200',
					dataIndex:'Поле_34',
					flex:1,
				},
				{
					text:'Поле_35',
					width:'200',
					dataIndex:'Поле_35',
					flex:1,
				},
				{
					text:'Поле_36',
					width:'200',
					dataIndex:'Поле_36',
					flex:1,
				},
				{
					text:'Поле_37',
					width:'200',
					dataIndex:'Поле_37',
					flex:1,
				},
				{
					text:'Поле_38',
					width:'200',
					dataIndex:'Поле_38',
					flex:1,
				},
				{
					text:'Поле_39',
					width:'200',
					dataIndex:'Поле_39',
					flex:1,
				},
				{
					text:'Поле_40',
					width:'200',
					dataIndex:'Поле_40',
					flex:1,
				},
				{
					text:'Продажи_01',
					width:'80',
					dataIndex:'Продажи_01',
					flex:1,
				},
				{
					text:'ПродажиПроцент_01',
					width:'80',
					dataIndex:'ПродажиПроцент_01',
					flex:1,
				},
				{
					text:'Продажи_02',
					width:'80',
					dataIndex:'Продажи_02',
					flex:1,
				},
				{
					text:'ПродажиПроцент_02',
					width:'80',
					dataIndex:'ПродажиПроцент_02',
					flex:1,
				},
				{
					text:'Продажи_03',
					width:'80',
					dataIndex:'Продажи_03',
					flex:1,
				},
				{
					text:'ПродажиПроцент_03',
					width:'80',
					dataIndex:'ПродажиПроцент_03',
					flex:1,
				},
				{
					text:'Продажи_04',
					width:'80',
					dataIndex:'Продажи_04',
					flex:1,
				},
				{
					text:'ПродажиПроцент_04',
					width:'80',
					dataIndex:'ПродажиПроцент_04',
					flex:1,
				},
				{
					text:'Продажи_05',
					width:'80',
					dataIndex:'Продажи_05',
					flex:1,
				},
				{
					text:'ПродажиПроцент_05',
					width:'80',
					dataIndex:'ПродажиПроцент_05',
					flex:1,
				},
				{
					text:'Продажи_06',
					width:'80',
					dataIndex:'Продажи_06',
					flex:1,
				},
				{
					text:'ПродажиПроцент_06',
					width:'80',
					dataIndex:'ПродажиПроцент_06',
					flex:1,
				},
				{
					text:'Продажи_07',
					width:'80',
					dataIndex:'Продажи_07',
					flex:1,
				},
				{
					text:'ПродажиПроцент_07',
					width:'80',
					dataIndex:'ПродажиПроцент_07',
					flex:1,
				},
				{
					text:'Продажи_08',
					width:'80',
					dataIndex:'Продажи_08',
					flex:1,
				},
				{
					text:'ПродажиПроцент_08',
					width:'80',
					dataIndex:'ПродажиПроцент_08',
					flex:1,
				},
				{
					text:'Продажи_09',
					width:'80',
					dataIndex:'Продажи_09',
					flex:1,
				},
				{
					text:'ПродажиПроцент_09',
					width:'80',
					dataIndex:'ПродажиПроцент_09',
					flex:1,
				},
				{
					text:'Продажи_10',
					width:'80',
					dataIndex:'Продажи_10',
					flex:1,
				},
				{
					text:'ПродажиПроцент_10',
					width:'80',
					dataIndex:'ПродажиПроцент_10',
					flex:1,
				},
				{
					text:'Продажи_11',
					width:'80',
					dataIndex:'Продажи_11',
					flex:1,
				},
				{
					text:'ПродажиПроцент_11',
					width:'80',
					dataIndex:'ПродажиПроцент_11',
					flex:1,
				},
				{
					text:'Продажи_12',
					width:'80',
					dataIndex:'Продажи_12',
					flex:1,
				},
				{
					text:'ПродажиПроцент_12',
					width:'80',
					dataIndex:'ПродажиПроцент_12',
					flex:1,
				},
				{
					text:'Продажи_13',
					width:'80',
					dataIndex:'Продажи_13',
					flex:1,
				},
				{
					text:'ПродажиПроцент_13',
					width:'80',
					dataIndex:'ПродажиПроцент_13',
					flex:1,
				},
				{
					text:'Продажи_14',
					width:'80',
					dataIndex:'Продажи_14',
					flex:1,
				},
				{
					text:'ПродажиПроцент_14',
					width:'80',
					dataIndex:'ПродажиПроцент_14',
					flex:1,
				},
				{
					text:'Продажи_15',
					width:'80',
					dataIndex:'Продажи_15',
					flex:1,
				},
				{
					text:'ПродажиПроцент_15',
					width:'80',
					dataIndex:'ПродажиПроцент_15',
					flex:1,
				},
				{
					text:'Продажи_16',
					width:'80',
					dataIndex:'Продажи_16',
					flex:1,
				},
				{
					text:'ПродажиПроцент_16',
					width:'80',
					dataIndex:'ПродажиПроцент_16',
					flex:1,
				},
				{
					text:'Продажи_17',
					width:'80',
					dataIndex:'Продажи_17',
					flex:1,
				},
				{
					text:'ПродажиПроцент_17',
					width:'80',
					dataIndex:'ПродажиПроцент_17',
					flex:1,
				},
				{
					text:'Продажи_18',
					width:'80',
					dataIndex:'Продажи_18',
					flex:1,
				},
				{
					text:'ПродажиПроцент_18',
					width:'80',
					dataIndex:'ПродажиПроцент_18',
					flex:1,
				},
				{
					text:'Продажи_19',
					width:'80',
					dataIndex:'Продажи_19',
					flex:1,
				},
				{
					text:'ПродажиПроцент_19',
					width:'80',
					dataIndex:'ПродажиПроцент_19',
					flex:1,
				},
				{
					text:'Продажи_20',
					width:'80',
					dataIndex:'Продажи_20',
					flex:1,
				},
				{
					text:'ПродажиПроцент_20',
					width:'80',
					dataIndex:'ПродажиПроцент_20',
					flex:1,
				},
				{
					text:'Продажи_21',
					width:'80',
					dataIndex:'Продажи_21',
					flex:1,
				},
				{
					text:'ПродажиПроцент_21',
					width:'80',
					dataIndex:'ПродажиПроцент_21',
					flex:1,
				},
				{
					text:'Продажи_22',
					width:'80',
					dataIndex:'Продажи_22',
					flex:1,
				},
				{
					text:'ПродажиПроцент_22',
					width:'80',
					dataIndex:'ПродажиПроцент_22',
					flex:1,
				},
				{
					text:'Продажи_23',
					width:'80',
					dataIndex:'Продажи_23',
					flex:1,
				},
				{
					text:'ПродажиПроцент_23',
					width:'80',
					dataIndex:'ПродажиПроцент_23',
					flex:1,
				},
				{
					text:'Продажи_24',
					width:'80',
					dataIndex:'Продажи_24',
					flex:1,
				},
				{
					text:'ПродажиПроцент_24',
					width:'80',
					dataIndex:'ПродажиПроцент_24',
					flex:1,
				},
				{
					text:'Продажи_25',
					width:'80',
					dataIndex:'Продажи_25',
					flex:1,
				},
				{
					text:'ПродажиПроцент_25',
					width:'80',
					dataIndex:'ПродажиПроцент_25',
					flex:1,
				},
				{
					text:'Продажи_26',
					width:'80',
					dataIndex:'Продажи_26',
					flex:1,
				},
				{
					text:'ПродажиПроцент_26',
					width:'80',
					dataIndex:'ПродажиПроцент_26',
					flex:1,
				},
				{
					text:'Продажи_27',
					width:'80',
					dataIndex:'Продажи_27',
					flex:1,
				},
				{
					text:'ПродажиПроцент_27',
					width:'80',
					dataIndex:'ПродажиПроцент_27',
					flex:1,
				},
				{
					text:'Продажи_28',
					width:'80',
					dataIndex:'Продажи_28',
					flex:1,
				},
				{
					text:'ПродажиПроцент_28',
					width:'80',
					dataIndex:'ПродажиПроцент_28',
					flex:1,
				},
				{
					text:'Продажи_29',
					width:'80',
					dataIndex:'Продажи_29',
					flex:1,
				},
				{
					text:'ПродажиПроцент_29',
					width:'80',
					dataIndex:'ПродажиПроцент_29',
					flex:1,
				},
				{
					text:'Продажи_30',
					width:'80',
					dataIndex:'Продажи_30',
					flex:1,
				},
				{
					text:'ПродажиПроцент_30',
					width:'80',
					dataIndex:'ПродажиПроцент_30',
					flex:1,
				},
				{
					text:'Остатки_01',
					width:'80',
					dataIndex:'Остатки_01',
					flex:1,
				},
				{
					text:'Остатки_02',
					width:'80',
					dataIndex:'Остатки_02',
					flex:1,
				},
				{
					text:'Остатки_03',
					width:'80',
					dataIndex:'Остатки_03',
					flex:1,
				},
				{
					text:'Остатки_04',
					width:'80',
					dataIndex:'Остатки_04',
					flex:1,
				},
				{
					text:'Остатки_05',
					width:'80',
					dataIndex:'Остатки_05',
					flex:1,
				},
				{
					text:'Остатки_06',
					width:'80',
					dataIndex:'Остатки_06',
					flex:1,
				},
				{
					text:'Остатки 07',
					width:'80',
					dataIndex:'Остатки_07',
					flex:1,
				},
				{
					text:'Остатки 08',
					width:'80',
					dataIndex:'Остатки_08',
					flex:1,
				},
				{
					text:'Остатки 09',
					width:'80',
					dataIndex:'Остатки_09',
					flex:1,
				},
				{
					text:'Остатки_10',
					width:'80',
					dataIndex:'Остатки_10',
					flex:1,
				},
				{
					text:'Остатки (итог)',
					width:'80',
					dataIndex:'ОстаткиИтог',
					flex:1,
				},
				{
					text:'Цена_01',
					width:'80',
					dataIndex:'Цена_01',
					flex:1,
				},
				{
					text:'Цена_02',
					width:'80',
					dataIndex:'Цена_02',
					flex:1,
				},
				{
					text:'Цена_03',
					width:'80',
					dataIndex:'Цена_03',
					flex:1,
				},
				{
					text:'Цена_04',
					width:'80',
					dataIndex:'Цена_04',
					flex:1,
				},
				{
					text:'Цена_05',
					width:'80',
					dataIndex:'Цена_05',
					flex:1,
				},
				{
					text:'Цена_06',
					width:'80',
					dataIndex:'Цена_06',
					flex:1,
				},
				{
					text:'Цена_07',
					width:'80',
					dataIndex:'Цена_07',
					flex:1,
				},
				{
					text:'Цена_08',
					width:'80',
					dataIndex:'Цена_08',
					flex:1,
				},
				{
					text:'Цена_09',
					width:'80',
					dataIndex:'Цена_09',
					flex:1,
				},
				{
					text:'Цена_10',
					width:'80',
					dataIndex:'Цена_10',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПродажиПоПериодам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Поле_01',
					},
					{
						name:'Поле_02',
					},
					{
						name:'Поле_03',
					},
					{
						name:'Поле_04',
					},
					{
						name:'Поле_05',
					},
					{
						name:'Поле_06',
					},
					{
						name:'Поле_07',
					},
					{
						name:'Поле_08',
					},
					{
						name:'Поле_09',
					},
					{
						name:'Поле_10',
					},
					{
						name:'Поле_11',
					},
					{
						name:'Поле_12',
					},
					{
						name:'Поле_13',
					},
					{
						name:'Поле_14',
					},
					{
						name:'Поле_15',
					},
					{
						name:'Поле_16',
					},
					{
						name:'Поле_17',
					},
					{
						name:'Поле_18',
					},
					{
						name:'Поле_19',
					},
					{
						name:'Поле_20',
					},
					{
						name:'Поле_21',
					},
					{
						name:'Поле_22',
					},
					{
						name:'Поле_23',
					},
					{
						name:'Поле_24',
					},
					{
						name:'Поле_25',
					},
					{
						name:'Поле_26',
					},
					{
						name:'Поле_27',
					},
					{
						name:'Поле_28',
					},
					{
						name:'Поле_29',
					},
					{
						name:'Поле_30',
					},
					{
						name:'Поле_31',
					},
					{
						name:'Поле_32',
					},
					{
						name:'Поле_33',
					},
					{
						name:'Поле_34',
					},
					{
						name:'Поле_35',
					},
					{
						name:'Поле_36',
					},
					{
						name:'Поле_37',
					},
					{
						name:'Поле_38',
					},
					{
						name:'Поле_39',
					},
					{
						name:'Поле_40',
					},
					{
						name:'Продажи_01',
					},
					{
						name:'ПродажиПроцент_01',
					},
					{
						name:'Продажи_02',
					},
					{
						name:'ПродажиПроцент_02',
					},
					{
						name:'Продажи_03',
					},
					{
						name:'ПродажиПроцент_03',
					},
					{
						name:'Продажи_04',
					},
					{
						name:'ПродажиПроцент_04',
					},
					{
						name:'Продажи_05',
					},
					{
						name:'ПродажиПроцент_05',
					},
					{
						name:'Продажи_06',
					},
					{
						name:'ПродажиПроцент_06',
					},
					{
						name:'Продажи_07',
					},
					{
						name:'ПродажиПроцент_07',
					},
					{
						name:'Продажи_08',
					},
					{
						name:'ПродажиПроцент_08',
					},
					{
						name:'Продажи_09',
					},
					{
						name:'ПродажиПроцент_09',
					},
					{
						name:'Продажи_10',
					},
					{
						name:'ПродажиПроцент_10',
					},
					{
						name:'Продажи_11',
					},
					{
						name:'ПродажиПроцент_11',
					},
					{
						name:'Продажи_12',
					},
					{
						name:'ПродажиПроцент_12',
					},
					{
						name:'Продажи_13',
					},
					{
						name:'ПродажиПроцент_13',
					},
					{
						name:'Продажи_14',
					},
					{
						name:'ПродажиПроцент_14',
					},
					{
						name:'Продажи_15',
					},
					{
						name:'ПродажиПроцент_15',
					},
					{
						name:'Продажи_16',
					},
					{
						name:'ПродажиПроцент_16',
					},
					{
						name:'Продажи_17',
					},
					{
						name:'ПродажиПроцент_17',
					},
					{
						name:'Продажи_18',
					},
					{
						name:'ПродажиПроцент_18',
					},
					{
						name:'Продажи_19',
					},
					{
						name:'ПродажиПроцент_19',
					},
					{
						name:'Продажи_20',
					},
					{
						name:'ПродажиПроцент_20',
					},
					{
						name:'Продажи_21',
					},
					{
						name:'ПродажиПроцент_21',
					},
					{
						name:'Продажи_22',
					},
					{
						name:'ПродажиПроцент_22',
					},
					{
						name:'Продажи_23',
					},
					{
						name:'ПродажиПроцент_23',
					},
					{
						name:'Продажи_24',
					},
					{
						name:'ПродажиПроцент_24',
					},
					{
						name:'Продажи_25',
					},
					{
						name:'ПродажиПроцент_25',
					},
					{
						name:'Продажи_26',
					},
					{
						name:'ПродажиПроцент_26',
					},
					{
						name:'Продажи_27',
					},
					{
						name:'ПродажиПроцент_27',
					},
					{
						name:'Продажи_28',
					},
					{
						name:'ПродажиПроцент_28',
					},
					{
						name:'Продажи_29',
					},
					{
						name:'ПродажиПроцент_29',
					},
					{
						name:'Продажи_30',
					},
					{
						name:'ПродажиПроцент_30',
					},
					{
						name:'Остатки_01',
					},
					{
						name:'Остатки_02',
					},
					{
						name:'Остатки_03',
					},
					{
						name:'Остатки_04',
					},
					{
						name:'Остатки_05',
					},
					{
						name:'Остатки_06',
					},
					{
						name:'Остатки_07',
					},
					{
						name:'Остатки_08',
					},
					{
						name:'Остатки_09',
					},
					{
						name:'Остатки_10',
					},
					{
						name:'ОстаткиИтог',
					},
					{
						name:'Цена_01',
					},
					{
						name:'Цена_02',
					},
					{
						name:'Цена_03',
					},
					{
						name:'Цена_04',
					},
					{
						name:'Цена_05',
					},
					{
						name:'Цена_06',
					},
					{
						name:'Цена_07',
					},
					{
						name:'Цена_08',
					},
					{
						name:'Цена_09',
					},
					{
						name:'Цена_10',
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
						var грид = Ext.getCmp('ТабличноеПолеТовары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПродажиПоПериодам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПродажиПоПериодам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:870px;height:24px;',
			width: 870,
			height: 24,
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Зафиксировать слева',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичностьПродаж',
			text: 'Периодичность продаж:',
			style: 'position:absolute;left:203px;top:27px;width:125px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодов',
			text: 'Периодов:',
			style: 'position:absolute;left:425px;top:27px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодов',
			style: 'position:absolute;left:482px;top:27px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Параметры',
			style: 'position:absolute;left:6px;top:6px;width:870px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаФормирования',
			width: 80,
			height: 19,
			style: 'position:absolute;left:118px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:330px;top:27px;width:90px;height:19px;',
			width: 90,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоРабочихДней',
			style: 'position:absolute;left:604px;top:27px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьГрафик',
			text: 'График:',
			style: 'position:absolute;left:649px;top:27px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'График.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:696px;top:27px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ПродажиПоПериодам.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПродажиПоПериодам.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ПродажиПоПериодам.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПродажиПоПериодам.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить процент',
			style: 'position:absolute;left:6px;top:51px;width:120px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:75px;width:870px;height:437px;',
			height: 437,width: 870,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Остатки (не более 10)',
			style: 'position:absolute;left:438px;top:6px;width:424px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеСклады',
			xtype: 'grid',
			style: 'position:absolute;left:438px;top:46px;width:424px;height:158px;',
			height: 158,width: 424,
			columns:
			[
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Включать в итог',
					width:'100',
					dataIndex:'ВключатьВИтог',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПродажиПоПериодам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Склад',
					},
					{
						name:'Представление',
					},
					{
						name:'ВключатьВИтог',
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
						var грид = Ext.getCmp('ТабличноеПолеСклады');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПродажиПоПериодам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПродажиПоПериодам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:438px;top:22px;width:424px;height:24px;',
			width: 424,
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
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Типы цен (не более 10)',
			style: 'position:absolute;left:438px;top:213px;width:424px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеТипыЦен',
			xtype: 'grid',
			style: 'position:absolute;left:438px;top:253px;width:424px;height:158px;',
			height: 158,width: 424,
			columns:
			[
				{
					text:'Тип цен',
					width:'100',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПродажиПоПериодам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('ТабличноеПолеТипыЦен');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПродажиПоПериодам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПродажиПоПериодам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:438px;top:229px;width:424px;height:24px;',
			width: 424,
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
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Поля (не более 40)',
			style: 'position:absolute;left:6px;top:6px;width:424px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеВыбранныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:424px;height:365px;',
			height: 365,width: 424,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПродажиПоПериодам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
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
						var грид = Ext.getCmp('ТабличноеПолеВыбранныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПродажиПоПериодам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПродажиПоПериодам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:424px;height:24px;',
			width: 424,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
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
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Отборы',
			style: 'position:absolute;left:6px;top:6px;width:424px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:424px;height:365px;',
			height: 365,width: 424,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПродажиПоПериодам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ТабличноеПолеОтбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПродажиПоПериодам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПродажиПоПериодам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:424px;height:24px;',
			width: 424,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Сортировка',
			style: 'position:absolute;left:438px;top:6px;width:424px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеСортировка',
			xtype: 'grid',
			style: 'position:absolute;left:438px;top:46px;width:424px;height:365px;',
			height: 365,width: 424,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'60',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПродажиПоПериодам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
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
						var грид = Ext.getCmp('ТабличноеПолеСортировка');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПродажиПоПериодам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПродажиПоПериодам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:438px;top:22px;width:424px;height:24px;',
			width: 424,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
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