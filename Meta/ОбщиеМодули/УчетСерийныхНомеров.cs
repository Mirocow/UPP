﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace V82.ОбщиеМодули
{
	public partial class УчетСерийныхНомеров
	{
		// Функция формирует значение нового ключа связи.
		//
		// Параметры функции
		// ПараметрыСвязиСтрокТЧ – соответствие, в котором сохраняется текущее «свободное» значение ключа
		// ДокументОбъект – документ,
		// ИмяТЧ – имя «основной» табличной части объекта,
		// ПроверятьМаксЗначение – флаг необходимости проверки начальной инициализации ключа
		//

		public object ПолучитьНовыйКлючСвязи(/*ПараметрыСвязиСтрокТЧ, ДокументОбъект, ИмяТЧ, ПроверятьМаксЗначение = Ложь*/)
		{
			if(true/*ПроверятьМаксЗначение*/)
			{
				//ПроверитьМаксЗначениеКлюча(ПараметрыСвязиСтрокТЧ, ДокументОбъект, ИмяТЧ);
			}
			//МаксКлюч = ПараметрыСвязиСтрокТЧ[ИмяТЧ].СвободныйКлюч;
			/*// берется текущее «свободное» значение ключа
*/
			//ПараметрыСвязиСтрокТЧ[ИмяТЧ].СвободныйКлюч = МаксКлюч + 1;
			/*// после чего «свободное» значение увеличивается на единицу
*/
			//ПараметрыСвязиСтрокТЧ[ИмяТЧ].ФлагМодификации = Истина;
			/*// устанавливаем признак  модифицированности
*/
			return null;
		}
		// ПолучитьНовыйКлючСвязи()
		// Процедура проверяет максимальное значение ключа связи.
		//

		public void ПроверитьМаксЗначениеКлюча(/*ПараметрыСвязиСтрокТЧ, ДокументОбъект, ИмяТЧ*/)
		{
			if(true/*ПараметрыСвязиСтрокТЧ[ИмяТЧ].СвободныйКлюч <> Неопределено*/)
			{
				/*// «не занятый» ключ уже был определен ранее.
*/
			}
			/*// При первом обращении «свободный» ключ необходимо рассчитать.
*/
			if(true/*ДокументОбъект[ИмяТЧ].Количество() = 0*/)
			{
				//ПараметрыСвязиСтрокТЧ[ИмяТЧ].СвободныйКлюч = 1;
				/*// отсчет начинается с нуля
*/
			}
		}
		// ПроверитьМаксЗначениеКлюча()
		// Процедура удаляет строки подчиненной табличной части для которых нет
		// соответствующей строки табличной части номенклатуры.
		//

		public void УдалитьНеиспользуемыеСтрокиПодчиненнойТЧ(/*ДокументОбъект, ПараметрыСвязиСтрокТЧ, ИмяТЧ, ИмяПодчиненнойТЧ = "СерийныеНомера"*/)
		{
			if(true/*ПараметрыСвязиСтрокТЧ[ИмяТЧ].ФлагМодификации*/)
			{
				//КолвоСтрокДопТЧ = ДокументОбъект[ИмяПодчиненнойТЧ].Количество();
			}
		}
		// УдалитьНеиспользуемыеСтрокиПодчиненнойТЧ()
		// Процедура проверяет соответствие номенклатуры и серийных номеров по ключу связи.
		//

		public void ПроверитьСерийныеНомера(/*СтрокаТабличнойЧасти, ДокументОбъект*/)
		{
			if(true/*СтрокаТабличнойЧасти.КлючСвязи > 0*/)
			{
				//Строка = ДокументОбъект.СерийныеНомера.Найти(СтрокаТабличнойЧасти.КлючСвязи, "КлючСвязи");
				if(true/*Строка <> Неопределено И Строка.СерийныйНомер.Владелец <> СтрокаТабличнойЧасти.Номенклатура*/)
				{
					//СтрокаТабличнойЧасти.КлючСвязи = 0;
				}
			}
		}
		// ПроверитьСерийныеНомера()
		// Процедура проверяет соответстви количества серийных номеров количеству товаров.
		//
		// Параметры:
		//	ДокументОбъект - ДокументОбъект - Докемент
		//	ИмяТЧ - Строка - Имя табличной части
		//	Заголовок - Строка - Заголовок
		//

		public void ПроверитьКоличествоСерийныхНомеровВДокументе(/*
	ДокументОбъект,
	ИмяТЧ,
	Заголовок = ""
	*/)
		{
			//СтруктураПолей = Новый Структура;
			//СтруктураПолей.Вставить("Номенклатура",			"Номенклатура");
			//СтруктураПолей.Вставить("Количество", 			"Количество * Коэффициент /Номенклатура.ЕдиницаХраненияОстатков.Коэффициент");
			//СтруктураПолей.Вставить("ВестиСерийныеНомера",	"Номенклатура.ВестиСерийныеНомера");
			//СтруктураПолей.Вставить("КлючСвязи",			"КлючСвязи");
			//ТаблицаНоменклатуры = УправлениеЗапасами.СформироватьЗапросПоТабличнойЧасти(ДокументОбъект, ИмяТЧ, СтруктураПолей).Выгрузить();
		}
		// ПроверитьКоличествоСерийныхНомеровВДокументе()
		// Процедура управляет видимостью кнопки ввода списка серийных номеров.
		//

		public void УстановитьВидимостьКнопкиВводаСерийныхНомеров(/*КоманднаяПанель, ЕстьСерийныеНомера = Истина*/)
		{
			//ИспользоватьСерийныеНомера = Константы.ИспользоватьСерийныеНомера.Получить();
			if(true/*Не ИспользоватьСерийныеНомера ИЛИ Не ЕстьСерийныеНомера*/)
			{
				//ИндексКнопкиСерийныеНомера = КоманднаяПанель.Кнопки.Индекс(КоманднаяПанель.Кнопки.СерийныеНомера);
				if(true/*ИндексКнопкиСерийныеНомера > -1*/)
				{
					//КоманднаяПанель.Кнопки.Удалить(ИндексКнопкиСерийныеНомера);
				}
			}
		}
		// УстановитьВидимостьКнопкиВводаСерийныхНомеров()
		// Функция возвращает форматированное значение разряда серийного номера.
		//
		// Параметры:
		//	ИсходноеЗначение - Строка, Число - Исходное значение разряда
		//	РазмерРазряда - Число - Количество знаков разряда серийного номера
		//
		// Возвращаемое значение:
		//	Строка - Форматированное значение разряда
		//

		public object ПолучитьФорматированноеЗначениеРазряда(/*
	ИсходноеЗначение,
	РазмерРазряда
	*/)
		{
			/*// Уберем разделители.
*/
			if(true/*ТипЗнч(ИсходноеЗначение) = Тип("Число")*/)
			{
				//НовоеЗначение = Формат(ИсходноеЗначение, "ЧГ=0");
			}
			/*// Выберем количество символов, соответствующее размеру разряда серийного номера.
*/
			//НовоеЗначение = Прав(НовоеЗначение, РазмерРазряда);
			//КолвоСимволов = СтрДлина(НовоеЗначение);
			/*// Добавим лидирующие нули перед значением разряда.
*/
			if(true/*КолвоСимволов < РазмерРазряда*/)
			{
				//НовоеЗначение = "" + Формат(0, "ЧН=; ЧГ=0; ЧЦ="+(РазмерРазряда - КолвоСимволов)+"; ЧВН=") + НовоеЗначение;
			}
			/*// Проведем окончательное форматирование значения.
*/
			//НовоеЗначение = Формат(НовоеЗначение, "ЧГ=0; ЧЦ="+РазмерРазряда+"; ЧВН=");
			return null;
		}
		// СформатироватьЗначениеРазряда()
		// Функция возвращает значение для разряда серийного номера по указанному источнику.
		//

		public object ПолучитьЗначениеРазрядаСерийногоНомера(/*Источник, Значение, РазмерРазряда, СтруктураПараметров*/)
		{
			if(true/*ТипЗнч(СтруктураПараметров) <> Тип("Структура")*/)
			{
			}
			//ДатаВремя = СтруктураПараметров.ДатаВремя;
			if(true/*Источник = Перечисления.ИсточникиЗначенийРазрядов.Значение*/)
			{
				//НовоеЗначение = Значение;
			}
			//НовоеЗначение = ПолучитьФорматированноеЗначениеРазряда(НовоеЗначение, РазмерРазряда);
			return null;
		}
		// ПолучитьЗначениеРазрядаСерийногоНомера()
		// Процедура осуществляет обработку заполнения данных о серийном номере при
		// подборе. Вызывается из обработки подбора в тех документах, в которых
		// предусмотрена работа с серийными номерами.
		//
		// Параметры
		//  ЗначениеВыбора        - <Структура>
		//                        - Структура параметров, передаваемая
		//                          процедуре-обработчику подбора.
		//
		//  СерийныеНомера        - <ДокументТабличнаяЧасть.*.СерийныеНомера>
		//                        - Табличная часть документа, содержащая серийные
		//                          номера.
		//
		//  ТабличнаяЧасть        - <ДокументТабличнаяЧасть.*.*>
		//                        - Табличная часть документа, в которую осуществляется
		//                          подбор.
		//
		//  СтрокаТабличнойЧасти  - <ДокументТабличнаяЧастьСтрока.*.*>
		//                        - Строка табличной части документа, в которую был
		//                          осуществлён подбор.
		//
		//  ПараметрыСвязиСтрокТЧ - <Соответствие>
		//                        - Параметр связи строк табличных частей.
		//
		//  ТабличнаяЧастьИмя     - <Строка>
		//                        - Имя табличной части документа, в которую
		//                          осуществляется подбор.
		//
		//  ДокументОбъект        - <ДокументОбъект.*>
		//                        - Документ, в который осуществляется подбор.
		//

		public void ОбработкаПодбораНоменклатурыПоСерийномуНомеру(/*ЗначениеВыбора, СерийныеНомера,
                                                        ТабличнаяЧасть, СтрокаТабличнойЧасти,
                                                        ПараметрыСвязиСтрокТЧ,
                                                        ТабличнаяЧастьИмя,
                                                        ДокументОбъект*/)
		{
			//СерийныйНомер = Неопределено;
			//Количество    = Неопределено;
			//ЗначениеВыбора.Свойство("Количество",    Количество);
			//ЗначениеВыбора.Свойство("СерийныйНомер", СерийныйНомер);
			if(true/*СерийныйНомер <> Неопределено*/)
			{
				if(true/*СерийныеНомера.Найти(СерийныйНомер, "СерийныйНомер") <> Неопределено*/)
				{
					//ОбщегоНазначения.СообщитьОбОшибке("Серийный номер """ + СокрЛП(СерийныйНомер.Код) + """ уже присутствует в списке серийных номеров.");
					//СтрокаТабличнойЧасти.Количество = СтрокаТабличнойЧасти.Количество - Количество;
					if(true/*СтрокаТабличнойЧасти.Количество = 0*/)
					{
						//ТабличнаяЧасть.Удалить(СтрокаТабличнойЧасти);
					}
				}
				if(true/*СтрокаТабличнойЧасти.КлючСвязи = 0*/)
				{
					//СтрокаТабличнойЧасти.КлючСвязи = ПолучитьНовыйКлючСвязи(ПараметрыСвязиСтрокТЧ, ДокументОбъект, ТабличнаяЧастьИмя, Истина);
				}
				//СтрокаСН                       = СерийныеНомера.Добавить();
				//СтрокаСН.КлючСвязи             = СтрокаТабличнойЧасти.КлючСвязи;
				//СтрокаСН.СерийныйНомер         = СерийныйНомер;
			}
		}
		// ОбработкаПодбораНоменклатурыПоСерийномуНомеру()
		// Функция определяет новое значение для вида счетчика.
		//

		public object ПолучитьНовоеЗначениеСчетчика(/*ВидСчетчика, Организация, Подразделение, НоменклатурнаяГруппа, Номенклатура*/)
		{
			if(true/*НЕ ЗначениеЗаполнено(ВидСчетчика)*/)
			{
			}
			//МенеджерЗаписи = РегистрыСведений.СчетчикиДляЗначенийРазрядов.СоздатьМенеджерЗаписи();
			//МенеджерЗаписи.ВидСчетчика = ВидСчетчика;
			//МенеджерЗаписи.Организация 			= ?(ВидСчетчика.ВПределахОрганизации, 		Организация, 	Справочники.Организации.ПустаяСсылка());
			//МенеджерЗаписи.Подразделение 		= ?(ВидСчетчика.ВПределахПодразделения, 	Подразделение, 	Справочники.Подразделения.ПустаяСсылка());
			//МенеджерЗаписи.НоменклатурнаяГруппа = ?(ВидСчетчика.ВПределахНоменклатурнойГруппы, НоменклатурнаяГруппа, Справочники.НоменклатурныеГруппы.ПустаяСсылка());
			//МенеджерЗаписи.Номенклатура 		= ?(ВидСчетчика.ВПределахНоменклатуры, 		Номенклатура, 	Справочники.Номенклатура.ПустаяСсылка());
			//МенеджерЗаписи.Прочитать();
			if(true/*МенеджерЗаписи.Выбран()*/)
			{
				//ПоследнееЗначение = МенеджерЗаписи.Значение;
				//НовоеЗначение = ПоследнееЗначение + 1;
			}
			if(true/*НовоеЗначение > ВидСчетчика.КонечноеЗначение*/)
			{
				//НовоеЗначение = ВидСчетчика.НачальноеЗначение;
			}
			//МенеджерЗаписи = РегистрыСведений.СчетчикиДляЗначенийРазрядов.СоздатьМенеджерЗаписи();
			//МенеджерЗаписи.ВидСчетчика = ВидСчетчика;
			//МенеджерЗаписи.Организация 			= ?(ВидСчетчика.ВПределахОрганизации, 		Организация, 	Справочники.Организации.ПустаяСсылка());
			//МенеджерЗаписи.Подразделение 		= ?(ВидСчетчика.ВПределахПодразделения, 	Подразделение, 	Справочники.Подразделения.ПустаяСсылка());
			//МенеджерЗаписи.НоменклатурнаяГруппа = ?(ВидСчетчика.ВПределахНоменклатурнойГруппы, НоменклатурнаяГруппа, Справочники.НоменклатурныеГруппы.ПустаяСсылка());
			//МенеджерЗаписи.Номенклатура 		= ?(ВидСчетчика.ВПределахНоменклатуры, 		Номенклатура, 	Справочники.Номенклатура.ПустаяСсылка());
			//МенеджерЗаписи.Значение = НовоеЗначение;
			//МенеджерЗаписи.Записать();
			return null;
		}
		// ПолучитьНовоеЗначениеСчетчика()
		// Функция определяет последнее значение для вида счетчика.
		//

		public object ПолучитьПоследнееЗначениеСчетчика(/*ВидСчетчика, Организация, Подразделение, НоменклатурнаяГруппа, Номенклатура*/)
		{
			if(true/*НЕ ЗначениеЗаполнено(ВидСчетчика)*/)
			{
			}
			//МенеджерЗаписи = РегистрыСведений.СчетчикиДляЗначенийРазрядов.СоздатьМенеджерЗаписи();
			//МенеджерЗаписи.ВидСчетчика = ВидСчетчика;
			//МенеджерЗаписи.Организация 			= ?(ВидСчетчика.ВПределахОрганизации, 		Организация, 	Справочники.Организации.ПустаяСсылка());
			//МенеджерЗаписи.Подразделение 		= ?(ВидСчетчика.ВПределахПодразделения, 	Подразделение, 	Справочники.Подразделения.ПустаяСсылка());
			//МенеджерЗаписи.НоменклатурнаяГруппа = ?(ВидСчетчика.ВПределахНоменклатурнойГруппы, НоменклатурнаяГруппа, Справочники.НоменклатурныеГруппы.ПустаяСсылка());
			//МенеджерЗаписи.Номенклатура 		= ?(ВидСчетчика.ВПределахНоменклатуры, 		Номенклатура, 	Справочники.Номенклатура.ПустаяСсылка());
			//МенеджерЗаписи.Прочитать();
			if(true/*МенеджерЗаписи.Выбран()*/)
			{
				//ПоследнееЗначение = МенеджерЗаписи.Значение;
			}
			return null;
		}
		// ПолучитьПоследнееЗначениеСчетчика()
		// Функция формирует данные об исходной таблицы с серийными номерами, до "расщепления" исходной таблица.
		// "Расщепление" возможно например при нажатии на кнопку "Заполнить и провести" в некоторых документах
		//

		public object СформироватьИсходнуюТаблицуСерийныйНомеров(/*ТабЧасть, ТабСерийныеНомера*/)
		{
			//СтруктДанныеСерНомера = Новый Структура;
			//ТабИсходная = Новый ТаблицаЗначений;
			//ТабИсходная.Колонки.Добавить("Количество", Новый ОписаниеТипов("Число", Новый КвалификаторыЧисла(15, 3)));
			//ТабИсходная.Колонки.Добавить("КлючСвязи",  Новый ОписаниеТипов("Число", Новый КвалификаторыЧисла( 5, 0)));
			//ТабИсходная.Колонки.Добавить("СерНомера");
			/*// Массив
*/
			//МаксКлюч = 0;
			//СтруктПоиска = Новый Структура;
			//СтруктДанныеСерНомера.Вставить("ТабДанные", ТабИсходная);
			//СтруктДанныеСерНомера.Вставить("МаксКлюч",  МаксКлюч);
			return null;
		}
		// СформироватьИсходнуюТаблицуСерийныйНомеров()
		// Процедура корректируют поля "КлючСвязи" для таб. части "СерийныеНомера", в случае когда строки основной таблицы (Товары) разделяются.
		// Например при нажатии на кнопку "Заполнить и провести" в некоторых документах.
		//

		public void КорректироватьТабЧастьСерийныеНомера(/*СтруктДанныеСерНомера, ИндексИсхСтроки, ИсхКоличество, НоваяСтрока, ВыделеноКоличество*/)
		{
			if(true/*СтруктДанныеСерНомера = Неопределено*/)
			{
			}
			//ТабДанные = СтруктДанныеСерНомера.ТабДанные;
			/*// Определим избыток серийных номеров, "висящих" на исходной строке
*/
			if(true/*ТабДанные[ИндексИсхСтроки].СерНомера = Неопределено*/)
			{
				/*// Не было серийных номеров связанных с исходной строкой
*/
			}
			//Превышение = ТабДанные[ИндексИсхСтроки].СерНомера.Количество() - Цел(ИсхКоличество);
			if(true/*Превышение > 0*/)
			{
				/*// Избыток серийных номеров, которые надо "перекинуть" на новую строку
*/
				//МожноПереместить = Мин(Превышение, ВыделеноКоличество);
				if(true/*МожноПереместить <= 0*/)
				{
				}
				if(true/*НоваяСтрока.КлючСвязи <> 0*/)
				{
					/*// Были изменения ключей связи/серийных номеров вне данного механизма.
*/
					/*// Либо повторный вызов данной процедуры для одной строки. Такая ситуация не обрабатывается.
*/
				}
				/*// Вычислим новое значение ключа связи
*/
				//МаксКлюч = СтруктДанныеСерНомера.МаксКлюч;
				//МаксКлюч = МаксКлюч + 1;
				//СтруктДанныеСерНомера.Вставить("МаксКлюч", МаксКлюч);
				/*// Установим новый ключ связи в новой строке документа
*/
				//НоваяСтрока.КлючСвязи = МаксКлюч;
				/*// Запоминаем сколько всего серийных номеров, перемещать будем последние (т.е. с конца)
*/
				/*// первые остаются на первоначальной строке
*/
				//ВсегоСерНомеров = ТабДанные[ИндексИсхСтроки].СерНомера.Количество() - 1;
				while(true/*МожноПереместить > 0*/)
				{
					//ТабДанные[ИндексИсхСтроки].СерНомера[ВсегоСерНомеров].КлючСвязи = МаксКлюч;
					/*// Установлен новый ключ связи в ТАБ.ЧАСТИ документа
*/
					//ТабДанные[ИндексИсхСтроки].СерНомера.Удалить(ВсегоСерНомеров);
					/*// Удаляем элемент массива, строка в документе остается!!!
*/
					//ВсегоСерНомеров  = ВсегоСерНомеров  - 1;
					/*// Уменьшаем индекс последнего элемента массива
*/
					//МожноПереместить = МожноПереместить - 1;
					/*// Уменьшаем количество доступных перемещений.
*/
				}
				//;;
			}
		}
		// КорректироватьТабЧастьСерийныеНомера()
		// Функция формирует печатную форму со списом серийных номеров
		// Параметры:
		//		ТекДок - документ, данные которого надо распечатать
		//		ИмяТабЧасти - имя табличной части по которой надо строить отчет
		// Возврат:
		//		Табличный документ
		//

		public object ПечатьСерийныхНомеров(/*ТекДок, ИмяТабЧасти*/)
		{
			//ВидДокумента = ТекДок.Метаданные().Имя;
			/*ТекстЗапроса =
		"ВЫБРАТЬ РАЗРЕШЕННЫЕ
		|	ДокТабЧасть.ЕдиницаИзмерения                КАК ЕдиницаИзмерения,
		|	ДокТабЧасть.Номенклатура                    КАК Номенклатура,
		|	ДокТабЧасть.ХарактеристикаНоменклатуры      КАК Характеристика,
		|	ДокТабЧасть.СерияНоменклатуры               КАК Серия,
		|	ПРЕДСТАВЛЕНИЕ(ДокТабЧасть.ЕдиницаИзмерения) КАК ПечЕдиницаИзмерения,
		|	ПРЕДСТАВЛЕНИЕ(ДокТабЧасть.Номенклатура)     КАК ПечНоменклатура,
		|	ДокСерийныеНомера.СерийныйНомер             КАК СерийныйНомер,
		|	ДокТабЧасть.Количество                      КАК Количество,
		|	ДокТабЧасть.НомерСтроки                     КАК НомерСтроки
		|ИЗ
		|	Документ." + ВидДокумента + "." + ИмяТабЧасти + " КАК ДокТабЧасть
		|		ВНУТРЕННЕЕ СОЕДИНЕНИЕ Документ." + ВидДокумента + ".СерийныеНомера КАК ДокСерийныеНомера
		|		ПО ДокТабЧасть.КлючСвязи = ДокСерийныеНомера.КлючСвязи
		|ГДЕ
		|	ДокТабЧасть.Ссылка = &ТекДок
		|	И ДокСерийныеНомера.Ссылка = &ТекДок
		|
		|УПОРЯДОЧИТЬ ПО
		|	НомерСтроки,
		|	ДокСерийныеНомера.НомерСтроки";*/
			//Запрос = Новый Запрос;
			//Запрос.Текст = ТекстЗапроса;
			//Запрос.УстановитьПараметр("ТекДок", ТекДок);
			//ТабДокумент = Новый ТабличныйДокумент;
			//РезультатЗапроса = Запрос.Выполнить();
			//Макет = ПолучитьОбщийМакет("СписокСерийныхНомеров");
			//Область = Макет.ПолучитьОбласть("Заголовок");
			//Область.Параметры.ТекстЗаголовок = ОбщегоНазначения.СформироватьЗаголовокДокумента( ТекДок);
			//ТабДокумент.Вывести(Область);
			//Область = Макет.ПолучитьОбласть("ТабШапка");
			//ТабДокумент.Вывести(Область);
			//ОбластьНоменклатура   = Макет.ПолучитьОбласть("ТабНоменклатура");
			//ОбластьСерийныйНомер  = Макет.ПолучитьОбласть("ТабСерийныйНомер");
			//Индекс = 0;
			//ТекНоменклатура   = Неопределено;
			//ТекХарактеристика = Неопределено;
			//ТекСерия          = Неопределено;
			//Обход = РезультатЗапроса.Выбрать();
			while(true/*Обход.Следующий()*/)
			{
				if(true/*ТекНоменклатура   <> Обход.Номенклатура
		 ИЛИ ТекХарактеристика <> Обход.Характеристика
		 ИЛИ ТекСерия          <> Обход.Серия*/)
				{
					//Индекс = Индекс + 1;
					//ТекНоменклатура   = Обход.Номенклатура;
					//ТекХарактеристика = Обход.Характеристика;
					//ТекСерия          = Обход.Серия;
					//ОбластьНоменклатура.Параметры.НомСтр          = Индекс;
					//ОбластьНоменклатура.Параметры.ПечНоменклатура = Обход.ПечНоменклатура + ФормированиеПечатныхФорм.ПредставлениеСерий(Обход);
					//ОбластьНоменклатура.Параметры.Номенклатура    = Обход.Номенклатура;
					//ОбластьНоменклатура.Параметры.ЕдИзм           = Обход.ЕдиницаИзмерения;
					//ОбластьНоменклатура.Параметры.ПечЕдИзм        = Обход.ПечЕдиницаИзмерения;
					//ОбластьНоменклатура.Параметры.Количество      = Обход.Количество;
					//ТабДокумент.Вывести(ОбластьНоменклатура);
				}
				//ОбластьСерийныйНомер.Параметры.ПечСерийныйНомер = Обход.СерийныйНомер;
				//ОбластьСерийныйНомер.Параметры.СерийныйНомер    = Обход.СерийныйНомер;
				//ТабДокумент.Вывести(ОбластьСерийныйНомер);
			}
			/*;
	
	Область = Макет.ПолучитьОбласть("ТабПодвал");*/
			//ТабДокумент.Вывести(Область);
			return null;
		}
		// ПечатьСерийныхНомеров()
	}
}
