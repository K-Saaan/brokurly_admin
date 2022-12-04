package brokurly.project.backoffice.common;

import org.springframework.util.StringUtils;

// 공통 함수 정의


public class CommonUtil {
	
	/**
	 * 신용카드번호 마스킹, 하이픈 추가
	 * @param str : 신용카드번호 14~16자리(하이픈 포함 가능)
	 * @param isMask : 마스킹 여부
	 * @return 14자리 : 1111-**-****-4444
	 *         15자리 : 1111-***-****-4444
	 *         16자리 : 1111-****-****-4444
	 *                
	 */
    public static String maskHyphenCardNo(String str, boolean isMask) {
		if(StringUtils.isEmpty(str)) {
			return str;
		}
		
    	String defPattern = "(\\d{4})-?(\\d{4})-?(\\d{4})-?(\\d{4})"; // 기본
    	//String acrdPattern = "(\\d{4})-?(\\d{6})-?(\\d{5})"; // AMEX
    	//String dcrdPattern = "(\\d{4})-?(\\d{6})-?(\\d{4})"; // 다이너스
    	String acrdPattern = "(\\d{4})-?(\\d{3})-?(\\d{4})-?(\\d{4})"; // AMEX
    	String dcrdPattern = "(\\d{4})-?(\\d{2})-?(\\d{4})-?(\\d{4})"; // 다이너스       	
    	
    	if(str.matches(defPattern)) {
    		return str.replaceAll(defPattern, (isMask ? "$1-****-****-$4" : "$1-$2-$3-$4"));
    	} else if(str.matches(acrdPattern)) {
    		//str = str.replaceAll(acrdPattern, (isMask ? "$1-******-$3" : "$1-$2-$3"));
    		return str.replaceAll(acrdPattern, (isMask ? "$1-***-****-$4" : "$1-$2-$3-$4"));
    	} else if(str.matches(dcrdPattern)) {
    		//str = str.replaceAll(dcrdPattern, (isMask ? "$1-******-$3" : "$1-$2-$3"));
    		return str.replaceAll(dcrdPattern, (isMask ? "$1-**-****-$4" : "$1-$2-$3-$4"));
    	}
    	
    	return str;
	}
    
    /**
	 * 휴대폰번호 마스킹, 하이픈 추가
	 * @param str : 휴대폰번호 10자리 또는 11자리(하이픈 포함 가능)
	 * @param isMask : 마스킹 여부
	 * @return : 010-1**-22**, 010-11**-22** 
	 */
	public static String maskHyphenCPhone(String str, boolean isMask) {
		if(StringUtils.isEmpty(str)) {
			return str;
		}
		
		if(isMask) {
			str = str.replaceAll("(\\d{3})-?(\\d{1,2})\\d{2}-?(\\d{2})\\d{2}", "$1-$2**-$3**");
		} else {
			str = str.replaceAll("(\\d{3})-?(\\d{3,4})-?(\\d{4})", "$1-$2-$3");
		}
		
		return str;
	}
	
	/**
	 * 계좌번호 마스킹 추가
	 * @param str : 계좌번호
	 * @param isMask : 마스킹 여부
	 * @return : 중간 6자리 마스킹
	 */
    public static String maskAccountNo(String str, boolean isMask) {
		if(StringUtils.isEmpty(str)) {
			return str;
		}
		
    	if(isMask) {
        	str = str.replaceAll("-", "");
        	
        	int maskLength = 6;
        	if(str.length() < maskLength) {
        		maskLength = str.length();
        	}
        	int startIndex = (str.length() - maskLength)/2;
        	
			StringBuilder sb = new StringBuilder(str);
			for(int i = startIndex; i<(startIndex + maskLength); i++) {
				sb.setCharAt(i, '*');
			}
			
			return sb.toString();
    	}
		
		return str;
	}
    
	/**
	 * 주민등록번호 마스킹, 하이픈 추가
	 * @param str : 주민등록번호
	 * @param isMask : 마스킹 여부
	 * @return 
	 */
    public static String maskHyphenRegNo(String str, boolean isMask) {
		if(StringUtils.isEmpty(str)) {
			return str;
		}
		
    	str = str.replaceAll("(\\d{6})-?(\\S{7})", "$1-$2");
    	if(isMask) {
        	String pattern = "(.{6}$)";
        	str = str.replaceAll(pattern, "******");
    	}
		return str;
    }

}
