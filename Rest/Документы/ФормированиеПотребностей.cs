﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//FormirovaniePotrebnostejj
	[Маршрут("Документы/ФормированиеПотребностей","")]
	public class ФормированиеПотребностейЗапрос: V82.ДокументыСсылка.ФормированиеПотребностей,IReturn<ФормированиеПотребностейЗапрос>
	{
	}
	[Маршрут("Документы/ФормированиеПотребностей/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ФормированиеПотребностей/ПоСсылке","{Ссылка}")]
	public class ФормированиеПотребностейНайтиПоСсылке: V82.ДокументыСсылка.ФормированиеПотребностей,IReturn<ФормированиеПотребностейНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ФормированиеПотребностей/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ФормированиеПотребностей/ПоНомеру","{Номер}")]
	public class ФормированиеПотребностейНайтиПоНомеру: V82.ДокументыСсылка.ФормированиеПотребностей,IReturn<ФормированиеПотребностейНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ФормированиеПотребностей/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ФормированиеПотребностей/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ФормированиеПотребностей/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ФормированиеПотребностейВыбратьПоСсылке: V82.ДокументыСсылка.ФормированиеПотребностей,IReturn<ФормированиеПотребностейВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ФормированиеПотребностей/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ФормированиеПотребностей/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ФормированиеПотребностей/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ФормированиеПотребностейВыбратьПоНомеру: V82.ДокументыСсылка.ФормированиеПотребностей,IReturn<ФормированиеПотребностейВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ФормированиеПотребностей/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ФормированиеПотребностейСтраницаПоСсылке: V82.ДокументыСсылка.ФормированиеПотребностей,IReturn<ФормированиеПотребностейСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ФормированиеПотребностей/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ФормированиеПотребностейСтраницаПоНомеру: V82.ДокументыСсылка.ФормированиеПотребностей,IReturn<ФормированиеПотребностейСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ФормированиеПотребностейОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ФормированиеПотребностейСервис : Service
	{
		
		public object Get(ФормированиеПотребностейЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ФормированиеПотребностейНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ФормированиеПотребностей.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ФормированиеПотребностейОтвет() { Ответ = "ФормированиеПотребностей c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ФормированиеПотребностейНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ФормированиеПотребностей.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ФормированиеПотребностейОтвет() {Ответ = "ФормированиеПотребностей c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ФормированиеПотребностейВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ФормированиеПотребностей.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ФормированиеПотребностейВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ФормированиеПотребностейСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ФормированиеПотребностейСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ФормированиеПотребностейЗапрос Запрос)
		{
			return new ФормированиеПотребностейОтвет {Ответ = "ФормированиеПотребностей, "};
		}

		public object Post(ФормированиеПотребностейЗапрос ЗапросФормированиеПотребностей)
		{
			var Ссылка = (ДокументыСсылка.ФормированиеПотребностей)ЗапросФормированиеПотребностей;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}