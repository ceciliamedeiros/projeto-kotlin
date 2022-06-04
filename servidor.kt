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
import java.io.*
import kotlin.io.*

class Comentario(val nome:String, val comentario:String)

val comentarios:MutableList<Comentario> = mutableListOf()

fun addComentarios() {
   val txt = comentarios.joinToString(separator="\n") { x ->
       x.nome + ";" + x.comentario 
   }
   File("comentarios.txt").writeText(txt)
}

fun getComentarios() {
  val file = File("dados.txt") 
  
  if (file.exists()) {
   val conteudo = File("dados.txt").readText()
   val dados = conteudo.split("\n").
                   map { linha -> linha.split(";") } . 
                   map { linha -> Comentario(linha[0],linha[1]) }
   comentarios.clear()
   comentarios.addAll(dados)
  }

}

fun main() {
   getComentarios()
   embeddedServer(Netty, port = 7654) {
      routing {
         get("/") {
            call.respondFile(File("static/homepage.html"))
         }
         get("/receitas"){
            call.respondFile(File("static/receitas.html"))
         }
         get("/comentarios"){
            call.respondFile(File("static/comentarios.html"))
         }
         get("/sugestoes"){
            call.respondFile(File("static/sugestoes.html"))
         }
         post("/sugestoesPost") {
            call.respondFile(File("static/obrigada.html"))
         }
         post("/enviarComentarios"){
            val parameters = call.receiveParameters() // se post
            val nome = parameters["nome"] ?: "undefined"
            val comentario = parameters["texto"] ?: "undefined"
            
            comentarios.add(Comentario(nome, comentario))
            addComentarios()
            call.respondFile(File("static/homepage.html"))
         }
         static("/") {
           files("static/")
         }   
      }
   }.start(wait=true)
}
