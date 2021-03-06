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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПлатежноеТребованиеПолученное:ДокументОбъект
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
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер входящего документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата входящего документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ) Банковский счет организации
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Счет организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}//Получатель
		///<summary>
		///(Общ) Банковский счет контрагента
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетКонтрагента {get;set;}//Счет контрагента
		///<summary>
		///(Общ) электронно, почтой, телеграфом
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(15)*/ ВидПлатежа {get;set;}//Вид платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(1)*/ ОчередностьПлатежа {get;set;}//Очередность платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ НазначениеПлатежа {get;set;}//Назначение платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool Оплачено {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийСписаниеБезналичныхДенежныхСредств ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СубконтоДт1 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СубконтоДт2 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СубконтоДт3 {get;set;}//Субконто Дт1
		///<summary>
		///(общ)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public bool ЧастичнаяОплата {get;set;}//По документу происходит оплата частями
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		[DataMember]
		[ProtoMember(36)]
		public string/*(200)*/ Содержание_УСН {get;set;}//Содержание УСН
		[DataMember]
		[ProtoMember(37)]
		public decimal/*(15.2)*/ Графа4_УСН {get;set;}//Графа4 УСН
		[DataMember]
		[ProtoMember(38)]
		public decimal/*(15.2)*/ Графа5_УСН {get;set;}//Графа5 УСН
		[DataMember]
		[ProtoMember(39)]
		public decimal/*(15.2)*/ Графа6_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(40)]
		public decimal/*(15.2)*/ Графа7_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(41)]
		public bool ДоходыЕНВД_УСН {get;set;}//ДоходыЕНВД
		[DataMember]
		[ProtoMember(42)]
		public bool РасходыЕНВД_УСН {get;set;}//Расходы ЕНВД УСН
		[DataMember]
		[ProtoMember(43)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(44)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		[DataMember]
		[ProtoMember(45)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(46)]
		public object СчетУчетаРасчетовСКонтрагентомНУ {get;set;}//Счет учета расчетов с контрагентом НУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(47)]
		public object СубконтоНУДт1 {get;set;}//Субконто НУДт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(48)]
		public object СубконтоНУДт2 {get;set;}//Субконто НУДт2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(49)]
		public object СубконтоНУДт3 {get;set;}//Субконто НУДт3
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
						Insert Into _Document391(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8809
						,_Fld8810
						,_Fld8811RRef
						,_Fld8812RRef
						,_Fld8813RRef
						,_Fld8814RRef
						,_Fld8815
						,_Fld8816
						,_Fld8817
						,_Fld8818
						,_Fld8819RRef
						,_Fld8820RRef
						,_Fld8821
						,_Fld8822
						,_Fld8823
						,_Fld8824
						,_Fld8825RRef
						,_Fld8826RRef
						,_Fld8827
						,_Fld8828RRef
						,_Fld8829RRef
						,_Fld8830RRef
						,_Fld8831RRef
						,_Fld8832RRef
						,_Fld8833
						,_Fld8834
						,_Fld8835
						,_Fld8836
						,_Fld8837
						,_Fld8838
						,_Fld8839
						,_Fld8840
						,_Fld8841
						,_Fld8842
						,_Fld8843
						,_Fld8844RRef
						,_Fld19510RRef
						,_Fld19511RRef
						,_Fld19512RRef
						,_Fld19513RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@НомерВходящегоДокумента
						,@ДатаВходящегоДокумента
						,@Организация
						,@СчетОрганизации
						,@Контрагент
						,@СчетКонтрагента
						,@ВидПлатежа
						,@ОчередностьПлатежа
						,@НазначениеПлатежа
						,@СуммаДокумента
						,@ВалютаДокумента
						,@ДоговорКонтрагента
						,@ОтраженоВОперУчете
						,@Оплачено
						,@ДатаОплаты
						,@Комментарий
						,@Ответственный
						,@ВидОперации
						,@ОтражатьВБухгалтерскомУчете
						,@СтатьяДвиженияДенежныхСредств
						,@СчетУчетаРасчетовСКонтрагентом
						,@СубконтоДт1
						,@СубконтоДт2
						,@СубконтоДт3
						,@ЧастичнаяОплата
						,@ОтражатьВНалоговомУчете
						,@Содержание_УСН
						,@Графа4_УСН
						,@Графа5_УСН
						,@Графа6_УСН
						,@Графа7_УСН
						,@ДоходыЕНВД_УСН
						,@РасходыЕНВД_УСН
						,@НДС_УСН
						,@РучнаяНастройка_УСН
						,@Подразделение
						,@СчетУчетаРасчетовСКонтрагентомНУ
						,@СубконтоНУДт1
						,@СубконтоНУДт2
						,@СубконтоНУДт3)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document391
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8809	= @НомерВходящегоДокумента
						,_Fld8810	= @ДатаВходящегоДокумента
						,_Fld8811RRef	= @Организация
						,_Fld8812RRef	= @СчетОрганизации
						,_Fld8813RRef	= @Контрагент
						,_Fld8814RRef	= @СчетКонтрагента
						,_Fld8815	= @ВидПлатежа
						,_Fld8816	= @ОчередностьПлатежа
						,_Fld8817	= @НазначениеПлатежа
						,_Fld8818	= @СуммаДокумента
						,_Fld8819RRef	= @ВалютаДокумента
						,_Fld8820RRef	= @ДоговорКонтрагента
						,_Fld8821	= @ОтраженоВОперУчете
						,_Fld8822	= @Оплачено
						,_Fld8823	= @ДатаОплаты
						,_Fld8824	= @Комментарий
						,_Fld8825RRef	= @Ответственный
						,_Fld8826RRef	= @ВидОперации
						,_Fld8827	= @ОтражатьВБухгалтерскомУчете
						,_Fld8828RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld8829RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld8830RRef	= @СубконтоДт1
						,_Fld8831RRef	= @СубконтоДт2
						,_Fld8832RRef	= @СубконтоДт3
						,_Fld8833	= @ЧастичнаяОплата
						,_Fld8834	= @ОтражатьВНалоговомУчете
						,_Fld8835	= @Содержание_УСН
						,_Fld8836	= @Графа4_УСН
						,_Fld8837	= @Графа5_УСН
						,_Fld8838	= @Графа6_УСН
						,_Fld8839	= @Графа7_УСН
						,_Fld8840	= @ДоходыЕНВД_УСН
						,_Fld8841	= @РасходыЕНВД_УСН
						,_Fld8842	= @НДС_УСН
						,_Fld8843	= @РучнаяНастройка_УСН
						,_Fld8844RRef	= @Подразделение
						,_Fld19510RRef	= @СчетУчетаРасчетовСКонтрагентомНУ
						,_Fld19511RRef	= @СубконтоНУДт1
						,_Fld19512RRef	= @СубконтоНУДт2
						,_Fld19513RRef	= @СубконтоНУДт3
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("ВидПлатежа", ВидПлатежа);
					Команда.Parameters.AddWithValue("ОчередностьПлатежа", ОчередностьПлатежа);
					Команда.Parameters.AddWithValue("НазначениеПлатежа", НазначениеПлатежа);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("ЧастичнаяОплата", ЧастичнаяОплата);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Содержание_УСН", Содержание_УСН);
					Команда.Parameters.AddWithValue("Графа4_УСН", Графа4_УСН);
					Команда.Parameters.AddWithValue("Графа5_УСН", Графа5_УСН);
					Команда.Parameters.AddWithValue("Графа6_УСН", Графа6_УСН);
					Команда.Parameters.AddWithValue("Графа7_УСН", Графа7_УСН);
					Команда.Parameters.AddWithValue("ДоходыЕНВД_УСН", ДоходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("РасходыЕНВД_УСН", РасходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("НДС_УСН", НДС_УСН);
					Команда.Parameters.AddWithValue("РучнаяНастройка_УСН", РучнаяНастройка_УСН);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентомНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт3", Guid.Empty);
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
					Команда.CommandText = @"Delete _Document391
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}