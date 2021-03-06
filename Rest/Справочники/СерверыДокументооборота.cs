﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//ServeryDokumentooborota
	[Маршрут("Справочники/СерверыДокументооборота","")]
	public class СерверыДокументооборотаЗапрос: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаЗапрос>
	{
	}
	[Маршрут("Справочники/СерверыДокументооборота/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/СерверыДокументооборота/ПоСсылке","{Ссылка}")]
	public class СерверыДокументооборотаНайтиПоСсылке: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/СерверыДокументооборота/НайтиПоКоду","{Код}")]
	[Маршрут("Справочники/СерверыДокументооборота/ПоКоду","{Код}")]
	public class СерверыДокументооборотаНайтиПоКоду: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаНайтиПоКоду>
	{
	}
	[Маршрут("Справочники/СерверыДокументооборота/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/СерверыДокументооборота/ПоНаименованию","{Наименование}")]
	public class СерверыДокументооборотаНайтиПоНаименованию: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class СерверыДокументооборотаВыбратьПоСсылке: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоКоду","{___Первые}")]
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоКоду","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоКоду","{___Первые}/{___Мин}/{___Макс}")]
	public class СерверыДокументооборотаВыбратьПоКоду: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаВыбратьПоКоду>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/СерверыДокументооборота/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class СерверыДокументооборотаВыбратьПоНаименованию: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/СерверыДокументооборота/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class СерверыДокументооборотаСтраницаПоСсылке: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/СерверыДокументооборота/СтраницаПоКоду","{___Размер}/{___Номер}")]
	public class СерверыДокументооборотаСтраницаПоКоду: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаСтраницаПоКоду>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/СерверыДокументооборота/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class СерверыДокументооборотаСтраницаПоНаименованию: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<СерверыДокументооборотаСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class СерверыДокументооборотаОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class СерверыДокументооборотаСервис : Service
	{
		
		public object Get(СерверыДокументооборотаЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(СерверыДокументооборотаНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.СерверыДокументооборота.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new СерверыДокументооборотаОтвет() { Ответ = "СерверыДокументооборота c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(СерверыДокументооборотаНайтиПоКоду Запрос)
		{
			if(Запрос.Код == null)
			{
				return null;
			}
			var СтрокаКод = System.Uri.UnescapeDataString(Запрос.Код);
			var Ссылка = V82.Справочники.СерверыДокументооборота.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new СерверыДокументооборотаОтвет() {Ответ = "СерверыДокументооборота c кодом '" + Запрос.Код + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(СерверыДокументооборотаНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(СерверыДокументооборотаВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.СерверыДокументооборота.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(СерверыДокументооборотаВыбратьПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(СерверыДокументооборотаВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(СерверыДокументооборотаСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(СерверыДокументооборотаСтраницаПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(СерверыДокументооборотаСтраницаПоНаименованию Запрос)
		{
			return null;
		}

		public object Any(СерверыДокументооборотаЗапрос Запрос)
		{
			return new СерверыДокументооборотаОтвет {Ответ = "СерверыДокументооборота, "};
		}

		public object Post(СерверыДокументооборотаЗапрос ЗапросСерверыДокументооборота)
		{
			var Ссылка = (СправочникиСсылка.СерверыДокументооборота)ЗапросСерверыДокументооборота;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}