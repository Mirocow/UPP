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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d50ddf2f-2062-4d48-beeb-cdc181a09436");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011959.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.СотрудникиОрганизаций Сотрудник {get;set;}
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}//Физическое лицо
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию УдалитьПриказ {get;set;}//Удалить приказ
		public DateTime ДатаОкончанияПособияДоПолутораЛет {get;set;}//Дата окончания пособия до полутора лет
		public DateTime ДатаОкончанияПособияДоТрехЛет {get;set;}//Дата окончания пособия до трех лет
		public DateTime ДатаИзменения {get;set;}//Дата изменения
		public decimal/*(2)*/ КоличествоДетей {get;set;}//Количество детей
		public decimal/*(1)*/ КоличествоПервыхДетей {get;set;}//Количество первых детей
		public V82.ДокументыСсылка.ОтпускПоУходуЗаРебенком ДокументОснование {get;set;}//Документ основание
		public V82.Перечисления/*Ссылка*/.ВидыДействияСНачислением Действие {get;set;}
		public bool ВыплачиватьПособиеДоПолутораЛет {get;set;}//Выплачивать пособие до полутора лет
		public bool ВыплачиватьПособиеДоТрехЛет {get;set;}//Выплачивать пособие до трех лет
		public bool ОсвобождатьСтавку {get;set;}//Освобождать ставку
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
		public V82.ДокументыСсылка.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком ИсправляемыйДокумент {get;set;}//Исправляемый документ
		public ХранилищеЗначения ДвиженияИсправляемогоДокумента {get;set;}//Движения исправляемого документа
		
		public ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком()
		{
		}
		
		public ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком(byte[] УникальныйИдентификатор)
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
					,_Fld21445RRef [Сотрудник]
					,_Fld18669RRef [Физлицо]
					,_Fld18666RRef [Организация]
					,_Fld18667 [Комментарий]
					,_Fld18668RRef [Ответственный]
					,_Fld18670RRef [УдалитьПриказ]
					,_Fld18671 [ДатаОкончанияПособияДоПолутораЛет]
					,_Fld18672 [ДатаОкончанияПособияДоТрехЛет]
					,_Fld18673 [ДатаИзменения]
					,_Fld18674 [КоличествоДетей]
					,_Fld18675 [КоличествоПервыхДетей]
					,_Fld18676RRef [ДокументОснование]
					,_Fld18677RRef [Действие]
					,_Fld18678 [ВыплачиватьПособиеДоПолутораЛет]
					,_Fld18679 [ВыплачиватьПособиеДоТрехЛет]
					,_Fld22995 [ОсвобождатьСтавку]
					,_Fld26773 [ДанныеПрошлойВерсии]
					,_Fld26774RRef [ИсправляемыйДокумент]
					,_Fld26775 [ДвиженияИсправляемогоДокумента]
					From _Document18662(NOLOCK)
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
							Комментарий = Читалка.GetString(7);
							УдалитьПриказ = new V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию((byte[])Читалка.GetValue(9));
							ДатаОкончанияПособияДоПолутораЛет = Читалка.GetDateTime(10);
							ДатаОкончанияПособияДоТрехЛет = Читалка.GetDateTime(11);
							ДатаИзменения = Читалка.GetDateTime(12);
							КоличествоДетей = Читалка.GetDecimal(13);
							КоличествоПервыхДетей = Читалка.GetDecimal(14);
							ДокументОснование = new V82.ДокументыСсылка.ОтпускПоУходуЗаРебенком((byte[])Читалка.GetValue(15));
							Действие = V82.Перечисления/*Ссылка*/.ВидыДействияСНачислением.ПустаяСсылка.Получить((byte[])Читалка.GetValue(16));
							ВыплачиватьПособиеДоПолутораЛет = ((byte[])Читалка.GetValue(17))[0]==1;
							ВыплачиватьПособиеДоТрехЛет = ((byte[])Читалка.GetValue(18))[0]==1;
							ОсвобождатьСтавку = ((byte[])Читалка.GetValue(19))[0]==1;
							ДанныеПрошлойВерсии = ((byte[])Читалка.GetValue(20))[0]==1;
							ИсправляемыйДокумент = new V82.ДокументыСсылка.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком((byte[])Читалка.GetValue(21));
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
		
		public V82.ДокументыОбъект.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Сотрудник = Сотрудник;
			Объект.Физлицо = Физлицо;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.УдалитьПриказ = УдалитьПриказ;
			Объект.ДатаОкончанияПособияДоПолутораЛет = ДатаОкончанияПособияДоПолутораЛет;
			Объект.ДатаОкончанияПособияДоТрехЛет = ДатаОкончанияПособияДоТрехЛет;
			Объект.ДатаИзменения = ДатаИзменения;
			Объект.КоличествоДетей = КоличествоДетей;
			Объект.КоличествоПервыхДетей = КоличествоПервыхДетей;
			Объект.ДокументОснование = ДокументОснование;
			Объект.Действие = Действие;
			Объект.ВыплачиватьПособиеДоПолутораЛет = ВыплачиватьПособиеДоПолутораЛет;
			Объект.ВыплачиватьПособиеДоТрехЛет = ВыплачиватьПособиеДоТрехЛет;
			Объект.ОсвобождатьСтавку = ОсвобождатьСтавку;
			Объект.ДанныеПрошлойВерсии = ДанныеПрошлойВерсии;
			Объект.ИсправляемыйДокумент = ИсправляемыйДокумент;
			Объект.ДвиженияИсправляемогоДокумента = ДвиженияИсправляемогоДокумента;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком(УникальныйИдентификатор);
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