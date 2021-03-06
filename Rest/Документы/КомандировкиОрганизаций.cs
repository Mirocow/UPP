﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//KomandirovkiOrganizacijj
	[Маршрут("Документы/КомандировкиОрганизаций","")]
	public class КомандировкиОрганизацийЗапрос: V82.ДокументыСсылка.КомандировкиОрганизаций,IReturn<КомандировкиОрганизацийЗапрос>
	{
	}
	[Маршрут("Документы/КомандировкиОрганизаций/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/КомандировкиОрганизаций/ПоСсылке","{Ссылка}")]
	public class КомандировкиОрганизацийНайтиПоСсылке: V82.ДокументыСсылка.КомандировкиОрганизаций,IReturn<КомандировкиОрганизацийНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/КомандировкиОрганизаций/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/КомандировкиОрганизаций/ПоНомеру","{Номер}")]
	public class КомандировкиОрганизацийНайтиПоНомеру: V82.ДокументыСсылка.КомандировкиОрганизаций,IReturn<КомандировкиОрганизацийНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/КомандировкиОрганизаций/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/КомандировкиОрганизаций/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/КомандировкиОрганизаций/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class КомандировкиОрганизацийВыбратьПоСсылке: V82.ДокументыСсылка.КомандировкиОрганизаций,IReturn<КомандировкиОрганизацийВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/КомандировкиОрганизаций/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/КомандировкиОрганизаций/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/КомандировкиОрганизаций/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class КомандировкиОрганизацийВыбратьПоНомеру: V82.ДокументыСсылка.КомандировкиОрганизаций,IReturn<КомандировкиОрганизацийВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/КомандировкиОрганизаций/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class КомандировкиОрганизацийСтраницаПоСсылке: V82.ДокументыСсылка.КомандировкиОрганизаций,IReturn<КомандировкиОрганизацийСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/КомандировкиОрганизаций/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class КомандировкиОрганизацийСтраницаПоНомеру: V82.ДокументыСсылка.КомандировкиОрганизаций,IReturn<КомандировкиОрганизацийСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class КомандировкиОрганизацийОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class КомандировкиОрганизацийСервис : Service
	{
		
		public object Get(КомандировкиОрганизацийЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(КомандировкиОрганизацийНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.КомандировкиОрганизаций.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new КомандировкиОрганизацийОтвет() { Ответ = "КомандировкиОрганизаций c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(КомандировкиОрганизацийНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.КомандировкиОрганизаций.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new КомандировкиОрганизацийОтвет() {Ответ = "КомандировкиОрганизаций c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(КомандировкиОрганизацийВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.КомандировкиОрганизаций.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(КомандировкиОрганизацийВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(КомандировкиОрганизацийСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(КомандировкиОрганизацийСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(КомандировкиОрганизацийЗапрос Запрос)
		{
			return new КомандировкиОрганизацийОтвет {Ответ = "КомандировкиОрганизаций, "};
		}

		public object Post(КомандировкиОрганизацийЗапрос ЗапросКомандировкиОрганизаций)
		{
			var Ссылка = (ДокументыСсылка.КомандировкиОрганизаций)ЗапросКомандировкиОрганизаций;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}