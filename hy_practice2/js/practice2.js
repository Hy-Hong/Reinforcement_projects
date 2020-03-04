$(document).ready(function(){
    $('button').on('click',function(){
        let uname = $('#user').val();
        let pwd = $('#pass').val();

        isUser(uname);
        isPass(pwd);
    });
});
function success(s){
    $('#' + s).addClass('border-success');
    $('#' + s).removeClass('border-danger');
}
function error(e){
    $('#' + e).addClass('border-danger');
    $('#' + e).removeClass('border-success');
}
function isUser(u){
    if(u != ""){
        success('user');
    }else{
        error('user');
    }
}
function isPass(p){
    if(p != ""){
        success('pass');
    }else{
        error('pass');
    }
}