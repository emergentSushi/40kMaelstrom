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
    var data = eval(army).concat(common);
    var root = $('#obj-wrapper');
    $('#dump').empty();
    $(root).empty();
    var objectives = [];
    for (var i = 0; i < data.length; i++) {
        objectives.push(htmlToElement(render(data[i], 'objective')));
    }
    root.append(objectives);
    rebindEvents();
}

function htmlToElement(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
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