# receita-funcional

Site de receitas construído utilizando Kotlin compilado para JavaScript, juntamente com o framework Ktor utilizado para manipulações no servidor.

-**Disciplina**: Linguagem de Programação Funcional.

- **Docente**: Luis Carlos de Sousa Menezes.
- **Discentes**: Laís Christinny, Maria Cecília, Pedro Afonso e Rhadyja Gabriela.

Para compilar o projeto utilize os seguintes comandos:

Compila o servidor Ktor:

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

1. No Windows o : deve ser substituído por ;
2. Importar o arquivo "jar" pode gerar um warning de conflito de versões. Este warning pode ser ignorado.
