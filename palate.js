const container = document.getElementById('scratchcontainer');
const pixels = document.getElementsByClassName('pixel');
const hidden = document.getElementById('hidden');
const colorPicker = document.getElementById('colorPicker')
const clear = document.getElementById('clear')

const lsp = JSON.parse(localStorage.getItem('pixels'));
const pixel = "<div class='pixel'></div>";
const pixelNum = 3000;

let currentColor = '#232323';

const doTheNeedful = () => {
    for (let i = 0; i < pixelNum; i++) {
        container.innerHTML = ` ${container.innerHTML} ${pixel}`;
    }
}
const fromLst = () => container.innerHTML = lsp?.data.map(() => pixel);

lsp ? fromLst() : doTheNeedful();

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = currentColor;
    })
}

colorPicker.onchange = (e) => {
    const { value } = e.target;
    currentColor = value;
}

clear.onclick = () => {
    fromLst();
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = currentColor;
        })
    }
}

hidden.style.display = 'block';
colorPicker.value = currentColor;
lsp.data.length
    && localStorage.setItem('pixels', JSON.stringify({ data: [...pixels] }));