
# adicionando arquivos no repositório

- neste exercício vamos criar uma nova pasta para este exercício 'git-aula'
- criar 3 arquivos: file1.txt, file2.txt e README.md
- criar o repositório
- enviar todos os arquivos para o repositório

mkdir git-aula                      cria a pasta
cd git-aula                         entra na pasta
touch README.md                     cria o arquivo
ls                                  lista os arquivos da pasta
git init                            primeiro precisamos criar o repositório, depois podemos checar o status
git status                          mostra o status do git. 

- note que temos somente um arquivo que não está sendo rastreado
- isso significa que o arquivo ainda não está no repositório
- vamos colocar um conteúdo no arquivo README.md

vim README.md                       entra no modo de edição do arquivo
i                                   inicia a edição
[ escreva o conteúdo do arquivo ]
[ tecla escape ]                    sai do modo de edição
:wq                                 write and quit. grava e fecha o vim
git add README.md                   coloca o arquivo no stage area
git commit -m "added README.md"     realize o commit

* adicionando vários arquivos na stage area

git add *.md                        adiciona todos os arquivos com extensão .md na stage area
git add .                           adiciona todos os arquivos da pasta atual na stage area


## editando arquivos usando o VIM, mostrando arquivos modificados (git status)

- ATENÇÃO! o git compara arquivos arquivos locais com os arquivos do repositório
- o arquivo modelo é o que está no repositório
- se houver diferença entre eles, o git acusará "modified"
- se os arquivos não estiverem no repositório, não reconhecerá as modificações, pois não há com o que comparar
- arquivos alterados localmente são reconhecidos somente como novos arquivos e são chamados de "não rastreados" (untracked) pois ainda não foram para o repositório
- repetindo: ele só reconhece como modificações se houverem diferenças entre o arquivo local do "working directory" e o arquivo do repositório
- supondo que já existe um arquivo 'file1.txt' e 'README.md' no repositório, execute:

vim file1.txt                       entra no modo de edição
i                                   inicia o modo de edição
:wq                                 write and quit
vim README.md                       entra no modo de edição
i                                   inicia o modo de edição
:wq                                 write and quit
git status                          mostra o status

* note que o git acusa que os arquivos foram modificados
- agora atualize o repositório

git add .                               coloca todos os arquivos na "stage area"
git commit -m "modified all files"      faz um novo commit


### git diff (relatório detalhado mostrando as diferenças entre arquivos locais e do repositório)

- quando estamos trabalhando, é normal remover e adicionar linhas em vários arquivos diferentes
- como verificar as modificações que fizemos?
- o comando git diff vai comparar os arquivos do repositório e os arquivos locais
- vai mostrar as diferenças entre eles
- quais arquivos e quais alterações foram feitas, linha por linha
- o git trabalha observando linhas
- ele vai dizer quais linhas foram removidas, quais linhas foram adicionadas
- quais arquivos foram removidos

- faça o seguinte:
- use o gerenciador de arquivos do windows para remover os arquivos file1.txt e file2.txt através

git status

- note que o git acusa que os arquivos foram removidos
- crie novos arquivos: repository_local.md, stage_area.md, working_directory.md
- edite o README.md e remova algumas linhas

git status

- note que o git acusa os arquivos removidos, arquivos modificados e arquivos 'untracked' (são arquivos locais que ainda não foram para o repositório. o git acusa como arquivos novos ou não rastreados)
- para ter um relatório mais detalhado sobre as modificações realizadas, utilize o git diff

git diff

* note que o comando git status também acusa quando existem diferenças entre os arquivos locais e do repositório
* porém, o comando git diff mostra um relatório detalhado das modificações realizadas

#### git diff --staged (compara arquivos da "stage area" e arquivos do repositório)

- git diff X git diff --staged
- o git diff compara arquivos do repositório e arquivos do diretório local, mostrando as diferenças entre eles
- o git diff --staged compara arquivos do repositório e arquivo da "stage area"
- execute:

git add README.md
git status

- note que o git mostra no relatório da "stage area" que o arquivo README.md foi modificado em relação ao repositório
- o git diff staged mostra modificações somente de arquivos que estão na 'stage area'
- vamos supor que após modificar vários arquivos, você colocou na stage area somente o arquivo readme.md

git add README.md
git status                      mostra o arquivo README.md na stage area
git diff --staged               compara somente os arquivos na 'stage area' com o repositório "commit"
git diff --cached               mesmo comando


##### deletando arquivos do repositório

- neste exercício, os arquivos file1.txt e file2.txt foram removidos usando o gerenciador de arquivos
- com o comando git status podemos ver que os arquivos foram removidos
- vá na lixeira e restaure o arquivo file1.txt
- execute o comando git status novamente

git status

- note que, agora, somente o arquivo file2.txt é apontado como deletado
- execute o comando:

git add file2.txt                   coloca o arquivo removido na "stage area"

* * sim, nós estamos adicionando um arquivo que não existe localmente na "stage area"

git status

- note que na stage area é mostrado "deleted: file2.txt"
- isso quer dizer que ao fazer o commit, o arquivo será deletado no repositório
- se o arquivo README.md estiver na stage area, retire-o da stage area com o comando:

git restore --staged README.md
git commit -m "delete file2.txt"        faz o commit mandando apagar o arquivo file2.txt

- note que primeiro apagamos manualmente o arquivo file2.txt, depois colocamos na stage area com o status "deleted"
- existe um comando que faz essas 2 ações ao mesmo tempo, é o comando git rm arquivo.txt
- vamos executar ele usando o arquivo file1.txt

git rm file1.txt                        remove o arquivo localmente e adiciona no stage area com status "deleted"
git status                              mostra a stage area com a arquivo com status "deleted"
git commit -m "delete file1.txt"        faz o commit mandando apagar o arquivo file1.txt



* não confunda com o comando:
git rm --cached arquivo.txt
* se você já tem um arquivo na stage area, este comando muda o status do arquivo para "deletado"


dúvidas:

git rm arquivo.txt
git rm --cached arquivo.txt
git restore --staged arquivo.txt


###### renomeando e movendo arquivos

- vamos começar executando o comando git status

git status

- coloque todos os arquivos na stage area e realize o commit

git add .
git commit -m "added all files"
git status

- a nossa working tree deve estar limpa agora
- abra o gerenciador de arquivos e renomeie o arquivo working_directory.md para 1-working_directory.md
- execute o comando git status

git status

- note que quando renomeamos um arquivo, é isto que aparece no git:
- o arquivo working_directory.md foi removido
- e o arquivo 1-working_directory.md é um arquivo novo que foi criado
- execute o comando:

git rm working_directory.md         remove o arquivo com o nome antigo da stage area
git add 1-working_directory.md      adiciona o novo arquivo na stage area
git status


- note que o git reconheceu que é o mesmo arquivo, com o mesmo conteúdo, e só foi renomeado
- essas 2 ações podem ser realizadas com somente um comando, o git mv arquivo.md novo_nome.md

git mv 1-working_directory.md 2-working_directory.md
git status

- note que o arquivo 1-working_directory.md foi renomeado para 2-working_directory.md
- e a mudança foi adicionada no stage area

###### movendo arquivos

- vamos criar uma subpasta chamada sub
- mova o arquivo README.md para dentro da pasta usando o comando git mv

git mv README.md sub/README.md
git status

- note que o arquivo foi movido e adicionado na stage area






