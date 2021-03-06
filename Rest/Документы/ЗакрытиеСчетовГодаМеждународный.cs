﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//ZakrytieSchetovGodaMezhdunarodnyjj
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный","")]
	public class ЗакрытиеСчетовГодаМеждународныйЗапрос: V82.ДокументыСсылка.ЗакрытиеСчетовГодаМеждународный,IReturn<ЗакрытиеСчетовГодаМеждународныйЗапрос>
	{
	}
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/ПоСсылке","{Ссылка}")]
	public class ЗакрытиеСчетовГодаМеждународныйНайтиПоСсылке: V82.ДокументыСсылка.ЗакрытиеСчетовГодаМеждународный,IReturn<ЗакрытиеСчетовГодаМеждународныйНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/ПоНомеру","{Номер}")]
	public class ЗакрытиеСчетовГодаМеждународныйНайтиПоНомеру: V82.ДокументыСсылка.ЗакрытиеСчетовГодаМеждународный,IReturn<ЗакрытиеСчетовГодаМеждународныйНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ЗакрытиеСчетовГодаМеждународныйВыбратьПоСсылке: V82.ДокументыСсылка.ЗакрытиеСчетовГодаМеждународный,IReturn<ЗакрытиеСчетовГодаМеждународныйВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ЗакрытиеСчетовГодаМеждународныйВыбратьПоНомеру: V82.ДокументыСсылка.ЗакрытиеСчетовГодаМеждународный,IReturn<ЗакрытиеСчетовГодаМеждународныйВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ЗакрытиеСчетовГодаМеждународныйСтраницаПоСсылке: V82.ДокументыСсылка.ЗакрытиеСчетовГодаМеждународный,IReturn<ЗакрытиеСчетовГодаМеждународныйСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ЗакрытиеСчетовГодаМеждународный/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ЗакрытиеСчетовГодаМеждународныйСтраницаПоНомеру: V82.ДокументыСсылка.ЗакрытиеСчетовГодаМеждународный,IReturn<ЗакрытиеСчетовГодаМеждународныйСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ЗакрытиеСчетовГодаМеждународныйОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ЗакрытиеСчетовГодаМеждународныйСервис : Service
	{
		
		public object Get(ЗакрытиеСчетовГодаМеждународныйЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ЗакрытиеСчетовГодаМеждународныйНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ЗакрытиеСчетовГодаМеждународный.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ЗакрытиеСчетовГодаМеждународныйОтвет() { Ответ = "ЗакрытиеСчетовГодаМеждународный c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ЗакрытиеСчетовГодаМеждународныйНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ЗакрытиеСчетовГодаМеждународный.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ЗакрытиеСчетовГодаМеждународныйОтвет() {Ответ = "ЗакрытиеСчетовГодаМеждународный c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ЗакрытиеСчетовГодаМеждународныйВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ЗакрытиеСчетовГодаМеждународный.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ЗакрытиеСчетовГодаМеждународныйВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ЗакрытиеСчетовГодаМеждународныйСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ЗакрытиеСчетовГодаМеждународныйСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ЗакрытиеСчетовГодаМеждународныйЗапрос Запрос)
		{
			return new ЗакрытиеСчетовГодаМеждународныйОтвет {Ответ = "ЗакрытиеСчетовГодаМеждународный, "};
		}

		public object Post(ЗакрытиеСчетовГодаМеждународныйЗапрос ЗапросЗакрытиеСчетовГодаМеждународный)
		{
			var Ссылка = (ДокументыСсылка.ЗакрытиеСчетовГодаМеждународный)ЗапросЗакрытиеСчетовГодаМеждународный;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}