# 📺 WebTvTuga

Uma aplicação Web leve e moderna para assistir a canais de televisão portugueses e internacionais via streaming (HLS), com foco na simplicidade e na experiência de utilização em dispositivos móveis.

## ✨ Funcionalidades

* **Menu Lateral Inteligente**: Lista de canais organizada que se abre ao iniciar e oculta-se automaticamente ao escolher um canal (ideal para poupar espaço em telemóveis).
* **Player Responsivo**: Otimizado para PC, Tablet e Smartphone.
* **Gestão de Canais**: Edita e guarda a tua própria lista M3U diretamente na app (armazenada no teu browser).
* **Picture-in-Picture (PiP)**: Assiste em janela flutuante enquanto fazes outras tarefas.
* **Branding Dinâmico**: O título da app indica sempre o canal que estás a ver: `WebTvTuga - Canal`.

## 🚀 Como utilizar

1. **Online**: Acede através do link do teu GitHub Pages.
2. **Localmente**: Abre o ficheiro `index.html` em qualquer navegador.

## 🆘 Ajuda e Listas de Canais

Os links de streaming de TV mudam frequentemente. Se os canais pararem de funcionar, deves procurar listas atualizadas. 

A fonte recomendada para canais portugueses é o repositório:
👉 **[LITUATUI / M3UPT](https://github.com/LITUATUI/M3UPT)**

**Como atualizar na App:**
1. Vai ao repositório acima e copia o conteúdo da lista `.m3u8`.
2. Na WebTvTuga, clica no botão **⚙️ Config**.
3. Cola o novo conteúdo e clica em **Guardar**.

## 🛠️ Estrutura do Projeto

* `index.html`: Estrutura principal.
* `style.css`: Design e responsividade.
* `app.js`: Lógica do player e interface.
* `lista.js`: Canais predefinidos.

---
*Nota: Esta aplicação é apenas um reprodutor de listas M3U. O utilizador é responsável pela origem das listas que utiliza.*