$(document).ready(function(){

$(".toggle").click(function(){
$(".toggle").toggleClass('active');
$(".sidebar").toggleClass('active');
});
$("[class='me']").click(function(){
    $(".toggle").toggleClass('active');
    $(".sidebar").toggleClass('active');
    });

});