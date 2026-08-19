# Rotina de Backup do Banco

## Objetivo

Definir uma rotina diária de backup do banco de dados do sistema de usuários, garantindo uma cópia dos dados para recuperação em caso de falha.

## Frequência

O backup deverá ser realizado **diariamente**, uma vez por dia.

## Horário

A execução está definida para ocorrer todos os dias às **02:00**.

O horário foi escolhido para ocorrer durante um período de menor utilização do sistema.

## Local de armazenamento

Os arquivos de backup deverão ser armazenados no diretório:

`./backups/`

Em um ambiente de produção, esse diretório deverá estar localizado em um armazenamento persistente e separado do ambiente principal do banco de dados.

## Nome dos arquivos

Cada backup deverá ser identificado pela data de sua execução, seguindo o padrão:

`nexo-db-YYYY-MM-DD.sql`

Exemplo:

`nexo-db-2026-08-19.sql`

## Funcionamento teórico

A rotina diária deverá executar um processo de exportação do banco PostgreSQL e gerar um arquivo de backup no diretório definido.

Fluxo:

1. A rotina é acionada diariamente às 02:00.
2. O banco PostgreSQL é acessado.
3. Os dados são exportados para um arquivo de backup.
4. O arquivo é armazenado em `./backups/`.
5. O arquivo recebe a data da execução em seu nome.
6. O resultado da execução deve ser verificado para garantir que o backup foi criado corretamente.

## Configuração definida

| Item | Definição |
|---|---|
| Frequência | Diária |
| Horário | 02:00 |
| Banco | PostgreSQL |
| Local | `./backups/` |
| Formato | `.sql` |
| Identificação | Data no nome do arquivo |

## Observação

Esta configuração representa a rotina de backup definida teoricamente para o sistema. A implementação efetiva da automação poderá ser realizada posteriormente utilizando ferramentas de agendamento e o mecanismo de backup do PostgreSQL.