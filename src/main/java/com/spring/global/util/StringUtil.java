/******************************************************************************************
 * 본프로그램 소스코드는 케이엘큐브의 사전승인 없이 임의복제, 복사, 배포할 수 없음
 * 
 * Copyright (C) 2022 by KLCUBE. All rights reserved. 
 ******************************************************************************************/
package com.spring.global.util;

import java.util.Arrays;
import java.util.Collections;
import java.util.Random;
import java.util.regex.Pattern;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

/**
 * @title  String Util
 * @author Brian
 * @since  2022. 02. 28.
 * @see
 * <pre>
 * Inherit Apache Common Lang3 StringUtils
 * </pre>
 */
@Slf4j
@Component
public class StringUtil extends StringUtils {
	
	/**
	 * @title  문자열이 NULL인 경우 true
	 * @param  String
	 * @return boolean
	 */
	public static boolean isNull(String str) {
		if(str == null) {
			return true;
		}
		
		return false;
	}
	
	/**
	 * @title  문자열이 null인지 확인하고 null인 경우 지정된 문자열 치환
	 * @param  String
	 * @param  String
	 * @return String
	 */
	public static String nvl(String str, String def) {
		return isNull(str) ? def : str;
	}
	
	/**
	 * @title  문자열이 NULL인 경우 공백으로 치환
	 * @param  String
	 * @return String
	 */
	public static String nvl(String str) {
		return nvl(str, EMPTY);
	}
	
	/**
	 * @title  문자열이 비어있는 경우 지정된 문자열로 치환
	 * @param  String
	 * @param  String
	 * @return String
	 */
	public static String nvl2(String str, String def) {
		return isEmpty(str) ? def : str;
	}
	
	/**
	 * @title  문자열의 길이가 0 이상인 경우 true
	 * @param  String
	 * @return boolean
	 */
	public static boolean hasLength(String str) {
		return getLength(str) > 0;
	}
	
	/**
	 * @title  문자열이 NULL인 경우 0
	 * @param  String
	 * @return String
	 */
	public static int getLength(String str) {
		return str == null ? 0 : str.length();
	}
	
	/**
	 * @title  오른쪽 공백제거
	 * @param  String
	 * @return String
	 */
	public static String rtrim(String str) {
		if(isEmpty(str)) {
			return str;
		}
		
		char[] val = str.toCharArray();
		int st = 0;
		int len = str.length();
		while(st < len && val[len - 1] <= ' ') {
			--len;
		}
		
		return str.substring(0, len);
	}
	
	/**
	 * @title  왼쪽 공백제거
	 * @param  String
	 * @return String
	 */
	public static String ltrim(String str) {
		if(isEmpty(str)) {
			return str;
		}
		
		char[] val = str.toCharArray();
		int st = 0;
		int len = str.length();
		
		while(st < len && val[st] <= ' ') {
			++st;
		}
		
		return str.substring(st, len);
	}
	
	/**
	 * @title  숫자데이터만 추출
	 * @param  String
	 * @return String
	 */
	public static String numberChar(String str) {
		if(isEmpty(str)) {
			return str;
		}

		String a = "1111";
		int b = Integer.parseInt(a);

		
		int strLen = str.length();
		StringBuilder buff = new StringBuilder(strLen);
		for(int ii = 0; ii < strLen; ++ii) {
			char chr = str.charAt(ii);
			if (chr >= '0' && chr <= '9') {
				buff.append(chr);
			}
		}
		return buff.toString();
	}
	
