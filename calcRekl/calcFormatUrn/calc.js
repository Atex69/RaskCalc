// общая функция для простановки итоговой цены, она также идет в скрытый инпут формы для последующей отправки
function setTotals(total){
	var $total = $('#final-price span'),
			$totalPriceHidden = $('#totalPriceHidden');
	$total.text(total.toLocaleString());
	$totalPriceHidden.val(total);
}




const STANDART_SET = [];
const BUSINESS_SET = ['gusak', 'map','light', 'marker', 'usb', 'adv'];
const SMART_SET = ['gusak','map', 'light', 'marker', 'usb', 'adv', 'wifi', 'tablo', 'videoCam', 'police', 'sound', 'vision'];

let currentSet = STANDART_SET;

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
		$('.standartNone').addClass('none');
		currentSet = STANDART_SET;
	});

	$('.compl2').on('click', function (e) {
		$('.compl1, .compl2, .compl3').removeClass('is-active');
		$('.compl2').addClass('is-active');
		$('.opinion-standart').removeClass('visible');
		$('.opinion-biznes').addClass('visible');
		$('.opinion-smart').removeClass('visible');
		$('.choiseNew.added').addClass('visible');
		$('.standartNone').removeClass('none');
		currentSet = BUSINESS_SET;
	});

	$('.compl3').on('click', function (e) {
		$('.compl1, .compl2, .compl3').removeClass('is-active');
		$('.compl3').addClass('is-active');
		$('.opinion-standart').removeClass('visible');
		$('.opinion-biznes').removeClass('visible');
		$('.opinion-smart').addClass('visible');
		$('.choiseNew.added').addClass('visible');
		$('.standartNone').removeClass('none');
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
		if(id === 'step'){
			if($(this).is(':checked')){
				// аналогично ситуации выше, но тут мы открываем или закрываем от выбора селект для этого чекбокса
				$('.step-select').attr('disabled', 'disabled');
			}else{
				$('.step-select').removeAttr('disabled');
			}
		}
		if(id === 'metal'){
			if($(this).is(':checked')){
				// аналогично ситуации выше, но тут мы открываем или закрываем от выбора селект для этого чекбокса
				$('.metal-select').attr('disabled', 'disabled');
			}else{
				$('.metal-select').removeAttr('disabled');
			}
		}
		if(id === 'opora'){
			if($(this).is(':checked')){
				// аналогично ситуации выше, но тут мы открываем или закрываем от выбора селект для этого чекбокса
				$('.opora-select').attr('disabled', 'disabled');
			}else{
				$('.opora-select').removeAttr('disabled');
			}
		}
		if(id === 'work'){
			if($(this).is(':checked')){
				// аналогично ситуации выше, но тут мы открываем или закрываем от выбора селект для этого чекбокса
				$('.work-select').attr('disabled', 'disabled');
			}else{
				$('.work-select').removeAttr('disabled');
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
		$('#product-tableInfo-desc').html('Изготавливается из запатентованой системы алюминиевых профилей.<br> \n' +
			'Органично вписывается в городскую среду, практичен и многофункционален.<br> \n' +
			'Оснащается рекламоносителем ситиформата с любым способом демонстрации рекламы статика/ скроллинг/видеоэкран. <br>\n' +
			'Предлагаются различные типы, размеры и комбинации опций от простого навеса до «умной остановки».<br> \n' +
			'Подсветка, встроенная в потолок, светодиодная.');




	});
	$('.compl2').on('click', function() {
		$('#complectIndicator').html('Бизнес');
		$('#product-tableInfo-desc').html('Изготавливается из запатентованой системы алюминиевых профилей.<br> \n' +
			'Органично вписывается в городскую среду, практичен и многофункционален.<br> \n' +
			'Оснащается рекламоносителем ситиформата с любым способом демонстрации рекламы статика/ скроллинг/видеоэкран. <br>\n' +
			'Предлагаются различные типы, размеры и комбинации опций от простого навеса до «умной остановки».<br> \n' +
			'Подсветка, встроенная в потолок, светодиодная.');


	});
	$('.compl3').on('click', function() {
		$('#complectIndicator').html('Смарт');
		$('#product-tableInfo-desc').html('Изготавливается из запатентованой системы алюминиевых профилей.<br> \n' +
			'Органично вписывается в городскую среду, практичен и многофункционален.<br> \n' +
			'Оснащается рекламоносителем ситиформата с любым способом демонстрации рекламы статика/ скроллинг/видеоэкран. <br>\n' +
			'Предлагаются различные типы, размеры и комбинации опций от простого навеса до «умной остановки».<br> \n' +
			'Подсветка, встроенная в потолок, светодиодная.');

	});

	init();
});