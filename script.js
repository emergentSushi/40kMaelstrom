Math.randomRange = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

HTMLElement.prototype.empty = function() {
    this.innerHTML = '';
}

HTMLElement.prototype.on = function(event, cb) {
    this.addEventListener(event, cb);
}

if (!HTMLElement.prototype.remove) {
    HTMLElement.prototype.remove = function () {
        this.parentNode.removeChild(this);
    }
}

$ = function(query) {
    var nodes = document.querySelectorAll(query);
    if (nodes.length === 1) {
        return nodes[0];
    }
    else return nodes;
}

document.addEventListener( "DOMContentLoaded", function(){
    renderFor($('#option').value.toString());

    $('#pick').on('click', function() {
        var o = $('.obj');
        var c = o[Math.randomRange(0, o.length)].cloneNode(true);
        c.on('click', function() {
            c.remove();
        });
        $('#dump').appendChild(c);
    });

    $('#clear').on('click', function() {
        $('#dump').empty();
    });

    $('#option').on('change', function() {
        renderFor(this.value.toString());
    });
});

function rebindEvents() {
    var objectives = $('.obj');
    for (var i = 0; i < objectives.length; i++) {
        objectives[i].on('click', function() {
            var c = this.cloneNode(true);
            c.on('click', function() {
                c.remove();
            });

            $('#dump').appendChild(c);
        });
    }
}

function renderFor(army) {
    var data = eval(army).concat(common);
    var root = $('#obj-wrapper');
    $('#dump').empty();
    root.empty();
    var objectives = [];
    for (var i = 0; i < data.length; i++) {
        objectives.push(render(data[i], 'objective'));
    }

    var documentFragment = document.createRange().createContextualFragment(objectives.join(''));
    root.appendChild(documentFragment);
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
