var i;

var YearDown = 2022;
var MonthDown = 7;
var DayDown = 7;
demnguoc();
function get_day_of_time (d1, d2) {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1));
};
function demnguoc(){
   var curDate = new Date();
   var curDay = curDate.getDate();
   var curMonth = curDate.getMonth() + 1;
   var curYear = curDate.getFullYear();
   let futu = new Date(YearDown.toString() + '-' +MonthDown.toString()+'-'+DayDown.toString());
   var timemili = get_day_of_time(curDate,futu);
   var day = Math.floor(timemili / (24*60*60*1000));
   year = YearDown - curYear;
   if (curYear%4 == 0) {
       if (day <=365) {year = 0}
    }else{
      if (day <=365) {year=0}
    }
   month =  (YearDown - curYear - 1)*12 + MonthDown + 12 - curMonth;
   document.getElementById('nam').innerText = year + ' Năm';
   document.getElementById('thang').innerText = month + ' Tháng';
   document.getElementById('ngay').innerText = day + ' Ngày';
   document.getElementById('gio').innerText =Math.floor(timemili/(1000*60*60))+' Giờ';
   document.getElementById('giay').innerText = Math.floor(timemili/(1000)) +' Giây';
   setTimeout(demnguoc, 1000); 
}