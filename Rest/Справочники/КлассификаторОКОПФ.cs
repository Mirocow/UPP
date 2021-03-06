﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//KlassifikatorOKOPF
	[Маршрут("Справочники/КлассификаторОКОПФ","")]
	public class КлассификаторОКОПФЗапрос: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФЗапрос>
	{
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ПоСсылке","{Ссылка}")]
	public class КлассификаторОКОПФНайтиПоСсылке: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/НайтиПоКоду","{Код}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ПоКоду","{Код}")]
	public class КлассификаторОКОПФНайтиПоКоду: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФНайтиПоКоду>
	{
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ПоНаименованию","{Наименование}")]
	public class КлассификаторОКОПФНайтиПоНаименованию: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class КлассификаторОКОПФВыбратьПоСсылке: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоКоду","{___Первые}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоКоду","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоКоду","{___Первые}/{___Мин}/{___Макс}")]
	public class КлассификаторОКОПФВыбратьПоКоду: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФВыбратьПоКоду>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/КлассификаторОКОПФ/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class КлассификаторОКОПФВыбратьПоНаименованию: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class КлассификаторОКОПФСтраницаПоСсылке: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/СтраницаПоКоду","{___Размер}/{___Номер}")]
	public class КлассификаторОКОПФСтраницаПоКоду: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФСтраницаПоКоду>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/КлассификаторОКОПФ/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class КлассификаторОКОПФСтраницаПоНаименованию: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<КлассификаторОКОПФСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class КлассификаторОКОПФОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class КлассификаторОКОПФСервис : Service
	{
		
		public object Get(КлассификаторОКОПФЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(КлассификаторОКОПФНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.КлассификаторОКОПФ.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new КлассификаторОКОПФОтвет() { Ответ = "КлассификаторОКОПФ c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(КлассификаторОКОПФНайтиПоКоду Запрос)
		{
			if(Запрос.Код == null)
			{
				return null;
			}
			var СтрокаКод = System.Uri.UnescapeDataString(Запрос.Код);
			var Ссылка = V82.Справочники.КлассификаторОКОПФ.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new КлассификаторОКОПФОтвет() {Ответ = "КлассификаторОКОПФ c кодом '" + Запрос.Код + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(КлассификаторОКОПФНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(КлассификаторОКОПФВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.КлассификаторОКОПФ.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(КлассификаторОКОПФВыбратьПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(КлассификаторОКОПФВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(КлассификаторОКОПФСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(КлассификаторОКОПФСтраницаПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(КлассификаторОКОПФСтраницаПоНаименованию Запрос)
		{
			return null;
		}

		public object Any(КлассификаторОКОПФЗапрос Запрос)
		{
			return new КлассификаторОКОПФОтвет {Ответ = "КлассификаторОКОПФ, "};
		}

		public object Post(КлассификаторОКОПФЗапрос ЗапросКлассификаторОКОПФ)
		{
			var Ссылка = (СправочникиСсылка.КлассификаторОКОПФ)ЗапросКлассификаторОКОПФ;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}