/**
 * Created by guming on 2016-05-17.
 */
$(function(){
    var sidebar = new Vue({
        el:'#sidebar',
        data:{
            items:headbar.items[window.data.index].items
        }
    });
});