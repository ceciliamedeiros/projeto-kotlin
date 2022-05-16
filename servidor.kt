import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.features.*
import io.ktor.html.*
import io.ktor.request.*

var vezes = 0

fun geraTextoOla(nome:String, empresa:String) = """
             <HTML>
             <TITLE>Pagina Dinamica</TITLE>
             <BODY>
             boas vindas para ${nome} da ${empresa},<p>
             este é um exemplo de página HTML dinâmica<p>
             Esta página foi acessada ${vezes++} vezes
             </BODY>
             </HTML>
           """.trimIndent()

class Usuario(val nome:String, val telefone:String, val tipo:String)

val usuarios:MutableList<Usuario> = mutableListOf()



fun criaListaUsuarios() : String = usuarios.joinToString(separator="\n")  {u -> 
    "<br>Nome: ${u.nome}, Telefone: ${u.telefone}, Tipo: ${u.tipo}"
}

fun main() {
   println("iniciando servidor...")
   embeddedServer(Netty, port = 7654) {
      routing {
         get("/lista_usuarios") {
            call.respondText("""
            <html>
            <body>
            <CENTER><H1>Lista de Usuarios Cadastrados</H1></CENTER><p>
            ${criaListaUsuarios()}
            </body>
            </html>
            """,ContentType.Text.Html)
         
         }
         post("/cria_novo_usuario") {
            val parameters = call.receiveParameters() // se post
            //val parameters = call.parameters // se get
            
            val nome = parameters["nome_usuario"] ?: "desc"
            val telefone = parameters["telefone_usuario"] ?: "0"
            val tipo = parameters["tipo_usuario"] ?: "aluno"
            usuarios.add(Usuario(nome,telefone,tipo))
            call.respondText("""
            <html>
            <body>
            Usuario Cadastrado na lista do servidor<p>
            Nome: ${nome}<p>
            Telefone: ${telefone}<p>
            Tipo: ${tipo}<p>
            </body>
            </html>
            """,ContentType.Text.Html)
         }
         get("/soma/{x}/{y}") {
            val x = (call.parameters["x"] as String).toInt()
            val y = (call.parameters["y"] as String).toInt()
            call.respondText("${x+y}")
         }
         get("/bom_dia.html") {
            println("recebi um chamado de bom dia")
            call.respondText("""
            <html>
            <body>
            Bom dia, aqui é o servidor <b>HTTP</b>
            </body>
            </html>
            """,ContentType.Text.Html)
         }
         get("/ola/{nome}/{empresa}") {
           val nome = call.parameters["nome"] as String
           val empresa = call.parameters["empresa"] as String
           println("O servidor recebeu uma solicitacao de $nome")
           call.respondText(geraTextoOla(nome, empresa),ContentType.Text.Html)
         }
         static("/") {
           files("static/")
         }   
      }
   }.start(wait=true)
}
