﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//NastrojjkiFormirovaniyaDokumentovVypuskaProdukcii
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции","")]
	public class НастройкиФормированияДокументовВыпускаПродукцииЗапрос: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииЗапрос>
	{
	}
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ПоСсылке","{Ссылка}")]
	public class НастройкиФормированияДокументовВыпускаПродукцииНайтиПоСсылке: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ПоНаименованию","{Наименование}")]
	public class НастройкиФормированияДокументовВыпускаПродукцииНайтиПоНаименованию: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class НастройкиФормированияДокументовВыпускаПродукцииВыбратьПоСсылке: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class НастройкиФормированияДокументовВыпускаПродукцииВыбратьПоНаименованию: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class НастройкиФормированияДокументовВыпускаПродукцииСтраницаПоСсылке: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class НастройкиФормированияДокументовВыпускаПродукцииСтраницаПоНаименованию: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ИерархияВыбратьПоСсылке","{___Родитель}/{___Режим}/{___Первые}")]
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ИерархияВыбратьПоСсылке","{___Родитель}/{___Режим}/{___Первые}/{___Мин}")]
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ИерархияВыбратьПоСсылке","{___Родитель}/{___Режим}/{___Первые}/{___Мин}/{___Макс}")]
	public class НастройкиФормированияДокументовВыпускаПродукцииИерархияВыбратьПоСсылке: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииИерархияВыбратьПоСсылке>
	{
		public Guid ___Родитель {get; set;}
		public int ___Режим {get; set;}
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/НастройкиФормированияДокументовВыпускаПродукции/ИерархияСтраницаПоСсылке","{___Родитель}/{___Режим}/{___Размер}/{___Номер}")]
	public class НастройкиФормированияДокументовВыпускаПродукцииИерархияСтраницаПоСсылке: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<НастройкиФормированияДокументовВыпускаПродукцииИерархияСтраницаПоСсылке>
	{
		public Guid ___Родитель {get; set;}
		public int ___Режим {get; set;}
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class НастройкиФормированияДокументовВыпускаПродукцииОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class НастройкиФормированияДокументовВыпускаПродукцииСервис : Service
	{
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.НастройкиФормированияДокументовВыпускаПродукции.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new НастройкиФормированияДокументовВыпускаПродукцииОтвет() { Ответ = "НастройкиФормированияДокументовВыпускаПродукции c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.НастройкиФормированияДокументовВыпускаПродукции.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииСтраницаПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииИерархияВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.НастройкиФормированияДокументовВыпускаПродукции.ИерархияВыбратьПоСсылке(Запрос.___Родитель,Запрос.___Режим,Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(НастройкиФормированияДокументовВыпускаПродукцииИерархияСтраницаПоСсылке Запрос)
		{
			return null;
		}

		public object Any(НастройкиФормированияДокументовВыпускаПродукцииЗапрос Запрос)
		{
			return new НастройкиФормированияДокументовВыпускаПродукцииОтвет {Ответ = "НастройкиФормированияДокументовВыпускаПродукции, "};
		}

		public object Post(НастройкиФормированияДокументовВыпускаПродукцииЗапрос ЗапросНастройкиФормированияДокументовВыпускаПродукции)
		{
			var Ссылка = (СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции)ЗапросНастройкиФормированияДокументовВыпускаПродукции;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}