$(document).ready(function(){
    
$('#log-btn').click(function(){
    $('#form').slideUp(3000);
    $('#form1').slideDown(3000);
});
$('#sign-btn').click(function(){
    $('#form').slideDown(3000);
    $('#form1').slideUp(3000);
});
});