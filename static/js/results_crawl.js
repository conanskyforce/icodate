// coinschedule database

/********************* Results **********************/
//name cate end raise
var nname = [];
$('table tbody tr').each(function(i,x){
console.log(nname.push(x.childNodes[0].innerText))
})
window.copy(nname)

/********************* Results **********************/


/********************* Events **********************/
//date and place
var place = [];
$('table.events-table tbody tr:even').each(function(i,x){
console.log(place.push(x.childNodes[2].innerText))
})
window.copy(place)


//name and href
var href = [];
$('table.events-table tbody tr:even').each(function(i,x){
console.log(href.push(x.childNodes[0].getElementsByTagName('a')[0].href))
})
window.copy(href)
/********************* Events **********************/

/********************* icodrops **********************/
//date and place
document.querySelectorAll('.a_ico')
function $(e){
  return document.querySelectorAll(e);
}
var all_res = Array.prototype.slice.call($('.a_ico')).slice(0,336)
var count = 0;
var all = [];
all_res.forEach(function(e,i){
  var _arr = []
  //url
  var _url = e.firstElementChild.href;
  _arr.push(_url);
  //imgsrc
  var _imgsrc = e.getElementsByTagName('img')[0].src;
  _arr.push(_imgsrc);
  //name 
  var _name = e.getElementsByTagName('h3')[0].innerText;
  _arr.push(_name);
  //intro
  var _intro = e.getElementsByClassName('categ_desc_short')[0].innerText;
  _arr.push(_intro);
  //interest
  var _interest = e.getElementsByClassName('interest')[0].innerText;
  _arr.push(_interest);
  //cate
  var _cate = e.getElementsByClassName('categ_type')[0].innerText;
  _arr.push(_cate);
  //goal
  var _goal = e.getElementsByClassName('date')[0].previousElementSibling.innerText.trim();
  _arr.push(_goal);
  //date
  var _date = e.getElementsByClassName('date')[0].innerText;
  _arr.push(_date);
  //ticker
  var _ticker = e.getElementsByClassName('meta_icon')[0].innerText.trim();
  _arr.push(_ticker);
  all[count] = _arr;
  count++;
})
var ico_urls=[];
all.forEach(function(x){
  ico_urls.push(x[0]);
})
window.copy(ico_urls);
var place = [];
$('table.events-table tbody tr:even').each(function(i,x){
console.log(place.push(x.childNodes[2].innerText))
})
window.copy(place)


//name and href
var href = [];
$('table.events-table tbody tr:even').each(function(i,x){
console.log(href.push(x.childNodes[0].getElementsByTagName('a')[0].href))
})
window.copy(href)
/********************* icodrops **********************/


///////////////////////////////////


