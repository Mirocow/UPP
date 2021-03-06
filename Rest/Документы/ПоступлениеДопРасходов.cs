﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//PostuplenieDopRaskhodov
	[Маршрут("Документы/ПоступлениеДопРасходов","")]
	public class ПоступлениеДопРасходовЗапрос: V82.ДокументыСсылка.ПоступлениеДопРасходов,IReturn<ПоступлениеДопРасходовЗапрос>
	{
	}
	[Маршрут("Документы/ПоступлениеДопРасходов/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ПоступлениеДопРасходов/ПоСсылке","{Ссылка}")]
	public class ПоступлениеДопРасходовНайтиПоСсылке: V82.ДокументыСсылка.ПоступлениеДопРасходов,IReturn<ПоступлениеДопРасходовНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ПоступлениеДопРасходов/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ПоступлениеДопРасходов/ПоНомеру","{Номер}")]
	public class ПоступлениеДопРасходовНайтиПоНомеру: V82.ДокументыСсылка.ПоступлениеДопРасходов,IReturn<ПоступлениеДопРасходовНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ПоступлениеДопРасходов/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ПоступлениеДопРасходов/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ПоступлениеДопРасходов/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ПоступлениеДопРасходовВыбратьПоСсылке: V82.ДокументыСсылка.ПоступлениеДопРасходов,IReturn<ПоступлениеДопРасходовВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ПоступлениеДопРасходов/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ПоступлениеДопРасходов/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ПоступлениеДопРасходов/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ПоступлениеДопРасходовВыбратьПоНомеру: V82.ДокументыСсылка.ПоступлениеДопРасходов,IReturn<ПоступлениеДопРасходовВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ПоступлениеДопРасходов/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ПоступлениеДопРасходовСтраницаПоСсылке: V82.ДокументыСсылка.ПоступлениеДопРасходов,IReturn<ПоступлениеДопРасходовСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ПоступлениеДопРасходов/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ПоступлениеДопРасходовСтраницаПоНомеру: V82.ДокументыСсылка.ПоступлениеДопРасходов,IReturn<ПоступлениеДопРасходовСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ПоступлениеДопРасходовОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ПоступлениеДопРасходовСервис : Service
	{
		
		public object Get(ПоступлениеДопРасходовЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ПоступлениеДопРасходовНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ПоступлениеДопРасходов.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ПоступлениеДопРасходовОтвет() { Ответ = "ПоступлениеДопРасходов c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ПоступлениеДопРасходовНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ПоступлениеДопРасходов.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ПоступлениеДопРасходовОтвет() {Ответ = "ПоступлениеДопРасходов c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ПоступлениеДопРасходовВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ПоступлениеДопРасходов.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ПоступлениеДопРасходовВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ПоступлениеДопРасходовСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ПоступлениеДопРасходовСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ПоступлениеДопРасходовЗапрос Запрос)
		{
			return new ПоступлениеДопРасходовОтвет {Ответ = "ПоступлениеДопРасходов, "};
		}

		public object Post(ПоступлениеДопРасходовЗапрос ЗапросПоступлениеДопРасходов)
		{
			var Ссылка = (ДокументыСсылка.ПоступлениеДопРасходов)ЗапросПоступлениеДопРасходов;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}