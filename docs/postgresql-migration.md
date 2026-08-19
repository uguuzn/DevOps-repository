# Migração do H2 para PostgreSQL

## Objetivo

O sistema atualmente utiliza o banco H2 em arquivo local, adequado para desenvolvimento. Para utilização em produção, o banco deverá ser substituído pelo PostgreSQL.

## 1. Configuração da conexão

A aplicação deverá utilizar o driver JDBC do PostgreSQL e receber as informações de conexão do ambiente:

- Host do PostgreSQL
- Porta do PostgreSQL
- Nome do banco de dados
- Usuário
- Senha

A conexão deverá utilizar uma URL no formato:

`jdbc:postgresql://<host>:<porta>/<banco>`

As credenciais devem ser configuradas de acordo com o ambiente de execução e não devem ser expostas diretamente no código em ambientes de produção.

## 2. Migração dos dados

Antes da troca do banco, deve ser realizado um backup dos dados existentes no H2.

O processo de migração deverá:

1. Realizar o backup do banco H2.
2. Criar o banco PostgreSQL.
3. Criar as estruturas necessárias para a aplicação.
4. Migrar os dados existentes do H2 para o PostgreSQL.
5. Validar se os registros foram migrados corretamente.
6. Executar a aplicação utilizando o PostgreSQL.
7. Confirmar o funcionamento das operações de leitura e escrita.

Após a validação, o H2 poderá ser descontinuado no ambiente de produção.

## 3. Alterações no application.properties

Atualmente, a aplicação utiliza:

`spring.datasource.url=jdbc:h2:file:./data/nexodb`

`spring.datasource.driver-class-name=org.h2.Driver`

`spring.datasource.username=sa`

`spring.datasource.password=`

Para PostgreSQL, a configuração deverá seguir este formato:

`spring.datasource.url=jdbc:postgresql://<host>:<porta>/<banco>`

`spring.datasource.driver-class-name=org.postgresql.Driver`

`spring.datasource.username=<usuario>`

`spring.datasource.password=<senha>`

As propriedades específicas do H2 também deverão ser removidas:

- `spring.h2.console.enabled`
- `spring.h2.console.path`

A dependência do driver PostgreSQL também deverá ser adicionada ao `pom.xml`.

## 4. Validação

Após a configuração, a aplicação deverá ser iniciada e testada para verificar:

- conexão com o PostgreSQL;
- criação e atualização das tabelas;
- consulta dos usuários;
- criação de novos registros;
- atualização de registros;
- persistência dos dados após reiniciar a aplicação.

## Resultado esperado

Ao final da migração, o PostgreSQL será utilizado como banco de dados da aplicação em produção, substituindo o H2 em arquivo local.