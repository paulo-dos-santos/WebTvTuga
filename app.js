const video = document.getElementById('video');
const sidebar = document.getElementById('sidebar');
const m3uInput = document.getElementById('m3u-input');
const logoTitle = document.querySelector('.logo-title');
let hls;

function toggleMenu() { sidebar.classList.toggle('closed'); }

window.onload = () => {
    let salva = localStorage.getItem('webTvTuga_v2');
    if (!salva) {
        salva = listaCompletaDefault; // Vem do lista.js
        localStorage.setItem('webTvTuga_v2', salva);
    }
    m3uInput.value = salva;
    parseM3U(salva);
};

function parseM3U(data) {
    sidebar.innerHTML = "";
    const lines = data.split('\n');
    let currentName = "";
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith("#EXTINF:")) {
            currentName = line.split(',')[1];
        } else if (line.startsWith("http") && !line.includes("youtube") && !line.includes("youtu.be")) {
            const btn = document.createElement('button');
            btn.className = 'channel-btn';
            btn.innerHTML = `📺 ${currentName || "Canal"}`;
            const streamUrl = line;
            const channelName = currentName;
            btn.onclick = () => {
                playStream(streamUrl, btn, channelName);
                if (!sidebar.classList.contains('closed')) toggleMenu();
            };
            sidebar.appendChild(btn);
            currentName = "";
        }
    });
}

function playStream(url, btn, name) {
    document.querySelectorAll('.channel-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Atualiza o Título
    logoTitle.innerText = `WebTvTuga - ${name}`;

    if (Hls.isSupported()) {
        if (hls) hls.destroy();
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
    }
}

function abrirModal() { document.getElementById('modal').style.display = 'block'; }
function fecharModal() { document.getElementById('modal').style.display = 'none'; }
function guardarLista() { 
    localStorage.setItem('webTvTuga_v2', m3uInput.value); 
    parseM3U(m3uInput.value); 
    fecharModal(); 
}

document.getElementById('pipButton').onclick = () => video.requestPictureInPicture();