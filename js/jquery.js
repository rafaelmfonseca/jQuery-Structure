function jQuery(){

    this.elem = null;

    this.init = function(elem) {
        this.elem = elem;
    };

    this.show = function(speed) {
        if (typeof speed === 'undefined') { speed = 1000; }
        this.elem.style.opacity = 0;
        (function fade(el, speed){
            var val = parseFloat(el.style.opacity);
                if(!((val += (1.0 / speed)) > 1)){
                el.style.opacity = val;
                setTimeout(function(){
                    fade(el, speed);
                }, 0);
            }
        })(this.elem, speed);
        return this;
    };

}

var $ = function(selector){
    var j = new jQuery();
    j.init(document.querySelector(selector));
    return j;
};

window.onload = function(){
    $(".elem").show(50);
};
