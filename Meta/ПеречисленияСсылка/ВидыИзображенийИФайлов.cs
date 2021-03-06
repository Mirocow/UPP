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
	public enum ВидыИзображенийИФайлов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c7eb9e14-9fbd-45bf-aea9-2d763d5bd8ca\", \"Представление\":\"ОсновноеИзображение\"}")]
		ОсновноеИзображение = 0,//Основное изображение
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"59146ddc-58ee-4021-89d9-f49d1c2a9e01\", \"Представление\":\"ПрочееИзображение\"}")]
		ПрочееИзображение = 1,//Прочее изображение
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"4f29301c-b575-44cb-ab31-94991c0244d8\", \"Представление\":\"ТекстовыйФайлDOSкодировки\"}")]
		ТекстовыйФайлDOSкодировки = 2,//Текстовый файл DOS кодировки
	}
	public static partial class ВидыИзображенийИФайлов_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ОсновноеИзображение = new Guid("762da9ae-5b3d-cad8-45bf-9fbdc7eb9e14");//Основное изображение
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ПрочееИзображение = new Guid("9df4d989-2a1c-019e-4021-58ee59146ddc");//Прочее изображение
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ТекстовыйФайлDOSкодировки = new Guid("999431ab-021c-d844-44cb-b5754f29301c");//Текстовый файл DOS кодировки
		public static ВидыИзображенийИФайлов Получить(this ВидыИзображенийИФайлов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыИзображенийИФайлов Получить(this ВидыИзображенийИФайлов Значение, Guid Ссылка)
		{
			if(Ссылка == ОсновноеИзображение)
			{
				return ВидыИзображенийИФайлов.ОсновноеИзображение;
			}
			else if(Ссылка == ПрочееИзображение)
			{
				return ВидыИзображенийИФайлов.ПрочееИзображение;
			}
			else if(Ссылка == ТекстовыйФайлDOSкодировки)
			{
				return ВидыИзображенийИФайлов.ТекстовыйФайлDOSкодировки;
			}
			return ВидыИзображенийИФайлов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыИзображенийИФайлов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыИзображенийИФайлов Значение)
		{
			switch (Значение)
			{
				case ВидыИзображенийИФайлов.ОсновноеИзображение: return ОсновноеИзображение;
				case ВидыИзображенийИФайлов.ПрочееИзображение: return ПрочееИзображение;
				case ВидыИзображенийИФайлов.ТекстовыйФайлDOSкодировки: return ТекстовыйФайлDOSкодировки;
			}
			return Guid.Empty;
		}
	}
}