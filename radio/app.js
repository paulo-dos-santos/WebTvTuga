const audio = document.getElementById('audio');
const sidebar = document.getElementById('sidebar');
const m3uInput = document.getElementById('m3u-input');
const logoTitle = document.querySelector('.logo-title');
const radioStatus = document.getElementById('radio-status');
let hls;

// Chave única para o storage da rádio
const STORAGE_KEY = 'webRadioTuga';

function toggleMenu() { sidebar.classList.toggle('closed'); }

window.onload = () => {
    let salva = localStorage.getItem(STORAGE_KEY);
    
    // Se não houver nada guardado, carrega o que está no ficheiro lista.js
    if (!salva) {
        salva = listaRadiosDefault; 
        localStorage.setItem(STORAGE_KEY, salva);
    }
    
    m3uInput.value = salva;
    parseM3U(salva);
};

// FUNÇÃO PARA RESTAURAR O FICHEIRO ORIGINAL
function restaurarDefault() {
    if (confirm("Isto vai apagar a tua lista personalizada e carregar a lista original do ficheiro lista.js. Desejas continuar?")) {
        // 1. Limpa o storage
        localStorage.removeItem(STORAGE_KEY);
        
        // 2. Recupera a constante original do ficheiro lista.js
        const original = listaRadiosDefault;
        
        // 3. Atualiza a interface e o storage novamente
        m3uInput.value = original;
        localStorage.setItem(STORAGE_KEY, original);
        parseM3U(original);
        
        alert("Lista original restaurada com sucesso!");
        fecharModal();
    }
}

function parseM3U(data) {
    sidebar.innerHTML = "";
    const lines = data.split('\n');
    let currentName = "";
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith("#EXTINF:")) {
            currentName = line.split(',')[1];
        } else if (line.startsWith("http")) {
            const btn = document.createElement('button');
            btn.className = 'channel-btn';
            btn.innerHTML = `📻 ${currentName || "Rádio"}`;
            const streamUrl = line;
            const radioName = currentName;
            btn.onclick = () => {
                playRadio(streamUrl, btn, radioName);
                if (window.innerWidth < 1024) toggleMenu();
            };
            sidebar.appendChild(btn);
            currentName = "";
        }
    });
}

function playRadio(url, btn, name) {
    document.querySelectorAll('.channel-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    logoTitle.innerText = `WebRadioTuga - ${name}`;
    radioStatus.innerText = `A ouvir: ${name}`;

    // Parar reprodução atual antes de trocar
    audio.pause();
    audio.src = "";

    if (Hls.isSupported() && url.includes(".m3u8")) {
        if (hls) hls.destroy();
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(audio);
        hls.on(Hls.Events.MANIFEST_PARSED, () => audio.play());
    } else {
        if (hls) hls.destroy();
        audio.src = url;
        audio.play().catch(e => console.warn("Erro ao reproduzir stream direto:", e));
    }
}

function abrirModal() { document.getElementById('modal').style.display = 'block'; }
function fecharModal() { document.getElementById('modal').style.display = 'none'; }

function guardarLista() { 
    localStorage.setItem(STORAGE_KEY, m3uInput.value); 
    parseM3U(m3uInput.value); 
    fecharModal(); 
    alert("Lista guardada no navegador!");
}