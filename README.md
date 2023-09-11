# API-Curso-Online
## API Rest exercício de módulo

### API Rest de Cadastro de alunos, um CRUD básico onde é possível:
  - Criar um aluno
  - Obter uma lista de alunos cadastrados
  - Obter um aluno pelo seu identificador
  - Excluir um aluno pelo seu identificador
    - É utilizado um middleware para validação de senha de acesso para todos os Endpoints
   
### Configurações iniciais 
- Após clonar o repositório para sua máquina vamos para as configurações iniciais do projeto.

  1- Configurações iniciais de criação do servidor:

    * Criação do servidor:
      - Utilizaremos o comando inicial > `npm init -y`, o "-y" é o comando para responder com "yes" todos os questionários prévios para a inicialização.
    * Instalando pacotes necessários:
      - Instalaremos o Express > `npm install express`, para configuramos nosso servidor.
      - Instalaremos o Nodemon > `npm install -D nodemon`, na instância de desenvolvedor para facilitar os teste no servidor.
 
 #### Utilizamos o Insomnia para fazer o teste da aplicação.
  - Ferramenta que auxilia a criação de teste para aplicação de forma rápida e pártica, combinada com o as configurações do nodemon, tornarão mais fácies a construção e testa da nossa API.
    * Abaixo imagens de alguns teste realizado com a IDE:
   
      
* GET de Aluno pelo identificador    
  
  ![TesteCase2](https://images2.imgbox.com/42/e9/V8bOHcQY_o.png)

* GET de Lista de Alunos

  ![TesteCase2](https://images2.imgbox.com/af/59/YFU0eHBN_o.png)

* POST de Aluno pelo identificador

  ![TesteCase3](https://images2.imgbox.com/bd/7e/4xM5vcvZ_o.png)

* DELETE de Aluno pelo identificador  

  ![TesteCase3](https://images2.imgbox.com/f8/e0/hg8p5reM_o.png)

    
