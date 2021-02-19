let imgdata0 = {
    photo: 'images/1Pyramide_Kheops.jpg',
    title: 'Gízai nagy piramis',
    description: 'A mai egyiptomi főváros, Kairó elővárosának számító Gíza városa mellett áll, és a Föld egyik legismertebb turistalátványossága. A gízai piramismezőt alkotó három királypiramis egyike, a memphiszi nekropolisz részeként az UNESCO világörökség része.'
};

let imgdata1 = {
    photo: 'images/2Hanging_Gardens_of_Babylon.jpg',
    title: 'Szemiramisz függőkertje',
    description: 'Feltételezhetően ezek az építmények II. Nabú-kudurri-uszur kérésére épültek, i. e. 600-tól kezdve. A kerteket az ő parancsára alakították ki. A király a feleségét akarta megörvendeztetni a kerttel, aki folyton-folyvást szülőföldje zöld vidékei után sóvárgott.',
};

let imgdata2 = {
    photo: 'images/3Temple_of_Artemis.jpg',
    title: 'Epheszoszi Artemisz-templom',
    description: 'Más néven Diana temploma, egy ókori görög templom volt, amelyet Artemisz istennőnek ajánlottak fel. A templom építése I. e. 550 körül kezdődött Epheszoszban a Perzsa Birodalom területén.',
};

let imgdata3 = {
    photo: 'images/4Statue_of_Zeus.jpg',
    title: 'Pheidiasz olümpiai Zeusz-szobra',
    description: 'Közel 12 m magas ülő szobor volt, amelyet Pheidiasz készített az i.e. 430-as években. A szobor a görögországi Olümpiában állt, a Zeusz tiszteletére emelt templomban. Zeusz volt az ég és a villámok ura az ókori görög vallásban, valamint az olümposziak főistene.',
};

let imgdata4 = {
    photo: 'images/5Mausoleum_of_Halicarnassus.jpg',
    title: 'Halikarnasszoszi mauzóleum',
    description: 'Egy i. e. 353 és i. e. 350 között épült síremlék, amely Mauszólosz, perzsa királyi helytartó (satrapa) és felesége számára épült a kis-ázsiai Halikarnasszoszban (jelenleg Bodrum, Törökország). Szatürosz és Pütheosz görög építészek tervezték.',
};

let imgdata5 = {
    photo: 'images/6Colossus_of_Rhodes.jpg',
    title: 'Rodoszi kolosszus',
    description: 'Héliosz a mindent látó fényes napisten óriási méretű szobra volt Rodosz városában. A világ hét csodája közül hatodikként tartották számon. A szobor ókori források szerint 70 könyök magas volt, azaz semmiképp sem magasabb 33-35 méternél.',
};

let imgdata6 = {
    photo: 'images/7Pharos_of_Alexandria.jpg',
    title: 'Pharoszi világítótorony',
    description: 'Az i. e. 3. században építtette I. Ptolemaiosz egyiptomi fáraó fővárosában, Alexandriában, Pharosz (ὁgörög: Φάρος Ἀλεξανδρινóς) szigetén, mint a kikötőt jelző szimbólumot. Csak később alakították világítótoronnyá.',
};

let currentPhoto = 0;
let imagesData = [imgdata0, imgdata1, imgdata2, imgdata3, imgdata4, imgdata5, imgdata6];

imagesData.forEach((arrayNumber, index) => {
    $('#thumbs').append(`<div class="thumb" data-index=${index}></div>`);
    $('.thumb:last-of-type').css(`background-image`, `url(./${arrayNumber.photo})`);
    $('.thumb:last-of-type').append(`<div class="tooltip" data-index=${index}></div>`);
    $(`.tooltip[data-index=${index}]`).text(imagesData[index].title);
});

function loadImage(imgNumber) {
    $('#image').attr('src', imagesData[imgNumber].photo);
    $('#imgTitle').text(imagesData[imgNumber].title);
    $('#imgDesc').text(imagesData[imgNumber].description);
    $(`.thumb[data-index=${imgNumber}]`).toggleClass(`thumbActive data-index=${imgNumber}`);
    $(`.thumbActive[data-index != ${imgNumber}]`).toggleClass('thumbActive');
};

loadImage(currentPhoto);

$('#rightButton').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++; 
    } else {
        currentPhoto = 0;
    }
    loadImage(currentPhoto); 
});

$('#leftButton').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;    
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadImage(currentPhoto);
});

$('.thumb').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);
    loadImage(numberIndex);
    currentPhoto = numberIndex;
});