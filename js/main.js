const icons = document.querySelectorAll(".chart__mark")
const dayOrNight = document.querySelector(".dayOrNight")
const proposals = document.querySelectorAll(".prices__proposal")
const btnContinue = document.querySelector(".continue")
    /* let href = btnContinue.getAttribute('href');
     */
    //анимация иконок
const showIcons = function() {
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.add("chart__mark--active")
    }
}
setTimeout(showIcons, 2200)

//переключение бизнес-предложений
const selectOffer = function() {
    for (let i = 0; i < proposals.length; i++) {
        proposals[i].classList.remove("active")
    }
    this.classList.add("active");
    btnContinue.setAttribute("href", "")
    let name = this.getAttribute('name');
    btnContinue.setAttribute("href", name)
    console.log(btnContinue);
}
for (let i = 0; i < proposals.length; i++) {
    proposals[i].addEventListener("click", selectOffer)
}
//ночной/дневной режим
const changeMode = function() {
    dayOrNight.classList.toggle('night')
    document.querySelector('body').classList.toggle('nightMode')
    document.querySelector('.slider').classList.toggle('nightMode')
    document.querySelector('.prices').classList.toggle('nightMode')

}


dayOrNight.addEventListener('click', changeMode)
    //Звёздный рейтинг
$(function() {
    $(".rate-yo").rateYo({
        readOnly: true,
        normalFill: "#c4c4c4",
        ratedFill: "#FCBF59",
        spacing: "4px",
        starWidth: "20px",
    });
});
//слайдер 
$(function() {
    $(".slider").slick({
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
});