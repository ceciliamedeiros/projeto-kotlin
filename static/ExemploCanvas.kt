import kotlinx.browser.*
import org.w3c.dom.*

val areaDesenho = document.getElementById("AreaDesenho") as HTMLCanvasElement

fun main() {
   println("Front-End Executado")
   val ctx = areaDesenho.getContext("2d") as CanvasRenderingContext2D
   ctx.lineWidth = 15.0
   ctx.strokeStyle = "green"
   ctx.strokeRect(75.0, 140.0, 150.0, 110.0)
   ctx.fillStyle = "blue"
   ctx.lineWidth = 1.0
   ctx.strokeStyle = "blue"

   ctx.ellipse(240.0, 180.0, 200.0, 100.0, 1.0,  0.0, 6.30)
   ctx.stroke()

   areaDesenho.onmouseenter = {
      println("O mouse está na area de desenho")
   }
   areaDesenho.onmouseleave = {
      println("O mouse saiu da area de desenho")
   }
   areaDesenho.onmousemove = { ev ->
      if (ev.buttons.toInt()==1) {
         val x = ev.offsetX;
         val y = ev.offsetY;
         ctx.fillRect(x-5.0,y-5.0,10.0,10.0)
         println("O mouse moveu (${ev.x}, ${ev.y}) botoes ${ev.buttons}")
      }
   }
   document.onkeypress = {
      println("teclado pressionado")
   }

}


