

# estágios de arquivos

- existem 3 estados dos nossos arquivos dentro do fluxo de trabalho do git

* git init / git clone : vai iniciar um repositório local no nosso projeto
* etapa de modificação de arquivos. os nossos arquivos ficam no "working directory"
* git add : vai colocar os nossos arquivos no "stage area", preparando para fazer o "commit". o commit vai colocar os arquivos no banco de dados local chamado repositório
* git commit : colocar os arquivos no repositório local

- estágios:
1. modified (working directory)
2. staged (stage area ou Index)
3. commited (local repository)


modificação "working directory => git add "stage area" => git commit "coloca no repositório, cria um ponto na história do projeto"


## git workflow (fluxo de trabalho)


### hash SHA-1

- é uma identificação de cada commit
- pode aparecer de forma reduzida

#### head

- é um ponteiro
- aponta que ponto na história nós estamos
- se estivermos na linha do tempo principal chamada MASTER ou MAIN, é para onde o HEAD vai apontar

- inicie o git bash
- entre na pasta documents/git-aula/
- verifique o log do git com o comando

git log

- note que só temos um commit, do arquivo file.txt, "initial commit"
- vamos criar um novo commit, para ver o HEAD apontar para esse novo commit
- primeiro precisamos criar um novo arquivo

touch file2.txt                     cria um arquivo com nome "file2.txt" vazio
git add file2.txt                   coloca o arquivo na "stage area"
commit -m "add file2.txt"           faz o commit do arquivo com a descrição
clear                               limpa a tela
git log                             mostra o log do git

- verifique que agora o HEAD aponta para o último commit que foi realizado
- lembra da pasta oculta ".git" que grava o histórico do git?
- vamos ver o que tem dentro dela agora

cat .git/head                       lista o que tem dentro do arquivo .git/head

- podemos ver que o arquivo head armazena o caminho para outro arquivo
- vamos ver o que tem neste outro caminho

cat .git/refs/heads/master          lista o que tem dentro do arquivo .git/refs/heads/master

- note que este arquivo armazena o HASH do commit para onde o HEAD está apontado
- o HEAD pode se mexer e apontar para outro commit
- quando fizer outro commit, o conteúdo do arquivo .git/refs/heads/master será modificado p/ conter o novo hash


##### exercício de fixação

* crie uma nova pasta git-exercicio
* crie um repositório
* crie 2 arquivos: file1.txt e file2.txt
* primeiro coloque os dois arquivos na 'stage area'
* depois faça o commit dos dois arquivos. não se esqueça que a descrição é inserida no momento do commit
* modifique o arquivo file1.txt
* faça um novo commit do arquivo file1.txt modificado
* veja como o git armazena o histórico de alterações no git log

mkdir git-exercicio                 cria a pasta
cd git-exercicio                    entra na pasta
git init                            cria o repositório
touch file1.txt                     cria o arquivo
touch file2.txt                     cria o arquivo
git add file1.txt                   adiciona o arquivo file1.txt na stage area
git status                          mostra o status, note que o arquivo está na stage area
git commit -m "initial commit"      realiza o commit
git log                             mostra o log. até agora só temos um commit

- agora vamos fazer o commit do file2.txt

git add file2.txt                   coloca o arquivo na stage area
git commit -m "second commit"       realiza o commit
git log                             mostra o log. note que agora temos 2 commits e o HEAD aponta para o mais recente

- agora vamos modificar o arquivo file1.txt e fazer um novo commit

vim file1.txt                       entra no modo de edição do arquivo
i                                   inicia a edição. escreva qualquer coisa
:wq                                 write and quit. grava a alteração e fecha o vim
git status                          note que o git acusa que o arquivo foi modificado
git add file1.txt                   coloca o arquivo na stage area
git commit -m "changed file1"       faz o commit do arquivo modificado
git log                             mostra o log. agora o HEAD aponta para o commit mais recente do arquivo modificado







