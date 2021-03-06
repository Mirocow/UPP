﻿
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НастройкиАналитикиУчета:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НастройкиАналитикиУчетаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/НастройкиАналитикиУчета/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиАналитикиУчетаЗапрос НастройкиАналитикиУчетаЗапрос = null;
			try
			{
				НастройкиАналитикиУчетаЗапрос = Клиент.Get(new НастройкиАналитикиУчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиАналитикиУчетаЗапрос;
		}
		public static НастройкиАналитикиУчетаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/НастройкиАналитикиУчета/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиАналитикиУчетаЗапрос НастройкиАналитикиУчетаЗапрос = null;
			try
			{
				НастройкиАналитикиУчетаЗапрос = Клиент.Get(new НастройкиАналитикиУчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиАналитикиУчетаЗапрос;
		}
		public static НастройкиАналитикиУчетаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/НастройкиАналитикиУчета/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиАналитикиУчетаЗапрос НастройкиАналитикиУчетаЗапрос = null;
			try
			{
				НастройкиАналитикиУчетаЗапрос = Клиент.Get(new НастройкиАналитикиУчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиАналитикиУчетаЗапрос;
		}
		public static void ЗаписатьНовый(НастройкиАналитикиУчетаЗапрос НастройкиАналитикиУчетаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/НастройкиАналитикиУчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиАналитикиУчетаОтвет = Клиент.Post(НастройкиАналитикиУчетаЗапрос);
		}
		public static void Записать(НастройкиАналитикиУчетаЗапрос НастройкиАналитикиУчетаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/НастройкиАналитикиУчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиАналитикиУчетаОтвет = Клиент.Put(НастройкиАналитикиУчетаЗапрос);
		}
		public static void Удалить(НастройкиАналитикиУчетаЗапрос НастройкиАналитикиУчетаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/НастройкиАналитикиУчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиАналитикиУчетаОтвет = Клиент.Delete(НастройкиАналитикиУчетаЗапрос);
		}
	}
}