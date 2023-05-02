

document.getElementById("action-button").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("заполните ФИО");
    } else if (document.getElementById("address").value === "") {
        alert("заполните адрес");
    } else if (document.getElementById("telephone").value === "") {
        alert("заполните телефон");
    } else if (document.getElementById("e-mail").value === "") {
        alert("заполните e-mail");
    } else {
        alert("Спасибо за заявку ? мы свяжемся с вами в ближайшее время");
    }

}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.rolls');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.4) / 9) + 'px,0px)';
    });

    const elem = document.querySelector(".rent");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.4 * window.pageYOffset) + 'px';
    })
});
