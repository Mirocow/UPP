﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//PlanProizvodstvaPoSmenam
	[Маршрут("Документы/ПланПроизводстваПоСменам","")]
	public class ПланПроизводстваПоСменамЗапрос: V82.ДокументыСсылка.ПланПроизводстваПоСменам,IReturn<ПланПроизводстваПоСменамЗапрос>
	{
	}
	[Маршрут("Документы/ПланПроизводстваПоСменам/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ПланПроизводстваПоСменам/ПоСсылке","{Ссылка}")]
	public class ПланПроизводстваПоСменамНайтиПоСсылке: V82.ДокументыСсылка.ПланПроизводстваПоСменам,IReturn<ПланПроизводстваПоСменамНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ПланПроизводстваПоСменам/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ПланПроизводстваПоСменам/ПоНомеру","{Номер}")]
	public class ПланПроизводстваПоСменамНайтиПоНомеру: V82.ДокументыСсылка.ПланПроизводстваПоСменам,IReturn<ПланПроизводстваПоСменамНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ПланПроизводстваПоСменам/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ПланПроизводстваПоСменам/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ПланПроизводстваПоСменам/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ПланПроизводстваПоСменамВыбратьПоСсылке: V82.ДокументыСсылка.ПланПроизводстваПоСменам,IReturn<ПланПроизводстваПоСменамВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ПланПроизводстваПоСменам/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ПланПроизводстваПоСменам/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ПланПроизводстваПоСменам/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ПланПроизводстваПоСменамВыбратьПоНомеру: V82.ДокументыСсылка.ПланПроизводстваПоСменам,IReturn<ПланПроизводстваПоСменамВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ПланПроизводстваПоСменам/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ПланПроизводстваПоСменамСтраницаПоСсылке: V82.ДокументыСсылка.ПланПроизводстваПоСменам,IReturn<ПланПроизводстваПоСменамСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ПланПроизводстваПоСменам/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ПланПроизводстваПоСменамСтраницаПоНомеру: V82.ДокументыСсылка.ПланПроизводстваПоСменам,IReturn<ПланПроизводстваПоСменамСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ПланПроизводстваПоСменамОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ПланПроизводстваПоСменамСервис : Service
	{
		
		public object Get(ПланПроизводстваПоСменамЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ПланПроизводстваПоСменамНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ПланПроизводстваПоСменам.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ПланПроизводстваПоСменамОтвет() { Ответ = "ПланПроизводстваПоСменам c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ПланПроизводстваПоСменамНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ПланПроизводстваПоСменам.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ПланПроизводстваПоСменамОтвет() {Ответ = "ПланПроизводстваПоСменам c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ПланПроизводстваПоСменамВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ПланПроизводстваПоСменам.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ПланПроизводстваПоСменамВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ПланПроизводстваПоСменамСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ПланПроизводстваПоСменамСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ПланПроизводстваПоСменамЗапрос Запрос)
		{
			return new ПланПроизводстваПоСменамОтвет {Ответ = "ПланПроизводстваПоСменам, "};
		}

		public object Post(ПланПроизводстваПоСменамЗапрос ЗапросПланПроизводстваПоСменам)
		{
			var Ссылка = (ДокументыСсылка.ПланПроизводстваПоСменам)ЗапросПланПроизводстваПоСменам;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}