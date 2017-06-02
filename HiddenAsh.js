function main() {
    "use strict";
    $('.jumbotron').hide();
    $('.jumbotron').fadeIn(2000);
    $('.thumbnail').hide();
    $('.thumbnail').fadeIn(3000);
}
$(document).ready(main);
$(document).ready(function () {
    "use strict";
    $('a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
                
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});