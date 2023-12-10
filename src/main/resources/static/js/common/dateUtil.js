/**
 * date : 2021. 12. 11
 * desc : 날짜 관련 공통 스크립트
 */

var korWeekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
var engWeekName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const serverTime = new Date();

var dateUtil = {
	curDate : function(){
		return serverTime;
	},
	curDateStr : function(format){
		if(common.isEmpty(format)){
			return dateUtil.getFormat(serverTime);
		}else{
			return dateUtil.getFormat(serverTime, format);
		}
	},
	// 오늘 날짜 가져오기
	// ex) dateUtil.getToday()
	getToday : function(){
		return dateUtil.getFormat(new Date(), 'yyyyMMdd');
	},
	// 날짜포맷 변경
	// ex) dateUtil.getFormat('20210101', 'yyyyMMdd')
	getFormat : function(d, format){
		d = dateUtil.parseDate(d);
		if(common.isEmpty(d)) return false;

		if(common.isEmpty(format)){
			format = 'yyyyMMdd';
		}

		if(!this.valueOf()) return " ";
		var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

		return format.replace(/(yyyy|yy|MM|dd|E|HH|hh|mm|ss|a\/p)/gi, function($1){
			switch($1) {
				case "yyyy": return d.getFullYear();
				case "yy"  : return stringUtil.fillZero(d.getFullYear()%1000,2);
				case "MM"  : return stringUtil.fillZero(d.getMonth()+1,2);
				case "dd"  : return stringUtil.fillZero(d.getDate(),2);
				case "E"   : return weekName[d.getDay()];
				case "HH"  : return stringUtil.fillZero(d.getHours(),2);
				case "hh"  : return stringUtil.fillZero(((h=d.getHours()%12)?h:12),2);
				case "mm"  : return stringUtil.fillZero(d.getMinutes(),2);
				case "ss"  : return stringUtil.fillZero(d.getSeconds(),2);
				case "a/p" : return d.getHours() < 12 ? "오전" : "오후";
				default : return $1;
			}
		});
	},
	// 날짜 형 변환
	// ex) dateUtil.parseDate('20210101', 'yyyyMMdd')
	parseDate : function(d){
		if(typeof(d)=='string'){
			d= new Date(d.substring(0,4), Number(d.substring(4,6))-1, d.substring(6,8), d.substring(8,10), d.substring(10,12), d.substring(12,14));
		}
		return d;
	},
	// 날짜 더하기
	// ex) dateUtil.addDate('20210101', 'dd', 3)
	addDate : function(d, sep, add) {
		var typ = '';
		if(d instanceof Date){
			typ = 'date';
		}else{
			typ = 'string';
		}
		var tmpDate = d;
		add = Number(add);
		d = dateUtil.parseDate(d);
		if(sep=='yy'){
			d.setFullYear(d.getFullYear()+add);
		}else if(sep=='mm'){
			d.setMonth(d.getMonth()+add);
		}else if(sep=='dd'){
			d.setDate(d.getDate()+add);
		}
		if(typ=='date'){
			return d;
		}else if(typ=='string'){
			return dateUtil.getFormat(d);
		}
	},
	// 월 마지막 날짜를 가져온다.
	// ex) dateUtil.getLastDay('20210101');
	getLastDay : function(d) {

		if(common.isEmpty(d)) {
			d = new Date();
		}else{
			d = dateUtil.parseDate(d);
		}

		if(d==undefined){
			return new Date(year, month,0).getDate();
		}else{
			return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
		}
	},
	// 요일을 가져온다.
	// ex) dateUtil.getDays('20200101', 'kor');
	getDays : function(d, type){
		d = dateUtil.parseDate(d);
		var days;

		if(common.isEmpty(type)) {
			type = 'kor';
		}

		if(type=='kor'){
			days = korWeekName[d.getDay()];
		}else if(type=='eng'){
			days = engWeekName[d.getDay()];
		}
		return days;
	},
	// 두 날짜간 일자 차이를 리턴
	// ex) dateUtil.getDayBetween('20210101', '20210102');
	getDayBetween : function(d1, d2){
		d1 = dateUtil.parseDate(d1);
		d2 = dateUtil.parseDate(d2);

		var interval = d2 - d1;
		var day = 1000*60*60*24;
		return parseInt(interval/day);
	},
	// 주민번호로 생년월일 가져오기
	getRrnoToBirth : function (rrno) {
		rrno = stringUtil.getOnlyNumber(rrno);
		var birth = '';
		if(rrno.substring(6,7)=='3' || rrno.substring(6,7)=='4'){
			birth = '20'+rrno.substring(0,6);
		}else{
			birth = '19'+rrno.substring(0,6);
		}
		return birth;
	}
}