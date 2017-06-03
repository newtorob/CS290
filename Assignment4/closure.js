//Robert Newton
//CS290
//closure.js program

function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
            var item = 'item' + list[i];
            result.push(function(){
            return function() {
                console.log(x + ' ' + y);
            }    
            }(item, list[i])); 
    }
    return result;
}
 
function testList() {
    var fnlist = buildList([2,4,6]);

    for (var i = 0; i < fnlist.length; i++) {
        fnlist[j]();
    }
}