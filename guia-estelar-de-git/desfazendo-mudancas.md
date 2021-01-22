
# desfazendo modificações realizadas no arquivo local 'working directory'

- após fazer o commit, temos o arquivo no repositório e uma cópia no diretório local
- supondo que você está trabalhando no diretório local, fez uma alteração no arquivo e se arrependeu
- o arquivo local está diferente do que está armazenado no repositório
- você quer desfazer essa alteração
- execute o comando git status

vim 3-repository_local.md               modifique o arquivo
git status

- o git reconheceu que o arquivo foi modificado
- se você ler atentamente as instruções da 'stage area' verá que há instruções para restaurar o arquivo
- para descartar modificações do diretório local execute 'git restore <file>'

git restore <arquivo>


## removendo um arquivo do stage area

- como desfazer uma alteração que colocamos no stage area?

git restore --staged <arquivo>              retira o arquivo da stage area
git reset HEAD <arquivo>
git restore --staged .                      retira tudo que está na stage area
git reset HEAD .

### corrigindono último commit

- note que podemos corrigir a descrição (alterar a descrição)
- e fazer alterações nos arquivos do último commit
- adicionar, remover, modificar arquivos

- supondo que eu queira corrigir o último commit
- execute o comando git log

git log

- note a descrição do último commit
- o que vamos corrigir é esta descrição

git commit --amend -m "descrição"


#### recuperando arquivos de commits

- recupera somente um arquivo de um commit. o comando git revert recupera todos os arquivos do commit
- vamos supor que você quer recuperar (trazer para o diretório local) um arquivo que está em um commit
- pode ser em qualquer um dos commits que você tem
- execute o comando 'git log' para ver a lista de commits
- copie as primeiras letras do hash do commit que contém o arquivo que você quer recuperar
- execute o comando

git checkout a9e1bc39a0 -- <arquivo.md>

- o arquivo será copiado do commit para sua pasta local

exemplo:
- vamos supor que você começou um projeto e fez um commit de um arquivo file1.txt no início do projeto
- depois fez várias alterações nesses arquivos, fez vários commits com as alterações
- depois se arrependeu e quer voltar para alguma das versões anteriores
- você pode visitar os commits anteriores e baixar qualquer um dos arquivos


##### removendo arquivos não rastreados


- removendo um ou mais arquivos que não estão sendo rastreados
- lembrando que arquivos não rastreados são arquivos no diretório local que não estão no repositório
- crie 2 arquivos

touch trash1.txt trash2.txt
git clean -n                        mostra quais arquivos não são rastreados
git clean -f                        remove os arquivos não rastreados


###### revertendo um commit

- revertendo múltiplos arquivos
- nós vamos pegar um ponto na história, resgatar todos os arquivos e criar um novo ponto na história
- é o comando git revert
- para isso, nossa working tree deve estar limpa
- execute o comando 'git status' e a working tree deve estar limpa, sem nada

- qual commit vamos recuperar?
- execute o comando git log
- o HEAD está apontando para o commit mais recente. a partir do mais recente, conte -1, -2, -3 e assim por diante
- vamos recuperar o HEAD -5

git revert HEAD~5               note que o git vai abrir o editor de mensagem do commit
git revert hash                 reverte o commit com o hash apontado


ATENÇÃO!
- serão executadas 2 ações. os arquivos serão recuperados para a pasta local, e será feito um novo commit
- neste momento, você pode editar a mensagem de descrição do novo commit

git log --oneline                exibe o histórico de commits de uma forma mais resumida



