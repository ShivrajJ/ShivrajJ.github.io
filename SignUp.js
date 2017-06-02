function main() {
    "use strict";
    $('.jumbotron').hide();
    $('.jumbotron').fadeIn(2000);
    $('.SignIn').on('click', function () {
        $("input[name='PasswordS']").animate({height: 'toggle'}, 500);
        $("input[name='NameOrEmail']").animate({height: 'toggle'}, 500);
        $("input[name='SignIn']").animate({height: 'toggle'}, 500);
    });
}
$(document).ready(function () {
    "use strict";
    $("input[name='PasswordS']").hide();
    $("input[name='NameOrEmail']").hide();
    $("input[name='SignIn']").hide();
});
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
