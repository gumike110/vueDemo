/**
 * Created by guming on 2016-05-10.
 */
$(function(){
    var page = new Vue({
        el:'#page',
        data:{
            welcome:null,
            project:null,
            version:null,
            desc:null,
            items:null
        }
    });
    $.ajax({
        type:'get',
        url:'http://localhost:8080/vueDemo/json/mainContent.json',
        success:function(data){
            page.welcome = data.welcome;
            page.project = data.project;
            page.version = data.version;
            page.desc = data.desc;
            page.items = data.items;
        }
    });
});
