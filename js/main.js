$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up")
    var counterDown = $(".counter-down")
    var floorPath = $(".home-image path")
    var modal = $('.modal')
    var modalCloseButton = $('.modal-close-button')
    var viewFlatsButton = $('.view-flats')

    // Наведение мышкой на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor)
    })

    // Открытие и закрытие модального окна
    modalCloseButton.on('click', toggleModal)
    floorPath.on('click', toggleModal)
    viewFlatsButton.on('click', toggleModal)

    //Изменение этажа при нажатии кнопок
    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
                useGrouping: false})
            $(".counter").text(usCurrentFloor)
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
                useGrouping: false})
            $(".counter").text(usCurrentFloor)
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })

    function toggleModal () {
        modal.toggleClass('is-open');
    }
})