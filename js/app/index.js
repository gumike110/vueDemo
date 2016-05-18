/**
 * Created by guming on 2016-05-10.
 */

window.data = {};
$(function(){
     headbar = new Vue({
        el:'#headbar',
        data:{
            items:null
        }
    });
    $.ajax({
        type:'get',
        url:'http://localhost:8080/vueDemo/json/headbar.json',
        success:function(data){
            headbar.items = data.items;
        }
    });

    getLeft(0);
})


function getLeft(index){
    window.data.index =index;
    $.ajax({
        type:'get',
        url:'http://localhost:8080/vueDemo/sidebar.html',
        success:function(data){
            $('#sidebarPage').html(data);
            loadMenu('mainContent.html');
        }
    });
}


function loadMenu(url){
    $.ajax({
        type:'get',
        url:'http://localhost:8080/vueDemo/'+url,
        success:function(data){
            $('#mainContent').html(data);
        },
        error:function(data){
        }
    })
}