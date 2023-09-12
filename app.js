let intro = document.querySelector('.inicio');
let logo = document.querySelector(".logo-header")
let logospan = document.querySelectorAll(".ñogo")



window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logospan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(() => {
            logospan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.ass('fade');
                }, (idx + 1) * 50)
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = "-100vh";
        }, 2300);

    })
})
