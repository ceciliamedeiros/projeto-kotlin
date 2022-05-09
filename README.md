# Kotin-Ktor-Webapp-FrontEnd-BackEnd
Exemplo de Projeto de Aplicação Web usando Ktor com exemplos em FrontEnd e BackEnd

Os arquivos e pastas deste projeto:

* __servidor.kt__: Código que executa o servidor Ktor e contém as páginas dinâmicas BackEnd
* __FrontEnd.kt__: Exemplo de código que roda no navagador (FrontEnd)
* __static__: Diretório de conteúdo estático.
* __static/FrontEnd.html__: Exemplo de página HTML que carrega um programa em JavaScript.
* __static/FrontEnd.js__: Código de FrontEnd.kt compilador para Javascript


Para compilar o projeto utilize os seguintes comandos:

Compila o servidor / página BackEnd:
```
kotlinc -cp ktor.jar:. servidor.kt
```

Compila o código do FrontEnd:
```
kotlinc-js FrontEnd.kt -output static/FrontEnd.js
```

Executa o servidor Web:
```
kotlin -cp ktor.jar:. ServidorKt
```
Observações: 
1) Provavelmente no windows o ":" deve ser substituido por ";"
2) Importar o arquivo "jar" pode gerar um warning de conflito de versões. Este warning pode ser ignorado.

