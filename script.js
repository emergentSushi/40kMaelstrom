function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
$(document).ready(function() {
    renderFor($('#option').val());

    $('#pick').click(function() {
        var o = $('.obj');
        var c = $(o[getRandomInt(0, o.length)]).clone();
        c.click(function() {
            c.remove();
        });
        $('#dump').append(c);
    });

    $('#clear').click(function() {
        $('#dump').empty();
    });

    $('#option').change(function() {
        renderFor($(this).val());
    });
});

function rebindEvents() {
    $('.obj').click(function() {
        var c = $(this).clone();
        c.click(function() {
            c.remove();
        });

        $('#dump').append(c);
    });
}

function renderFor(army) {
    var data;

    switch(army) {
        case 'salamander':
            data = salamander.concat(common);
            break;
        case 'deathguard':
            data = deathguard.concat(common);
            break;
        default:
            data = generic.concat(common);
            break;
    }

    var root = $('#obj-wrapper');
    $('#dump').empty();
    $(root).empty();
    for (var i = 0; i < data.length; i++) {
        root.append(render(data[i], 'objective'));    
    }

    rebindEvents();
}

function render(data, id) {
    var template = document.getElementById(id).innerHTML;
    var tokens = template.match(/\{\{([a-zA-Z\d:\-_]+)\}\}/g)
    
    for (var x = 0; x < tokens.length; x++) {
        var prop = tokens[x].slice(2, tokens[x].length - 2)
          , val = '';
            
        if (data.hasOwnProperty(prop)) {
            val = data[prop];
        }
        else {
            var subtemplate = prop.split(':');
            if (subtemplate.length == 3) {
                var d = data[subtemplate[1]];
                for (var i = 0; i < d.length; i++) {
                    val += render(d[i], subtemplate[2]);
                }
            }
        }
        
        template = template.split(tokens[x]).join(val);
    }

    return template;
}