

# iniciando um novo projeto

- vá até o endereço www.github.com/rocketseat-education
- baixe o projeto nlw-03-discover-main
- grave na pasta /documents
- descompacte o arquivo
- renomeie a pasta nlw-03-discover-main para nlw-03-discover
- abra o git bash
- vá para a pasta do projeto e execute o git status

git status

- note que um repositório ainda não foi criado
- inicie o projeto com o comando 'git init'

git init
git status

- como ainda não fizemos nenhum commit, todos os arquivos não estão sendo rastreados "untracked"
- vamos adicionar todos os arquivos na stage area e fazer um commit inicial

git add .
git commit -m "initial commit"

## adicionando e verificando alterações

- dentro do projeto, abra o seguinte arquivo no VSCode: /src/vies/index.hbs
- faça uma pequena alteração no arquivo, de preferência algo fácil de ser revertido. 
- salve, vá para o git bash e execute o comando git status

git status

- o git vai perceber que o arquivo foi modificado

git diff                                mostra um relatório detalhado sobre o que foi alterado
git diff --color-words                  destaca somente as palavras que foram alteradas

- o que significa esse código?   @@ -30,7 +30,10 @@
- quer dizer que por volta da linha 30, aproximadamente 10 caracteres foram inseridos


### staging e commits com atalho

- após alterar o arquivo, qual é o modo que conhecemos de fazer um novo commit com o arquivo modificado?

git add <arquivo>                       adicionamos o arquivo modificado na stage area
git commit -m <descrição>               realizamos o commit com a descrição

- existe um atalho para fazer as 2 ações ao mesmo tempo

git commit -am "modify index"           adiciona e faz o commit do arquivo modificado

- note que não foi solicitado o nome do arquivo


#### ver modificações em diversos pontos na história

- as vezes pode ser necessário comprar um commit com outro
- é possível fazer isso

git show hash                           copie parte do hash do commit que deseja ver
git show hash --color-words             destaca as modificações realizadas no commit

- no primeiro commit, todos os arquivos foram enviados
- logo, se usarmos o comando no primeiro commit, ele irá mostrar todo o conteúdo de todos os arquivos
- já no segundo commit, temos apenas uma pequena alteração no arquivo index.hbs
- utilizando o comando no segundo commit, ele irá mostrar apenas as modificações realizadas neste commit

git show hash -- src/views/*            exibe todas as alterações dentro da pasta indicada
git show hash -- src/views/index.hbs    exibe somente as alterações realizadas neste arquivo


##### ignorando arquivos e diretórios indesejados


- vá para a pasta git-aula para realizar este exemplo
- é o arquivo .gitingnore
- esse arquivo vai nos ajudar a ignorar alguns arquivos que podem aparecer no nosso projeto que não queremos colocar no nosso repositório

touch .gitignore                        cria o arquivo, pois ele não existe nessa pasta
cat .gitignore                          mostra o que tem dentro do arquivo
vim .gitignore                          abre o modo de edição do arquivo

- dentro do arquivo podemos listar arquivos e pastas que serão ignorados pelo git
- esses arquivos e pastas não serão adicionados no repositório
- os arquivos e pastas devem ser listados dessa forma:

pasta01/                                para ignorar uma pasta     
file1.txt                               para ignorar o arquivo
:wq                                     write and quit
git status                              note que agora o arquivo .gitignore não está sendo rastreado

git add .gitignore                      
git commit -m "add .gitignore"          adiciona o arquivo .gitignore no repositório

git rm -r --cached .                    remove todos os arquivos que estavam sendo rastreados
git add .                               adiciona todos os arquivos no stage area

- mas note que agora já temos o nosso arquivo .gitignore configurado. então os arquivos e pastas serão ignorados

git commit -m "ignoring files"

- agora o commit foi realizado com todos os arquivos, menos o arquivo ignorado



