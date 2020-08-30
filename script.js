function currentHour() {
    const date = new Date();
    return date.getHours();
}

function genRandom(num) {
    const number = Math.floor(Math.random() * num);
    return number;
}