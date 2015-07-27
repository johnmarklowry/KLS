$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'send_form_email.php',
            data: $('form').serialize(),
            success: function () {
                //alert('form was submitted');
                //console.log('success');
                document.getElementById("formSent").innerHTML = "Thank you. Your request has been submitted";
                document.getElementById("formContact").reset();
            }
        });
    });
});