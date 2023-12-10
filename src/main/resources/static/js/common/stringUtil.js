/**
 * date : 2021. 02. 17
 * desc : String 관련 공통 스크립트
 */

var stringUtil = {
	// 공백을 자릿수만큼 0으로 채운다.
	// ex) stringUtil.fillZero('1', '4')
	fillZero : function(str, len){
		str = str+"";
		return str.length >= len ? str:new Array(len-str.length+1).join('0')+str;
	},
	// 금액을 한글로 변환
	// ex) stringUtil.getTransCurValue('10000')
	getTransCurValue : function(val) {
		if(val == undefined)
			return "";

		if($.trim(val) == "")
			return "";

		if(val.length > 31) return "금액을 표기할수 없습니다.(금액 단위변환은 31자리이상 입력 불가입니다.)";

		val = stringUtil.replaceAll(val+"", ",", "");
		var hanA = new Array("","일","이","삼","사","오","육","칠","팔","구");
		var danA = new Array(
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천",
			"","십","백","천"
		);

		var result = "";

		for(var i=0;i<val.length;i++) {
			var str = "";
			var han = hanA[val.charAt(val.length-(i+1))];
			if(han != "") str += han + danA[i];
			if((i == 4 && val.length <= 8) || (i == 4 && val.length > 8 && Math.floor(val /10000)%10000 > 0)) str += "만";
			if((i == 8 && val.length <= 12) || (i == 8 && val.length > 12 && Math.floor(val /100000000)%10000 > 0))  str += "억";
			if((i == 12 && val.length <= 16) || (i == 12 && val.length > 16 && Math.floor(val /1000000000000)%10000 > 0)) str += "조";
			if((i == 16 && val.length <= 20) || (i == 16 && val.length > 20 && Math.floor(val /10000000000000000)%10000 > 0)) str += "경";
			if((i == 20 && val.length <= 24) || (i == 20 && val.length > 24 && Math.floor(val /100000000000000000000)%10000 > 0)) str += "해";
			if((i == 24 && val.length <= 28) || (i == 24 && val.length > 28 && Math.floor(val /1000000000000000000000000)%10000 > 0)) str += "자";
			if((i == 28 && val.length <= 32) || (i == 28 && val.length > 32 && Math.floor(val /10000000000000000000000000000)%10000 > 0)) str += "양";
			/*
			if(i == 32) str += "구";
			if(i == 36) str += "간";
			if(i == 40) str += "정";
			if(i == 44) str += "재";
			if(i == 48) str += "극";
			if(i == 52) str += "항하사";
			if(i == 56) str += "아승기";
			if(i == 60) str += "나유타";
			if(i == 64) str += "불가사의";
			if(i == 68) str += "무량대수";
			*/
			result = str + result;
		}

		if (val != 0) result = result;

		return result;
	},

	// 금액필드 천단위 콤마
	getCommaValue : function(val) {
		var defaultVal = '0';

		if(val == undefined || val == null)
			return defaultVal;

		if($.trim(val) == "")
			return defaultVal;

		val = val.toString();
		var bExists = val.indexOf(".", 0); // 0번째부터 .을 찾는다.
		var val1 = "";
		var val2 = "";

		if(bExists == -1) { // 정수만 있을 경우
			val = parseInt(val);

		} else { // 소수점이 있을 경우
			val1 = val.split(".")[0]
			val2 = val.split(".")[1];
		}

		if (isNaN(val)) {
			return defaultVal;
		}

		val = val.toString();
		var objRegExp = new RegExp('(-?[0-9]+)([0-9]{3})');
		try{
			if(bExists > -1) { // 소수점일 경우
				while(objRegExp.test(val1)){
					val1 = val1.replace(objRegExp, '$1,$2');
				}
				val = val1 + "." + val2;
			} else { // 정수일 경우
				while(objRegExp.test(val)){
					val = val.replace(objRegExp, '$1,$2');
				}
			}
		} catch(e){
			console.log("function getCurrencyValue error : "+e.toString());
		}
		return val;
	},
	// 소수점 자릿수 표현
	// ex) stringUtil.decimalToFixed(10, 2);
	decimalToFixed : function(str, cipher) {
		if(Number(str)==0) return 0;
//		if(!Number(cipher)) cipher = 0;
		return Number(str).toFixed(Number(cipher));
	},
	// 바이트사이즈
	// ex) stringUtil.getByteSize('사이즈');
	getByteSize : function(val) {
		var c = val;
		for(var b = 0, i = 0; c = val.charCodeAt(i++); b += c >> 11 ? 2:c >> 7 ? 2:1);
		return b;
	},
	// 입력 내용을 정해진 바이트 수만큼 제한
	// ex) stringUtil.cutByteLen('테스트',3)
	cutByteLen : function(str, maxByte) {
		var b,i;
		for(b=i=0; c=str.charCodeAt(i);){
			b+=c>>7?2:1;
			if(b>maxByte)
				break;
			i++;
		}
		return str.substring(0,i);
	},

	// replaceAll
	// ex) stringUtil.replaceAll('10,000', ',', '');
	replaceAll : function(str, org, dest){
		return str.split(org).join(dest);
	},

	// 계좌번호 포맷 변환
	// ex) stringUtil.getFormatActno('1234567890123456');
	getFormatActno : function(actno, sep){
		if (!actno) return '';
		sep = sep||'-';

		actno = actno.replace(/[^0-9,^*]/g, '');
		var val = actno;

		if (actno.length == 10) {
			//증권 용
			val = actno.replace(/(\d{2})(\d{2})(\d{5})/, '$1'+sep+'$2'+sep+'$3');
		} else if (actno.length == 11) {
			val = actno.replace(/(\d{3})(\d{3})(\d{5})/, '$1'+sep+'$2'+sep+'$3');
		} else if (actno.length == 12) {
			val = actno.replace(/(\d{3})(\d{3})(\d{6})/, '$1'+sep+'$2'+sep+'$3');
		} else if (actno.length == 13) {
			if(actno.substring(0,1)=='9' || actno.substring(0,1)=='8'){
				val = actno.replace(/(\d{4})(\d{4})(\d{4})(\d{1})/, '$1'+sep+'$2'+sep+'$3'+sep+'$4');
			}else{
				val = actno.replace(/(\d{4})(\d{2})(\d{6})(\d{1})/, '$1'+sep+'$2'+sep+'$3'+sep+'$4');
			}
		} else if (actno.length == 14) {
			val = actno.replace(/(\d{6})(\d{2})(\d{6})/, '$1'+sep+'$2'+sep+'$3');
		} else if (actno.length == 16) {
			val = actno.replace(/(\d{5})(\d{7})(\d{2})(\d{2})/, '$1'+sep+'$2'+sep+'$3'+sep+'$4');
		}

		return val;
	},

	// 전화번호 포맷
	// ex) stringUtil.getFormatTel('01012345678')
	getFormatTel : function(telNo, sep){
		if (!telNo) return '';
		sep = sep||'-';

		telNo = telNo.replace(/[^0-9,^*]/g, '');
		var val = telNo;

		if (telNo.length === 9) {
			val = telNo.replace(/(\d{2})(\d{3})(\d{4})/, '$1'+sep+'$2'+sep+'$3');
		} else if (telNo.length === 10) {
			if ('02' == telNo.substr(0,2)) {	// 서울
				val = telNo.replace(/(\d{2})(\d{4})(\d{4})/, '$1'+sep+'$2'+sep+'$3');
			} else{
				val = telNo.replace(/(\d{3})(\d{3})(\d{4})/, '$1'+sep+'$2'+sep+'$3');
			}
		} else if (telNo.length === 11) {
			val = telNo.replace(/(\d{3})(\d{4})(\d{4})/, '$1'+sep+'$2'+sep+'$3');
		}
		return val;
	},

	// 카드번호 포맷\
	// ex) stringUtil.getFormatCard('1002123456785432')
	getFormatCard : function(cardNo, sep){
		if (!cardNo) return '';
		sep = sep||'-';

		cardNo = cardNo.replace(/[^0-9,^*]/g, '');
		if (cardNo.length !== 16) {
			return cardNo;
		}
		cardNo = cardNo.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1'+sep+'$2'+sep+'$3'+sep+'$4');

		return cardNo;
	},

	// 주민등록번호, 외국인등록번호 포맷
	// ex) stringUtil.getFormatRrno('1234567890123');
	getFormatRrno : function(rrno, sep){
		if (!rrno) return '';
		sep = sep||'-';

		rrno = rrno.replace(/[^0-9,^*]/g, '');
		if (rrno.length != 13) {
			return rrno;
		}

		rrno = rrno.replace(/(\d{6})(\d{7})/, '$1'+sep+'$2');

		return rrno;
	},

	// 사업자번호 포맷
	getFormatBusno : function(busno, sep){
		if (!busno) return '';
		sep = sep||'-';

		busno = busno.replace(/[^0-9,^*]/g, '');
		if (busno.length != 10) {
			return busno;
		}

		busno = busno.replace(/(\d{3})(\d{2})(\d{5})/, '$1'+sep+'$2'+sep+'$3');

		return busno;
	},
	// 공제번호 포맷
	getFormatMaidNo : function(maidNo, sep){
		if (!maidNo) return '';
		sep = sep||'-';

		maidNo = maidNo.replace(/[^0-9,^*]/g, '');
		if (maidNo.length != 13) {
			return maidNo;
		}

		maidNo = maidNo.replace(/(\d{4})(\d{4})(\d{4})(\d{1})/, '$1'+sep+'$2'+sep+'$3'+sep+'$4');

		return maidNo;
	},

	// 금액단위 자르기(만원)
	getCutMoney : function(val) {
		val = stringUtil.getCommaValue(Math.round(val/10000));
		return val;
	},

	// 숫자만 추출
	// ex) stringUtil.getOnlyNumber('a1b2c3!4@5');
	getOnlyNumber : function(str){
		var res = str.replace(/[^0-9]/gi, "");
		return res;
	},

	// 숫자만 추출(음수 포함)
	// ex) stringUtil.getOnlyInteger('-a1b2c3!4@5');
	getOnlyInteger : function(str){
		var res = str.replace(/[^0-9\-]/gi, "");
		return res;
	},

	// 문자만 추출
	// ex) stringUtil.getOnlyString('a1b2c3!4@5');
	getOnlyString : function(str){
		var res = str.replace(/[0-9]/gi, "");
		return res;
	},

	// html 문자 그대로 출력
	escapeHtml : function(str) {
		return str.replace(/</gi, '&#60;').replace(/>/gi, '&#62;').replace(/\(/gi, '&#40;').replace(/\)/gi, '&#41;');
	}


}
