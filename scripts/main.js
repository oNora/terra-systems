$(document).ready(() => {

    $('select').each(function () {
        let numberOfOptions = $(this).children('option').length;

        $(this).wrap('<div class="ts-select"></div>');
        $(this).after('<div class="ts-custom-select"></div>');

        let styledSelect = $(this).next('div.ts-custom-select');
        styledSelect.text($(this).children('option').eq(0).text());

        let list = $('<ul />', {'class': 'ts-custom-options'}).insertAfter(styledSelect);

        for (let i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $(this).children('option').eq(i).text(),
                rel: $(this).children('option').eq(i).val()
            }).appendTo(list);
        }

        let listItems = list.children('li');

        styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.ts-custom-select.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.ts-custom-options').hide();
            });
            $(this).toggleClass('active').next('ul.ts-custom-options').toggle();
        });

        listItems.click(function (e) {
            e.stopPropagation();
            styledSelect.text($(this).text()).removeClass('active');
            list.hide();
        });

        $(document).click(function () {
            styledSelect.removeClass('active');
            list.hide();
        });

    });

    // load method on document ready
    positionModal();
    showModal();
    hideModal()

})

function positionModal() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var modalWidth = $('.ts-modal-dialog').outerWidth();
    var modalHeight = $('.ts-modal-dialog').outerHeight();

    let top = (windowHeight/2)-(modalHeight/2);
    let left = (windowWidth/2)-(modalWidth/2);
    $('.ts-modal-dialog').css({'top': `${top}px`});
    $('.ts-modal-dialog').css({'left': `${left}px`});
}

function showModal() {
    $('.ts-button').on('click', () =>{
        $('.ts-modal-dialog').css({'display': 'block'});
    })
}

function hideModal() {

    $('.ts-close-modal').on('click', () =>{
        $('.ts-modal-dialog').css({'display': 'none'});
    })

}