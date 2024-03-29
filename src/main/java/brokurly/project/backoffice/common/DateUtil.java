package brokurly.project.backoffice.common;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.Locale;

public class DateUtil {

	
	/**
     * yyyy-MM-dd HH:mm:ss 형태의 날짜를 문자열로 변환.
     * @return String 변환문자열
     */
	
	public static String getToday() {
		SimpleDateFormat formatter = new SimpleDateFormat ( "yyyy-MM-dd HH:mm:ss", Locale.KOREA );
		Date currentTime = new Date ( );
		String dTime = formatter.format ( currentTime );
		
		return dTime;
	}
	
	
	/**
     * yyyyMMddHHmmss 형태의 날짜를 문자열로 변환.
     * @return String 변환문자열
     */
	
	public static String getStringToday() {
		SimpleDateFormat formatter = new SimpleDateFormat ( "yyyyMMddHHmmss", Locale.KOREA );
		Date currentTime = new Date ( );
		String dTime = formatter.format ( currentTime );
		
		return dTime;
	}

	/**
	 * yyyy-mm-dd hh:mm:ss 형태의 날짜를 Timestamp로 변환.
	 * @return Timestamp 변환문자열
	 */

	public static Timestamp getStringTimestamp() {
		SimpleDateFormat formatter = new SimpleDateFormat ( "yyyy-mm-dd hh:mm:ss", Locale.KOREA );
		Date currentTime = new Date ( );
		String dTime = formatter.format (currentTime);

		return Timestamp.valueOf(dTime);
	}

	/**
	 * yyyy-mm-dd hh:mm:ss 형태의 날짜를 문자열로 변환.
	 * @return String 변환문자열
	 */
	public static String getStringDate() {
		SimpleDateFormat formatter = new SimpleDateFormat ( "yyyy-mm-dd hh:mm:ss", Locale.KOREA );
		Date currentTime = new Date ( );
		String dTime = formatter.format (currentTime);

		return dTime;
	}
	
	
	/**
     * YYYYMMDD 형태의 날짜를 문자열로 변환.
     * @return String 변환문자열
     */
	public static String getTodayYYYYMMDD() {
		SimpleDateFormat formatter = new SimpleDateFormat ( "yyyyMMdd", Locale.KOREA );
		Date currentTime = new Date ( );
		String dTime = formatter.format ( currentTime );
		
		return dTime;
	}

	/**
	 * YYYY 형태의 문자열로 반환.
	 * @return String 변환문자열
	 */
	public static String getYYYY() {
		LocalDate now = LocalDate.now();
		return String.valueOf(now.getYear());
	}

	/**
	 * mm 형태의 문자열로 반환.
	 * @return String 변환문자열
	 */
	public static String getMm() {
		LocalDate now = LocalDate.now();
		return String.format("%02d", now.getMonthValue());
	}

	/**
	 * dd 형태의 문자열로 반환.
	 * @return String 변환문자열
	 */
	public static String getDd() {
		LocalDate now = LocalDate.now();
		return String.format("%02d", now.getDayOfMonth());
	}
	
	
	/**
    * begin이 end 보다 이전인 경우 true반환
    * @return boolean
    * @param begin
    * @param end
    * @return
    */
   public static boolean beforeDate(String begin, String end) {
       SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");

       Date beginDate = null;
       Date endDate = null;
       try {
           beginDate = formatter.parse(begin);
           endDate = formatter.parse(end);
       } catch (ParseException e) {
           return false;
       }

       if(beginDate.before(endDate)) {
    	   return true;
       }

       return false;

   }
}
