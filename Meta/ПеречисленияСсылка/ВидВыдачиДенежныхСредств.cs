﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВидВыдачиДенежныхСредств
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"1c4cb498-e8de-4834-8afe-ffabd380a192\", \"Представление\":\"КассеККМ\"}")]
		КассеККМ = 0,//кассе ККМ
		[EnumMember(Value = "{\"Ссылка\":\"2c756df8-e73c-40ed-976b-7db5c11977bf\", \"Представление\":\"НТТ\"}")]
		НТТ = 1,
	}
	public static partial class ВидВыдачиДенежныхСредств_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid КассеККМ = new Guid("abfffe8a-80d3-92a1-4834-e8de1c4cb498");//кассе ККМ
		public static readonly Guid НТТ = new Guid("b57d6b97-19c1-bf77-40ed-e73c2c756df8");
		public static ВидВыдачиДенежныхСредств Получить(this ВидВыдачиДенежныхСредств Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидВыдачиДенежныхСредств Получить(this ВидВыдачиДенежныхСредств Значение, Guid Ссылка)
		{
			if(Ссылка == КассеККМ)
			{
				return ВидВыдачиДенежныхСредств.КассеККМ;
			}
			else if(Ссылка == НТТ)
			{
				return ВидВыдачиДенежныхСредств.НТТ;
			}
			return ВидВыдачиДенежныхСредств.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидВыдачиДенежныхСредств Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидВыдачиДенежныхСредств Значение)
		{
			switch (Значение)
			{
				case ВидВыдачиДенежныхСредств.КассеККМ: return КассеККМ;
				case ВидВыдачиДенежныхСредств.НТТ: return НТТ;
			}
			return Guid.Empty;
		}
	}
}