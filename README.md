# **Vitaliant - Baterias Renováveis**

Bem-vindo ao repositório do projeto **Vitaliant**, uma aplicação que promove soluções inovadoras em baterias e energias renováveis. Este projeto foi desenvolvido com React e utiliza componentes reutilizáveis para criar uma interface moderna e responsiva.

---

## **Descrição do Projeto**

O objetivo do projeto é apresentar informações sobre a Vitaliant, seus serviços, desafios enfrentados no setor de energias renováveis e as soluções oferecidas. A aplicação inclui:
- Um cabeçalho com navegação.
- Seções detalhadas sobre a empresa, seus valores e serviços.
- Um componente de **accordion** para exibir informações detalhadas.
- Um componente de **cards** para destacar serviços.
- Botões interativos para alternar entre conteúdos.

---

## **Tecnologias Utilizadas**

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Bootstrap**: Framework CSS para estilização e responsividade.
- **CSS Modules**: Para estilização modular e escopo local.
- **HTML5** e **CSS3**: Para estrutura e design.
- **JavaScript (ES6+)**: Para lógica e interatividade.

---

## **Estrutura do Projeto**

src/
├── assets/                # Imagens utilizadas no projeto
├── components/            # Componentes reutilizáveis
│   ├── accordion.jsx          # Componente de accordion
│   ├── button.jsx             # Componente de botão reutilizável
│   ├── card.jsx               # Componente de cards
│   ├── footer.jsx             # Rodapé do site
│   ├── header.jsx             # Cabeçalho com navegação
│   ├── section.jsx            # Seção principal com conteúdo
│   ├── card.module.css        # Estilos para os cards
│   ├── footer.module.css      # Estilos para o rodapé
│   ├── header.module.css      # Estilos para o cabeçalho
│   ├── section.module.css     # Estilos para a seção principal
├── App.jsx                # Componente principal da aplicação
└── index.js               # Ponto de entrada da aplicação


---

## **Como Executar o Projeto**

### **Pré-requisitos**
- Node.js instalado na máquina.
- Gerenciador de pacotes `npm` ou `yarn`.

### **Passos para Rodar**
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/vitaliant.git
   cd vitaliant
  
2.Instale as dependências:
    npm install

3.Inicie o servidor de desenvolvimento:
    npm start

4.Abra o navegador e acesse:
    http://localhost:3000
---
## ✨ Funcionalidades

### 1. Cabeçalho com Navegação
- Navegação responsiva com links para diferentes seções da página.
- Botão de menu interativo para dispositivos móveis.

### 2. Seção Principal
- Apresentação da empresa com imagens e texto.
- Lista de valores, missão e visão.

### 3. Accordion
- Exibe informações detalhadas sobre materiais utilizados e soluções oferecidas.
- Totalmente colapsável e responsivo.

### 4. Cards
- Destaque para serviços oferecidos pela empresa.
- Estilização moderna e responsiva.

### 5. Botões Interativos
- Alternam entre conteúdos adicionais, como serviços e materiais utilizados.

## 🎨 Estilização

O projeto utiliza **CSS Modules** para garantir que os estilos sejam escopados a cada componente, evitando conflitos.  
Além disso, o **Bootstrap** é usado para garantir responsividade e design consistente.

## 🖼️ Imagens

As imagens utilizadas no projeto estão localizadas na pasta `assets`.  
Certifique-se de que os arquivos estão no local correto para evitar erros de carregamento.

---
## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja ajudar a melhorar este projeto, siga os passos abaixo:

1. Fork este repositório.
2. Crie uma branch com sua feature ou correção:
   ```bash
   git checkout -b minha-contribuicao
3.Faça suas alterações e commit:
  git commit -m "Adiciona nova funcionalidade ou correção"
4.Envie a branch para o seu repositório:
  git push origin minha-contribuicao
5.Abra um Pull Request explicando suas mudanças.
