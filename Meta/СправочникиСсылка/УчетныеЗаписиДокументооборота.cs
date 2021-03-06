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
	[ProtoContract]
	[DataContract]
	public partial class УчетныеЗаписиДокументооборота:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b8ae20b8-da26-42d6-aa88-1518a3882bbd");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012001.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*5*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*150*/ Наименование {get;set;}
		public string/*(255)*/ ИмяПользователяPOP3 {get;set;}//Имя пользователя POP3
		public string/*(255)*/ ПарольPOP3 {get;set;}//Пароль POP3
		public string/*(255)*/ СерверPOP3 {get;set;}//Сервер POP3
		public decimal/*(5)*/ ПортPOP3 {get;set;}//Порт POP3
		public string/*(255)*/ ИмяПользователяSMTP {get;set;}//Имя пользователя SMTP
		public string/*(255)*/ ПарольSMTP {get;set;}//Пароль SMTP
		public string/*(255)*/ СерверSMTP {get;set;}//Сервер SMTP
		public decimal/*(5)*/ ПортSMTP {get;set;}//Порт SMTP
		public bool ТребуетсяSMTPАутентификация {get;set;}//Требуется SMTP Аутентификация
		public string/*(255)*/ АдресЭлектроннойПочты {get;set;}//Адрес электронной почты
		public V82.СправочникиСсылка.НалоговыеОрганы НалоговыйОрган {get;set;}//Налоговый орган
		public V82.СправочникиСсылка.СерверыДокументооборота СерверДокументооборота {get;set;}//Сервер документооборота
		public string/*(40)*/ СертификатРуководителя {get;set;}//Сертификат руководителя
		public string/*(40)*/ СертификатГлавногоБухгалтера {get;set;}//Сертификат главного бухгалтера
		public string/*(40)*/ СертификатДляШифрования {get;set;}//Сертификат для шифрования
		public bool УдалитьАвтоматическоеОпределениеНабораПодписей {get;set;}//Удалить автоматическое определение набора подписей
		public bool ИспользуютсяСъемныеКлючевыеНосители {get;set;}//Используются съемные ключевые носители
		public bool УдалитьНестандартныеТаймауты {get;set;}//Нестандартные таймауты
		public decimal/*(2)*/ УдалитьТаймаутНалоговогоОргана {get;set;}//Таймаут налогового органа
		public decimal/*(2)*/ УдалитьТаймаутНалогоплательщика {get;set;}//Таймаут налогоплательщика
		public bool УдалитьИспользуетсяОбособленнымиПодразделениями {get;set;}//Удалить используется обособленными подразделениями
		public bool ОбменНапрямую {get;set;}//Используется возможность документооборота без посредничества специализированного оператора связи
		public bool ОбменНапрямуюСФСГС {get;set;}//Используется возможность документооборота с Росстатом без посредничества специализированного оператора связи
		public bool НеФормироватьПодтвержденияАвтоматически {get;set;}//Не формировать подтверждения автоматически
		public V82.Перечисления/*Ссылка*/.РежимыАвтонастройкиУчетнойЗаписиДокументооборота РежимАвтонастройки {get;set;}//Режим автонастройки
		public bool ИспользоватьСервисОнлайнПроверкиОтчетов {get;set;}//Использовать сервис онлайн-проверки отчетов
		public bool ПредназначенаДляДокументооборотаСФНС {get;set;}//Предназначена для документооборота с ФНС
		public bool ПредназначенаДляДокументооборотаСПФР {get;set;}//Предназначена для документооборота с ПФР
		public bool ПредназначенаДляДокументооборотаСФСГС {get;set;}//Предназначена для документооборота с Росстатом
		public string/*(3)*/ ИдентификаторСпецоператора {get;set;}//Идентификатор спецоператора
		public string/*(43)*/ ИдентификаторАбонента {get;set;}
		public string/*(40)*/ ИдентификаторСистемыОтправителяПФР {get;set;}//Идентификатор системы отправителя (ПФР)
		public string/*(40)*/ ИдентификаторСистемыОтправителяФСГС {get;set;}//Идентификатор системы отправителя (ФСГС)
		public bool ЯвляетсяУчетнойЗаписьюУполномоченногоПредставителя {get;set;}//Является учетной записью уполномоченного представителя
		public string/*(12)*/ ИННУполномоченногоПредставителя {get;set;}//ИНН уполномоченного представителя
		public string/*(9)*/ КППУполномоченногоПредставителя {get;set;}//КПП уполномоченного представителя
		public string/*(0)*/ ПолноеНаименованиеУполномоченногоПредставителя {get;set;}//Полное наименование уполномоченного представителя
		public V82.Перечисления/*Ссылка*/.СтатусыУчетнойЗаписиДокументооборота СтатусУчетнойЗаписи {get;set;}//Статус учетной записи
		public V82.Перечисления/*Ссылка*/.СпецоператорыСвязи СпецоператорСвязи {get;set;}//Спецоператор связи
		
		public УчетныеЗаписиДокументооборота()
		{
		}
		
		public УчетныеЗаписиДокументооборота(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public УчетныеЗаписиДокументооборота(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Code [Код]
					,_Description [Наименование]
					,_Fld23827 [ИмяПользователяPOP3]
					,_Fld23828 [ПарольPOP3]
					,_Fld23829 [СерверPOP3]
					,_Fld23830 [ПортPOP3]
					,_Fld23831 [ИмяПользователяSMTP]
					,_Fld23832 [ПарольSMTP]
					,_Fld23833 [СерверSMTP]
					,_Fld23834 [ПортSMTP]
					,_Fld23835 [ТребуетсяSMTPАутентификация]
					,_Fld23836 [АдресЭлектроннойПочты]
					,_Fld23837RRef [НалоговыйОрган]
					,_Fld23838RRef [СерверДокументооборота]
					,_Fld23839 [СертификатРуководителя]
					,_Fld23840 [СертификатГлавногоБухгалтера]
					,_Fld23841 [СертификатДляШифрования]
					,_Fld23842 [УдалитьАвтоматическоеОпределениеНабораПодписей]
					,_Fld23843 [ИспользуютсяСъемныеКлючевыеНосители]
					,_Fld23844 [УдалитьНестандартныеТаймауты]
					,_Fld23845 [УдалитьТаймаутНалоговогоОргана]
					,_Fld23846 [УдалитьТаймаутНалогоплательщика]
					,_Fld23847 [УдалитьИспользуетсяОбособленнымиПодразделениями]
					,_Fld23848 [ОбменНапрямую]
					,_Fld23849 [ОбменНапрямуюСФСГС]
					,_Fld23850 [НеФормироватьПодтвержденияАвтоматически]
					,_Fld23851RRef [РежимАвтонастройки]
					,_Fld23852 [ИспользоватьСервисОнлайнПроверкиОтчетов]
					,_Fld23853 [ПредназначенаДляДокументооборотаСФНС]
					,_Fld23854 [ПредназначенаДляДокументооборотаСПФР]
					,_Fld23855 [ПредназначенаДляДокументооборотаСФСГС]
					,_Fld23856 [ИдентификаторСпецоператора]
					,_Fld23857 [ИдентификаторАбонента]
					,_Fld23858 [ИдентификаторСистемыОтправителяПФР]
					,_Fld23859 [ИдентификаторСистемыОтправителяФСГС]
					,_Fld23860 [ЯвляетсяУчетнойЗаписьюУполномоченногоПредставителя]
					,_Fld23861 [ИННУполномоченногоПредставителя]
					,_Fld23862 [КППУполномоченногоПредставителя]
					,_Fld23863 [ПолноеНаименованиеУполномоченногоПредставителя]
					,_Fld23864RRef [СтатусУчетнойЗаписи]
					,_Fld23865RRef [СпецоператорСвязи]
					From _Reference23135(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
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
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
								ИмяПользователяPOP3 = Читалка.GetString(6);
								ПарольPOP3 = Читалка.GetString(7);
								СерверPOP3 = Читалка.GetString(8);
								ПортPOP3 = Читалка.GetDecimal(9);
								ИмяПользователяSMTP = Читалка.GetString(10);
								ПарольSMTP = Читалка.GetString(11);
								СерверSMTP = Читалка.GetString(12);
								ПортSMTP = Читалка.GetDecimal(13);
								ТребуетсяSMTPАутентификация = ((byte[])Читалка.GetValue(14))[0]==1;
								АдресЭлектроннойПочты = Читалка.GetString(15);
								НалоговыйОрган = new V82.СправочникиСсылка.НалоговыеОрганы((byte[])Читалка.GetValue(16),Глубина+1);
								СерверДокументооборота = new V82.СправочникиСсылка.СерверыДокументооборота((byte[])Читалка.GetValue(17),Глубина+1);
								СертификатРуководителя = Читалка.GetString(18);
								СертификатГлавногоБухгалтера = Читалка.GetString(19);
								СертификатДляШифрования = Читалка.GetString(20);
								УдалитьАвтоматическоеОпределениеНабораПодписей = ((byte[])Читалка.GetValue(21))[0]==1;
								ИспользуютсяСъемныеКлючевыеНосители = ((byte[])Читалка.GetValue(22))[0]==1;
								УдалитьНестандартныеТаймауты = ((byte[])Читалка.GetValue(23))[0]==1;
								УдалитьТаймаутНалоговогоОргана = Читалка.GetDecimal(24);
								УдалитьТаймаутНалогоплательщика = Читалка.GetDecimal(25);
								УдалитьИспользуетсяОбособленнымиПодразделениями = ((byte[])Читалка.GetValue(26))[0]==1;
								ОбменНапрямую = ((byte[])Читалка.GetValue(27))[0]==1;
								ОбменНапрямуюСФСГС = ((byte[])Читалка.GetValue(28))[0]==1;
								НеФормироватьПодтвержденияАвтоматически = ((byte[])Читалка.GetValue(29))[0]==1;
								РежимАвтонастройки = V82.Перечисления/*Ссылка*/.РежимыАвтонастройкиУчетнойЗаписиДокументооборота.ПустаяСсылка.Получить((byte[])Читалка.GetValue(30));
								ИспользоватьСервисОнлайнПроверкиОтчетов = ((byte[])Читалка.GetValue(31))[0]==1;
								ПредназначенаДляДокументооборотаСФНС = ((byte[])Читалка.GetValue(32))[0]==1;
								ПредназначенаДляДокументооборотаСПФР = ((byte[])Читалка.GetValue(33))[0]==1;
								ПредназначенаДляДокументооборотаСФСГС = ((byte[])Читалка.GetValue(34))[0]==1;
								ИдентификаторСпецоператора = Читалка.GetString(35);
								ИдентификаторАбонента = Читалка.GetString(36);
								ИдентификаторСистемыОтправителяПФР = Читалка.GetString(37);
								ИдентификаторСистемыОтправителяФСГС = Читалка.GetString(38);
								ЯвляетсяУчетнойЗаписьюУполномоченногоПредставителя = ((byte[])Читалка.GetValue(39))[0]==1;
								ИННУполномоченногоПредставителя = Читалка.GetString(40);
								КППУполномоченногоПредставителя = Читалка.GetString(41);
								ПолноеНаименованиеУполномоченногоПредставителя = Читалка.GetString(42);
								СтатусУчетнойЗаписи = V82.Перечисления/*Ссылка*/.СтатусыУчетнойЗаписиДокументооборота.ПустаяСсылка.Получить((byte[])Читалка.GetValue(43));
								СпецоператорСвязи = V82.Перечисления/*Ссылка*/.СпецоператорыСвязи.ПустаяСсылка.Получить((byte[])Читалка.GetValue(44));
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
		
		public V82.СправочникиОбъект.УчетныеЗаписиДокументооборота  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.УчетныеЗаписиДокументооборота();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ИмяПользователяPOP3 = ИмяПользователяPOP3;
			Объект.ПарольPOP3 = ПарольPOP3;
			Объект.СерверPOP3 = СерверPOP3;
			Объект.ПортPOP3 = ПортPOP3;
			Объект.ИмяПользователяSMTP = ИмяПользователяSMTP;
			Объект.ПарольSMTP = ПарольSMTP;
			Объект.СерверSMTP = СерверSMTP;
			Объект.ПортSMTP = ПортSMTP;
			Объект.ТребуетсяSMTPАутентификация = ТребуетсяSMTPАутентификация;
			Объект.АдресЭлектроннойПочты = АдресЭлектроннойПочты;
			Объект.НалоговыйОрган = НалоговыйОрган;
			Объект.СерверДокументооборота = СерверДокументооборота;
			Объект.СертификатРуководителя = СертификатРуководителя;
			Объект.СертификатГлавногоБухгалтера = СертификатГлавногоБухгалтера;
			Объект.СертификатДляШифрования = СертификатДляШифрования;
			Объект.УдалитьАвтоматическоеОпределениеНабораПодписей = УдалитьАвтоматическоеОпределениеНабораПодписей;
			Объект.ИспользуютсяСъемныеКлючевыеНосители = ИспользуютсяСъемныеКлючевыеНосители;
			Объект.УдалитьНестандартныеТаймауты = УдалитьНестандартныеТаймауты;
			Объект.УдалитьТаймаутНалоговогоОргана = УдалитьТаймаутНалоговогоОргана;
			Объект.УдалитьТаймаутНалогоплательщика = УдалитьТаймаутНалогоплательщика;
			Объект.УдалитьИспользуетсяОбособленнымиПодразделениями = УдалитьИспользуетсяОбособленнымиПодразделениями;
			Объект.ОбменНапрямую = ОбменНапрямую;
			Объект.ОбменНапрямуюСФСГС = ОбменНапрямуюСФСГС;
			Объект.НеФормироватьПодтвержденияАвтоматически = НеФормироватьПодтвержденияАвтоматически;
			Объект.РежимАвтонастройки = РежимАвтонастройки;
			Объект.ИспользоватьСервисОнлайнПроверкиОтчетов = ИспользоватьСервисОнлайнПроверкиОтчетов;
			Объект.ПредназначенаДляДокументооборотаСФНС = ПредназначенаДляДокументооборотаСФНС;
			Объект.ПредназначенаДляДокументооборотаСПФР = ПредназначенаДляДокументооборотаСПФР;
			Объект.ПредназначенаДляДокументооборотаСФСГС = ПредназначенаДляДокументооборотаСФСГС;
			Объект.ИдентификаторСпецоператора = ИдентификаторСпецоператора;
			Объект.ИдентификаторАбонента = ИдентификаторАбонента;
			Объект.ИдентификаторСистемыОтправителяПФР = ИдентификаторСистемыОтправителяПФР;
			Объект.ИдентификаторСистемыОтправителяФСГС = ИдентификаторСистемыОтправителяФСГС;
			Объект.ЯвляетсяУчетнойЗаписьюУполномоченногоПредставителя = ЯвляетсяУчетнойЗаписьюУполномоченногоПредставителя;
			Объект.ИННУполномоченногоПредставителя = ИННУполномоченногоПредставителя;
			Объект.КППУполномоченногоПредставителя = КППУполномоченногоПредставителя;
			Объект.ПолноеНаименованиеУполномоченногоПредставителя = ПолноеНаименованиеУполномоченногоПредставителя;
			Объект.СтатусУчетнойЗаписи = СтатусУчетнойЗаписи;
			Объект.СпецоператорСвязи = СпецоператорСвязи;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.УчетныеЗаписиДокументооборота ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.УчетныеЗаписиДокументооборота)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.УчетныеЗаписиДокументооборота(УникальныйИдентификатор);
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