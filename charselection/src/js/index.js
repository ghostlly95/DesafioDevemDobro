// Seleciona todos os elementos com a classe 'personagem'
const personagens = document.querySelectorAll('.personagem');

// Seleciona o elemento que exibirá o nome do personagem
const nomePersonagem = document.getElementById('nome-personagem');

// Seleciona o elemento que exibirá a descrição do personagem
const descricaoPersonagem = document.getElementById('descricao-personagem');

// Seleciona o elemento que exibirá a imagem do personagem grande
const imagemPersonagemGrande = document.querySelector('.personagem-selecionado .personagem-grande');

// Seleciona a imagem de interrogação
const imagemInterrogacao = './src/imagens/interrogation.png';

// Adiciona o evento de mouseover a cada personagem
personagens.forEach(personagem => {
  personagem.addEventListener('mouseover', () => {
    // Obtém o nome e a descrição do personagem
    const nome = personagem.querySelector('img').getAttribute('data-nome');
    const descricao = personagem.querySelector('img').getAttribute('data-descricao');

    // Verifica se o personagem possui nome e descrição
    if (nome && descricao) {
      // Define o nome e a descrição do personagem selecionado
      nomePersonagem.textContent = nome;
      descricaoPersonagem.textContent = descricao;
    } else {
      // Limpa o nome e a descrição
      nomePersonagem.textContent = '';
      descricaoPersonagem.textContent = '';
    }

    // Obtém a URL da imagem do personagem
    const imagemURL = personagem.querySelector('img').src;

    // Define a imagem do personagem selecionado
    imagemPersonagemGrande.src = imagemURL;

    // Adiciona o sombreamento azul ao personagem selecionado
    personagem.classList.add('selecionado');
  });

  personagem.addEventListener('mouseout', () => {
    // Limpa o nome, a descrição e a imagem do personagem selecionado
    nomePersonagem.textContent = '';
    descricaoPersonagem.textContent = '';
    imagemPersonagemGrande.src = '';

    // Remove o sombreamento azul do personagem selecionado
    personagem.classList.remove('selecionado');
  });
});

// Adiciona o evento de mouseout para exibir a imagem de interrogação quando o cursor não estiver sobre nenhuma imagem
document.addEventListener('mouseout', (event) => {
  const isPersonagem = Array.from(personagens).some(personagem => personagem.contains(event.target));
  if (!isPersonagem) {
    nomePersonagem.textContent = '';
    descricaoPersonagem.textContent = '';
    imagemPersonagemGrande.src = imagemInterrogacao;
  }
});

