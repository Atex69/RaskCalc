

$('#police').change(function() {
    if(this.checked) {
        $('.content-img-middle-icons').removeClass('img-active');


    } else {
        $('.content-img-middle-icons').addClass('img-active');

    }

});

$('#map').change(function() {
    if(this.checked) {
        $('.content-img-map').removeClass('img-active');


    } else {
        $('.content-img-map').addClass('img-active');

    }

});

$('#usb').change(function() {
    if(this.checked) {
        $('.content-img-usb').removeClass('img-active');


    } else {
        $('.content-img-usb').addClass('img-active');

    }

});


$('#wifi').change(function() {
    if(this.checked) {
        $('.content-img-wifi').removeClass('img-active');


    } else {
        $('.content-img-wifi').addClass('img-active');

    }

});

$('#tablo').change(function() {
    if(this.checked) {
        $('.content-img-info').removeClass('img-active');


    } else {
        $('.content-img-info').addClass('img-active');

    }

});

$('#police').change(function() {
    if(this.checked) {
        $('.content-img-police').removeClass('img-active');


    } else {
        $('.content-img-police').addClass('img-active');

    }

});


$('#sound').change(function() {
    if(this.checked) {
        $('.content-img-sound').removeClass('img-active');


    } else {
        $('.content-img-sound').addClass('img-active');

    }

});




$('#vision').change(function() {
    if(this.checked) {
        $('.content-img-camIcon, .content-img-cam').removeClass('img-active');


    } else {
        $('.content-img-camIcon, .content-img-cam').addClass('img-active');

    }

});









$('.adv-select').change(function() {
    if ($('.adv-select').val() == '2'){
        $('.content-img-citicLeft, .content-img-citicRight').addClass('img-active');
    }else{
        $('.content-img-citicRight').removeClass('img-active');
    }


});




$('#adv').change(function() {
    if ($('.adv-select').val() == '2') {

        $('.content-img-citicLeft, .content-img-citicRight').addClass('img-active');

    }else {  $('.content-img-citicLeft, .content-img-citicRight').removeClass('img-active');}
        if(this.checked) {
        $('.content-img-citicLeft,.content-img-siticRight').removeClass('img-active');


    } else {
        $('.content-img-citicLeft').addClass('img-active');

    }

});






$('.choise-select').change(function() {
    if(this.checked) {
        $('.content-img-sitic, .content-img-format').removeClass('img-active');


    } else {
        $('.content-img-sitic, .content-img-format').addClass('img-active');

    }

});


