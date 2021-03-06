﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace V82.ОбщиеМодули
{
	public partial class ЗаявкиКандидатовПереопределяемый
	{
		////////////////////////////////////////////////////////////////////////////////
		// Вспомогательные процедуры, функции
		////////////////////////////////////////////////////////////////////////////////
		// Процедуры, функции объекта

		public void ДополнитьИнициализациюРеквизитов(/*ЭтотОбъект*/)
		{
			//РежимНабораПерсонала = ПроцедурыУправленияПерсоналомДополнительный.ПолучитьРежимНабораПерсонала();
			if(true/*РежимНабораПерсонала = Перечисления.ВидыОрганизационнойСтруктурыПредприятия.ПоЦентрамОтветственности*/)
			{
				if(true/*ЭтотОбъект.Подразделение = Неопределено ИЛИ ЭтотОбъект.Подразделение.Пустая()*/)
				{
					//ЭтотОбъект.Подразделение = УправлениеПользователями.ПолучитьЗначениеПоУмолчанию(глЗначениеПеременной("глТекущийПользователь"), "ОсновноеПодразделение");
				}
			}
		}
		////////////////////////////////////////////////////////////////////////////////
		// Процедуры, функции для работы формы справочника

		public void ПолучитьПустоеПодразделение(/*Подразделение*/)
		{
			//РежимНабораПерсонала = ПроцедурыУправленияПерсоналомДополнительный.ПолучитьРежимНабораПерсонала();
			if(true/*РежимНабораПерсонала = Перечисления.ВидыОрганизационнойСтруктурыПредприятия.ПоСтруктуреЮридическихЛиц*/)
			{
				if(true/*ТипЗнч(Подразделение) <> Тип("СправочникСсылка.ПодразделенияОрганизаций")*/)
				{
					//Подразделение = Справочники.ПодразделенияОрганизаций.ПустаяСсылка();
				}
			}
		}

		public void УстановитьВидимостьЭлементовУправленияФормыСписка(/*Форма*/)
		{
			//РежимНабораПерсонала = ПроцедурыУправленияПерсоналомДополнительный.ПолучитьРежимНабораПерсонала();
			//ПоказыватьОрганизацию = РежимНабораПерсонала = Перечисления.ВидыОрганизационнойСтруктурыПредприятия.ПоСтруктуреЮридическихЛиц;
			//Форма.ЭлементыФормы.СправочникСписок.Колонки.Организация.Видимость			= ПоказыватьОрганизацию;
			//Форма.ЭлементыФормы.СправочникСписок.Колонки.Организация.ИзменятьНастройку	= ПоказыватьОрганизацию;
			//Форма.ЭлементыФормы.ОрганизацияФлаг.Видимость								= ПоказыватьОрганизацию;
			//Форма.ЭлементыФормы.Организация.Видимость									= ПоказыватьОрганизацию;
		}

		public void УстановитьВидимостьЭлементовУправленияФормыЭлемента(/*Форма*/)
		{
			//РежимНабораПерсонала = ПроцедурыУправленияПерсоналомДополнительный.ПолучитьРежимНабораПерсонала();
			if(true/*РежимНабораПерсонала = Перечисления.ВидыОрганизационнойСтруктурыПредприятия.ПоЦентрамОтветственности*/)
			{
				//Форма.ЭлементыФормы.ПанельОрганизация.Свертка	= РежимСверткиЭлементаУправления.Верх;
			}
		}

		public void ВыполнитьОформлениеСтроки(/*Элемент, ОформленияСтрок*/)
		{
			if(true/*Элемент.Имя = "ПерепискаВстречиОпросы"*/)
			{
			}
		}

		public object ДоступенОтборПоОрганизации(/**/)
		{
			//РежимНабораПерсонала = ПроцедурыУправленияПерсоналомДополнительный.ПолучитьРежимНабораПерсонала();
			//Возврат РежимНабораПерсонала = Перечисления.ВидыОрганизационнойСтруктурыПредприятия.ПоСтруктуреЮридическихЛиц;
			return null;
		}
		////////////////////////////////////////////////////////////////////////////////
		// Процедуры, функции работы с QR кодом

		public object ЭтоQRКодКонтакта(/*ОписаниеСобытия*/)
		{
			/*// В данной конфигурации распознавание QR кодов не поддерживается
*/
			return null;
		}

		public object ОбработатьСобытиеОтСканераШтрихкода(/*ОписаниеСобытия, ОписаниеОшибки = ""*/)
		{
			/*// В данной конфигурации распознавание QR кодов не поддерживается
*/
			return null;
		}
	}
}
