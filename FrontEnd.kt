import kotlinx.browser.*
import org.w3c.dom.*
import org.w3c.dom.asList
import kotlinx.browser.document
import org.w3c.dom.HTMLDivElement
import kotlinx.browser.window


class Ingrediente(val nome: String, val preco: Double)

fun ingredientesMacarrao(): List<Ingrediente>{
    return listOf(Ingrediente("Presunto", 5.00),
        Ingrediente("Bacon", 11.00),
        Ingrediente("Creme de Leite", 3.50),
        Ingrediente("Macarrao", 4.00)
    )
}

fun ingredientesBolo(): List<Ingrediente>{
   return listOf(Ingrediente("Chocolate em po", 8.00),
       Ingrediente("Manteiga", 4.00),
       Ingrediente("Farinha de Trigo", 3.50),
       Ingrediente("Açucar", 4.00),
       Ingrediente("Leite", 10.00)
   )
}

fun ingredientesDrink(): List<Ingrediente>{
   return listOf(Ingrediente("Gin", 90.00),
       Ingrediente("Suco de Tangerina", 11.00),
       Ingrediente("Cardamomo", 4.50),
       Ingrediente("Alecrim", 4.00),
   )
}

@JsName("precoDrink")
fun precoDrink(){
   val x = calculaIngredientes(ingredientesDrink()).toString()
   window.alert("Você irá gastar " + x + " reais nessa receita")
}

@JsName("precoMacarrao")
fun precoMacarrao(){
   val x = calculaIngredientes(ingredientesMacarrao()).toString()
   window.alert("Você irá gastar " + x + " reais nessa receita")
}

@JsName("precoBolo")
fun precoBolo(){
   val x = calculaIngredientes(ingredientesBolo()).toString()
   window.alert("Você irá gastar " + x + " reais nessa receita")
}

fun calculaIngredientes(l:List<Ingrediente>): Double{
   if (l.size == 0){
      return 0.00
   } else {
      return l[0].preco + calculaIngredientes(l.drop(1))
   } 
}

fun main() {
     
}
