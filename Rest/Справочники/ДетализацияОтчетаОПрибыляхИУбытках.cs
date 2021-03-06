﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//DetalizaciyaOtchetaOPribylyakhIUbytkakh
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках","")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахЗапрос: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахЗапрос>
	{
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ПоСсылке","{Ссылка}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоСсылке: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/НайтиПоКоду","{Код}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ПоКоду","{Код}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоКоду: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоКоду>
	{
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ПоНаименованию","{Наименование}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоНаименованию: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоСсылке: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоКоду","{___Первые}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоКоду","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоКоду","{___Первые}/{___Мин}/{___Макс}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоКоду: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоКоду>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоНаименованию: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоСсылке: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/СтраницаПоКоду","{___Размер}/{___Номер}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоКоду: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоКоду>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/ДетализацияОтчетаОПрибыляхИУбытках/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоНаименованию: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ДетализацияОтчетаОПрибыляхИУбыткахОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ДетализацияОтчетаОПрибыляхИУбыткахСервис : Service
	{
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.ДетализацияОтчетаОПрибыляхИУбытках.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ДетализацияОтчетаОПрибыляхИУбыткахОтвет() { Ответ = "ДетализацияОтчетаОПрибыляхИУбытках c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоКоду Запрос)
		{
			if(Запрос.Код == null)
			{
				return null;
			}
			var СтрокаКод = System.Uri.UnescapeDataString(Запрос.Код);
			var Ссылка = V82.Справочники.ДетализацияОтчетаОПрибыляхИУбытках.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ДетализацияОтчетаОПрибыляхИУбыткахОтвет() {Ответ = "ДетализацияОтчетаОПрибыляхИУбытках c кодом '" + Запрос.Код + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.ДетализацияОтчетаОПрибыляхИУбытках.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(ДетализацияОтчетаОПрибыляхИУбыткахСтраницаПоНаименованию Запрос)
		{
			return null;
		}

		public object Any(ДетализацияОтчетаОПрибыляхИУбыткахЗапрос Запрос)
		{
			return new ДетализацияОтчетаОПрибыляхИУбыткахОтвет {Ответ = "ДетализацияОтчетаОПрибыляхИУбытках, "};
		}

		public object Post(ДетализацияОтчетаОПрибыляхИУбыткахЗапрос ЗапросДетализацияОтчетаОПрибыляхИУбытках)
		{
			var Ссылка = (СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках)ЗапросДетализацияОтчетаОПрибыляхИУбытках;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}