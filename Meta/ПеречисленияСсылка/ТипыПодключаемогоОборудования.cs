﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыПодключаемогоОборудования
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///Scanner
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"524a3884-bdce-47ae-8cd4-cdb8383f2bd4\", \"Представление\":\"СканерШтрихкода\"}")]
		СканерШтрихкода = 0,//Сканеры штрихкода
	///<summary>
	///MSR
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"21fe09c9-29a9-4aed-988a-103a1f6e2573\", \"Представление\":\"СчитывательМагнитныхКарт\"}")]
		СчитывательМагнитныхКарт = 1,//Считыватели магнитных карт
	///<summary>
	///FiscalPrinter
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e3f0f351-c427-4f58-9978-919c68f0cbaf\", \"Представление\":\"ФискальныйРегистратор\"}")]
		ФискальныйРегистратор = 2,//Фискальные регистраторы
	///<summary>
	///LineDisplay
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"88c4a2e0-69b2-4ebc-8dc2-3da76cc00d44\", \"Представление\":\"ДисплейПокупателя\"}")]
		ДисплейПокупателя = 3,//Дисплеи покупателя
	///<summary>
	///DataCollectionTerminal
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"09a94159-004c-43ac-8e88-587d039fc535\", \"Представление\":\"ТерминалСбораДанных\"}")]
		ТерминалСбораДанных = 4,//Терминалы сбора данных
	///<summary>
	///AcquiringTerminal
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"63e7904d-47c0-4764-bea0-cb5ca94d5d5a\", \"Представление\":\"ЭквайринговыйТерминал\"}")]
		ЭквайринговыйТерминал = 5,//Эквайринговые терминалы
	///<summary>
	///Scale
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"87f72c14-cda7-46fc-9709-68c3d3c55d23\", \"Представление\":\"ЭлектронныеВесы\"}")]
		ЭлектронныеВесы = 6,//Электронные весы
	///<summary>
	///ScaleOffline
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"b2ca84d1-5b99-46a8-9b44-a451b74dcb45\", \"Представление\":\"ВесыСПечатьюЭтикеток\"}")]
		ВесыСПечатьюЭтикеток = 7,//Весы с печатью этикеток
	///<summary>
	///ECROffline
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"99a50f34-c996-4ea1-982e-7e25b2b11629\", \"Представление\":\"ККМOffline\"}")]
		ККМOffline = 8,//ККМ Offline
	}
	public static partial class ТипыПодключаемогоОборудования_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///Scanner
		///</summary>
		public static readonly Guid СканерШтрихкода = new Guid("b8cdd48c-3f38-d42b-47ae-bdce524a3884");//Сканеры штрихкода
		///<summary>
		///MSR
		///</summary>
		public static readonly Guid СчитывательМагнитныхКарт = new Guid("3a108a98-6e1f-7325-4aed-29a921fe09c9");//Считыватели магнитных карт
		///<summary>
		///FiscalPrinter
		///</summary>
		public static readonly Guid ФискальныйРегистратор = new Guid("9c917899-f068-afcb-4f58-c427e3f0f351");//Фискальные регистраторы
		///<summary>
		///LineDisplay
		///</summary>
		public static readonly Guid ДисплейПокупателя = new Guid("a73dc28d-c06c-440d-4ebc-69b288c4a2e0");//Дисплеи покупателя
		///<summary>
		///DataCollectionTerminal
		///</summary>
		public static readonly Guid ТерминалСбораДанных = new Guid("7d58888e-9f03-35c5-43ac-004c09a94159");//Терминалы сбора данных
		///<summary>
		///AcquiringTerminal
		///</summary>
		public static readonly Guid ЭквайринговыйТерминал = new Guid("5ccba0be-4da9-5a5d-4764-47c063e7904d");//Эквайринговые терминалы
		///<summary>
		///Scale
		///</summary>
		public static readonly Guid ЭлектронныеВесы = new Guid("c3680997-c5d3-235d-46fc-cda787f72c14");//Электронные весы
		///<summary>
		///ScaleOffline
		///</summary>
		public static readonly Guid ВесыСПечатьюЭтикеток = new Guid("51a4449b-4db7-45cb-46a8-5b99b2ca84d1");//Весы с печатью этикеток
		///<summary>
		///ECROffline
		///</summary>
		public static readonly Guid ККМOffline = new Guid("257e2e98-b1b2-2916-4ea1-c99699a50f34");//ККМ Offline
		public static ТипыПодключаемогоОборудования Получить(this ТипыПодключаемогоОборудования Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыПодключаемогоОборудования Получить(this ТипыПодключаемогоОборудования Значение, Guid Ссылка)
		{
			if(Ссылка == СканерШтрихкода)
			{
				return ТипыПодключаемогоОборудования.СканерШтрихкода;
			}
			else if(Ссылка == СчитывательМагнитныхКарт)
			{
				return ТипыПодключаемогоОборудования.СчитывательМагнитныхКарт;
			}
			else if(Ссылка == ФискальныйРегистратор)
			{
				return ТипыПодключаемогоОборудования.ФискальныйРегистратор;
			}
			else if(Ссылка == ДисплейПокупателя)
			{
				return ТипыПодключаемогоОборудования.ДисплейПокупателя;
			}
			else if(Ссылка == ТерминалСбораДанных)
			{
				return ТипыПодключаемогоОборудования.ТерминалСбораДанных;
			}
			else if(Ссылка == ЭквайринговыйТерминал)
			{
				return ТипыПодключаемогоОборудования.ЭквайринговыйТерминал;
			}
			else if(Ссылка == ЭлектронныеВесы)
			{
				return ТипыПодключаемогоОборудования.ЭлектронныеВесы;
			}
			else if(Ссылка == ВесыСПечатьюЭтикеток)
			{
				return ТипыПодключаемогоОборудования.ВесыСПечатьюЭтикеток;
			}
			else if(Ссылка == ККМOffline)
			{
				return ТипыПодключаемогоОборудования.ККМOffline;
			}
			return ТипыПодключаемогоОборудования.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыПодключаемогоОборудования Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыПодключаемогоОборудования Значение)
		{
			switch (Значение)
			{
				case ТипыПодключаемогоОборудования.СканерШтрихкода: return СканерШтрихкода;
				case ТипыПодключаемогоОборудования.СчитывательМагнитныхКарт: return СчитывательМагнитныхКарт;
				case ТипыПодключаемогоОборудования.ФискальныйРегистратор: return ФискальныйРегистратор;
				case ТипыПодключаемогоОборудования.ДисплейПокупателя: return ДисплейПокупателя;
				case ТипыПодключаемогоОборудования.ТерминалСбораДанных: return ТерминалСбораДанных;
				case ТипыПодключаемогоОборудования.ЭквайринговыйТерминал: return ЭквайринговыйТерминал;
				case ТипыПодключаемогоОборудования.ЭлектронныеВесы: return ЭлектронныеВесы;
				case ТипыПодключаемогоОборудования.ВесыСПечатьюЭтикеток: return ВесыСПечатьюЭтикеток;
				case ТипыПодключаемогоОборудования.ККМOffline: return ККМOffline;
			}
			return Guid.Empty;
		}
	}
}