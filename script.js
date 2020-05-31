Math.randomRange = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

HTMLElement.prototype.empty = function() {
    this.innerHTML = '';
}

HTMLElement.prototype.find = function(query) {
    return find(this, query);
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
    return find(document, query);
}

function find(root, query) {
    var nodes = root.querySelectorAll(query);
    if (nodes.length === 1) {
        return nodes[0];
    }
    else return nodes;
}

var selectedObjectives = [];
document.addEventListener( "DOMContentLoaded", function() {
    renderFor($('#option').value.toString());

    $('#pick').on('click', function() {
        var o = $('#obj-wrapper .obj');
        if (selectedObjectives.length === o.length) {
            return;
        }
        
        var selected;

        do {
            selected = o[Math.randomRange(0, o.length)];
        }
        while (selectedObjectives.indexOf(getNum(selected)) !== -1);
        selectedObjectives.push(getNum(selected));

        cloneTo(selected, $('#dump'));
    });

    $('#clear').on('click', function() {
        clearSelected();
    });

    $('#option').on('change', function() {
        renderFor(this.value.toString());
    });
});

function rebindEvents() {
    var objectives = $('#obj-wrapper .obj');
    for (var i = 0; i < objectives.length; i++) {
        objectives[i].on('click', function() {
            cloneTo(this, $('#dump'));
        });
    }
}

function cloneTo(source, target){
    var c = source.cloneNode(true);
    c.on('click', function() {
        this.remove();
    });
    target.appendChild(c);
}

function renderFor(army) {
    var root = $('#obj-wrapper');
    clearSelected();
    root.empty();
    var objectives = [];

    var data = eval(army).concat(common);
    for (var i = 0; i < data.length; i++) {
        objectives.push(render(data[i], 'objective'));
    }

    var objectiveNodes = document.createRange().createContextualFragment(objectives.join(''));
    root.appendChild(objectiveNodes);
    rebindEvents();
}

function clearSelected() {
    selectedObjectives = [];
    $('#dump').empty();
}

function getNum(obj) {
    return obj.find('.num').innerText;
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
