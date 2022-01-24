/* const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract"); */
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");


buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains("add")) {
        count.textContent++;
        setColor();
    }

    if (e.target.classList.contains("reset")) {
        count.textContent = 0;
        setColor();
    }

    if (e.target.classList.contains("subtract")) {
        count.textContent--;
        setColor();
    }
});

function setColor() {
    if (count.textContent > 0) {
        count.style.color = 'yellow';
    } else if (count.textContent < 0) {
        count.style.color = 'orangered';
    } else {
       count.style.color = 'white';
    } 
}



/* add.addEventListener('click', () => {
    count.textContent++;
});

sub.addEventListener('click', () => {
    count.textContent--;
});

resetCount.addEventListener('click', () => {
    count.textContent = 0;
}) */
