﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//VariantyOtvetovOprosov
	[Маршрут("Справочники/ВариантыОтветовОпросов","")]
	public class ВариантыОтветовОпросовЗапрос: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовЗапрос>
	{
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ПоСсылке","{Ссылка}")]
	public class ВариантыОтветовОпросовНайтиПоСсылке: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/НайтиПоКоду","{Код}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ПоКоду","{Код}")]
	public class ВариантыОтветовОпросовНайтиПоКоду: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовНайтиПоКоду>
	{
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ПоНаименованию","{Наименование}")]
	public class ВариантыОтветовОпросовНайтиПоНаименованию: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ВариантыОтветовОпросовВыбратьПоСсылке: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоКоду","{___Первые}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоКоду","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоКоду","{___Первые}/{___Мин}/{___Макс}")]
	public class ВариантыОтветовОпросовВыбратьПоКоду: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовВыбратьПоКоду>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ВариантыОтветовОпросов/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class ВариантыОтветовОпросовВыбратьПоНаименованию: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ВариантыОтветовОпросовСтраницаПоСсылке: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/СтраницаПоКоду","{___Размер}/{___Номер}")]
	public class ВариантыОтветовОпросовСтраницаПоКоду: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовСтраницаПоКоду>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/ВариантыОтветовОпросов/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class ВариантыОтветовОпросовСтраницаПоНаименованию: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<ВариантыОтветовОпросовСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ВариантыОтветовОпросовОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ВариантыОтветовОпросовСервис : Service
	{
		
		public object Get(ВариантыОтветовОпросовЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ВариантыОтветовОпросовНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.ВариантыОтветовОпросов.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ВариантыОтветовОпросовОтвет() { Ответ = "ВариантыОтветовОпросов c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ВариантыОтветовОпросовНайтиПоКоду Запрос)
		{
			if(Запрос.Код == null)
			{
				return null;
			}
			var СтрокаКод = System.Uri.UnescapeDataString(Запрос.Код);
			var Ссылка = V82.Справочники.ВариантыОтветовОпросов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ВариантыОтветовОпросовОтвет() {Ответ = "ВариантыОтветовОпросов c кодом '" + Запрос.Код + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ВариантыОтветовОпросовНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(ВариантыОтветовОпросовВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.ВариантыОтветовОпросов.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ВариантыОтветовОпросовВыбратьПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(ВариантыОтветовОпросовВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(ВариантыОтветовОпросовСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ВариантыОтветовОпросовСтраницаПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(ВариантыОтветовОпросовСтраницаПоНаименованию Запрос)
		{
			return null;
		}

		public object Any(ВариантыОтветовОпросовЗапрос Запрос)
		{
			return new ВариантыОтветовОпросовОтвет {Ответ = "ВариантыОтветовОпросов, "};
		}

		public object Post(ВариантыОтветовОпросовЗапрос ЗапросВариантыОтветовОпросов)
		{
			var Ссылка = (СправочникиСсылка.ВариантыОтветовОпросов)ЗапросВариантыОтветовОпросов;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}