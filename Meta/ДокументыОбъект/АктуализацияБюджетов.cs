﻿
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class АктуализацияБюджетов:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаНачала {get;set;}//Дата начала
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаКонца {get;set;}//Дата конца
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public bool АктуализироватьБюджеты {get;set;}//Актуализировать бюджеты
		[DataMember]
		[ProtoMember(16)]
		public bool ПеренестиТранзакции {get;set;}//Перенести транзакции
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document208(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld2761RRef
						,_Fld2762
						,_Fld2763
						,_Fld2764RRef
						,_Fld2765
						,_Fld2766RRef
						,_Fld2767
						,_Fld2768)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Сценарий
						,@ДатаНачала
						,@ДатаКонца
						,@Ответственный
						,@Комментарий
						,@Состояние
						,@АктуализироватьБюджеты
						,@ПеренестиТранзакции)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document208
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld2761RRef	= @Сценарий
						,_Fld2762	= @ДатаНачала
						,_Fld2763	= @ДатаКонца
						,_Fld2764RRef	= @Ответственный
						,_Fld2765	= @Комментарий
						,_Fld2766RRef	= @Состояние
						,_Fld2767	= @АктуализироватьБюджеты
						,_Fld2768	= @ПеренестиТранзакции
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ДатаНачала", ДатаНачала);
					Команда.Parameters.AddWithValue("ДатаКонца", ДатаКонца);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ключ());
					Команда.Parameters.AddWithValue("АктуализироватьБюджеты", АктуализироватьБюджеты);
					Команда.Parameters.AddWithValue("ПеренестиТранзакции", ПеренестиТранзакции);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document208
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}