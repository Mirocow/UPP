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
	public partial class СчетФактураВыданный:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("544d9509-b998-4050-b1b3-cbe12a5d9b1a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012032.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime ДатаВыставления {get;set;}//Счет-фактура передан
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		public V82.Перечисления/*Ссылка*/.ВидСчетаФактурыВыставленного ВидСчетаФактуры {get;set;}//Вид счета-фактуры
		public object ДокументОснование {get;set;}//Документ основание
		public bool Под0 {get;set;}//Аванс под 0%
		///<summary>
		///Сумма по документу основанию в валюте документа
		///</summary>
		public decimal/*(14.2)*/ ВалютнаяСумма {get;set;}//Сумма по документу-основанию
		public V82.Перечисления/*Ссылка*/.СтавкиНДС СтавкаНДС {get;set;}//Ставка НДС
		public decimal/*(14.2)*/ Сумма {get;set;}
		public decimal/*(14.2)*/ СуммаНДС {get;set;}//Сумма НДС
		public DateTime ДатаПлатежноРасчетногоДокумента {get;set;}//Дата платежно расчетного документа
		public string/*(30)*/ НомерПлатежноРасчетногоДокумента {get;set;}//Номер платежно расчетного документа
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		public decimal/*(14.2)*/ СуммаДокумента {get;set;}//Сумма документа
		public bool СформированПриВводеНачальныхОстатковНДС {get;set;}//Сформирован при вводе начальных остатков НДС
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public bool Исправление {get;set;}
		public decimal/*(1)*/ КодСпособаВыставления {get;set;}//Код способа выставления
		public string/*(10)*/ КодВидаОперации {get;set;}//Код вида операции
		public bool Выставлен {get;set;}
		public decimal/*(10)*/ НомерИсправления {get;set;}//Номер исправления
		public string/*(15)*/ НомерИсходногоДокумента {get;set;}//Номер корректируемого счета-фактуры
		public DateTime ДатаИсходногоДокумента {get;set;}//Дата корректируемого счета-фактуры
		public decimal/*(10)*/ НомерИсправленияИсходногоДокумента {get;set;}//Номер исправления исходного документа
		public DateTime ДатаИсправленияИсходногоДокумента {get;set;}//Дата исправления исходного документа
		///<summary>
		///Сумма по документу основанию в валюте документа увеличение
		///</summary>
		public decimal/*(14.2)*/ СуммаУвеличение {get;set;}//Сумма по документу-основанию увеличение
		///<summary>
		///Сумма по документу основанию в валюте документа уменьшение
		///</summary>
		public decimal/*(14.2)*/ СуммаУменьшение {get;set;}//Сумма по документу-основанию уменьшение
		public bool УчитыватьИсправлениеИсходногоДокумента {get;set;}//Учитывать исправление исходного документа
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public string/*(15)*/ НомерИсправляемогоКорректировочногоДокумента {get;set;}//Номер исправляемого корректировочного счета-фактуры
		public DateTime ДатаИсправляемогоКорректировочногоДокумента {get;set;}//Дата исправляемого корректировочного счета-фактуры
		public bool СчетФактураБезНДС {get;set;}//Счет-фактура без НДС
		public bool СчетФактураНеВыставляется {get;set;}//Счет-фактура не выставляется
		///<summary>
		///Сумма НДС по документу основанию в валюте документа увеличение
		///</summary>
		public decimal/*(14.2)*/ СуммаНДСУвеличение {get;set;}//Сумма НДС по документу-основанию увеличение
		///<summary>
		///Сумма НДС по документу основанию в валюте документа уменьшение
		///</summary>
		public decimal/*(14.2)*/ СуммаНДСУменьшение {get;set;}//Сумма НДС по документу-основанию уменьшение
		///<summary>
		///Сумма НДС по документу основанию в валюте документа
		///</summary>
		public decimal/*(14.2)*/ СуммаНДСДокумента {get;set;}//Сумма НДС по документу-основанию
		public V82.ДокументыСсылка.СчетФактураВыданный ИсправляемыйСчетФактура {get;set;}//Исправляемый счет-фактура
		public V82.СправочникиСсылка.Контрагенты Комитент {get;set;}
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		public V82.СправочникиСсылка.ФизическиеЛица ГлавныйБухгалтер {get;set;}//Главный бухгалтер
		
		public СчетФактураВыданный()
		{
		}
		
		public СчетФактураВыданный(byte[] УникальныйИдентификатор)
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
					,_Fld27318 [ДатаВыставления]
					,_Fld11932RRef [Контрагент]
					,_Fld11936RRef [ДоговорКонтрагента]
					,_Fld22260RRef [ВидСчетаФактуры]
					,_Fld11935_TYPE [ДокументОснование_Тип],_Fld11935_RRRef [ДокументОснование],_Fld11935_RTRef [ДокументОснование_Вид]
					,_Fld11928 [Под0]
					,_Fld11938 [ВалютнаяСумма]
					,_Fld11929RRef [СтавкаНДС]
					,_Fld11930 [Сумма]
					,_Fld11931 [СуммаНДС]
					,_Fld11923 [ДатаПлатежноРасчетногоДокумента]
					,_Fld11922 [НомерПлатежноРасчетногоДокумента]
					,_Fld11933RRef [ВалютаДокумента]
					,_Fld11934 [СуммаДокумента]
					,_Fld11937 [СформированПриВводеНачальныхОстатковНДС]
					,_Fld11926RRef [Ответственный]
					,_Fld11924 [Комментарий]
					,_Fld27319 [Исправление]
					,_Fld27320 [КодСпособаВыставления]
					,_Fld27321 [КодВидаОперации]
					,_Fld27322 [Выставлен]
					,_Fld27323 [НомерИсправления]
					,_Fld27324 [НомерИсходногоДокумента]
					,_Fld27325 [ДатаИсходногоДокумента]
					,_Fld27326 [НомерИсправленияИсходногоДокумента]
					,_Fld27327 [ДатаИсправленияИсходногоДокумента]
					,_Fld27328 [СуммаУвеличение]
					,_Fld27329 [СуммаУменьшение]
					,_Fld27330 [УчитыватьИсправлениеИсходногоДокумента]
					,_Fld11925RRef [Организация]
					,_Fld27331 [НомерИсправляемогоКорректировочногоДокумента]
					,_Fld27332 [ДатаИсправляемогоКорректировочногоДокумента]
					,_Fld27333 [СчетФактураБезНДС]
					,_Fld27334 [СчетФактураНеВыставляется]
					,_Fld27335 [СуммаНДСУвеличение]
					,_Fld27336 [СуммаНДСУменьшение]
					,_Fld27337 [СуммаНДСДокумента]
					,_Fld27338RRef [ИсправляемыйСчетФактура]
					,_Fld27339RRef [Комитент]
					,_Fld27340RRef [Руководитель]
					,_Fld27341RRef [ГлавныйБухгалтер]
					From _Document464(NOLOCK)
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
							ДатаВыставления = Читалка.GetDateTime(4);
							ВидСчетаФактуры = V82.Перечисления/*Ссылка*/.ВидСчетаФактурыВыставленного.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Под0 = ((byte[])Читалка.GetValue(11))[0]==1;
							ВалютнаяСумма = Читалка.GetDecimal(12);
							СтавкаНДС = V82.Перечисления/*Ссылка*/.СтавкиНДС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(13));
							Сумма = Читалка.GetDecimal(14);
							СуммаНДС = Читалка.GetDecimal(15);
							ДатаПлатежноРасчетногоДокумента = Читалка.GetDateTime(16);
							НомерПлатежноРасчетногоДокумента = Читалка.GetString(17);
							СуммаДокумента = Читалка.GetDecimal(19);
							СформированПриВводеНачальныхОстатковНДС = ((byte[])Читалка.GetValue(20))[0]==1;
							Комментарий = Читалка.GetString(22);
							Исправление = ((byte[])Читалка.GetValue(23))[0]==1;
							КодСпособаВыставления = Читалка.GetDecimal(24);
							КодВидаОперации = Читалка.GetString(25);
							Выставлен = ((byte[])Читалка.GetValue(26))[0]==1;
							НомерИсправления = Читалка.GetDecimal(27);
							НомерИсходногоДокумента = Читалка.GetString(28);
							ДатаИсходногоДокумента = Читалка.GetDateTime(29);
							НомерИсправленияИсходногоДокумента = Читалка.GetDecimal(30);
							ДатаИсправленияИсходногоДокумента = Читалка.GetDateTime(31);
							СуммаУвеличение = Читалка.GetDecimal(32);
							СуммаУменьшение = Читалка.GetDecimal(33);
							УчитыватьИсправлениеИсходногоДокумента = ((byte[])Читалка.GetValue(34))[0]==1;
							НомерИсправляемогоКорректировочногоДокумента = Читалка.GetString(36);
							ДатаИсправляемогоКорректировочногоДокумента = Читалка.GetDateTime(37);
							СчетФактураБезНДС = ((byte[])Читалка.GetValue(38))[0]==1;
							СчетФактураНеВыставляется = ((byte[])Читалка.GetValue(39))[0]==1;
							СуммаНДСУвеличение = Читалка.GetDecimal(40);
							СуммаНДСУменьшение = Читалка.GetDecimal(41);
							СуммаНДСДокумента = Читалка.GetDecimal(42);
							ИсправляемыйСчетФактура = new V82.ДокументыСсылка.СчетФактураВыданный((byte[])Читалка.GetValue(43));
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
		
		public V82.ДокументыОбъект.СчетФактураВыданный  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.СчетФактураВыданный();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ДатаВыставления = ДатаВыставления;
			Объект.Контрагент = Контрагент;
			Объект.ДоговорКонтрагента = ДоговорКонтрагента;
			Объект.ВидСчетаФактуры = ВидСчетаФактуры;
			Объект.ДокументОснование = ДокументОснование;
			Объект.Под0 = Под0;
			Объект.ВалютнаяСумма = ВалютнаяСумма;
			Объект.СтавкаНДС = СтавкаНДС;
			Объект.Сумма = Сумма;
			Объект.СуммаНДС = СуммаНДС;
			Объект.ДатаПлатежноРасчетногоДокумента = ДатаПлатежноРасчетногоДокумента;
			Объект.НомерПлатежноРасчетногоДокумента = НомерПлатежноРасчетногоДокумента;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.СформированПриВводеНачальныхОстатковНДС = СформированПриВводеНачальныхОстатковНДС;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.Исправление = Исправление;
			Объект.КодСпособаВыставления = КодСпособаВыставления;
			Объект.КодВидаОперации = КодВидаОперации;
			Объект.Выставлен = Выставлен;
			Объект.НомерИсправления = НомерИсправления;
			Объект.НомерИсходногоДокумента = НомерИсходногоДокумента;
			Объект.ДатаИсходногоДокумента = ДатаИсходногоДокумента;
			Объект.НомерИсправленияИсходногоДокумента = НомерИсправленияИсходногоДокумента;
			Объект.ДатаИсправленияИсходногоДокумента = ДатаИсправленияИсходногоДокумента;
			Объект.СуммаУвеличение = СуммаУвеличение;
			Объект.СуммаУменьшение = СуммаУменьшение;
			Объект.УчитыватьИсправлениеИсходногоДокумента = УчитыватьИсправлениеИсходногоДокумента;
			Объект.Организация = Организация;
			Объект.НомерИсправляемогоКорректировочногоДокумента = НомерИсправляемогоКорректировочногоДокумента;
			Объект.ДатаИсправляемогоКорректировочногоДокумента = ДатаИсправляемогоКорректировочногоДокумента;
			Объект.СчетФактураБезНДС = СчетФактураБезНДС;
			Объект.СчетФактураНеВыставляется = СчетФактураНеВыставляется;
			Объект.СуммаНДСУвеличение = СуммаНДСУвеличение;
			Объект.СуммаНДСУменьшение = СуммаНДСУменьшение;
			Объект.СуммаНДСДокумента = СуммаНДСДокумента;
			Объект.ИсправляемыйСчетФактура = ИсправляемыйСчетФактура;
			Объект.Комитент = Комитент;
			Объект.Руководитель = Руководитель;
			Объект.ГлавныйБухгалтер = ГлавныйБухгалтер;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.СчетФактураВыданный ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.СчетФактураВыданный)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.СчетФактураВыданный(УникальныйИдентификатор);
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