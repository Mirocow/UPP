﻿
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.Справочники;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Справочники//Менеджер
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class ЗаявкиКандидатов:СправочникМенеджер
	{
		
		public static СправочникиСсылка.ЗаявкиКандидатов НайтиПоСсылке(Guid _Ссылка)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
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
		
		public static СправочникиСсылка.ЗаявкиКандидатов НайтиПоКоду(string Код)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)
					Where _Code=@Код";
					Команда.Parameters.AddWithValue("Код", Код);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
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
		
		public static СправочникиВыборка.ЗаявкиКандидатов Выбрать()
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK) ";
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗаявкиКандидатов ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)
					Where _IDRRef between @Мин and @Макс 
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗаявкиКандидатов ВыбратьПоКоду(int Первые,string Мин,string Макс)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗаявкиКандидатов ВыбратьПоНаименованию(int Первые,string Мин,string Макс)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)
					Where _Description between @Мин and @Макс
					Order by _Description", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗаявкиКандидатов СтраницаПоСсылке(int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗаявкиКандидатов СтраницаПоКоду(int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗаявкиКандидатов СтраницаПоНаименованию(int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.СправочникиОбъект.ЗаявкиКандидатов СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ЗаявкиКандидатов();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			Объект.РезультатЗакрытия = "";
			Объект.ФизЛицо = new V82.СправочникиСсылка.ФизическиеЛица();
			Объект.Состояние = new V82.СправочникиСсылка.СостоянияЗаявокКандидатов();
			Объект.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка;
			Объект.ГруппаЗаявок = new V82.СправочникиСсылка.ГруппыЗаявокКандидатов();
			Объект.ИсточникИнформации = new V82.СправочникиСсылка.ИсточникиИнформации();
			Объект.Вакансия = new V82.СправочникиСсылка.Вакансии();
			Объект.Должность = new V82.СправочникиСсылка.Должности();
			Объект.Организация = new V82.СправочникиСсылка.Организации();
			Объект.Ответственный = new V82.СправочникиСсылка.Пользователи();
			return Объект;
		}
		
		public static СправочникиВыборка.ЗаявкиКандидатов ИерархияВыбратьПоСсылке(Guid Родитель,int Режим,int Первые,Guid Мин,Guid Макс)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)
					Where _IDRRef between @Мин and @Макс 
					AND _ParentIDRRef = @Родитель
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗаявкиКандидатов ИерархияСтраницаПоСсылке(Guid Родитель,int Режим,int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld19741RRef [ФизЛицо]
					,_Fld19742RRef [Состояние]
					,_Fld19743RRef [Важность]
					,_Fld19744 [Комментарий]
					,_Fld19745 [Закрыта]
					,_Fld19746 [РезультатЗакрытия]
					,_Fld19747RRef [ГруппаЗаявок]
					,_Fld19748 [ДатаОткрытия]
					,_Fld19749RRef [ИсточникИнформации]
					,_Fld19750RRef [Вакансия]
					,_Fld19751_TYPE [Подразделение_Тип],_Fld19751_RRRef [Подразделение],_Fld19751_RTRef [Подразделение_Вид]
					,_Fld19752RRef [Должность]
					,_Fld19753RRef [Организация]
					,_Fld19754RRef [Ответственный]
					From _Reference19638(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ЗаявкиКандидатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗаявкиКандидатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
								Ссылка.ФизЛицо = V82.СправочникиСсылка.ФизическиеЛица.ВзятьИзКэша((byte[])Читалка.GetValue(6));
								Ссылка.Состояние = V82.СправочникиСсылка.СостоянияЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(7));
								Ссылка.Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								Ссылка.Комментарий = Читалка.GetString(9);
								Ссылка.Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
								Ссылка.РезультатЗакрытия = Читалка.GetString(11);
								Ссылка.ГруппаЗаявок = V82.СправочникиСсылка.ГруппыЗаявокКандидатов.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.ДатаОткрытия = Читалка.GetDateTime(13);
								Ссылка.ИсточникИнформации = V82.СправочникиСсылка.ИсточникиИнформации.ВзятьИзКэша((byte[])Читалка.GetValue(14));
								Ссылка.Вакансия = V82.СправочникиСсылка.Вакансии.ВзятьИзКэша((byte[])Читалка.GetValue(15));
								Ссылка.Должность = V82.СправочникиСсылка.Должности.ВзятьИзКэша((byte[])Читалка.GetValue(19));
								Ссылка.Организация = V82.СправочникиСсылка.Организации.ВзятьИзКэша((byte[])Читалка.GetValue(20));
								Ссылка.Ответственный = V82.СправочникиСсылка.Пользователи.ВзятьИзКэша((byte[])Читалка.GetValue(21));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
	}
}