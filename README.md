# Sobre o Projeto
Sistema feito para funcionários &amp;&amp; empresas. Este irá facilitar a adesão do colaborador ao transporte fretado de sua empresa, com a vantagem de ser prático e favorecer a autonomia de todos os envolvidos.


## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDB` | Banco de dado não relacional orientado a documentos|
| `Mongo Compass/Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|
 
 ## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro. |
| `DELETE` | Remove um registro do sistema. |

### Como executar
* Clone o repositório
* Instale as dependências com ```npm install```
* Crie um arquivo ```.env``` (para conexão do banco de dados).
* Copie o conteúdo de ```.env.example``` para o arquivo ```.env``` (aqui ficarão as credenciais de seu database).
* Inicie o servidor com ```npm start```

 
 ### EndPoints 
 Método GET
- [x]  **"/buses/list"** Deverá retornar todas as linhas de ônibus cadastradas no banco de dados.
- [x]  **"/neighborhoods/list"** Deverá retornar todos os bairros cadastrados.
- [x]  **"/neighborhoods/neighborhood"** Deverá retornar a linha de ônibus que cobre o bairro requisitado pelo usuário.
<br>

Método POST
- [x]  "**/buses/create**" Deverá adicionar um novo transporte à rota.
- [x]  **"/neighborhoods/create"** Deverá cadastrar um novo bairro no banco de dados.
 <br>

Método DELETE
- [x]  **"/buses/:id"** Deverá deletar um transporte por id específico e retornar mensagem de sucesso na execução.
- [x]  **"/neighborhoods/:id"** Deverá deletar um bairro por id específico e retornar mensagem de sucesso na execução.
<br>

Método PUT
- [x]  **"/buses/:id"** Deverá alterar informação de um transporte por id específico e retornar a alteração.
- [x]  **"/neighborhoods/:id"** Deverá alterar informação de um bairro por id específico e retornar a alteração.
<br>

