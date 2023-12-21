# EBAC_Agenda_de_Contatos

https://ebac-agenda-de-contatos-one.vercel.app/

Neste projeto, criei uma mini aplicação para gerenciar uma lista de contatos em uma tabela HTML. Aqui está uma explicação do meu código:

1- Declarei variáveis que fazem referência aos elementos HTML que eu precisaria interagir no futuro. Essas variáveis incluem o botão de adicionar contato, c
ontainers de erro para validação de nome e número, e o container de contatos.

2- Criei duas funções de validação: nameValidation e telValidation. A função nameValidation verifica se o campo de nome está vazio e exibe uma mensagem de erro, 
se necessário. A função telValidation verifica se o campo de número está vazio e se o número corresponde a um padrão específico definido por uma expressão regular.

3- A função addContact é responsável por adicionar um novo contato à lista. Ela extrai os valores do nome e número dos campos de entrada, os adiciona a um array 
chamado contacts, e cria uma nova linha na tabela com essas informações. Também verifico se esta é a primeira entrada na lista (o primeiro contato adicionado) e, 
nesse caso, limpo a tabela padrão.

4- Adicionei um botão "X" para cada contato na tabela, que permite excluí-los individualmente. Quando um botão "X" é clicado, ele chama a função updateContactList, 
que atualiza a tabela de contatos após a exclusão.

5- O evento de clique no botão "Adicionar" (addButton) chama a função de validação de nome e número. Se ambos os campos estiverem preenchidos corretamente, a função 
addContact é chamada para adicionar o contato à lista. Em seguida, limpo os campos de entrada. Se a validação falhar, exibo "fail" no console.

6- A função updateContactList atualiza a tabela de contatos. Se a lista de contatos estiver vazia, chamo a função ifEmpty para mostrar uma linha padrão na tabela, 
indicando que a lista está vazia. Caso contrário, percorro a lista de contatos e crio linhas individuais para cada contato.

7- A função ifEmpty é chamada quando a lista de contatos está vazia. Ela adiciona uma única linha padrão à tabela, indicando que não há contatos na lista.

No geral, meu código cria uma aplicação simples para adicionar, visualizar e excluir contatos em uma tabela HTML, com validação de entrada para garantir que os 
campos de nome e número sejam preenchidos corretamente. Quando a lista de contatos está vazia, uma linha padrão é exibida na tabela.
