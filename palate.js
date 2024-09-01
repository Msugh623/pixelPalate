const container = document.getElementById('whiteBoard');
const containment = document.getElementById('containment');
const pixels = document.getElementsByClassName('pixel');
const hidden = document.getElementById('hidden');
const colorPicker = document.getElementById('colorPicker')
const clear = document.getElementById('clear')
const nav = document.getElementById('nav')

const pixel = "<div class='pixel' draggable='true'></div>";
const pixelNum = 3000;

let currentColor = '#232323';

const doTheNeedful = () => {
    for (let i = 0; i < pixelNum; i++) {
        container.innerHTML = ` ${container.innerHTML} ${pixel}`;
    }
    lsp = { data: [...pixels] }
}

const fromLst = () => {
    const data = lsp?.data.map(() => pixel)
    container.innerHTML = data.join().replace(',', '')
}

lsp ? fromLst() : doTheNeedful();

for (let i = 0; i < pixels.length; i++) {
    pixels[i].ontouchstart = (e) => {
        e.target.style.backgroundColor = currentColor;
    }
    pixels[i].ontouchmove = (e) => {
        e.target.style.backgroundColor = currentColor;
    }

    pixels[i].ontouchend = (e) => {
        e.target.style.backgroundColor = currentColor;
    }

    pixels[i].ondragover = (e) => {
        e.target.style.backgroundColor = currentColor;
    }
    pixels[i].onclick = (e) => {
        e.target.style.backgroundColor = currentColor;
    }
}

colorPicker.onchange = (e) => {
    const { value } = e.target;
    currentColor = value;
}

clear.onclick = () => {
    fromLst();
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].ontouchstart = (e) => {
            e.target.style.backgroundColor = currentColor;
        }
        pixels[i].ontouchmove = (e) => {
            e.target.style.backgroundColor = currentColor;
        }
        pixels[i].ontouchend = (e) => {
            e.target.style.backgroundColor = currentColor;
        }
        pixels[i].ondragover = (e) => {
            e.target.style.backgroundColor = currentColor;
        }
        pixels[i].onclick = (e) => {
            e.target.style.backgroundColor = currentColor;
        }
    }
}


hidden.style.display = 'block';
colorPicker.value = currentColor;
lsp?.data?.length
    && localStorage.setItem('pixeldata', JSON.stringify({ data: [...pixels] }));

save.onclick = () => {
    print()
    
}

onbeforeprint = () => {
    nav.classList.add('d-none')
}
onafterprint = () => {
    nav.classList.remove('d-none')
}

onresize = () => {
    const aa = window.innerWidth < 400 ? 50 : 0
    containment.scroll({ left: (window.innerWidth / 10) + aa })
}

const aa = window.innerWidth < 400 ? 50 : 0
containment.scroll({ left: (window.innerWidth / 10) + aa })