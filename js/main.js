$(document).ready(function () {
    var currentFloor = 2; // переменная с текущим этажем
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down"); // кнопка уменьшения этажа
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    // функция при наведеньи мышью на этаж
    floorPath.on("mouseover", function () { // при наведении на этаж выводится в счетчик номер этажа
        floorPath.removeClass("current-floor"); // удаляем активный класс этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значения этажа в счетчик
    });

    floorPath.on("click", toggleModal);
    modalCloseButton.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);

    //отслеживаем клик по кнопке вверх
    counterUp.on("click", function () {
        if (currentFloor < 18) { //проверяем значения этажа(не больше 18)
            currentFloor ++; //прибавляем 1 этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, 
            useGrouping: false}); // фоматируем переменную с этажем, чтоб было 02, а не 2
            $(".counter").text(usCurrentFloor); // записываем значения этажа в счетчик
            floorPath.removeClass("current-floor"); // удаляем активный класс этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем 
            //текущий этаж (в css используем новый класс(toggleClass("current-floor")))
        };
    });

    counterDown.on("click", function () {
        if (currentFloor > 2 ) {
            currentFloor --;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, 
            useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        };
    });

    function toggleModal() {
        modal.toggleClass("is-open");
    };
});
