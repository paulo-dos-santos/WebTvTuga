# 📺 WebTvTuga

Uma aplicação Web leve e moderna para assistir a canais de televisão portugueses e internacionais via streaming (HLS), com foco na simplicidade e na experiência de utilização em dispositivos móveis.


🚀 **Acede aqui:** [https://paulo-dos-santos.github.io/WebTvTuga/](https://paulo-dos-santos.github.io/WebTvTuga/)

---

## ✨ Funcionalidades
* **Menu Lateral Inteligente**: Lista de canais organizada que se abre ao iniciar e oculta-se automaticamente ao escolher um canal (ideal para poupar espaço em telemóveis).
* **Player Responsivo**: Otimizado para PC, Tablet e Smartphone.
* **Gestão de Canais**: Edita e guarda a tua própria lista M3U diretamente na app (armazenada no teu browser).
* **Picture-in-Picture (PiP)**: Assiste em janela flutuante enquanto fazes outras tarefas.
* **Branding Dinâmico**: O título da app indica sempre o canal que estás a ver: `WebTvTuga - Canal`.

## ⚠️ Nota sobre a Reprodução (Importante)

Se reparares que alguns canais (como a RTP) não carregam na versão alojada no GitHub Pages, isto deve-se a restrições de segurança de origem (**CORS**) impostas por alguns emissores ou pelo próprio alojamento gratuito do GitHub.

Se um canal falhar no link acima, tens duas alternativas para garantir o funcionamento total:
1. **Execução Local**: Descarrega este repositório (Download ZIP) e abre o ficheiro `index.html` diretamente no teu navegador Chrome/Edge.
2. **Servidor Próprio**: Aloja estes ficheiros num domínio ou servidor pessoal, onde as políticas de segurança costumam ser mais flexíveis do que no GitHub.

## 🆘 Ajuda e Listas de Canais

Os links de streaming de TV mudam frequentemente. Se os canais pararem de funcionar, deves procurar listas atualizadas. 

Para manteres a tua lista sempre atualizada, recomendamos o uso das fontes do projeto:
👉 **[LITUATUI / M3UPT](https://github.com/LITUATUI/M3UPT)**

## 🛠️ Estrutura
* `index.html`: Estrutura principal.
* `style.css`: Design responsivo.
* `app.js`: Inteligência da aplicação.
* `lista.js`: Base de canais padrão.

---
*Nota: Esta aplicação é apenas um reprodutor de listas M3U. O utilizador é responsável pela origem das listas que utiliza.*
