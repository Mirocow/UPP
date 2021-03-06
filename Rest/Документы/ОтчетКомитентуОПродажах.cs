﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//OtchetKomitentuOProdazhakh
	[Маршрут("Документы/ОтчетКомитентуОПродажах","")]
	public class ОтчетКомитентуОПродажахЗапрос: V82.ДокументыСсылка.ОтчетКомитентуОПродажах,IReturn<ОтчетКомитентуОПродажахЗапрос>
	{
	}
	[Маршрут("Документы/ОтчетКомитентуОПродажах/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ОтчетКомитентуОПродажах/ПоСсылке","{Ссылка}")]
	public class ОтчетКомитентуОПродажахНайтиПоСсылке: V82.ДокументыСсылка.ОтчетКомитентуОПродажах,IReturn<ОтчетКомитентуОПродажахНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ОтчетКомитентуОПродажах/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ОтчетКомитентуОПродажах/ПоНомеру","{Номер}")]
	public class ОтчетКомитентуОПродажахНайтиПоНомеру: V82.ДокументыСсылка.ОтчетКомитентуОПродажах,IReturn<ОтчетКомитентуОПродажахНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ОтчетКомитентуОПродажах/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ОтчетКомитентуОПродажах/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ОтчетКомитентуОПродажах/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ОтчетКомитентуОПродажахВыбратьПоСсылке: V82.ДокументыСсылка.ОтчетКомитентуОПродажах,IReturn<ОтчетКомитентуОПродажахВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ОтчетКомитентуОПродажах/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ОтчетКомитентуОПродажах/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ОтчетКомитентуОПродажах/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ОтчетКомитентуОПродажахВыбратьПоНомеру: V82.ДокументыСсылка.ОтчетКомитентуОПродажах,IReturn<ОтчетКомитентуОПродажахВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ОтчетКомитентуОПродажах/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ОтчетКомитентуОПродажахСтраницаПоСсылке: V82.ДокументыСсылка.ОтчетКомитентуОПродажах,IReturn<ОтчетКомитентуОПродажахСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ОтчетКомитентуОПродажах/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ОтчетКомитентуОПродажахСтраницаПоНомеру: V82.ДокументыСсылка.ОтчетКомитентуОПродажах,IReturn<ОтчетКомитентуОПродажахСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ОтчетКомитентуОПродажахОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ОтчетКомитентуОПродажахСервис : Service
	{
		
		public object Get(ОтчетКомитентуОПродажахЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ОтчетКомитентуОПродажахНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ОтчетКомитентуОПродажах.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ОтчетКомитентуОПродажахОтвет() { Ответ = "ОтчетКомитентуОПродажах c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ОтчетКомитентуОПродажахНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ОтчетКомитентуОПродажах.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ОтчетКомитентуОПродажахОтвет() {Ответ = "ОтчетКомитентуОПродажах c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ОтчетКомитентуОПродажахВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ОтчетКомитентуОПродажах.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ОтчетКомитентуОПродажахВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ОтчетКомитентуОПродажахСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ОтчетКомитентуОПродажахСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ОтчетКомитентуОПродажахЗапрос Запрос)
		{
			return new ОтчетКомитентуОПродажахОтвет {Ответ = "ОтчетКомитентуОПродажах, "};
		}

		public object Post(ОтчетКомитентуОПродажахЗапрос ЗапросОтчетКомитентуОПродажах)
		{
			var Ссылка = (ДокументыСсылка.ОтчетКомитентуОПродажах)ЗапросОтчетКомитентуОПродажах;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}