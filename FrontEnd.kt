import kotlinx.browser.*
import org.w3c.dom.*


var vezes = 0;

@JsName("click")
fun click() {
   var regiao1 = document.getElementById("regiao1") as HTMLDivElement
   var nome = document.getElementById("nome") as HTMLInputElement
   regiao1.innerHTML += "<br> O ${nome.value} clicou o botão ${vezes++} vezes"

}

@JsName("limpa")
fun limpa() {
   var regiao1 = document.getElementById("regiao1") as HTMLDivElement
   regiao1.innerHTML = ""
}

fun main() {
   println("ola para todos\nbom dia")

   var regiao1 = document.getElementById("regiao1") as HTMLDivElement
   regiao1.innerHTML += "<br>Novo texto inserido pelo programa Kotlin"
}
