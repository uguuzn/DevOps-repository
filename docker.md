Chamado 3 — Empacotar o backend em um container

Será criado um Dockerfile para o backend em Spring Boot utilizando uma imagem com Maven e Java para realizar o processo de build da aplicação. Primeiro, serão copiados o pom.xml e os arquivos do projeto para o container e será executado o comando mvn clean package para gerar o arquivo .jar. Em seguida, será utilizada uma imagem Java para executar o .jar gerado, expondo a porta utilizada pelo Spring Boot. Dessa forma, o backend poderá ser executado de forma independente dentro de um container Docker.


Chamado 4 — Empacotar o frontend em um container

Será criado um Dockerfile para o frontend utilizando Node.js para instalar as dependências e realizar o build da aplicação com Vite através do comando npm run build. Após o build, os arquivos gerados na pasta dist serão copiados para uma imagem com Nginx. O Nginx será responsável por servir os arquivos estáticos do frontend através da porta 80. Dessa forma, o frontend poderá ser executado e acessado através de um container Docker.