﻿
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КонтролируемыеЗначенияПоБюджетам:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("570556dc-d4d7-4209-8e50-29891e988cd7");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012011.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		public V82.Перечисления/*Ссылка*/.ВидыКонтролируемогоЗначенияБюджета ВидКонтролируемыхЗначений {get;set;}//Вид контролируемых значений
		public V82.Перечисления/*Ссылка*/.ИспользованиеКонтролируемыхЗначенийБюджетов ИспользованиеКонтролируемыхЗначений {get;set;}//Использование контролируемых значений
		public V82.Перечисления/*Ссылка*/.ВидыОграниченийОборотовБюджета ВидОграниченияОборотов {get;set;}//Вид ограничения оборотов
		public V82.СправочникиСсылка.СценарииПланирования КонтролирующийСценарий {get;set;}//Контролирующий сценарий
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		///<summary>
		///Начало интервала контроля оборотов по контролирующему сценарию
		///</summary>
		public DateTime ДатаНачалаКонтролирующегоСценария {get;set;}//Дата начала контроля оборотов 
		///<summary>
		///Конец интервала контроля оборотов по контролирующему сценарию
		///</summary>
		public DateTime ДатаКонцаКонтролирующегоСценария {get;set;}//Дата конца контроля оборотов 
		///<summary>
		///Контролировать обороты в разрезе ЦФО
		///</summary>
		public bool КонтролироватьЦФО {get;set;}//Контролировать ЦФО
		///<summary>
		///Контролировать обороты в разрезе проектов
		///</summary>
		public bool КонтролироватьПроекты {get;set;}//Контролировать проекты
		///<summary>
		///Контролировать обороты в разрезе контрагентов
		///</summary>
		public bool КонтролироватьКонтрагентов {get;set;}//Контролировать контрагентов
		///<summary>
		///Контролировать обороты в разрезе номенклатуры
		///</summary>
		public bool КонтролироватьНоменклатуру {get;set;}//Контролировать номенклатуру
		public V82.Перечисления/*Ссылка*/.ВидыОтклоненийКонтролируемыхЗначенийБюджетов ВидОтклоненияКонтролируемыхЗначений {get;set;}//Вид отклонения контролируемых значений
		///<summary>
		///Отклонение от значения контролирующего сценария
		///</summary>
		public decimal/*(15.2)*/ Отклонение {get;set;}
		
		public КонтролируемыеЗначенияПоБюджетам()
		{
		}
		
		public КонтролируемыеЗначенияПоБюджетам(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld5546RRef [Сценарий]
					,_Fld5547RRef [ВидКонтролируемыхЗначений]
					,_Fld5548RRef [ИспользованиеКонтролируемыхЗначений]
					,_Fld5549RRef [ВидОграниченияОборотов]
					,_Fld5550RRef [КонтролирующийСценарий]
					,_Fld5551RRef [Ответственный]
					,_Fld5552 [Комментарий]
					,_Fld5553RRef [Состояние]
					,_Fld5554 [ДатаНачалаКонтролирующегоСценария]
					,_Fld5555 [ДатаКонцаКонтролирующегоСценария]
					,_Fld5556 [КонтролироватьЦФО]
					,_Fld5557 [КонтролироватьПроекты]
					,_Fld5558 [КонтролироватьКонтрагентов]
					,_Fld5559 [КонтролироватьНоменклатуру]
					,_Fld5560RRef [ВидОтклоненияКонтролируемыхЗначений]
					,_Fld5561 [Отклонение]
					From _Document301(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Номер = Читалка.GetString(3);
							ВидКонтролируемыхЗначений = V82.Перечисления/*Ссылка*/.ВидыКонтролируемогоЗначенияБюджета.ПустаяСсылка.Получить((byte[])Читалка.GetValue(5));
							ИспользованиеКонтролируемыхЗначений = V82.Перечисления/*Ссылка*/.ИспользованиеКонтролируемыхЗначенийБюджетов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							ВидОграниченияОборотов = V82.Перечисления/*Ссылка*/.ВидыОграниченийОборотовБюджета.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Комментарий = Читалка.GetString(10);
							Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
							ДатаНачалаКонтролирующегоСценария = Читалка.GetDateTime(12);
							ДатаКонцаКонтролирующегоСценария = Читалка.GetDateTime(13);
							КонтролироватьЦФО = ((byte[])Читалка.GetValue(14))[0]==1;
							КонтролироватьПроекты = ((byte[])Читалка.GetValue(15))[0]==1;
							КонтролироватьКонтрагентов = ((byte[])Читалка.GetValue(16))[0]==1;
							КонтролироватьНоменклатуру = ((byte[])Читалка.GetValue(17))[0]==1;
							ВидОтклоненияКонтролируемыхЗначений = V82.Перечисления/*Ссылка*/.ВидыОтклоненийКонтролируемыхЗначенийБюджетов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(18));
							Отклонение = Читалка.GetDecimal(19);
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.ДокументыОбъект.КонтролируемыеЗначенияПоБюджетам  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.КонтролируемыеЗначенияПоБюджетам();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Сценарий = Сценарий;
			Объект.ВидКонтролируемыхЗначений = ВидКонтролируемыхЗначений;
			Объект.ИспользованиеКонтролируемыхЗначений = ИспользованиеКонтролируемыхЗначений;
			Объект.ВидОграниченияОборотов = ВидОграниченияОборотов;
			Объект.КонтролирующийСценарий = КонтролирующийСценарий;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.Состояние = Состояние;
			Объект.ДатаНачалаКонтролирующегоСценария = ДатаНачалаКонтролирующегоСценария;
			Объект.ДатаКонцаКонтролирующегоСценария = ДатаКонцаКонтролирующегоСценария;
			Объект.КонтролироватьЦФО = КонтролироватьЦФО;
			Объект.КонтролироватьПроекты = КонтролироватьПроекты;
			Объект.КонтролироватьКонтрагентов = КонтролироватьКонтрагентов;
			Объект.КонтролироватьНоменклатуру = КонтролироватьНоменклатуру;
			Объект.ВидОтклоненияКонтролируемыхЗначений = ВидОтклоненияКонтролируемыхЗначений;
			Объект.Отклонение = Отклонение;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.КонтролируемыеЗначенияПоБюджетам ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.КонтролируемыеЗначенияПоБюджетам)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.КонтролируемыеЗначенияПоБюджетам(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
		}
		
		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}
		
		public string СериализацияJson()
		{
			return this.ToJson();
		}
		
		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}