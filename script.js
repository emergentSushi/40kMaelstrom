function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
$(document).ready(function() {
    $('#pick').click(function() {
        var o = $('.obj');
        var c = $(o[getRandomInt(0, o.length)]).clone();
        c.click(function() {
            c.remove();
        });
        $('#dump').append(c);
    });

    $('.obj').click(function() {
        var c = $(this).clone();
        c.click(function() {
            c.remove();
        });

        $('#dump').append(c);
    });

    $('#clear').click(function() {
        $('#dump').empty();
    });
});