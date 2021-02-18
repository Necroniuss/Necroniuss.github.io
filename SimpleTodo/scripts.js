
let szamlalo = 0;
$('#nextTodoItem').focus();

$('#addTodoItem').click(() => {
    $('#nextTodoItem').focus();

    /* kiolvassa a beviteli mező értékét és beteszi egy változóba */
    let newTodoItem = document.getElementById('nextTodoItem').value;

    if (newTodoItem != 0) {

        /* Ez ad hozzá egy új elemet a listához */
        szamlalo = szamlalo + 1;

            /* egy új konténer az új elemhez */
            $('#listTitle').append(`<div class='listContainer' id='listContainer${szamlalo}'></div>`);

            /* az új listaelem */
            $(`#listContainer${szamlalo}`).append(`<li class='listElement' id='todo${szamlalo}'>${newTodoItem}</li>`);

                /* konténer a gombokhoz */
                $(`#listContainer${szamlalo}`).append(`<div class='btnContainer' id='btnContainer${szamlalo}'></div>`);
                /* első gomb a listaelemhez */
                $(`#btnContainer${szamlalo}`).append(`<button class="okBtn" id='okBtn${szamlalo}'></button>`);
                /* második gomb a listaelemhez */
                $(`#btnContainer${szamlalo}`).append(`<button class="delBtn" id='delBtn${szamlalo}'></button>`);

            /* törli a text beviteli mező tartalmát és fókuszba helyezi azt, hogy beírhassuk a következő elemet */
            document.getElementById('nextTodoItem').value = null;
            $('#nextTodoItem').focus();

        /* css rész az új listaelemhez */
        $('.listContainer').css('display', 'flex');
        $('.listContainer').css('justify-content', 'space-between');
        $('.listContainer').css('width', '100%');
        $('.btnContainer').css('display', 'flex');
        $('.btnContainer').css('flex-wrap', 'no-wrap');
        $(`#todo${szamlalo}`).css('margin-left', '20px');
        $(`#todo${szamlalo}`).css('margin-right', '20px');
        $(`#todo${szamlalo}`).css('font-size', 'smaller');
        $(`#todo${szamlalo}`).css('overflow', 'hidden');

        /*
        Ez volt az eredeti, ami áthúzta a listaelemet amire kattintottunk.

        $(`#todo${szamlalo}`).click (() => {
            $(`#listTitle *:hover`).css('text-decoration', 'line-through');
            $('#nextTodoItem').focus();
        }); */
    };  
});


/* todo listaelemhez tartozó event kezelő */
$('#mainList').on('click', '.okBtn', (event) => {
    $(event.target).parent().parent().css('text-decoration', 'line-through');
    $(event.target).parent().parent().css('color', '#3333');
    $(event.target).css('background-image', 'url(./images/confirmIconDone.svg)');
    $('#nextTodoItem').focus();
});

$('#mainList').on('click', '.delBtn', (event) => {
    $(event.target).parent().parent().remove();
    $('#nextTodoItem').focus();
});



