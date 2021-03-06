﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//UchenyeStepeni
	[Маршрут("Справочники/УченыеСтепени","")]
	public class УченыеСтепениЗапрос: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениЗапрос>
	{
	}
	[Маршрут("Справочники/УченыеСтепени/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/УченыеСтепени/ПоСсылке","{Ссылка}")]
	public class УченыеСтепениНайтиПоСсылке: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/УченыеСтепени/НайтиПоКоду","{Код}")]
	[Маршрут("Справочники/УченыеСтепени/ПоКоду","{Код}")]
	public class УченыеСтепениНайтиПоКоду: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениНайтиПоКоду>
	{
	}
	[Маршрут("Справочники/УченыеСтепени/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/УченыеСтепени/ПоНаименованию","{Наименование}")]
	public class УченыеСтепениНайтиПоНаименованию: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class УченыеСтепениВыбратьПоСсылке: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоКоду","{___Первые}")]
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоКоду","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоКоду","{___Первые}/{___Мин}/{___Макс}")]
	public class УченыеСтепениВыбратьПоКоду: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениВыбратьПоКоду>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/УченыеСтепени/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class УченыеСтепениВыбратьПоНаименованию: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/УченыеСтепени/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class УченыеСтепениСтраницаПоСсылке: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/УченыеСтепени/СтраницаПоКоду","{___Размер}/{___Номер}")]
	public class УченыеСтепениСтраницаПоКоду: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениСтраницаПоКоду>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/УченыеСтепени/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class УченыеСтепениСтраницаПоНаименованию: V82.СправочникиСсылка.УченыеСтепени,IReturn<УченыеСтепениСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class УченыеСтепениОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class УченыеСтепениСервис : Service
	{
		
		public object Get(УченыеСтепениЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(УченыеСтепениНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.УченыеСтепени.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new УченыеСтепениОтвет() { Ответ = "УченыеСтепени c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(УченыеСтепениНайтиПоКоду Запрос)
		{
			if(Запрос.Код == null)
			{
				return null;
			}
			var СтрокаКод = System.Uri.UnescapeDataString(Запрос.Код);
			var Ссылка = V82.Справочники.УченыеСтепени.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new УченыеСтепениОтвет() {Ответ = "УченыеСтепени c кодом '" + Запрос.Код + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(УченыеСтепениНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(УченыеСтепениВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.УченыеСтепени.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(УченыеСтепениВыбратьПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(УченыеСтепениВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(УченыеСтепениСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(УченыеСтепениСтраницаПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(УченыеСтепениСтраницаПоНаименованию Запрос)
		{
			return null;
		}

		public object Any(УченыеСтепениЗапрос Запрос)
		{
			return new УченыеСтепениОтвет {Ответ = "УченыеСтепени, "};
		}

		public object Post(УченыеСтепениЗапрос ЗапросУченыеСтепени)
		{
			var Ссылка = (СправочникиСсылка.УченыеСтепени)ЗапросУченыеСтепени;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}