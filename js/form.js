$(function() {
    $('form input[type=submit]').click(function(e) {
        //$('#form')[0].checkValidity(); // перевірка на коректність введених даних в форму
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault(); // відключає відправку форми браузеру
        $.ajax({
            url: "https://formspree.io/akopyan.bogdan@gmail.com",
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientBalance: $('#client-balance').val()
            },
            dataType: "json"
        }).done(function() {
            form.reset();
            $('#message-box').html('<h2>Thank you!<h2>');
        }).fail(function() {
            $('#message-box').html('Something wrong!');
        });
    });
});
