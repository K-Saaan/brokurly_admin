package brokurly.project.backoffice.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class DateUtil {

	
	/**
     * 1. MethodName: getToday
     * 2. ClassName : DateUtil
     * 3. Comment   : yyyy-MM-dd HH:mm:ss 형태의 날짜를 문자열로 변환.
     *
     * @return String 변환문자열
     * @return
     */
	
	public static String getToday() {
		SimpleDateFormat formatter = new SimpleDateFormat ( "yyyy-MM-dd HH:mm:ss", Locale.KOREA );
		Date currentTime = new Date ( );
		String dTime = formatter.format ( currentTime );
		
		return dTime;
	}
	
	
	/**
     * 1. MethodName: getToday
     * 2. ClassName : DateUtil
     * 3. Comment   : YYYYMMDD 형태의 날짜를 문자열로 변환.
     *
     * @return String 변환문자열
     * @return
     */
	public static String getTodayYYYYMMDD() {
		SimpleDateFormat formatter = new SimpleDateFormat ( "yyyyMMdd", Locale.KOREA );
		Date currentTime = new Date ( );
		String dTime = formatter.format ( currentTime );
		
		return dTime;
	}
	
	
	/**
    *
    * 1. MethodName: beforeDate
    * 2. ClassName : DateUtil
    * 3. Comment   : begin이 end 보다 이전인 경우 true반환
    *
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
