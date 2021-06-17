
function br() {
    document.write('<br>');
}

let season = Number(prompt('Впиши сезон', ));

switch (season) {
    case 1:
        alert('Зима');
    break;
    case 2:
        alert('Весна');
    break;
    case 3:
        alert('Лето');
    break;
    case 4:
        alert('Осень');
    break;
    default:
        alert('Нет такого сезона!');
    break;
}