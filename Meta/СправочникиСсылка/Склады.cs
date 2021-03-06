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
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class Склады:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("f9727404-36b6-4005-a5b4-77243dc0ff00");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011937.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool Предопределенный {get;set;}
		public V82.СправочникиСсылка.Склады Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦенРозничнойТорговли {get;set;}//Тип цен розничной торговли
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыСкладов ВидСклада {get;set;}//Вид склада
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(1)*/ НомерСекции {get;set;}//Номер секции
		public bool РасчетРозничныхЦенПоТорговойНаценке {get;set;}//Расчет розничных цен по торговой наценке
		
		public Склады()
		{
		}
		
		public Склады(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public Склады(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Folder [ЭтоГруппа]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1744 [Комментарий]
					,_Fld1745RRef [ТипЦенРозничнойТорговли]
					,_Fld1746RRef [Подразделение]
					,_Fld1747RRef [ВидСклада]
					,_Fld1748 [НомерСекции]
					,_Fld1749 [РасчетРозничныхЦенПоТорговойНаценке]
					From _Reference147(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  -- and _Folder = 0x01  ";
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
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Родитель = new V82.СправочникиСсылка.Склады((byte[])Читалка.GetValue(4),Глубина+1);
							ЭтоГруппа = ((byte[])Читалка.GetValue(5))[0]==0;
							Код = Читалка.GetString(6);
							Наименование = Читалка.GetString(7);
							if(!ЭтоГруппа)
							{
								Комментарий = Читалка.GetString(8);
								ТипЦенРозничнойТорговли = new V82.СправочникиСсылка.ТипыЦенНоменклатуры((byte[])Читалка.GetValue(9),Глубина+1);
								Подразделение = new V82.СправочникиСсылка.Подразделения((byte[])Читалка.GetValue(10),Глубина+1);
								ВидСклада = V82.Перечисления/*Ссылка*/.ВидыСкладов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
								НомерСекции = Читалка.GetDecimal(12);
								РасчетРозничныхЦенПоТорговойНаценке = ((byte[])Читалка.GetValue(13))[0]==1;
							}
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
		
		public V82.СправочникиОбъект.Склады  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.Склады();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Комментарий = Комментарий;
			Объект.ТипЦенРозничнойТорговли = ТипЦенРозничнойТорговли;
			Объект.Подразделение = Подразделение;
			Объект.ВидСклада = ВидСклада;
			Объект.НомерСекции = НомерСекции;
			Объект.РасчетРозничныхЦенПоТорговойНаценке = РасчетРозничныхЦенПоТорговойНаценке;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.Склады ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.Склады)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.Склады(УникальныйИдентификатор);
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