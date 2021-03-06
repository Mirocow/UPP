﻿Ext.require(['Данные.Справочники.ГрафикиРаботы'], function () 
{
	Ext.define('Справочники.ГрафикиРаботы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:813px;height:530px;',
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
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:8px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 368,
			height: 19,
			style: 'position:absolute;left:95px;top:8px;width:368px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьГрафик',
			text: 'Заполнить график',
			style: 'position:absolute;left:8px;top:35px;width:128px;height:27px;',
		},
		{
			id: 'ТабличноеПолеГрафика',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:72px;width:797px;height:425px;',
			height: 425,width: 797,
			columns:
			[
				{
					text:'Месяц',
					width:'94',
					dataIndex:'Месяц',
					flex:1,
				},
				{
					text:'Всего',
					width:'44',
					dataIndex:'Итого',
					flex:1,
				},
				{
					text:'дней',
					width:'44',
					dataIndex:'ДнейЗаМесяц',
					flex:1,
				},
				{
					text:'часов',
					width:'44',
					dataIndex:'ЧасовЗаМесяц',
					flex:1,
				},
				{
					text:'Вечерних',
					width:'44',
					dataIndex:'ВечернихЧасовЗаМесяц',
					flex:1,
				},
				{
					text:'Ночных',
					width:'44',
					dataIndex:'НочныхЧасовЗаМесяц',
					flex:1,
				},
				{
					text:'Часов за день',
					width:'97',
					dataIndex:'ЧасовЗаДень',
					flex:1,
				},
				{
					text:'Из них вечерних',
					width:'97',
					dataIndex:'ИзНихВечерних',
					flex:1,
				},
				{
					text:'Из них ночных',
					width:'97',
					dataIndex:'ИзНихНочных',
					flex:1,
				},
				{
					text:'1',
					width:'30',
					dataIndex:'День1',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ1',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ1',
					flex:1,
				},
				{
					text:'2',
					width:'30',
					dataIndex:'День2',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ2',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ2',
					flex:1,
				},
				{
					text:'3',
					width:'30',
					dataIndex:'День3',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ3',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ3',
					flex:1,
				},
				{
					text:'4',
					width:'30',
					dataIndex:'День4',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ4',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ4',
					flex:1,
				},
				{
					text:'5',
					width:'30',
					dataIndex:'День5',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ5',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ5',
					flex:1,
				},
				{
					text:'6',
					width:'30',
					dataIndex:'День6',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ6',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ6',
					flex:1,
				},
				{
					text:'7',
					width:'30',
					dataIndex:'День7',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ7',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ7',
					flex:1,
				},
				{
					text:'8',
					width:'30',
					dataIndex:'День8',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ8',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ8',
					flex:1,
				},
				{
					text:'9',
					width:'30',
					dataIndex:'День9',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ9',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ9',
					flex:1,
				},
				{
					text:'10',
					width:'30',
					dataIndex:'День10',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ10',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ10',
					flex:1,
				},
				{
					text:'11',
					width:'30',
					dataIndex:'День11',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ11',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ11',
					flex:1,
				},
				{
					text:'12',
					width:'30',
					dataIndex:'День12',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ12',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ12',
					flex:1,
				},
				{
					text:'13',
					width:'30',
					dataIndex:'День13',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ13',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ13',
					flex:1,
				},
				{
					text:'14',
					width:'30',
					dataIndex:'День14',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ14',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ14',
					flex:1,
				},
				{
					text:'15',
					width:'30',
					dataIndex:'День15',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ15',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ15',
					flex:1,
				},
				{
					text:'16',
					width:'30',
					dataIndex:'День16',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ16',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ16',
					flex:1,
				},
				{
					text:'17',
					width:'30',
					dataIndex:'День17',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ17',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ17',
					flex:1,
				},
				{
					text:'18',
					width:'30',
					dataIndex:'День18',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ18',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ18',
					flex:1,
				},
				{
					text:'19',
					width:'30',
					dataIndex:'День19',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ19',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ19',
					flex:1,
				},
				{
					text:'20',
					width:'30',
					dataIndex:'День20',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ20',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ20',
					flex:1,
				},
				{
					text:'21',
					width:'30',
					dataIndex:'День21',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ21',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ21',
					flex:1,
				},
				{
					text:'22',
					width:'30',
					dataIndex:'День22',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ22',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ22',
					flex:1,
				},
				{
					text:'23',
					width:'30',
					dataIndex:'День23',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ23',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ23',
					flex:1,
				},
				{
					text:'24',
					width:'30',
					dataIndex:'День24',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ24',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ24',
					flex:1,
				},
				{
					text:'25',
					width:'30',
					dataIndex:'День25',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ25',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ25',
					flex:1,
				},
				{
					text:'26',
					width:'30',
					dataIndex:'День26',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ26',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ26',
					flex:1,
				},
				{
					text:'27',
					width:'30',
					dataIndex:'День27',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ27',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ27',
					flex:1,
				},
				{
					text:'28',
					width:'30',
					dataIndex:'День28',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ28',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ28',
					flex:1,
				},
				{
					text:'29',
					width:'30',
					dataIndex:'День29',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ29',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ29',
					flex:1,
				},
				{
					text:'30',
					width:'30',
					dataIndex:'День30',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ30',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ30',
					flex:1,
				},
				{
					text:'31',
					width:'30',
					dataIndex:'День31',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'ВЧ31',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НЧ31',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НомерМесяца',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ГрафикиРаботы").data,
					fields: ['Ссылка','Месяц','Итого','ДнейЗаМесяц','ЧасовЗаМесяц','ВечернихЧасовЗаМесяц','НочныхЧасовЗаМесяц','ЧасовЗаДень','ИзНихВечерних','ИзНихНочных','День1','ВЧ1','НЧ1','День2','ВЧ2','НЧ2','День3','ВЧ3','НЧ3','День4','ВЧ4','НЧ4','День5','ВЧ5','НЧ5','День6','ВЧ6','НЧ6','День7','ВЧ7','НЧ7','День8','ВЧ8','НЧ8','День9','ВЧ9','НЧ9','День10','ВЧ10','НЧ10','День11','ВЧ11','НЧ11','День12','ВЧ12','НЧ12','День13','ВЧ13','НЧ13','День14','ВЧ14','НЧ14','День15','ВЧ15','НЧ15','День16','ВЧ16','НЧ16','День17','ВЧ17','НЧ17','День18','ВЧ18','НЧ18','День19','ВЧ19','НЧ19','День20','ВЧ20','НЧ20','День21','ВЧ21','НЧ21','День22','ВЧ22','НЧ22','День23','ВЧ23','НЧ23','День24','ВЧ24','НЧ24','День25','ВЧ25','НЧ25','День26','ВЧ26','НЧ26','День27','ВЧ27','НЧ27','День28','ВЧ28','НЧ28','День29','ВЧ29','НЧ29','День30','ВЧ30','НЧ30','День31','ВЧ31','НЧ31','НомерМесяца',]
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
						name:'Месяц',
					},
					{
						name:'Итого',
					},
					{
						name:'ДнейЗаМесяц',
					},
					{
						name:'ЧасовЗаМесяц',
					},
					{
						name:'ВечернихЧасовЗаМесяц',
					},
					{
						name:'НочныхЧасовЗаМесяц',
					},
					{
						name:'ЧасовЗаДень',
					},
					{
						name:'ИзНихВечерних',
					},
					{
						name:'ИзНихНочных',
					},
					{
						name:'День1',
					},
					{
						name:'ВЧ1',
					},
					{
						name:'НЧ1',
					},
					{
						name:'День2',
					},
					{
						name:'ВЧ2',
					},
					{
						name:'НЧ2',
					},
					{
						name:'День3',
					},
					{
						name:'ВЧ3',
					},
					{
						name:'НЧ3',
					},
					{
						name:'День4',
					},
					{
						name:'ВЧ4',
					},
					{
						name:'НЧ4',
					},
					{
						name:'День5',
					},
					{
						name:'ВЧ5',
					},
					{
						name:'НЧ5',
					},
					{
						name:'День6',
					},
					{
						name:'ВЧ6',
					},
					{
						name:'НЧ6',
					},
					{
						name:'День7',
					},
					{
						name:'ВЧ7',
					},
					{
						name:'НЧ7',
					},
					{
						name:'День8',
					},
					{
						name:'ВЧ8',
					},
					{
						name:'НЧ8',
					},
					{
						name:'День9',
					},
					{
						name:'ВЧ9',
					},
					{
						name:'НЧ9',
					},
					{
						name:'День10',
					},
					{
						name:'ВЧ10',
					},
					{
						name:'НЧ10',
					},
					{
						name:'День11',
					},
					{
						name:'ВЧ11',
					},
					{
						name:'НЧ11',
					},
					{
						name:'День12',
					},
					{
						name:'ВЧ12',
					},
					{
						name:'НЧ12',
					},
					{
						name:'День13',
					},
					{
						name:'ВЧ13',
					},
					{
						name:'НЧ13',
					},
					{
						name:'День14',
					},
					{
						name:'ВЧ14',
					},
					{
						name:'НЧ14',
					},
					{
						name:'День15',
					},
					{
						name:'ВЧ15',
					},
					{
						name:'НЧ15',
					},
					{
						name:'День16',
					},
					{
						name:'ВЧ16',
					},
					{
						name:'НЧ16',
					},
					{
						name:'День17',
					},
					{
						name:'ВЧ17',
					},
					{
						name:'НЧ17',
					},
					{
						name:'День18',
					},
					{
						name:'ВЧ18',
					},
					{
						name:'НЧ18',
					},
					{
						name:'День19',
					},
					{
						name:'ВЧ19',
					},
					{
						name:'НЧ19',
					},
					{
						name:'День20',
					},
					{
						name:'ВЧ20',
					},
					{
						name:'НЧ20',
					},
					{
						name:'День21',
					},
					{
						name:'ВЧ21',
					},
					{
						name:'НЧ21',
					},
					{
						name:'День22',
					},
					{
						name:'ВЧ22',
					},
					{
						name:'НЧ22',
					},
					{
						name:'День23',
					},
					{
						name:'ВЧ23',
					},
					{
						name:'НЧ23',
					},
					{
						name:'День24',
					},
					{
						name:'ВЧ24',
					},
					{
						name:'НЧ24',
					},
					{
						name:'День25',
					},
					{
						name:'ВЧ25',
					},
					{
						name:'НЧ25',
					},
					{
						name:'День26',
					},
					{
						name:'ВЧ26',
					},
					{
						name:'НЧ26',
					},
					{
						name:'День27',
					},
					{
						name:'ВЧ27',
					},
					{
						name:'НЧ27',
					},
					{
						name:'День28',
					},
					{
						name:'ВЧ28',
					},
					{
						name:'НЧ28',
					},
					{
						name:'День29',
					},
					{
						name:'ВЧ29',
					},
					{
						name:'НЧ29',
					},
					{
						name:'День30',
					},
					{
						name:'ВЧ30',
					},
					{
						name:'НЧ30',
					},
					{
						name:'День31',
					},
					{
						name:'ВЧ31',
					},
					{
						name:'НЧ31',
					},
					{
						name:'НомерМесяца',
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
						var грид = Ext.getCmp('ТабличноеПолеГрафика');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГрафикиРаботы.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрафикиРаботы.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ПараметрыГрафика',
			text: 'График пятидневка, 40-часовая рабочая неделя, выходные суббота и воскресенье.',
			style: 'position:absolute;left:155px;top:35px;width:308px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:712px;top:8px;width:25px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерТекущегоГода',
			style: 'position:absolute;left:742px;top:8px;width:63px;height:19px;',
			width: 63,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'СсылкаИзменитьПараметрыЗаполнения',
			text: 'Изменить параметры заполнения графика...',
			style: 'position:absolute;left:628px;top:34px;width:177px;height:34px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:505px;width:813px;height:25px;',
			width: 813,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
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