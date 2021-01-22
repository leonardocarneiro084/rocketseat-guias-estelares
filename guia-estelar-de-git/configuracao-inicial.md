
# configuração inicial


- é necessário fazer a configuração somente uma vez
- as configurações são mantidas mesmo com depois de atualizações
- você pode mudar as configurações a qualquer momento

## configurando sua identidade

- sempre que fizer uma atualização em um repositório, o git indicará quem fez essa atualização
- é necessário definir seu nome e email, que ficará registrado como autor das modificações
- abra o git bash e digite os comandos:

git config --global user.name "Nome completo entre aspas"
git config --global email email@email.com       (é recomendado usar o mesmo email do github)

- note que seu nome precisa estar entre aspas, e o email não
- essa é uma configuração global que será aplicada a todos os repositórios e atualizações
- mas é possível definir um nome e um email diferente para cada projeto individualmente


### configurando o editor padrão de git

- o editor padrão de git é o VIM, que já está configurado
- no git bash, digite:

vin         inicia o editor VIM
:q          sai do VIM

- configurando o VSCode como editor padrão de git

git config --global core.editor "code -w"

- listar todas as configurações

git config --list

- alterando alguma configuração. exemplo:

git config --global color.ui true

#### git config

- o git config grava as configurações realizadas
- as variáveis podem ser armazenadas em 3 lugares diferentes

/etc/gitconfig : as configurações armazenadas nesta pasta valem para todos os usuários desta máquina. se mais de uma pessoa usar a mesma máquina, essas configurações valerão para todos eles

~/.gitconfig ou ~/.gitconfig/git/config : configurações que servem somente para o seu usuário. no windows, o arquico .gitconfig fica no diretório $home que é o c:\user\$user

config no diretório git (ou seja, .git/config ) : configurações específicas para este repositório

##### comando CAT

- lista o que tem dentro do arquivo

cat ~/.gitconfig


#### lista de comandos

mkdir                   cria uma pasta
git init                cria um repositório
ls                      lista tudo dentro da pasta
ls -a                   lista arquivos e pastas ocultos
cd                      entra na pasta
cat                     lista o que tem dentro do arquivo
git config --list       lista todas as configurações
clear                   limpa a tela


##### ajuda

git help
git help log            (ajuda sobre o log)







