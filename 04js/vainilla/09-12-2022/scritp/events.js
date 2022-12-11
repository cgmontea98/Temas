const $label = document.querySelector('label');
const $btns = document.querySelectorAll('button');

let number = $label.textContent;

$btns.forEach(($btn) => {
    $btn.addEventListener('click', () => {
        if($btn.classList.contains('dec')){
            number--;
            $label.textContent = number;
        }
        if($btn.classList.contains('aum')){
            number++;
            $label.textContent = number
        }
    })
})