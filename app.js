const $arrows = document.querySelectorAll('.arrow');
const $boxToggles = document.querySelectorAll('.sales-report');
const $titleToggles = document.querySelectorAll('.title-sales');
$arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        arrow.classList.toggle('active');
        $boxToggles[index].classList.toggle('active');
    });
});

$titleToggles.forEach((sales, index) =>{
    sales.addEventListener('click', ()=>{
        $boxToggles[index].classList.toggle('active');
        $arrows[index].classList.toggle('active');
    });
});