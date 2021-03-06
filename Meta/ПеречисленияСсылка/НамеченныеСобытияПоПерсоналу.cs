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
	public enum НамеченныеСобытияПоПерсоналу
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"ea965013-6e48-4f4b-992b-0c7e410f3609\", \"Представление\":\"Заболевание\"}")]
		Заболевание = 0,
		[EnumMember(Value = "{\"Ссылка\":\"bff40eaf-fd83-4db5-8e0d-9f686b8d9b9f\", \"Представление\":\"Командировка\"}")]
		Командировка = 1,//Возврат из командировки
		[EnumMember(Value = "{\"Ссылка\":\"b6883875-cea8-4ddb-b339-b1eb5f760e08\", \"Представление\":\"ОтгулВСчетЕжегодногоОтпуска\"}")]
		ОтгулВСчетЕжегодногоОтпуска = 2,//Возврат из отгула в счет ежегодного отпуска
		[EnumMember(Value = "{\"Ссылка\":\"d97af1a0-53b9-4f2f-9628-77197b57d2ed\", \"Представление\":\"ОтпускБезСохраненияЗарплаты\"}")]
		ОтпускБезСохраненияЗарплаты = 3,//Возврат из отпуска без сохранения зарплаты
		[EnumMember(Value = "{\"Ссылка\":\"449c2ed3-96fa-43c5-9dab-23007b0ea7c7\", \"Представление\":\"ОтпускЕжегодный\"}")]
		ОтпускЕжегодный = 4,//Возврат из ежегодного отпуска
		[EnumMember(Value = "{\"Ссылка\":\"29815abc-495c-44b6-af0a-f56d94ec3c49\", \"Представление\":\"ОтпускПоУходуЗаРебенком\"}")]
		ОтпускПоУходуЗаРебенком = 5,//Возврат из отпуска по уходу за ребенком
		[EnumMember(Value = "{\"Ссылка\":\"bc8adec4-ad99-42a6-bce7-a49f8a5a2214\", \"Представление\":\"ОтпускПрочий\"}")]
		ОтпускПрочий = 6,//Возврат из прочего отпуска
		[EnumMember(Value = "{\"Ссылка\":\"0e7b33c2-b669-4e96-bff4-55fd89ead69e\", \"Представление\":\"ОтпускУчебный\"}")]
		ОтпускУчебный = 7,//Возврат из учебного отпуска
		[EnumMember(Value = "{\"Ссылка\":\"aea32f75-bf12-4cf7-b124-d5d1fc11a6da\", \"Представление\":\"ОтпускУчебныйНеоплачиваемый\"}")]
		ОтпускУчебныйНеоплачиваемый = 8,//Отпуск учебный неоплачиваемый
		[EnumMember(Value = "{\"Ссылка\":\"9efb501b-2b00-4efd-8337-f0f0aa0610bd\", \"Представление\":\"ОтсутствуетПоНевыясненнойПричине\"}")]
		ОтсутствуетПоНевыясненнойПричине = 9,//Отсутствует по невыясненной причине
		[EnumMember(Value = "{\"Ссылка\":\"a7416c1e-7352-44dd-bb4a-1d0766bcf394\", \"Представление\":\"Перемещение\"}")]
		Перемещение = 10,
		[EnumMember(Value = "{\"Ссылка\":\"458fcafd-2053-4570-af7a-8e43b7b68bd8\", \"Представление\":\"РезультатИспытательногоСрока\"}")]
		РезультатИспытательногоСрока = 11,//Результат испытательного срока
		[EnumMember(Value = "{\"Ссылка\":\"0966bfaa-17e6-4b41-a193-a2db01b20188\", \"Представление\":\"Увольнение\"}")]
		Увольнение = 12,
		[EnumMember(Value = "{\"Ссылка\":\"7c2fabf1-ebd6-4f75-9da3-f92271120248\", \"Представление\":\"УвольнениеПослеИспытательногоСрока\"}")]
		УвольнениеПослеИспытательногоСрока = 13,//Увольнение после исп. срока
	}
	public static partial class НамеченныеСобытияПоПерсоналу_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Заболевание = new Guid("7e0c2b99-0f41-0936-4f4b-6e48ea965013");
		public static readonly Guid Командировка = new Guid("689f0d8e-8d6b-9f9b-4db5-fd83bff40eaf");//Возврат из командировки
		public static readonly Guid ОтгулВСчетЕжегодногоОтпуска = new Guid("ebb139b3-765f-080e-4ddb-cea8b6883875");//Возврат из отгула в счет ежегодного отпуска
		public static readonly Guid ОтпускБезСохраненияЗарплаты = new Guid("19772896-577b-edd2-4f2f-53b9d97af1a0");//Возврат из отпуска без сохранения зарплаты
		public static readonly Guid ОтпускЕжегодный = new Guid("0023ab9d-0e7b-c7a7-43c5-96fa449c2ed3");//Возврат из ежегодного отпуска
		public static readonly Guid ОтпускПоУходуЗаРебенком = new Guid("6df50aaf-ec94-493c-44b6-495c29815abc");//Возврат из отпуска по уходу за ребенком
		public static readonly Guid ОтпускПрочий = new Guid("9fa4e7bc-5a8a-1422-42a6-ad99bc8adec4");//Возврат из прочего отпуска
		public static readonly Guid ОтпускУчебный = new Guid("fd55f4bf-ea89-9ed6-4e96-b6690e7b33c2");//Возврат из учебного отпуска
		public static readonly Guid ОтпускУчебныйНеоплачиваемый = new Guid("d1d524b1-11fc-daa6-4cf7-bf12aea32f75");//Отпуск учебный неоплачиваемый
		public static readonly Guid ОтсутствуетПоНевыясненнойПричине = new Guid("f0f03783-06aa-bd10-4efd-2b009efb501b");//Отсутствует по невыясненной причине
		public static readonly Guid Перемещение = new Guid("071d4abb-bc66-94f3-44dd-7352a7416c1e");
		public static readonly Guid РезультатИспытательногоСрока = new Guid("438e7aaf-b6b7-d88b-4570-2053458fcafd");//Результат испытательного срока
		public static readonly Guid Увольнение = new Guid("dba293a1-b201-8801-4b41-17e60966bfaa");
		public static readonly Guid УвольнениеПослеИспытательногоСрока = new Guid("22f9a39d-1271-4802-4f75-ebd67c2fabf1");//Увольнение после исп. срока
		public static НамеченныеСобытияПоПерсоналу Получить(this НамеченныеСобытияПоПерсоналу Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static НамеченныеСобытияПоПерсоналу Получить(this НамеченныеСобытияПоПерсоналу Значение, Guid Ссылка)
		{
			if(Ссылка == Заболевание)
			{
				return НамеченныеСобытияПоПерсоналу.Заболевание;
			}
			else if(Ссылка == Командировка)
			{
				return НамеченныеСобытияПоПерсоналу.Командировка;
			}
			else if(Ссылка == ОтгулВСчетЕжегодногоОтпуска)
			{
				return НамеченныеСобытияПоПерсоналу.ОтгулВСчетЕжегодногоОтпуска;
			}
			else if(Ссылка == ОтпускБезСохраненияЗарплаты)
			{
				return НамеченныеСобытияПоПерсоналу.ОтпускБезСохраненияЗарплаты;
			}
			else if(Ссылка == ОтпускЕжегодный)
			{
				return НамеченныеСобытияПоПерсоналу.ОтпускЕжегодный;
			}
			else if(Ссылка == ОтпускПоУходуЗаРебенком)
			{
				return НамеченныеСобытияПоПерсоналу.ОтпускПоУходуЗаРебенком;
			}
			else if(Ссылка == ОтпускПрочий)
			{
				return НамеченныеСобытияПоПерсоналу.ОтпускПрочий;
			}
			else if(Ссылка == ОтпускУчебный)
			{
				return НамеченныеСобытияПоПерсоналу.ОтпускУчебный;
			}
			else if(Ссылка == ОтпускУчебныйНеоплачиваемый)
			{
				return НамеченныеСобытияПоПерсоналу.ОтпускУчебныйНеоплачиваемый;
			}
			else if(Ссылка == ОтсутствуетПоНевыясненнойПричине)
			{
				return НамеченныеСобытияПоПерсоналу.ОтсутствуетПоНевыясненнойПричине;
			}
			else if(Ссылка == Перемещение)
			{
				return НамеченныеСобытияПоПерсоналу.Перемещение;
			}
			else if(Ссылка == РезультатИспытательногоСрока)
			{
				return НамеченныеСобытияПоПерсоналу.РезультатИспытательногоСрока;
			}
			else if(Ссылка == Увольнение)
			{
				return НамеченныеСобытияПоПерсоналу.Увольнение;
			}
			else if(Ссылка == УвольнениеПослеИспытательногоСрока)
			{
				return НамеченныеСобытияПоПерсоналу.УвольнениеПослеИспытательногоСрока;
			}
			return НамеченныеСобытияПоПерсоналу.ПустаяСсылка;
		}
		public static byte[] Ключ(this НамеченныеСобытияПоПерсоналу Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this НамеченныеСобытияПоПерсоналу Значение)
		{
			switch (Значение)
			{
				case НамеченныеСобытияПоПерсоналу.Заболевание: return Заболевание;
				case НамеченныеСобытияПоПерсоналу.Командировка: return Командировка;
				case НамеченныеСобытияПоПерсоналу.ОтгулВСчетЕжегодногоОтпуска: return ОтгулВСчетЕжегодногоОтпуска;
				case НамеченныеСобытияПоПерсоналу.ОтпускБезСохраненияЗарплаты: return ОтпускБезСохраненияЗарплаты;
				case НамеченныеСобытияПоПерсоналу.ОтпускЕжегодный: return ОтпускЕжегодный;
				case НамеченныеСобытияПоПерсоналу.ОтпускПоУходуЗаРебенком: return ОтпускПоУходуЗаРебенком;
				case НамеченныеСобытияПоПерсоналу.ОтпускПрочий: return ОтпускПрочий;
				case НамеченныеСобытияПоПерсоналу.ОтпускУчебный: return ОтпускУчебный;
				case НамеченныеСобытияПоПерсоналу.ОтпускУчебныйНеоплачиваемый: return ОтпускУчебныйНеоплачиваемый;
				case НамеченныеСобытияПоПерсоналу.ОтсутствуетПоНевыясненнойПричине: return ОтсутствуетПоНевыясненнойПричине;
				case НамеченныеСобытияПоПерсоналу.Перемещение: return Перемещение;
				case НамеченныеСобытияПоПерсоналу.РезультатИспытательногоСрока: return РезультатИспытательногоСрока;
				case НамеченныеСобытияПоПерсоналу.Увольнение: return Увольнение;
				case НамеченныеСобытияПоПерсоналу.УвольнениеПослеИспытательногоСрока: return УвольнениеПослеИспытательногоСрока;
			}
			return Guid.Empty;
		}
	}
}