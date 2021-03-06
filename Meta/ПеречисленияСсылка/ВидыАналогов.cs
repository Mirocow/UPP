﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Общ)
	///</summary>
	[DataContract]
	public enum ВидыАналогов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"a2abade5-67df-4d6b-a862-8b80fa243b7f\", \"Представление\":\"Комплектующая\"}")]
		Комплектующая = 0,
		[EnumMember(Value = "{\"Ссылка\":\"31abca43-dbe7-4b66-85c9-580044579d6b\", \"Представление\":\"Узел\"}")]
		Узел = 1,
	}
	public static partial class ВидыАналогов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Комплектующая = new Guid("808b62a8-24fa-7f3b-4d6b-67dfa2abade5");
		public static readonly Guid Узел = new Guid("0058c985-5744-6b9d-4b66-dbe731abca43");
		public static ВидыАналогов Получить(this ВидыАналогов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыАналогов Получить(this ВидыАналогов Значение, Guid Ссылка)
		{
			if(Ссылка == Комплектующая)
			{
				return ВидыАналогов.Комплектующая;
			}
			else if(Ссылка == Узел)
			{
				return ВидыАналогов.Узел;
			}
			return ВидыАналогов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыАналогов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыАналогов Значение)
		{
			switch (Значение)
			{
				case ВидыАналогов.Комплектующая: return Комплектующая;
				case ВидыАналогов.Узел: return Узел;
			}
			return Guid.Empty;
		}
	}
}