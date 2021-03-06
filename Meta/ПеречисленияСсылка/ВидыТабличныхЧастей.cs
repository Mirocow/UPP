﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВидыТабличныхЧастей
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"83a08316-9229-4296-a7ff-0473c4590531\", \"Представление\":\"Товары\"}")]
		Товары = 0,
		[EnumMember(Value = "{\"Ссылка\":\"fe2d95bc-62b9-44ba-8000-cf971dedbb15\", \"Представление\":\"Тара\"}")]
		Тара = 1,
		[EnumMember(Value = "{\"Ссылка\":\"f6ea32e0-8466-493b-828b-b9ec4abf477a\", \"Представление\":\"Оборудование\"}")]
		Оборудование = 2,
	}
	public static partial class ВидыТабличныхЧастей_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Товары = new Guid("7304ffa7-59c4-3105-4296-922983a08316");
		public static readonly Guid Тара = new Guid("97cf0080-ed1d-15bb-44ba-62b9fe2d95bc");
		public static readonly Guid Оборудование = new Guid("ecb98b82-bf4a-7a47-493b-8466f6ea32e0");
		public static ВидыТабличныхЧастей Получить(this ВидыТабличныхЧастей Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыТабличныхЧастей Получить(this ВидыТабличныхЧастей Значение, Guid Ссылка)
		{
			if(Ссылка == Товары)
			{
				return ВидыТабличныхЧастей.Товары;
			}
			else if(Ссылка == Тара)
			{
				return ВидыТабличныхЧастей.Тара;
			}
			else if(Ссылка == Оборудование)
			{
				return ВидыТабличныхЧастей.Оборудование;
			}
			return ВидыТабличныхЧастей.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыТабличныхЧастей Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыТабличныхЧастей Значение)
		{
			switch (Значение)
			{
				case ВидыТабличныхЧастей.Товары: return Товары;
				case ВидыТабличныхЧастей.Тара: return Тара;
				case ВидыТабличныхЧастей.Оборудование: return Оборудование;
			}
			return Guid.Empty;
		}
	}
}