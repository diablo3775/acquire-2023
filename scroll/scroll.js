// $window.on('scroll', function() {
//     var scroll = $window.scrollTop();
//     var innerlogo = $(".navbar-brand.inner-logo img");
//     var darklogo = $(".navbar-brand.dark-logo img");

//     if (scroll <= 50) {
//         $("header").removeClass("scrollHeader").addClass("fixedHeader");
//         darklogo.attr('src', 'img/logos/logo.png');
//         innerlogo.attr('src', 'img/logos/logo-white.png');
//     } 
//     else {
//         $("header").removeClass("fixedHeader").addClass("scrollHeader");
//         darklogo.attr('src', 'img/logos/logo-white.png');
//         if ($window.width() >= 992) {
//             innerlogo.attr('src', 'img/logos/logo.png');
//         }
//     }
// });

// $window.on('scroll', function() {
//     var scroll = $window.scrollTop();
//     var innerlogo = $(".navbar-brand.product-inner-logo img");
//     var darklogo = $(".navbar-brand.product-dark-logo img");

//     if (scroll <= 50) {
//         $("header").removeClass("scrollHeader").addClass("fixedHeader");
//         darklogo.attr('src', '../img/logos/logo.png');
//         innerlogo.attr('src', '../img/logos/logo-white.png');
//     } 
//     else {
//         $("header").removeClass("fixedHeader").addClass("scrollHeader");
//         darklogo.attr('src', '../img/logos/logo-white.png');
//         if ($window.width() >= 992) {
//             innerlogo.attr('src', '../img/logos/logo.png');
//         }
//     }
// });

function handleScroll(selectorInner, selectorDark, logoPath, logoWhitePath) {
    $window.on('scroll', function () {
        var scroll = $window.scrollTop();
        var innerlogo = $(selectorInner + ' img');
        var darklogo = $(selectorDark + ' img');

        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
            darklogo.attr('src', logoPath);
            innerlogo.attr('src', logoWhitePath);
        }
        else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");
            darklogo.attr('src', logoWhitePath);
            if ($window.width() >= 992) {
                innerlogo.attr('src', logoPath);
            }
        }
    });
}

handleScroll('.navbar-brand.inner-logo', '.navbar-brand.dark-logo', 'img/logos/logo.png', 'img/logos/logo-white.png');
handleScroll('.navbar-brand.product-inner-logo', '.navbar-brand.product-dark-logo', '../img/logos/logo.png', '../img/logos/logo-white.png');
