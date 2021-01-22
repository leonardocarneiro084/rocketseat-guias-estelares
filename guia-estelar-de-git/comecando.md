
# iniciando um repositório (git init)


- lembre-se que a pasta raiz do git, é a pasta c:\users\$user
- ao iniciar o git bass, digite o comando: ls
- dentro da pasta "documentos", crie uma pasta para seu novo projeto com nome "git-aula"

pwd                     (mostra em qual pasta você está atualmente)
cd documents
mkdir git-aula
cd git-aula
ls                      (lista pastas e arquivos ocultos)
git init                (inicia um repositório vazio)
ls -a

- note que o comando 'ls -a' mostra o diretório oculto '.git'



## o git guarda o histórico do projeto

- listando o conteúdo da pasta oculta '.git'

ls -al .git

- estes são os detalhes do rastreamento do projeto
- é importante você entender que este é o histórico do projeto

cat .git/config         (lê o conteúdo do arquivo 'config' dentro da pasta '.git')


### git log (git log)

- é comando que mostra o histórico de commits do projeto

git log

- a HEAD sempre vai apontar para o ponto na história que estamos no histórico do projeto
- a branch é a linha do tempo principal 
- a branch começa com MASTER ou MAIN

git log --oneline               (traz o histórico de uma forma reduzida)
git log -n 5                    (traz somente os últimos 5 commits)
git log --since=2020-10-01      (traz o log após a data 1 de out/2020, formato da data yyyy/mm/dd)
git log --until=2020-10-01      (traz todos os logs anteriores a essa data)
git log --author=Leonardo       (filtra os logs por autor)
git log --grep="init"           (filtra todos os logs com a palavra "init")


#### criando um arquivo no VIM

- após criar o arquivo, vamos fazer o nosso primeiro commit
- é o primeiro ponto na história
- um sistema de controle de versão vai analisar versões diferentes do projeto
- logo, precisamos de um arquivo para rastrear a versão
- dentro da pasta 'git-aula', digite o comando

vim file.txt                    abre o vim e cria o arquivo
i                               insere um texto dentro do vim
'tecla Escape'                  sai do modo de digitação e volta para o menu de comandos do vim
:wq                             write and quit, gravar e sair
ls

- note que agora temos um arquivo 'file.txt'


##### nosso primeiro commit

- o comando "git add" indica quais arquivos estou inserindo

git add .                           indica que vou inserir todos os arquivos da pasta. o ponto "." indica todos
git commit -m "initial commit"      cria um ponto na história com a descrição "initial commit". 

- todo ponto na história precisa ter uma descrição
- a descrição do commit deve estar entre aspas ""










