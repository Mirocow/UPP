﻿Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:582px;height:366px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			width: 582,
			height: 25,
			items:
			[
				{
					text:'Содержимое контейнера',
				},
				{
					text:'Контейнер',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтправитель',
			text: 'Отправитель:',
			style: 'position:absolute;left:8px;top:85px;width:73px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель',
			text: 'Получатель:',
			style: 'position:absolute;left:8px;top:106px;width:73px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Отправитель',
			text: 'Отправитель',
			style: 'position:absolute;left:87px;top:84px;width:487px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Получатель',
			text: 'Получатель',
			style: 'position:absolute;left:87px;top:105px;width:487px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодробнаяИнформация',
			text: 'НадписьПодробнаяИнформация',
			style: 'position:absolute;left:8px;top:33px;width:566px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Тип не задан!',
			style: 'position:absolute;left:87px;top:64px;width:487px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:142px;width:566px;height:191px;',
			height: 191,width: 566,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРедактироватьТекстВыгрузки',
			text: 'Редактировать',
			style: 'position:absolute;left:486px;top:8px;width:80px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика1',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр2',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗашифровано',
			text: '\r\nВНИМАНИЕ!\r\nВероятно, содержимое этого сообщения не было распаковано при получении!',
			style: 'position:absolute;left:0px;top:0px;width:566px;height:111px;text-align:center;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр2',
			text: 'Подтверждение об отправке файла отчетности',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколВходногоКонтроляСтр3',
			text: 'Протокол входного контроля',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр5',
			text: 'Подтверждение об отправке файла отчетности',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколВходногоКонтроляСтр6',
			text: 'Протокол входного контроля',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр3',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлВыгрузкиСтр1',
			text: 'Файл отчетности',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр2',
			text: 'Подпись под подтверждением',
			style: 'position:absolute;left:35px;top:35px;width:472px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр3',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлВыгрузкиСтр4',
			text: 'Файл отчетности',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр5',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр6',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр4',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:87px;width:59px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр1',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр4',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Для просмотра подписи сервера документооборота под квитанцией о приеме нажмите',
			style: 'position:absolute;left:0px;top:92px;width:452px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:84px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр5',
			text: 'сюда.',
			style: 'position:absolute;left:452px;top:92px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Для печати квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:113px;width:354px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр5',
			text: 'сюда.',
			style: 'position:absolute;left:354px;top:113px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Для сохранения на диск квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:134px;width:421px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр5',
			text: 'сюда.',
			style: 'position:absolute;left:421px;top:134px;width:34px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр1',
			text: 'Подписи ответственных лиц организации:',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр4',
			text: 'Подписи ответственных лиц организации',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр5',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр6',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Для просмотра подписи налогового органа под протоколом нажмите',
			style: 'position:absolute;left:0px;top:92px;width:360px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр6',
			text: 'сюда.',
			style: 'position:absolute;left:360px;top:92px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Для печати протокола с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:113px;width:303px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр6',
			text: 'сюда.',
			style: 'position:absolute;left:303px;top:113px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Для сохранения на диск протокола с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:134px;width:371px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр6',
			text: 'сюда.',
			style: 'position:absolute;left:371px;top:134px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:84px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаПротоколПроверки',
			text: 'НадписьСостояниеПодтвержденияНаПротоколПроверки',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаПодтверждениеОтправки',
			text: 'НадписьСостояниеПодтвержденияНаПодтверждениеОтправки',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУведомлениеОбУточненииСтр21',
			text: 'Уведомление об уточнении',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр21',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр21',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаСтр4',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:87px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколПриема2НДФЛСтр22',
			text: 'Протокол приема сведений по форме 2-НДФЛ',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписи1Стр22',
			text: 'Подпись налогового органа под протоколом',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверить1Стр22',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьРеестрСведений2НДФЛСтр22',
			text: 'Реестр сведений по форме 2-НДФЛ',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписи2Стр22',
			text: 'Подпись налогового органа под реестром',
			style: 'position:absolute;left:35px;top:87px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверить2Стр22',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:87px;width:59px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:0px;top:3px;width:566px;height:168px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:171px;width:566px;height:20px;',
			height: 20,width: 566,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВложенияСтр7',
			text: 'Просмотреть вложения',
			style: 'position:absolute;left:79px;top:5px;width:487px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель1',
			text: 'Вложения:',
			style: 'position:absolute;left:0px;top:5px;width:73px;height:15px;',
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
			name: 'НадписьТекстовоеСообщениеСтр7',
			text: 'Текстовое сообщение',
			style: 'position:absolute;left:31px;top:9px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаПодТекстовымСообщениемСтр7',
			text: 'Подпись налогового органа под текстовым сообщением',
			style: 'position:absolute;left:31px;top:33px;width:474px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверить1Стр7',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:33px;width:59px;height:15px;text-align:right;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:58px;width:566px;height:93px;',
			height: 93,width: 566,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНеформализованныйДокументСтр7',
			text: 'Неформализованные документы',
			style: 'position:absolute;left:31px;top:0px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеНеформализованногоДокументаСтр7',
			text: 'Описание неформализованных документов',
			style: 'position:absolute;left:31px;top:52px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаПодНеформализованнымДокументомСтр7',
			text: 'Подписи налогового органа под неформализованными документами',
			style: 'position:absolute;left:31px;top:26px;width:473px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверить2Стр7',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:27px;width:59px;height:15px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика2',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаНеформализованноеСообщение',
			text: 'НадписьСостояниеПодтвержденияНаНеформализованноеСообщение',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТекстовоеСообщениеСтр8',
			text: 'Текстовое сообщение',
			style: 'position:absolute;left:31px;top:9px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалогоплательщикаПодТекстовымСообщениемСтр8',
			text: 'Подпись налогоплательщика под текстовым сообщением',
			style: 'position:absolute;left:31px;top:33px;width:535px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:58px;width:566px;height:93px;',
			height: 93,width: 566,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОписаниеНеформализованногоДокументаСтр8',
			text: 'Описание неформализованных документов',
			style: 'position:absolute;left:31px;top:27px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалогоплательщикаПодНеформализованнымДокументомСтр8',
			text: 'Подписи налогоплательщика под неформализованными документами',
			style: 'position:absolute;left:31px;top:1px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалогоплательщикаПодФайломОписанияНеформализованногоДокументаСтр8',
			text: 'Подпись налогоплательщика под описанием',
			style: 'position:absolute;left:31px;top:53px;width:535px;height:15px;',
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
			name: 'НадписьДокументСтр9',
			text: 'Документ',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр9',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр9',
			text: 'Подписи ответственных лиц организации на документе:',
			style: 'position:absolute;left:35px;top:87px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияНеформализованногоДокументаСтр9',
			text: 'Описание неформализованного документа',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛиц2Стр9',
			text: 'Подписи ответственных лиц организации на описании:',
			style: 'position:absolute;left:35px;top:113px;width:531px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр10',
			text: 'Подтверждение отправки документа',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр10',
			text: 'Подпись под подтверждением',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика3',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр10',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтветаНаПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			text: 'НадписьСостояниеОтветаНаПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр11',
			text: 'Подтверждение отправки документа',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр11',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Для просмотра подписи сервера документооборота под квитанцией о приеме нажмите',
			style: 'position:absolute;left:0px;top:66px;width:452px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:58px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр11',
			text: 'сюда.',
			style: 'position:absolute;left:452px;top:66px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Для печати квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:87px;width:354px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр11',
			text: 'сюда.',
			style: 'position:absolute;left:354px;top:87px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Для сохранения на диск квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:108px;width:421px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр11',
			text: 'сюда.',
			style: 'position:absolute;left:421px;top:108px;width:34px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументСтр12',
			text: 'Документ',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр12',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр12',
			text: 'Подписи ответственных лиц организации',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаСтр12',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:87px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр12',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:87px;width:59px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлЗапросаСтр13',
			text: 'Файл запроса',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр13',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр13',
			text: 'Подписи ответственных лиц организации:',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактироватьЗапрос',
			text: 'Редактировать',
			style: 'position:absolute;left:486px;top:8px;width:80px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщикаНаЗапрос',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаПодтверждениеОтправкиЗапроса',
			text: 'НадписьСостояниеПодтвержденияНаПодтверждениеОтправкиЗапроса',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр14',
			text: 'Подтверждение об отправке',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр14',
			text: 'Подпись под подтверждением',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр14',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПротоколПроверкиСтр15',
			text: 'Протокол входного контроля',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр15',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр15',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика15',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаПротоколПроверки15',
			text: 'НадписьСостояниеПодтвержденияНаПротоколПроверки15',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлВыгрузкиСтр16',
			text: 'Файл запроса',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр16',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр16',
			text: 'Подписи ответственных лиц организации',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаСтр16',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:87px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр16',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:87px;width:59px;height:15px;text-align:right;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр17',
			text: 'Подтверждение отправки',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр17',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр17',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Для просмотра подписи сервера документооборота под квитанцией о приеме нажмите',
			style: 'position:absolute;left:0px;top:92px;width:452px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:84px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр17',
			text: 'сюда.',
			style: 'position:absolute;left:452px;top:92px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Для печати квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:113px;width:354px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр17',
			text: 'сюда.',
			style: 'position:absolute;left:354px;top:113px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Для сохранения на диск квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:134px;width:421px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр17',
			text: 'сюда.',
			style: 'position:absolute;left:421px;top:134px;width:34px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПротоколВходногоКонтроляСтр18',
			text: 'Протокол входного контроля',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр18',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр18',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Для просмотра подписи налогового органа под протоколом нажмите',
			style: 'position:absolute;left:0px;top:92px;width:360px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр18',
			text: 'сюда.',
			style: 'position:absolute;left:360px;top:92px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Для печати протокола с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:113px;width:303px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр18',
			text: 'сюда.',
			style: 'position:absolute;left:303px;top:113px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Для сохранения на диск протокола с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:134px;width:371px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр18',
			text: 'сюда.',
			style: 'position:absolute;left:371px;top:134px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:84px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветНаЗапросСтр19',
			text: 'Ответ на запрос на информационное обслуживание',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр19',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:61px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр19',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:61px;width:59px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика16',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаОтветНаЗапрос',
			text: 'НадписьСостояниеПодтвержденияНаОтветНаЗапрос',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр19',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветНаЗапросСтр20',
			text: 'Ответ на запрос на информационное обслуживание',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр20',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр20',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Для просмотра подписи налогового органа под ответом на запрос нажмите',
			style: 'position:absolute;left:0px;top:92px;width:393px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр20',
			text: 'сюда.',
			style: 'position:absolute;left:393px;top:92px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Для сохранения на диск ответа на запрос с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:112px;width:403px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр20',
			text: 'сюда.',
			style: 'position:absolute;left:404px;top:112px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:84px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаРасшифроватьСообщение',
			text: 'Распаковать сообщение',
			style: 'position:absolute;left:200px;top:115px;width:164px;height:21px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗашифровано1',
			text: 'Содержимое этого сообщения зашифровано.\r\nВы можете изменить содержимое сообщения и затем зашифровать его заново.',
			style: 'position:absolute;left:0px;top:0px;width:566px;height:111px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаИзменитьСодержимое',
			text: 'Изменить содержимое',
			style: 'position:absolute;left:198px;top:115px;width:164px;height:21px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеСтр23',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСтр23');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеСтр24',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСтр24');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеСтр25',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСтр25');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПротоколКвитанция',
			text: 'НадписьСостояниеПротоколКвитанция',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеСтр26',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСтр26');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеОшибки',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеСтр28',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСтр28');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента1',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПисьмоВходящееКвитанция',
			text: 'НадписьСостояниеПисьмоВходящееКвитанция',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеСтр29',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСтр29');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеСтр30',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСтр30');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеСтр31',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСтр31');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеДекларацияНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеДекларацияНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеИзвещениеДекларацияНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеДекларацияНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРезультатПриемаДекларацияНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатПриемаДекларацияНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента2',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНП',
			text: 'НадписьСостояниеИзвещениеРезультатПриемаНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеРезультатПриемаНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеРезультатПриемаНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРезультатОбработкиДекларацияНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатОбработкиДекларацияНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента3',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатОбработкиНП',
			text: 'НадписьСостояниеИзвещениеРезультатОбработкиНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеРезультатОбработкиНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеРезультатОбработкиНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеПодтверждениеДекларацияНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеПодтверждениеДекларацияНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента4',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНП',
			text: 'НадписьСостояниеИзвещениеПодтверждениеНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеПодтверждениеНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеПодтверждениеНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеФорма2НДФЛНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеФорма2НДФЛНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеПодтверждениеФорма2НДФЛНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеПодтверждениеФорма2НДФЛНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента5',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:161px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНП2НДФЛ',
			text: 'НадписьСостояниеИзвещениеПодтверждениеНП2НДФЛ',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеФорма2НДФЛНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеФорма2НДФЛНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРезультатПриемаФорма2НДФЛНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатПриемаФорма2НДФЛНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента6',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:161px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНП2НДФЛ',
			text: 'НадписьСостояниеИзвещениеРезультатПриемаНП2НДФЛ',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеОбращениеНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеОбращениеНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеИзвещениеОбращениеНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеОбращениеНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРезультатПриемаОбращениеНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатПриемаОбращениеНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента7',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНПОбращение',
			text: 'НадписьСостояниеИзвещениеРезультатПриемаНПОбращение',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеПодтверждениеОбращениеНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеПодтверждениеОбращениеНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента8',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНПОбращение',
			text: 'НадписьСостояниеИзвещениеПодтверждениеНПОбращение',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеПисьмоНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеПисьмоНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента9',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПисьмоНП',
			text: 'НадписьСостояниеИзвещениеПисьмоНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеПисьмоНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеПисьмоНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРассылкаНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРассылкаНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента10',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРассылкаНП',
			text: 'НадписьСостояниеИзвещениеРассылкаНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеРассылкаНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеРассылкаНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРассылкаНОИндивидуальная',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРассылкаНОИндивидуальная');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеЗапросНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеЗапросНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеПодтверждениеЗапросНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеПодтверждениеЗапросНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента11',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНПЗапрос',
			text: 'НадписьСостояниеИзвещениеПодтверждениеНПЗапрос',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеЗапросНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеЗапросНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРезультатПриемаЗапросНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатПриемаЗапросНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента12',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНПЗапрос',
			text: 'НадписьСостояниеИзвещениеРезультатПриемаНПЗапрос',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеРезультатОбработкиЗапросНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатОбработкиЗапросНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента13',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатОбработкиНПЗапрос',
			text: 'НадписьСостояниеИзвещениеРезультатОбработкиНПЗапрос',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеЗаявлениеНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеЗаявлениеНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеПодтверждениеЗаявлениеНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеПодтверждениеЗаявлениеНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента14',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНПЗаявление',
			text: 'НадписьСостояниеИзвещениеПодтверждениеНПЗаявление',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеЗаявлениеНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеЗаявлениеНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРезультатПриемаЗаявлениеНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатПриемаЗаявлениеНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента15',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНПЗаявление',
			text: 'НадписьСостояниеИзвещениеРезультатПриемаНПЗаявление',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеРезультатОбработкиЗаявлениеРФНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатОбработкиЗаявлениеРФНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента16',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатОбработкиРФНП',
			text: 'НадписьСостояниеИзвещениеРезультатОбработкиРФНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеРезультатОбработкиРФНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеРезультатОбработкиРФНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеИзвещениеОбОтзывеЗаявлениеРФНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеОбОтзывеЗаявлениеРФНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеИзвещениеРезультатОбработкиТСНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеРезультатОбработкиТСНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеСообщениеОбОтзывеЗаявлениеРФНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеСообщениеОбОтзывеЗаявлениеРФНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента17',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеОбОтзывеЗаявлениеРФНП',
			text: 'НадписьСостояниеИзвещениеОбОтзывеЗаявлениеРФНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеРезультатОбработкиЗаявлениеТСНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатОбработкиЗаявлениеТСНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента18',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:158px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатОбработкиТСНП',
			text: 'НадписьСостояниеИзвещениеРезультатОбработкиТСНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеДокументНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:117px;',
			height: 117,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеДокументНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента19',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:130px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:127px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеДокументНП',
			text: 'НадписьСостояниеИзвещениеДокументНП',
			style: 'position:absolute;left:0px;top:145px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента20',
			text: 'Результат приема документа абонентом:',
			style: 'position:absolute;left:0px;top:161px;width:244px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеРезультатПриемаДокументНП',
			text: 'НадписьСостояниеРезультатПриемаДокументНП',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СодержимоеИзвещениеДокументНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеДокументНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеРезультатПриемаДокументНП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеРезультатПриемаДокументНП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'СодержимоеИзвещениеРезультатПриемаНО',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('СодержимоеИзвещениеРезультатПриемаНО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'ПервичноеСообщениеСодержащееОтчетностьФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ПервичноеСообщениеСодержащееОтчетностьФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'ПодтверждениеДатыОтправкиФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ПодтверждениеДатыОтправкиФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДатыОтправкиФСГС',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:161px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеДатыОтправкиФСГС',
			text: 'НадписьСостояниеИзвещениеПодтверждениеДатыОтправкиФСГС',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ИзвещениеПодтверждениеДатыОтправкиФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ИзвещениеПодтверждениеДатыОтправкиФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'ИзвещениеОПолученииОтчетностиФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ИзвещениеОПолученииОтчетностиФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'ПротоколВходногоКонтроляОтчетностиФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ПротоколВходногоКонтроляОтчетностиФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПротоколВходногоКонтроляОтчетностиФСГС',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:161px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПротоколВходногоКонтроляОтчетностиФСГС',
			text: 'НадписьСостояниеИзвещениеПротоколВходногоКонтроляОтчетностиФСГС',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ИзвещениеПротоколВходногоКонтроляОтчетностиФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ИзвещениеПротоколВходногоКонтроляОтчетностиФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'ПисьмоВходящееФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ПисьмоВходящееФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПисьмоВходящееФСГС',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:161px;width:566px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПисьмоВходящееФСГС',
			text: 'НадписьСостояниеИзвещениеПисьмоВходящееФСГС',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ИзвещениеПисьмоВходящееФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ИзвещениеПисьмоВходящееФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'ПисьмоИсходящееФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ПисьмоИсходящееФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			id: 'ИзвещениеПисьмоИсходящееФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Сообщение-владелец',
					width:'100',
					dataIndex:'СообщениеВладелец',
					flex:1,
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'100',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Статус проверки подписи',
					width:'100',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'100',
					dataIndex:'ТипФайлаОтчетности',
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
						name:'Тип',
					},
					{
						name:'Имя',
					},
					{
						name:'СообщениеВладелец',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ТипФайлаОтчетности',
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
						var грид = Ext.getCmp('ИзвещениеПисьмоИсходящееФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокументаСобытия");
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
			xtype: 'label',
			text: 'Содержимое',
			style: 'position:absolute;left:8px;top:126px;width:566px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьОтправитель1',
			text: 'Тип:',
			style: 'position:absolute;left:8px;top:64px;width:73px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:372px;top:64px;width:190px;height:24px;',
			width: 190,
			height: 24,
			items:
			[
				{
					text:'Подписать',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:582px;height:25px;',
			width: 582,
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