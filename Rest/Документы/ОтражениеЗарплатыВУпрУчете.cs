﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//OtrazhenieZarplatyVUprUchete
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете","")]
	public class ОтражениеЗарплатыВУпрУчетеЗапрос: V82.ДокументыСсылка.ОтражениеЗарплатыВУпрУчете,IReturn<ОтражениеЗарплатыВУпрУчетеЗапрос>
	{
	}
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/ПоСсылке","{Ссылка}")]
	public class ОтражениеЗарплатыВУпрУчетеНайтиПоСсылке: V82.ДокументыСсылка.ОтражениеЗарплатыВУпрУчете,IReturn<ОтражениеЗарплатыВУпрУчетеНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/ПоНомеру","{Номер}")]
	public class ОтражениеЗарплатыВУпрУчетеНайтиПоНомеру: V82.ДокументыСсылка.ОтражениеЗарплатыВУпрУчете,IReturn<ОтражениеЗарплатыВУпрУчетеНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ОтражениеЗарплатыВУпрУчетеВыбратьПоСсылке: V82.ДокументыСсылка.ОтражениеЗарплатыВУпрУчете,IReturn<ОтражениеЗарплатыВУпрУчетеВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ОтражениеЗарплатыВУпрУчетеВыбратьПоНомеру: V82.ДокументыСсылка.ОтражениеЗарплатыВУпрУчете,IReturn<ОтражениеЗарплатыВУпрУчетеВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ОтражениеЗарплатыВУпрУчетеСтраницаПоСсылке: V82.ДокументыСсылка.ОтражениеЗарплатыВУпрУчете,IReturn<ОтражениеЗарплатыВУпрУчетеСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ОтражениеЗарплатыВУпрУчете/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ОтражениеЗарплатыВУпрУчетеСтраницаПоНомеру: V82.ДокументыСсылка.ОтражениеЗарплатыВУпрУчете,IReturn<ОтражениеЗарплатыВУпрУчетеСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ОтражениеЗарплатыВУпрУчетеОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ОтражениеЗарплатыВУпрУчетеСервис : Service
	{
		
		public object Get(ОтражениеЗарплатыВУпрУчетеЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ОтражениеЗарплатыВУпрУчетеНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ОтражениеЗарплатыВУпрУчете.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ОтражениеЗарплатыВУпрУчетеОтвет() { Ответ = "ОтражениеЗарплатыВУпрУчете c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ОтражениеЗарплатыВУпрУчетеНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ОтражениеЗарплатыВУпрУчете.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ОтражениеЗарплатыВУпрУчетеОтвет() {Ответ = "ОтражениеЗарплатыВУпрУчете c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ОтражениеЗарплатыВУпрУчетеВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ОтражениеЗарплатыВУпрУчете.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ОтражениеЗарплатыВУпрУчетеВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ОтражениеЗарплатыВУпрУчетеСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ОтражениеЗарплатыВУпрУчетеСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ОтражениеЗарплатыВУпрУчетеЗапрос Запрос)
		{
			return new ОтражениеЗарплатыВУпрУчетеОтвет {Ответ = "ОтражениеЗарплатыВУпрУчете, "};
		}

		public object Post(ОтражениеЗарплатыВУпрУчетеЗапрос ЗапросОтражениеЗарплатыВУпрУчете)
		{
			var Ссылка = (ДокументыСсылка.ОтражениеЗарплатыВУпрУчете)ЗапросОтражениеЗарплатыВУпрУчете;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}