	/**
	 * @title  한글이 포함되어있는지 확인
	 * @param  String
	 * @return String
	 */
	public static boolean isContainKor(String str) {
		if(isEmpty(str)) {
			return false;
		}
		
		for(int ii = 0; ii < str.length(); ++ii) {
			char chr = str.charAt(ii);
			if((0xAC00 <= chr && chr <= 0xD7A3) || (0x3131 <= chr && chr <= 0x318E)) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * @title  지정된 패턴에 해당하는 문자열을 제외한 나머지 반환
	 * @param  String
	 * @param  String
	 * @return String
	 */
	public static String remove(String original, String charSequence) {
		if(isEmpty(original)) {
			return original;
		}
		
		if(charSequence.length() < 2) {
			return replace(original, charSequence, EMPTY);
		}
		
		return original.replaceAll("["
						+ charSequence.replaceAll("(\\p{Punct})", "\\\\$1")
						+ "]", EMPTY);
	}
	
	/**
	 * @title  공백제거
	 * @param  String
	 * @return String
	 */
	public static String removeBlank(String str) {
		if(isEmpty(str)) {
			return str;
		}
		return str.replaceAll("\\p{Z}", EMPTY);
	}
	
	/**
	 * @title  콤마 제거
	 * @param  String
	 * @return String
	 */
	public static String removeComma(String str) {
		if(isEmpty(str)) {
			return str;
		}
		return removeCommaNotNull(str);
	}
	
	/**
	 * @title  콤마제거 함수 처리 중 null 입력 시 오류발생
	 * @param  String
	 * @return String
	 */
	public static String removeCommaNotNull(String str) {
		boolean comma = false;
		StringBuilder buff = null;
		int strLen = str.length();
		for(int ii = 0; ii < strLen; ++ii) {
			char chr = str.charAt(ii);
			if(chr == ',') {
				if(!comma) {
					buff = new StringBuilder(strLen);
					buff.append(str.substring(0, ii));
					comma = true;
				}
			} else if (comma) {
				buff.append(chr);
			}
		}
		if(comma) {
			return buff.toString();
		}
		return str;
	}
	
	/**
	 * @title  char 를 지정한 길이만큼 왼쪽으로 채움
	 * @param  String
	 * @param  int
	 * @param  char
	 * @return String
	 */
	public static String lpad(String str, int len, char format) {
		if(str == null) {
			str = EMPTY;
		}
		int paddingLength = len - str.length();
		if(paddingLength > 0) {
			return repeat(format, paddingLength) + str;
		} else if (paddingLength < 0) {
			return str.substring(0, len);
		}
		return str;
	}
	
	/**
	 * @title  char 를 지정한 길이만큼 오르쪽으로 채움
	 * @param  String
	 * @param  int
	 * @param  char
	 * @return String
	 */
	public static String rpad(String str, int len, char format) {
		if(str == null) {
			str = EMPTY;
		}
		int paddingLength = len - str.length();
		if(paddingLength > 0) {
			return str + repeat(format, paddingLength);
		} else if (paddingLength < 0) {
			return str.substring(0, len);
		}
		return str;
	}
	
	/**
	 * @title  첫번째 문자를 대문자 또는 소문자로 변경
	 * @param  String
	 * @return String
	 */
	public static String swapFirstLetterCase(String str) {
		if(isEmpty(str)) {
			return str;
		}
		String first = str.substring(0, 1);
		if(Character.isLowerCase(first.charAt(0))) {
			return first.toUpperCase() + str.substring(1);
		}
		return first.toLowerCase() + str.substring(1);
	}
	
	/**
	 * @title  지정된 캐릭터를 기준으로 카멜케이스 변환
	 * @param  String
	 * @param  char
	 * @return String
	 */
	public static String convertToCamelCase(String str, char posChar) {
		if(isEmpty(str)) {
			return str;
		}
		StringBuilder result = new StringBuilder();
		boolean nextUpper = false;
		String allLower = str.toLowerCase();

		for(int ii = 0; ii < allLower.length(); ++ii) {
			char currentChar = allLower.charAt(ii);
			if(currentChar == posChar) {
				nextUpper = true;
			} else {
				if (nextUpper) {
					currentChar = Character.toUpperCase(currentChar);
					nextUpper = false;
				}
				result.append(currentChar);
			}
		}
		return result.toString();
	}
	
	/**
	 * @title  스네이크 케이스를 카멜 케이스로 변환
	 * @param  String
	 * @return String
	 */
	public static String convertToCamelCase(String str) {
		return convertToCamelCase(str, '_');
	}
	
	/**
	 * @title  스네이크 케이스로 변환
	 * @param  String
	 * @return String
	 */
	public static String convertToSnakecase(String str) {
		if (isEmpty(str)) {
			return str;
		}
		String result = EMPTY;
		for (int ii = 0; ii < str.length(); ++ii) {
			char currentChar = str.charAt(ii);
			if (ii > 0 && Character.isUpperCase(currentChar)) {
				result = result.concat("_");
			}
			result = result.concat(Character.toString(currentChar).toLowerCase());
		}
		return result;
	}
	
	/**
	 * @title  이메일 유효성 검사
	 * @param  String
	 * @return boolean
	 */
	public static boolean isEmail(String str) {
		if(isEmpty(str)) return false;
		
		boolean chk = Pattern.matches("[\\w\\~\\-\\.]+@[\\w\\~\\-]+(\\.[\\w\\~\\-]+)+", str.trim());
		
		return chk;
	}
	
	/**
	 * @title  URL 유효성 검사
	 * @param  String
	 * @return boolean
	 */
	public static boolean isURL(String str) {
	    return Pattern.matches("^[^((http(s?))\\:\\/\\/)]([0-9a-zA-Z\\-]+\\.)+[a-zA-Z]{2,6}(\\:[0-9]+)?(\\/\\S*)?$", str);
	}
	
	/**
	 * @title  전화번호 유효성 검사
	 * @param  String
	 * @return boolean
	 */
	public static boolean isTel(String str) {
		str = str.replaceAll("\\D", "");
		
		if(isEmpty(str)) {
			return false;
		}
		
		return Pattern.matches("^\\d{2,3}\\d{3,4}\\d{4}$", str);
	}
	
	/**
	 * @title  휴대폰번호 유효성 검사
	 * @param  String
	 * @return boolean
	 */
	public static boolean isMobile(String str) {
		str = str.replaceAll("\\D", "");
		
		if(isEmpty(str)) {
			return false;
		}
		
		return Pattern.matches("^\\d{2,3}\\d{3,4}\\d{4}$", str);
	}
	
	/**
	 * @title  바이트 수 계산
	 * @param  String
	 * @return int
	 */
	public static int getByte(String str) {
		return str.getBytes().length;
	}
	
	/**
	 * @title  길이만큼 랜덤문자열 생성
	 * @param  int
	 * @return String
	 */
	public static String randomString(int length) {
		Random random = new Random();
		StringBuffer sb = new StringBuffer();
		
		for(int i=0; i<length; i++) {
			if(random.nextBoolean()) {
				sb.append((char)((int)(random.nextInt(26)) + 97));
			} else {
				sb.append((random.nextInt(10)));
			}
		}
		
		return sb.toString();
	}
	
	/**
	 * @title  길이만큼 랜덤숫자 생성
	 * @param  int
	 * @return String
	 */
	public static String randomNumberString(int length) {
		StringBuffer sb = new StringBuffer();
		
		for(int i=0; i<length; i++) {
			int num = (int) Math.round(Math.random() * 9);
			sb.append(String.valueOf(num));
		}
		
		return sb.toString();
	}
	
	/**
	 * @title  사업자등록번호 검증
	 * @param  String
	 * @return int
	 * @see
	 * <pre>
	 * 0 : 사업자등록번호 아님
	 * 2 : 법인사업자
	 * 4 : 개인사업자
	 * </pre>
	 */
	public static int bizNoChk(String bizNo) {
		int chk = 0;

		bizNo = bizNo.replaceAll("-", "");
		bizNo = removeBlank(bizNo);
		
		if(bizNo.length() != 10) return 0;
		
		String sCode = "137137135";
		
		int sum = 0;
		
		for(int i=0; i<9; i++) {
			sum += Integer.parseInt(String.valueOf(bizNo.charAt(i))) * Integer.parseInt(String.valueOf(sCode.charAt(i)));
		}
		
		sum += Integer.parseInt(String.valueOf(bizNo.charAt(8))) * 5 / 10;
		
		int sid = sum % 10;
		int sidChk = (sid != 0) ? 10 - sid : 0;
		int chkVal = Integer.parseInt(String.valueOf(bizNo.charAt(9)));
		
		if(sidChk != chkVal) return 0;
		
		//----------------------------------------------------------------
		int officeCd = Integer.parseInt(String.valueOf(bizNo.charAt(0)));
		String officeNm = null;
		
		if(officeCd == 1) {
			officeNm = "서울지방국세청";
		} else if(officeCd == 2) {
			officeNm = "중부지방국세청";
		} else if(officeCd == 3) {
			officeNm = "대전지방국세청";
		} else if(officeCd == 4) {
			officeNm = "광주지방국세청";
		} else if(officeCd == 5) {
			officeNm = "대구지방국세청";
		} else if(officeCd == 6) {
			officeNm = "부산지방국세청";
		} else {
			officeNm = "기타";
		}
		log.debug("== " + officeNm);
		//----------------------------------------------------------------
		
		int gubunCd = Integer.parseInt(bizNo.substring(3, 5));
		
		if((gubunCd >= 1 && gubunCd <= 79) || (gubunCd >= 90 && gubunCd <= 99) || gubunCd == 89 || gubunCd == 80) {
			log.debug("== 개인사업자");
			chk = 4;
		} else if(gubunCd == 81 || (gubunCd >= 86 && gubunCd <= 88) || gubunCd == 82 || gubunCd == 83 || gubunCd == 84 || gubunCd == 85) {
			log.debug("== 법인사업자");
			chk = 2;
		} else {
			chk = 0;
		}
		
		return chk;
	}
	
	/**
	 * @title  주민등록번호 유효성 검사
	 * @param  String
	 * @return boolean
	 */
	public static boolean isJuminNo(String str) {
		if(isEmpty(str)) return false;
		
		String juminNo = str.replaceAll("\\D", "");
		
		if(juminNo.length() != 13) return false;
		
		String leftSid = juminNo.substring(0, 6);
        String rightSid = juminNo.substring(6, 13);
 
        int yy = Integer.parseInt(leftSid.substring(0, 2));
        int mm = Integer.parseInt(leftSid.substring(2, 4));
        int dd = Integer.parseInt(leftSid.substring(4, 6));
        
        if(yy > 99 || mm > 12 || mm < 1 || dd < 1 || dd > 31) return false;
 
        int digit1 = Integer.parseInt(leftSid.substring(0, 1)) * 2;
        int digit2 = Integer.parseInt(leftSid.substring(1, 2)) * 3;
        int digit3 = Integer.parseInt(leftSid.substring(2, 3)) * 4;
        int digit4 = Integer.parseInt(leftSid.substring(3, 4)) * 5;
        int digit5 = Integer.parseInt(leftSid.substring(4, 5)) * 6;
        int digit6 = Integer.parseInt(leftSid.substring(5, 6)) * 7;
 
        int digit7 = Integer.parseInt(rightSid.substring(0, 1)) * 8;
        int digit8 = Integer.parseInt(rightSid.substring(1, 2)) * 9;
        int digit9 = Integer.parseInt(rightSid.substring(2, 3)) * 2;
        int digit10 = Integer.parseInt(rightSid.substring(3, 4)) * 3;
        int digit11 = Integer.parseInt(rightSid.substring(4, 5)) * 4;
        int digit12 = Integer.parseInt(rightSid.substring(5, 6)) * 5;
 
        int last_digit = Integer.parseInt(rightSid.substring(6, 7));
 
        int error_verify = (digit1 + digit2 + digit3 + digit4 + digit5 + digit6 + digit7 + digit8 + digit9 + digit10 + digit11 + digit12) % 11;
 
        int sum_digit = 0;
        if(error_verify == 0) {
            sum_digit = 1;
        } else if (error_verify == 1) {
            sum_digit = 0;
        } else {
            sum_digit = 11 - error_verify;
        }

        if(last_digit == sum_digit) return true;
        return false;
	}
	
	/**
	 * @title  외국인등록번호 유효성 검사
	 * @param  String
	 * @return boolean
	 */
	public static boolean isForeignNo(String str) {
		int odd = 0;
		int sum = 0;
		
		if(isEmpty(str)) return false;
		
		String foreignNo = str.replaceAll("\\D", "");
		
		if(foreignNo.length() != 13) return false;
		
		int[] buf = new int[13];
		
		for(int i=0; i<13; i++) {
			buf[i] = Integer.parseInt(foreignNo.charAt(i) + "");
		}
		
		odd = buf[7] * 10 + buf[8];
		
		if(odd % 2 != 0) return false;
		if((buf[6] != 5) && (buf[6] != 6) && (buf[6] != 7) && (buf[6] != 8)) return false;
		
		int[] multipliers = {2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5};
		
		for(int i=0; i<12; i++) {
			sum += (buf[i] *= multipliers[i]);
		}
		sum = 11 - (sum % 11);
		
		if(sum >= 10) sum -= 10;
		sum += 2;
		if(sum >= 10) sum -= 10;
		if(sum != buf[12]) return false;
		return true;
	}
	
	/**
	 * @title  아이디 체크
	 * @param  String
	 * @return boolean
	 * @see
	 * <pre>
	 * 영문자 + 숫자 6 ~ 16자리
	 * </pre>
	 */
	public static boolean idChk(String id) {
		String pattern = "^(?=.*?[a-z])(?=.*?[0-9]).{6,16}$";
		return Pattern.matches(pattern, id);
	}
	
	/**
	 * @title  비밀번호 체크
	 * @param  String
	 * @return boolean
	 * @see
	 * <pre>
	 * 영문자 + 특수문자 + 숫자 6 ~ 16자리
	 * </pre>
	 */
	public static boolean pwdChk(String pwd) {
		String pattern = "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$";
		return Pattern.matches(pattern, pwd);
	}
	
	/**
	 * @title  입력 가능 유형 유효성 체크
	 * @param  String
	 * @return boolean
	 * @see
	 * <pre>
	 * 직무유형, 프로젝트 산업분야, 직접입력 등의 문자열에 포함되어야 할 문자열 유효성 체크
	 * </pre>
	 */
	public static boolean isAllowTypeStr(String str) {
		if(isEmpty(str)) {
			return false;
		}
		
		String regex = "^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9\\s|.#+-/()]*$";
		return Pattern.matches(regex, str);
	}
	
	/**
	 * @title  HTML ESCAPE
	 * @param  String
	 * @return String
	 */
	public static String escapeHtml(String str) {
		return StringEscapeUtils.escapeHtml3(str);
	}
	
	/**
	 * @title  HTML UNESCAPE
	 * @param  String
	 * @return String
	 */
	public static String unescapeHtml(String str) {
		return StringEscapeUtils.unescapeHtml3(str);
	}
	
	public static String[] arraySplit(String str, String delimeter) {
		return str.split(delimeter);
	}


	/***
	 * @title 산업/프로젝트 디폴트 이미지
	 * @param String
	 * @param String
	 * @return String
	 * <pre>
	 *		산업분야 없으면 프로젝트 분야 이미지 표기
	 *		둘 다 없으면 기본 이미지 표기
	 * </pre>
	 */
	public static String projThumbnail(String industryType, String pjIndustryType){
		String filePath		= "/front-static/ui/img/prj_img/";
		String extension	= ".png";
		String img 			= "main_sec03_img01";				//기본 이미지

		try {
			if(!industryType.isEmpty()){

				String[] industryArr = industryType.substring(0,industryType.length()-1).split(":");
				Collections.shuffle(Arrays.asList(industryArr));
				img = industryArr[0] + "0" + (int)(Math.random() * 3 + 1);

			}else if(!pjIndustryType.isEmpty()){

				String[] pjIndustryArr = pjIndustryType.substring(0,pjIndustryType.length()-1).split(":");
				Collections.shuffle(Arrays.asList(pjIndustryArr));
				img = pjIndustryArr[0] + "0" + (int)(Math.random() * 3 + 1);
			}

		}catch (Exception e){

			log.error(e.getMessage(), e);
			e.printStackTrace();
			return filePath + img + extension;

		}
		return filePath + img + extension;
	}
	
	/***
	 * @title 구분자 변경
	 * @param String
	 * @param String
	 * @param String
	 * @return String
	 * <pre>
	 *		입력한 텍스트의 구분자를 변경
	 * </pre>
	 */
	public static String parseToSepStr(String str, String fromSep, String toSep) {
		String[] strArr = str.split(fromSep);
		String returnStr = "";
		
		for(int i=0; i<strArr.length; i++) {
			if(strArr[i].length()>0) {
				if(i>0) {
					returnStr += toSep+strArr[i];
				} else {
					returnStr = strArr[i];
				}
			}
		}
		return returnStr;
	}
}