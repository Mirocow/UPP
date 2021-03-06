﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//SvedeniyaOTrudovomStazheZastrakhovannogoLicaSZVK
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК","")]
	public class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКЗапрос: V82.ДокументыСсылка.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК,IReturn<СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКЗапрос>
	{
	}
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/ПоСсылке","{Ссылка}")]
	public class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКНайтиПоСсылке: V82.ДокументыСсылка.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК,IReturn<СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/ПоНомеру","{Номер}")]
	public class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКНайтиПоНомеру: V82.ДокументыСсылка.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК,IReturn<СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКВыбратьПоСсылке: V82.ДокументыСсылка.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК,IReturn<СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКВыбратьПоНомеру: V82.ДокументыСсылка.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК,IReturn<СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКСтраницаПоСсылке: V82.ДокументыСсылка.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК,IReturn<СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКСтраницаПоНомеру: V82.ДокументыСсылка.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК,IReturn<СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКСервис : Service
	{
		
		public object Get(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКОтвет() { Ответ = "СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКОтвет() {Ответ = "СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКЗапрос Запрос)
		{
			return new СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКОтвет {Ответ = "СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК, "};
		}

		public object Post(СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВКЗапрос ЗапросСведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК)
		{
			var Ссылка = (ДокументыСсылка.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК)ЗапросСведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}