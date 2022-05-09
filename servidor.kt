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


fun main() {
   println("iniciando servidor...")
   embeddedServer(Netty, port = 7654) {
      routing {
         get("/ola/{nome}/{empresa}") {
           val nome = call.parameters["nome"] as String
           val empresa = call.parameters["empresa"] as String
           println("O servidor recebeu uma solicitacao de $nome")
           call.respondText(geraTextoOla(nome, empresa),ContentType.Text.Html)
         }
         static("/estatico/") {
           files("static/")
         }   
      }
   }.start(wait=true)
}
