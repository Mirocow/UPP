﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ПорядкиПересчетаМесячнойСтавкиВЧасовую
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"a2fa2425-cc0d-4c44-98d4-c23cf6c0b60a\", \"Представление\":\"ПоМесячнойНормеВремени\"}")]
		ПоМесячнойНормеВремени = 0,//По месячной норме времени по графику работника
		[EnumMember(Value = "{\"Ссылка\":\"3c0c597d-bf0a-43a9-bedc-31855d3028a0\", \"Представление\":\"ПоСреднемуКоличествуЧасовВМесяце\"}")]
		ПоСреднемуКоличествуЧасовВМесяце = 1,//По среднему количеству часов в месяце
		[EnumMember(Value = "{\"Ссылка\":\"36695fb0-2abd-4830-a43a-3ff6134bda9e\", \"Представление\":\"ПоМесячнойНормеПоПроизводственномуКалендарю\"}")]
		ПоМесячнойНормеПоПроизводственномуКалендарю = 2,//По месячной норме по производственному календарю
	}
	public static partial class ПорядкиПересчетаМесячнойСтавкиВЧасовую_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ПоМесячнойНормеВремени = new Guid("3cc2d498-c0f6-0ab6-4c44-cc0da2fa2425");//По месячной норме времени по графику работника
		public static readonly Guid ПоСреднемуКоличествуЧасовВМесяце = new Guid("8531dcbe-305d-a028-43a9-bf0a3c0c597d");//По среднему количеству часов в месяце
		public static readonly Guid ПоМесячнойНормеПоПроизводственномуКалендарю = new Guid("f63f3aa4-4b13-9eda-4830-2abd36695fb0");//По месячной норме по производственному календарю
		public static ПорядкиПересчетаМесячнойСтавкиВЧасовую Получить(this ПорядкиПересчетаМесячнойСтавкиВЧасовую Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ПорядкиПересчетаМесячнойСтавкиВЧасовую Получить(this ПорядкиПересчетаМесячнойСтавкиВЧасовую Значение, Guid Ссылка)
		{
			if(Ссылка == ПоМесячнойНормеВремени)
			{
				return ПорядкиПересчетаМесячнойСтавкиВЧасовую.ПоМесячнойНормеВремени;
			}
			else if(Ссылка == ПоСреднемуКоличествуЧасовВМесяце)
			{
				return ПорядкиПересчетаМесячнойСтавкиВЧасовую.ПоСреднемуКоличествуЧасовВМесяце;
			}
			else if(Ссылка == ПоМесячнойНормеПоПроизводственномуКалендарю)
			{
				return ПорядкиПересчетаМесячнойСтавкиВЧасовую.ПоМесячнойНормеПоПроизводственномуКалендарю;
			}
			return ПорядкиПересчетаМесячнойСтавкиВЧасовую.ПустаяСсылка;
		}
		public static byte[] Ключ(this ПорядкиПересчетаМесячнойСтавкиВЧасовую Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ПорядкиПересчетаМесячнойСтавкиВЧасовую Значение)
		{
			switch (Значение)
			{
				case ПорядкиПересчетаМесячнойСтавкиВЧасовую.ПоМесячнойНормеВремени: return ПоМесячнойНормеВремени;
				case ПорядкиПересчетаМесячнойСтавкиВЧасовую.ПоСреднемуКоличествуЧасовВМесяце: return ПоСреднемуКоличествуЧасовВМесяце;
				case ПорядкиПересчетаМесячнойСтавкиВЧасовую.ПоМесячнойНормеПоПроизводственномуКалендарю: return ПоМесячнойНормеПоПроизводственномуКалендарю;
			}
			return Guid.Empty;
		}
	}
}