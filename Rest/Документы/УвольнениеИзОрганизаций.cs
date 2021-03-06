﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//UvolnenieIzOrganizacijj
	[Маршрут("Документы/УвольнениеИзОрганизаций","")]
	public class УвольнениеИзОрганизацийЗапрос: V82.ДокументыСсылка.УвольнениеИзОрганизаций,IReturn<УвольнениеИзОрганизацийЗапрос>
	{
	}
	[Маршрут("Документы/УвольнениеИзОрганизаций/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/УвольнениеИзОрганизаций/ПоСсылке","{Ссылка}")]
	public class УвольнениеИзОрганизацийНайтиПоСсылке: V82.ДокументыСсылка.УвольнениеИзОрганизаций,IReturn<УвольнениеИзОрганизацийНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/УвольнениеИзОрганизаций/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/УвольнениеИзОрганизаций/ПоНомеру","{Номер}")]
	public class УвольнениеИзОрганизацийНайтиПоНомеру: V82.ДокументыСсылка.УвольнениеИзОрганизаций,IReturn<УвольнениеИзОрганизацийНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/УвольнениеИзОрганизаций/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/УвольнениеИзОрганизаций/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/УвольнениеИзОрганизаций/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class УвольнениеИзОрганизацийВыбратьПоСсылке: V82.ДокументыСсылка.УвольнениеИзОрганизаций,IReturn<УвольнениеИзОрганизацийВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/УвольнениеИзОрганизаций/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/УвольнениеИзОрганизаций/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/УвольнениеИзОрганизаций/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class УвольнениеИзОрганизацийВыбратьПоНомеру: V82.ДокументыСсылка.УвольнениеИзОрганизаций,IReturn<УвольнениеИзОрганизацийВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/УвольнениеИзОрганизаций/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class УвольнениеИзОрганизацийСтраницаПоСсылке: V82.ДокументыСсылка.УвольнениеИзОрганизаций,IReturn<УвольнениеИзОрганизацийСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/УвольнениеИзОрганизаций/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class УвольнениеИзОрганизацийСтраницаПоНомеру: V82.ДокументыСсылка.УвольнениеИзОрганизаций,IReturn<УвольнениеИзОрганизацийСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class УвольнениеИзОрганизацийОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class УвольнениеИзОрганизацийСервис : Service
	{
		
		public object Get(УвольнениеИзОрганизацийЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(УвольнениеИзОрганизацийНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.УвольнениеИзОрганизаций.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new УвольнениеИзОрганизацийОтвет() { Ответ = "УвольнениеИзОрганизаций c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(УвольнениеИзОрганизацийНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.УвольнениеИзОрганизаций.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new УвольнениеИзОрганизацийОтвет() {Ответ = "УвольнениеИзОрганизаций c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(УвольнениеИзОрганизацийВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.УвольнениеИзОрганизаций.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(УвольнениеИзОрганизацийВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(УвольнениеИзОрганизацийСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(УвольнениеИзОрганизацийСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(УвольнениеИзОрганизацийЗапрос Запрос)
		{
			return new УвольнениеИзОрганизацийОтвет {Ответ = "УвольнениеИзОрганизаций, "};
		}

		public object Post(УвольнениеИзОрганизацийЗапрос ЗапросУвольнениеИзОрганизаций)
		{
			var Ссылка = (ДокументыСсылка.УвольнениеИзОрганизаций)ЗапросУвольнениеИзОрганизаций;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}