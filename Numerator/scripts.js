let numValue = 0;

$('#numerator h1').text(numValue);

$('#upper').click(() => {
    numValue = numValue + 1;
    $('#numerator h1').text(numValue);
})

$('#lower').click(() => {
    numValue = numValue - 1;
    $('#numerator h1').text(numValue);
})