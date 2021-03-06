﻿
using System;
using System.Data.SqlClient;
using V82;
using V82.ДокументыСсылка;
using V82.Документы;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Документы//Менеджер
{
	public partial class ПланируемоеПоступлениеДенежныхСредств:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld8369RRef [ВидОперации]
					,_Fld8370RRef [Контрагент]
					,_Fld8371_TYPE [КассаККМ_Тип],_Fld8371_RRRef [КассаККМ],_Fld8371_RTRef [КассаККМ_Вид]
					,_Fld8372 [ДатаПоступления]
					,_Fld8373_TYPE [ДокументОснование_Тип],_Fld8373_RRRef [ДокументОснование],_Fld8373_RTRef [ДокументОснование_Вид]
					,_Fld8374RRef [ФормаОплаты]
					,_Fld8375_TYPE [БанковскийСчетКасса_Тип],_Fld8375_RRRef [БанковскийСчетКасса],_Fld8375_RTRef [БанковскийСчетКасса_Вид]
					,_Fld8376RRef [ВалютаДокумента]
					,_Fld8377 [КурсДокумента]
					,_Fld8378 [КратностьДокумента]
					,_Fld8379 [СуммаДокумента]
					,_Fld8380RRef [Состояние]
					,_Fld8381 [Описание]
					,_Fld8382RRef [Ответственный]
					,_Fld8383 [Комментарий]
					,_Fld8384RRef [Организация]
					,_Fld8385RRef [СтатьяОборотов]
					,_Fld8386RRef [ЦФО]
					,_Fld8387 [ВключатьВПлатежныйКалендарь]
					,_Fld8388RRef [ВидПриемаРозничнойВыручки]
					From _Document384(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.ДатаПоступления = Читалка.GetDateTime(8);
							Ссылка.ФормаОплаты = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							Ссылка.КурсДокумента = Читалка.GetDecimal(17);
							Ссылка.КратностьДокумента = Читалка.GetDecimal(18);
							Ссылка.СуммаДокумента = Читалка.GetDecimal(19);
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(20));
							Ссылка.Описание = Читалка.GetString(21);
							Ссылка.Комментарий = Читалка.GetString(23);
							Ссылка.ВключатьВПлатежныйКалендарь = ((byte[])Читалка.GetValue(27))[0]==1;
							Ссылка.ВидПриемаРозничнойВыручки = V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(28));
							return Ссылка;
						}
						else
						{
							return null;
						}
					}
				}
			}
		}
		
		public static ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств НайтиПоНомеру(string Номер)
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
					,_Fld8369RRef [ВидОперации]
					,_Fld8370RRef [Контрагент]
					,_Fld8371_TYPE [КассаККМ_Тип],_Fld8371_RRRef [КассаККМ],_Fld8371_RTRef [КассаККМ_Вид]
					,_Fld8372 [ДатаПоступления]
					,_Fld8373_TYPE [ДокументОснование_Тип],_Fld8373_RRRef [ДокументОснование],_Fld8373_RTRef [ДокументОснование_Вид]
					,_Fld8374RRef [ФормаОплаты]
					,_Fld8375_TYPE [БанковскийСчетКасса_Тип],_Fld8375_RRRef [БанковскийСчетКасса],_Fld8375_RTRef [БанковскийСчетКасса_Вид]
					,_Fld8376RRef [ВалютаДокумента]
					,_Fld8377 [КурсДокумента]
					,_Fld8378 [КратностьДокумента]
					,_Fld8379 [СуммаДокумента]
					,_Fld8380RRef [Состояние]
					,_Fld8381 [Описание]
					,_Fld8382RRef [Ответственный]
					,_Fld8383 [Комментарий]
					,_Fld8384RRef [Организация]
					,_Fld8385RRef [СтатьяОборотов]
					,_Fld8386RRef [ЦФО]
					,_Fld8387 [ВключатьВПлатежныйКалендарь]
					,_Fld8388RRef [ВидПриемаРозничнойВыручки]
					From _Document384(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.ДатаПоступления = Читалка.GetDateTime(8);
							Ссылка.ФормаОплаты = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							Ссылка.КурсДокумента = Читалка.GetDecimal(17);
							Ссылка.КратностьДокумента = Читалка.GetDecimal(18);
							Ссылка.СуммаДокумента = Читалка.GetDecimal(19);
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(20));
							Ссылка.Описание = Читалка.GetString(21);
							Ссылка.Комментарий = Читалка.GetString(23);
							Ссылка.ВключатьВПлатежныйКалендарь = ((byte[])Читалка.GetValue(27))[0]==1;
							Ссылка.ВидПриемаРозничнойВыручки = V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(28));
							return Ссылка;
						}
						else
						{
							return null;
						}
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств Выбрать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld8369RRef [ВидОперации]
					,_Fld8370RRef [Контрагент]
					,_Fld8371_TYPE [КассаККМ_Тип],_Fld8371_RRRef [КассаККМ],_Fld8371_RTRef [КассаККМ_Вид]
					,_Fld8372 [ДатаПоступления]
					,_Fld8373_TYPE [ДокументОснование_Тип],_Fld8373_RRRef [ДокументОснование],_Fld8373_RTRef [ДокументОснование_Вид]
					,_Fld8374RRef [ФормаОплаты]
					,_Fld8375_TYPE [БанковскийСчетКасса_Тип],_Fld8375_RRRef [БанковскийСчетКасса],_Fld8375_RTRef [БанковскийСчетКасса_Вид]
					,_Fld8376RRef [ВалютаДокумента]
					,_Fld8377 [КурсДокумента]
					,_Fld8378 [КратностьДокумента]
					,_Fld8379 [СуммаДокумента]
					,_Fld8380RRef [Состояние]
					,_Fld8381 [Описание]
					,_Fld8382RRef [Ответственный]
					,_Fld8383 [Комментарий]
					,_Fld8384RRef [Организация]
					,_Fld8385RRef [СтатьяОборотов]
					,_Fld8386RRef [ЦФО]
					,_Fld8387 [ВключатьВПлатежныйКалендарь]
					,_Fld8388RRef [ВидПриемаРозничнойВыручки]
					From _Document384(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.ДатаПоступления = Читалка.GetDateTime(8);
							Ссылка.ФормаОплаты = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							Ссылка.КурсДокумента = Читалка.GetDecimal(17);
							Ссылка.КратностьДокумента = Читалка.GetDecimal(18);
							Ссылка.СуммаДокумента = Читалка.GetDecimal(19);
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(20));
							Ссылка.Описание = Читалка.GetString(21);
							Ссылка.Комментарий = Читалка.GetString(23);
							Ссылка.ВключатьВПлатежныйКалендарь = ((byte[])Читалка.GetValue(27))[0]==1;
							Ссылка.ВидПриемаРозничнойВыручки = V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(28));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld8369RRef [ВидОперации]
					,_Fld8370RRef [Контрагент]
					,_Fld8371_TYPE [КассаККМ_Тип],_Fld8371_RRRef [КассаККМ],_Fld8371_RTRef [КассаККМ_Вид]
					,_Fld8372 [ДатаПоступления]
					,_Fld8373_TYPE [ДокументОснование_Тип],_Fld8373_RRRef [ДокументОснование],_Fld8373_RTRef [ДокументОснование_Вид]
					,_Fld8374RRef [ФормаОплаты]
					,_Fld8375_TYPE [БанковскийСчетКасса_Тип],_Fld8375_RRRef [БанковскийСчетКасса],_Fld8375_RTRef [БанковскийСчетКасса_Вид]
					,_Fld8376RRef [ВалютаДокумента]
					,_Fld8377 [КурсДокумента]
					,_Fld8378 [КратностьДокумента]
					,_Fld8379 [СуммаДокумента]
					,_Fld8380RRef [Состояние]
					,_Fld8381 [Описание]
					,_Fld8382RRef [Ответственный]
					,_Fld8383 [Комментарий]
					,_Fld8384RRef [Организация]
					,_Fld8385RRef [СтатьяОборотов]
					,_Fld8386RRef [ЦФО]
					,_Fld8387 [ВключатьВПлатежныйКалендарь]
					,_Fld8388RRef [ВидПриемаРозничнойВыручки]
					From _Document384(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.ДатаПоступления = Читалка.GetDateTime(8);
							Ссылка.ФормаОплаты = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							Ссылка.КурсДокумента = Читалка.GetDecimal(17);
							Ссылка.КратностьДокумента = Читалка.GetDecimal(18);
							Ссылка.СуммаДокумента = Читалка.GetDecimal(19);
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(20));
							Ссылка.Описание = Читалка.GetString(21);
							Ссылка.Комментарий = Читалка.GetString(23);
							Ссылка.ВключатьВПлатежныйКалендарь = ((byte[])Читалка.GetValue(27))[0]==1;
							Ссылка.ВидПриемаРозничнойВыручки = V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(28));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств ВыбратьПоНомеру(int Первые,string Мин,string Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld8369RRef [ВидОперации]
					,_Fld8370RRef [Контрагент]
					,_Fld8371_TYPE [КассаККМ_Тип],_Fld8371_RRRef [КассаККМ],_Fld8371_RTRef [КассаККМ_Вид]
					,_Fld8372 [ДатаПоступления]
					,_Fld8373_TYPE [ДокументОснование_Тип],_Fld8373_RRRef [ДокументОснование],_Fld8373_RTRef [ДокументОснование_Вид]
					,_Fld8374RRef [ФормаОплаты]
					,_Fld8375_TYPE [БанковскийСчетКасса_Тип],_Fld8375_RRRef [БанковскийСчетКасса],_Fld8375_RTRef [БанковскийСчетКасса_Вид]
					,_Fld8376RRef [ВалютаДокумента]
					,_Fld8377 [КурсДокумента]
					,_Fld8378 [КратностьДокумента]
					,_Fld8379 [СуммаДокумента]
					,_Fld8380RRef [Состояние]
					,_Fld8381 [Описание]
					,_Fld8382RRef [Ответственный]
					,_Fld8383 [Комментарий]
					,_Fld8384RRef [Организация]
					,_Fld8385RRef [СтатьяОборотов]
					,_Fld8386RRef [ЦФО]
					,_Fld8387 [ВключатьВПлатежныйКалендарь]
					,_Fld8388RRef [ВидПриемаРозничнойВыручки]
					From _Document384(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.ДатаПоступления = Читалка.GetDateTime(8);
							Ссылка.ФормаОплаты = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							Ссылка.КурсДокумента = Читалка.GetDecimal(17);
							Ссылка.КратностьДокумента = Читалка.GetDecimal(18);
							Ссылка.СуммаДокумента = Читалка.GetDecimal(19);
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(20));
							Ссылка.Описание = Читалка.GetString(21);
							Ссылка.Комментарий = Читалка.GetString(23);
							Ссылка.ВключатьВПлатежныйКалендарь = ((byte[])Читалка.GetValue(27))[0]==1;
							Ссылка.ВидПриемаРозничнойВыручки = V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(28));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств СтраницаПоСсылке(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld8369RRef [ВидОперации]
					,_Fld8370RRef [Контрагент]
					,_Fld8371_TYPE [КассаККМ_Тип],_Fld8371_RRRef [КассаККМ],_Fld8371_RTRef [КассаККМ_Вид]
					,_Fld8372 [ДатаПоступления]
					,_Fld8373_TYPE [ДокументОснование_Тип],_Fld8373_RRRef [ДокументОснование],_Fld8373_RTRef [ДокументОснование_Вид]
					,_Fld8374RRef [ФормаОплаты]
					,_Fld8375_TYPE [БанковскийСчетКасса_Тип],_Fld8375_RRRef [БанковскийСчетКасса],_Fld8375_RTRef [БанковскийСчетКасса_Вид]
					,_Fld8376RRef [ВалютаДокумента]
					,_Fld8377 [КурсДокумента]
					,_Fld8378 [КратностьДокумента]
					,_Fld8379 [СуммаДокумента]
					,_Fld8380RRef [Состояние]
					,_Fld8381 [Описание]
					,_Fld8382RRef [Ответственный]
					,_Fld8383 [Комментарий]
					,_Fld8384RRef [Организация]
					,_Fld8385RRef [СтатьяОборотов]
					,_Fld8386RRef [ЦФО]
					,_Fld8387 [ВключатьВПлатежныйКалендарь]
					,_Fld8388RRef [ВидПриемаРозничнойВыручки]
					From _Document384(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.ДатаПоступления = Читалка.GetDateTime(8);
							Ссылка.ФормаОплаты = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							Ссылка.КурсДокумента = Читалка.GetDecimal(17);
							Ссылка.КратностьДокумента = Читалка.GetDecimal(18);
							Ссылка.СуммаДокумента = Читалка.GetDecimal(19);
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(20));
							Ссылка.Описание = Читалка.GetString(21);
							Ссылка.Комментарий = Читалка.GetString(23);
							Ссылка.ВключатьВПлатежныйКалендарь = ((byte[])Читалка.GetValue(27))[0]==1;
							Ссылка.ВидПриемаРозничнойВыручки = V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(28));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств СтраницаПоНомеру(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld8369RRef [ВидОперации]
					,_Fld8370RRef [Контрагент]
					,_Fld8371_TYPE [КассаККМ_Тип],_Fld8371_RRRef [КассаККМ],_Fld8371_RTRef [КассаККМ_Вид]
					,_Fld8372 [ДатаПоступления]
					,_Fld8373_TYPE [ДокументОснование_Тип],_Fld8373_RRRef [ДокументОснование],_Fld8373_RTRef [ДокументОснование_Вид]
					,_Fld8374RRef [ФормаОплаты]
					,_Fld8375_TYPE [БанковскийСчетКасса_Тип],_Fld8375_RRRef [БанковскийСчетКасса],_Fld8375_RTRef [БанковскийСчетКасса_Вид]
					,_Fld8376RRef [ВалютаДокумента]
					,_Fld8377 [КурсДокумента]
					,_Fld8378 [КратностьДокумента]
					,_Fld8379 [СуммаДокумента]
					,_Fld8380RRef [Состояние]
					,_Fld8381 [Описание]
					,_Fld8382RRef [Ответственный]
					,_Fld8383 [Комментарий]
					,_Fld8384RRef [Организация]
					,_Fld8385RRef [СтатьяОборотов]
					,_Fld8386RRef [ЦФО]
					,_Fld8387 [ВключатьВПлатежныйКалендарь]
					,_Fld8388RRef [ВидПриемаРозничнойВыручки]
					From _Document384(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПланируемоеПоступлениеДенежныхСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПланируемоеПоступлениеДенежныхСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.ДатаПоступления = Читалка.GetDateTime(8);
							Ссылка.ФормаОплаты = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							Ссылка.КурсДокумента = Читалка.GetDecimal(17);
							Ссылка.КратностьДокумента = Читалка.GetDecimal(18);
							Ссылка.СуммаДокумента = Читалка.GetDecimal(19);
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(20));
							Ссылка.Описание = Читалка.GetString(21);
							Ссылка.Комментарий = Читалка.GetString(23);
							Ссылка.ВключатьВПлатежныйКалендарь = ((byte[])Читалка.GetValue(27))[0]==1;
							Ссылка.ВидПриемаРозничнойВыручки = V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(28));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ПланируемоеПоступлениеДенежныхСредств СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ПланируемоеПоступлениеДенежныхСредств();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Описание = "";
			Объект.Комментарий = "";
			Объект.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС.ПустаяСсылка;
			Объект.ФормаОплаты = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка;
			Объект.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка;
			Объект.ВидПриемаРозничнойВыручки = V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки.ПустаяСсылка;
			return Объект;
		}
	}
}