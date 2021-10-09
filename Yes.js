var count = 0;

function lemath()
{
    count++;
    var stuff = document.getElementById('stuff');
    stuff.innerHTML = "" + count;
}

function begin()
{
    lemath();
    setTimeout(begin, 700, window);
}

document.addEventListener('DOMContentLoaded', function () {
    begin();
});