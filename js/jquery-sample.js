$(function(){
    $('#page-loaded').html(new Date().toLocaleTimeString());
    $('#btn-check-account').click(checkAccount);
    $('#btn-get-fragment').click(getHtml);
});

function checkAccount() {
        $.getJSON('client-data.json','',function(result){
        $('#client-name').html(result['client-name']);
        $('#account-balance').html(result['account-balance']);
        }
    )
}

function getHtml() {
    $('#container').load('fragment.html');
}