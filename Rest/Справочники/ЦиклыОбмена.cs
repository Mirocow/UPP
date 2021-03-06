﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//CiklyObmena
	[Маршрут("Справочники/ЦиклыОбмена","")]
	public class ЦиклыОбменаЗапрос: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаЗапрос>
	{
	}
	[Маршрут("Справочники/ЦиклыОбмена/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/ЦиклыОбмена/ПоСсылке","{Ссылка}")]
	public class ЦиклыОбменаНайтиПоСсылке: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/ЦиклыОбмена/НайтиПоКоду","{Код}")]
	[Маршрут("Справочники/ЦиклыОбмена/ПоКоду","{Код}")]
	public class ЦиклыОбменаНайтиПоКоду: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаНайтиПоКоду>
	{
	}
	[Маршрут("Справочники/ЦиклыОбмена/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/ЦиклыОбмена/ПоНаименованию","{Наименование}")]
	public class ЦиклыОбменаНайтиПоНаименованию: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ЦиклыОбменаВыбратьПоСсылке: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоКоду","{___Первые}")]
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоКоду","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоКоду","{___Первые}/{___Мин}/{___Макс}")]
	public class ЦиклыОбменаВыбратьПоКоду: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаВыбратьПоКоду>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ЦиклыОбмена/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class ЦиклыОбменаВыбратьПоНаименованию: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/ЦиклыОбмена/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ЦиклыОбменаСтраницаПоСсылке: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/ЦиклыОбмена/СтраницаПоКоду","{___Размер}/{___Номер}")]
	public class ЦиклыОбменаСтраницаПоКоду: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаСтраницаПоКоду>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/ЦиклыОбмена/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class ЦиклыОбменаСтраницаПоНаименованию: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<ЦиклыОбменаСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ЦиклыОбменаОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ЦиклыОбменаСервис : Service
	{
		
		public object Get(ЦиклыОбменаЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ЦиклыОбменаНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.ЦиклыОбмена.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ЦиклыОбменаОтвет() { Ответ = "ЦиклыОбмена c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ЦиклыОбменаНайтиПоКоду Запрос)
		{
			if(Запрос.Код == null)
			{
				return null;
			}
			var СтрокаКод = System.Uri.UnescapeDataString(Запрос.Код);
			var Ссылка = V82.Справочники.ЦиклыОбмена.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ЦиклыОбменаОтвет() {Ответ = "ЦиклыОбмена c кодом '" + Запрос.Код + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ЦиклыОбменаНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(ЦиклыОбменаВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.ЦиклыОбмена.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ЦиклыОбменаВыбратьПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(ЦиклыОбменаВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(ЦиклыОбменаСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ЦиклыОбменаСтраницаПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(ЦиклыОбменаСтраницаПоНаименованию Запрос)
		{
			return null;
		}

		public object Any(ЦиклыОбменаЗапрос Запрос)
		{
			return new ЦиклыОбменаОтвет {Ответ = "ЦиклыОбмена, "};
		}

		public object Post(ЦиклыОбменаЗапрос ЗапросЦиклыОбмена)
		{
			var Ссылка = (СправочникиСсылка.ЦиклыОбмена)ЗапросЦиклыОбмена;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}