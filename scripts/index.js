function search_btn_onclick(evt){
    var search = $("#content").val();
    if(search == ""){
        alert('empty!');
    }else{
        window.location = "http://localhost:3000/vehicle/detail?code="+search;
    }
}