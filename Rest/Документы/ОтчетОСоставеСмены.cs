﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//OtchetOSostaveSmeny
	[Маршрут("Документы/ОтчетОСоставеСмены","")]
	public class ОтчетОСоставеСменыЗапрос: V82.ДокументыСсылка.ОтчетОСоставеСмены,IReturn<ОтчетОСоставеСменыЗапрос>
	{
	}
	[Маршрут("Документы/ОтчетОСоставеСмены/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ОтчетОСоставеСмены/ПоСсылке","{Ссылка}")]
	public class ОтчетОСоставеСменыНайтиПоСсылке: V82.ДокументыСсылка.ОтчетОСоставеСмены,IReturn<ОтчетОСоставеСменыНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ОтчетОСоставеСмены/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ОтчетОСоставеСмены/ПоНомеру","{Номер}")]
	public class ОтчетОСоставеСменыНайтиПоНомеру: V82.ДокументыСсылка.ОтчетОСоставеСмены,IReturn<ОтчетОСоставеСменыНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ОтчетОСоставеСмены/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ОтчетОСоставеСмены/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ОтчетОСоставеСмены/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ОтчетОСоставеСменыВыбратьПоСсылке: V82.ДокументыСсылка.ОтчетОСоставеСмены,IReturn<ОтчетОСоставеСменыВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ОтчетОСоставеСмены/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ОтчетОСоставеСмены/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ОтчетОСоставеСмены/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ОтчетОСоставеСменыВыбратьПоНомеру: V82.ДокументыСсылка.ОтчетОСоставеСмены,IReturn<ОтчетОСоставеСменыВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ОтчетОСоставеСмены/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ОтчетОСоставеСменыСтраницаПоСсылке: V82.ДокументыСсылка.ОтчетОСоставеСмены,IReturn<ОтчетОСоставеСменыСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ОтчетОСоставеСмены/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ОтчетОСоставеСменыСтраницаПоНомеру: V82.ДокументыСсылка.ОтчетОСоставеСмены,IReturn<ОтчетОСоставеСменыСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ОтчетОСоставеСменыОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ОтчетОСоставеСменыСервис : Service
	{
		
		public object Get(ОтчетОСоставеСменыЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ОтчетОСоставеСменыНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ОтчетОСоставеСмены.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ОтчетОСоставеСменыОтвет() { Ответ = "ОтчетОСоставеСмены c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ОтчетОСоставеСменыНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ОтчетОСоставеСмены.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ОтчетОСоставеСменыОтвет() {Ответ = "ОтчетОСоставеСмены c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ОтчетОСоставеСменыВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ОтчетОСоставеСмены.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ОтчетОСоставеСменыВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ОтчетОСоставеСменыСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ОтчетОСоставеСменыСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ОтчетОСоставеСменыЗапрос Запрос)
		{
			return new ОтчетОСоставеСменыОтвет {Ответ = "ОтчетОСоставеСмены, "};
		}

		public object Post(ОтчетОСоставеСменыЗапрос ЗапросОтчетОСоставеСмены)
		{
			var Ссылка = (ДокументыСсылка.ОтчетОСоставеСмены)ЗапросОтчетОСоставеСмены;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}