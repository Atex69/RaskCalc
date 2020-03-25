// общая функция для простановки итоговой цены, она также идет в скрытый инпут формы для последующей отправки
function setTotals(total){
	var $total = $('#final-price span'),
			$totalPriceHidden = $('#totalPriceHidden');
	$total.text(total.toLocaleString());
	$totalPriceHidden.val(total);
}




const STANDART_SET = [];
const BUSINESS_SET = ['map', 'light','PO', 'marker', 'usb', 'adv'];
const SMART_SET = ['map', 'light','PO','police', 'marker','usb', 'adv','wifi', 'tablo','sound','videosCam','vision'];
let currentSet = STANDART_SET;


let USER_SET = [];

$(document).ready(function() {




	let init = () => {
		$('.compl1').click();
	}

	$('.compl1').on('click', function (e) {
		$('.compl1, .compl2, .compl3').removeClass('is-active');
		$('.compl1').addClass('is-active');

		$('.opinion-standart').addClass('visible');
		$('.opinion-biznes').removeClass('visible');
		$('.opinion-smart').removeClass('visible');

		$('.choiseNew.added').addClass('visible');
		currentSet = STANDART_SET;
	});

	$('.compl2').on('click', function (e) {
		$('.compl1, .compl2, .compl3').removeClass('is-active');
		$('.compl2').addClass('is-active');
		$('.opinion-standart').removeClass('visible');
		$('.opinion-biznes').addClass('visible');
		$('.opinion-smart').removeClass('visible');
		$('.choiseNew.added').addClass('visible');
		currentSet = BUSINESS_SET;
	});

	$('.compl3').on('click', function (e) {
		$('.compl1, .compl2, .compl3').removeClass('is-active');
		$('.compl3').addClass('is-active');
		$('.opinion-standart').removeClass('visible');
		$('.opinion-biznes').removeClass('visible');
		$('.opinion-smart').addClass('visible');
		$('.choiseNew.added').addClass('visible');
		currentSet = SMART_SET;
	});

	var total = 0;
	// инициализация начальное цены по активной кнопке комплектации
	if($('.complect-name .is-active').length > 0){
		total = parseInt($('.complect-name .is-active').attr('data-price'));
		setTotals(total);
	}
	// изменение начально цены для комплектации - задается начальная и доп. чекбоксы отключаются
	$('.complect-name div').on('click', function(){
		total = parseInt($(this).attr('data-price'));
		setTotals(total);
		// сбрасываем доп. чекбоксы
		$('.content-img > img:not(.content-img-base)').removeClass('img-active');
		$('.opinion-add input[type="checkbox"]').each(function(){
			let id = $(this).attr("id");
			let isActive = currentSet.includes(id);
			if (isActive) {
				$(this).prop('checked', false);
				$('#'+id).change();
				console.log($(this))
			} else {
				$(this).prop('checked', true);
			}

			// перепутаны стейты чекбоксов, если исправите - то вместо true необходимо поставить false
		});
	});
	// подсчет при изменении стейта чекбокса
	$('.choise input[type="checkbox"] ,.choiseNew input[type="checkbox"]').on('change', function(){
		$('#complectIndicator').html('Индивидуальный заказ');
		let id = $(this).attr("id");
		let dontCalc = currentSet.includes(id);

		if (dontCalc) {
			// return
		}

		var thisPrice = $(this).attr('data-price');
		if(thisPrice !== undefined){
			if($(this).is(':checked')){
				// перепутаны стэйты чекбоксов, по умолчанию они checked, но выглядят как неактивные, если исправите - то здесь переделать условие наоборот
				total = total - parseInt(thisPrice);
			}else{
				total = total + parseInt(thisPrice);
			}
			setTotals(total);
		}
		if(id === 'adv'){
			if($(this).is(':checked')){
				// аналогично ситуации выше, но тут мы открываем или закрываем от выбора селект для этого чекбокса
				$('.adv-select').attr('disabled', 'disabled');
			}else{
				$('.adv-select').removeAttr('disabled');
			}
		}
		if(id === 'video'){
			if($(this).is(':checked')){
				// аналогично ситуации выше, но тут мы открываем или закрываем от выбора селект для этого чекбокса
				$('.video-select').attr('disabled', 'disabled');
			}else{
				$('.video-select').removeAttr('disabled');
			}
		}
		if(id === 'demon'){
			if($(this).is(':checked')){
				// аналогично ситуации выше, но тут мы открываем или закрываем от выбора селект для этого чекбокса
				$('.demon-select').attr('disabled', 'disabled');
			}else{
				$('.demon-select').removeAttr('disabled');
			}
		}

	});

	// изменение цены при выборе селекта, сколько добавлять для "Модуль с двух стороны" я не знаю, но по логике сделал двойную цену в таком случае
	$('.choise-select select').on('change', function(){
		console.log($(this));
		var $parentCheckbox = $(this).parent().parent().find('input[type="checkbox"]'),
				thisVal = $(this).val(),
				thisPrice = parseInt($parentCheckbox.attr('data-price')),
				thisSelectPrice = parseInt($(this).attr('data-price')),
				subTotal = 0;
		if(parseInt(thisVal) === 2){ 
			subTotal = thisSelectPrice * 2;
			total = total + thisSelectPrice;
		}else{

			subTotal = thisSelectPrice;
			total = total - thisSelectPrice;

		}
		setTotals(total);
		$parentCheckbox.attr('data-price', subTotal);
	});

	$('.compl1').on('click', function() {
		$('#complectIndicator').html('Стандарт');
		$('#product-tableInfo-desc').html('Изготавливается из уникальной модульной системы алюминиевых профилей SolarProf. Органично вписывается в городскую среду, практичен и многофункционален. Возможны различные типы опций: от простого навеса до «Умной остановки».');

	});
	$('.compl2').on('click', function() {
		$('#complectIndicator').html('Бизнес');
		$('#product-tableInfo-desc').html('Изготавливается из уникальной модульной системы алюминиевых профилей SolarProf. Органично вписывается в городскую среду, практичен и многофункционален. Возможны различные типы опций: от простого навеса до «Умной остановки».');
	});
	$('.compl3').on('click', function() {
		$('#complectIndicator').html('Смарт');
		$('#product-tableInfo-desc').html('Изготавливается из уникальной модульной системы алюминиевых профилей SolarProf. Органично вписывается в городскую среду, практичен и многофункционален. Возможны различные типы опций: от простого навеса до «Умной остановки».');
	});



	$('#police').change(function() {
		if(this.checked) {
			$('.content-img-middle-icons').removeClass('img-active');


		} else {
			$('.content-img-middle-icons').addClass('img-active');
			USER_SET.push(police);

		}

	});

	$('#map').change(function() {
		if(this.checked) {
			$('.content-img-map').removeClass('img-active');
		} else {
			$('.content-img-map').addClass('img-active');
			USER_SET.push(map);
		}

	});

	$('#wifi').change(function() {
		if(this.checked) {
			$('.content-img-right-icons-wifi, .content-img-middle-icons-wifi').removeClass('img-active');


		} else {
			$('.content-img-right-icons-wifi, .content-img-middle-icons-wifi').addClass('img-active');
			USER_SET.push(wifi);
		}

	});


	$('#sound').change(function() {
		if(this.checked) {
			$('.content-img-guSpeak').removeClass('img-active');


		} else {
			$('.content-img-guSpeak').addClass('img-active');
			USER_SET.push(sound);
		}

	});

	$('#gusak').change(function() {
		if(this.checked) {
			$('.content-img-gus').removeClass('img-active');


		} else {
			$('.content-img-gus').addClass('img-active');
			USER_SET.push(gusak);
		}

	});

	$('#light').change(function() {
		if(this.checked) {
			$('.content-img-light').removeClass('img-active');


		} else {
			$('.content-img-light').addClass('img-active');
			USER_SET.push(light);
		}

	});



	$('#vision').change(function() {
		if(this.checked) {
			$('.content-img-marker, .content-img-mark-camera').removeClass('img-active');


		} else {
			$('.content-img-marker, .content-img-mark-camera').addClass('img-active');
			USER_SET.push(vision);
		}

	});

	$('#police').change(function() {
		if(this.checked) {
			$('.content-img-police1, .content-img-police2').removeClass('img-active');


		} else {
			$('.content-img-police1, .content-img-police2').addClass('img-active');
			USER_SET.push(police);
		}

	});

	$('#videosCam').change(function() {
		if(this.checked) {
			$('.content-img-cameras,.content-img-camLeft,.content-img-camRight').removeClass('img-active');


		} else {
			$('.content-img-cameras,.content-img-camLeft,.content-img-camRight').addClass('img-active');
			USER_SET.push(videosCam);
		}

	});

	$('#tablo').change(function() {
		if(this.checked) {
			$('.content-img-etablo').removeClass('img-active');


		} else {
			$('.content-img-etablo').addClass('img-active');
			USER_SET.push(tablo);
		}

	});


	$('.adv-select').change(function() {
		if ($('.adv-select').val() == '2'){
			$('.content-img-sitic, .content-img-format,.content-img-siticRight').addClass('img-active');
		}else{
			$('.content-img-siticRight').removeClass('img-active');
		}


	});

	$('#adv').change(function() {
		if ($('.adv-select').val() == '2') {

			$('.content-img-sitic, .content-img-format,.content-img-siticRight').addClass('img-active');

		}else {  $('.content-img-sitic, .content-img-format,.content-img-siticRight').removeClass('img-active');}
		if(this.checked) {
			$('.content-img-sitic, .content-img-format,.content-img-siticRight').removeClass('img-active');


		} else {
			$('.content-img-sitic, .content-img-format').addClass('img-active');
			USER_SET.push(adv);

		}

	});

	$('#marker').change(function() {

		if(this.checked) {
			$('.content-img-markeros').removeClass('img-active');


		} else {
			$('.content-img-markeros').addClass('img-active');
			USER_SET.push(marker);

		}

	});

	$('.choise-select').change(function() {
		if(this.checked) {
			$('.content-img-sitic, .content-img-format').removeClass('img-active');


		} else {
			$('.content-img-sitic, .content-img-format').addClass('img-active');

		}

	});

	$('#usb').change(function() {
		if(this.checked) {
			$('.content-img-right-icons-usb, .content-img-middle-icons-usb, .content-img-right-icons-usbMod').removeClass('img-active');


		} else {
			$('.content-img-right-icons-usb, .content-img-middle-icons-usb,.content-img-right-icons-usbMod').addClass('img-active');
			USER_SET.push(usb);

		}

	});

	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			$('btn-menu').trigger('click');
		}
	});


	init();
});