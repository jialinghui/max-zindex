module.exports = function maxZindex(){
    var all_elem = document.all;
    var arr_zindex = [];
    for(var i=0; i<all_elem.length; i++){
        arr_zindex.push(Math.max(~~getComputedStyle(all_elem[i]).zIndex, ~~all_elem[i].style.zIndex));
    }
    return Math.max.apply(null, arr_zindex);
}