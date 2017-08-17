/* AJAX method for staying on the same page when submitting the contact form */

$(document).ready(function () {

    $('.ajaxform').submit(function () {
        var inputName = document.getElementById('name');
        var inputMessage = document.getElementById('message');

        if (inputName.value.length === 0 || inputMessage.value.length === 0) {
            $("#popup2").fadeIn();
        } else {
            $.ajax({
                url: $(this).attr('action'),
                type: $(this).attr('method'),
                data: $(this).serialize()
            });
            $("#popup1").fadeIn();
            $('.ajaxform')[0].reset();
        }
        return false;
    });

    $(".fadein").on('click', function () {
        $(".fadein").fadeOut();
    });
});