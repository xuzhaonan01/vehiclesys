var mainInit = function()
{
    LoadTop();
};

var _inst = {}

function LoadTop(){
    _inst = new Vue({
        el:"#functionbar",
        data:{
            topic:[
                {name:'ORDER',link:'/'},
                {name:'Vehicle',link:'/'},
                {name:'Customer',link:'/'},
                {name:'INVENTORY',link:'/'},
                {name:'MEMBER',link:'/'},
                {name:'STATICS',link:'/'},
                {name:'ABOUT US',link:'/'},
            ],
            item:""
        }
    });
}