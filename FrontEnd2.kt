import kotlinx.browser.*
import org.w3c.dom.*


val regiao1 = document.getElementById("regiao1") as HTMLDivElement
val regiao2 = document.getElementById("regiao2") as HTMLDivElement

fun imprime(aviso:String) {
   val avisos = document.getElementsByClassName("aviso")
   for (elm in avisos.asList()) {
      elm.innerHTML += aviso
   }
}

fun main() {
   println("ola para todos\nbom dia")
   if (window.confirm("você deseja ver essa página?")) {
   } else {
      window.open("http://www.google.com/","_self")
   }
   var vezes = 0;
   var timer = 0
   
   
   
   val vezesPagina = (window.localStorage.getItem("acessos")?:"0").toInt()
   imprime("<br>voce ja acessou esta página ${vezesPagina} vezes<br>")
   window.localStorage.setItem("acessos", (vezesPagina+1).toString())
   
   timer = window.setInterval( {
      //window.resizeTo(vezes*100+200,300)

      regiao2.innerHTML += ("<br>esta função é chamada a cada segundo.\nJá executei ${vezes++} vezes")
      if (vezes>10) {
         regiao2.innerHTML = "<br>já executei muitas vezes"
         window.clearInterval(timer)
      }
   }, 1000)
   
   regiao1.innerHTML +="<br>Este código HTML foi inserido pelo programa em <B>kotlin</B>\n"
   
   regiao1.onclick = {
      println("Região 1 clicada")
   }
   
   
   
}



