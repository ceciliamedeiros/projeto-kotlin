if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'FrontEnd'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'FrontEnd'.");
}
var FrontEnd = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  function Ingrediente(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  Ingrediente.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ingrediente',
    interfaces: []
  };
  function ingredientesMacarrao() {
    return listOf([new Ingrediente('Presunto', 5.0), new Ingrediente('Bacon', 11.0), new Ingrediente('Creme de Leite', 3.5), new Ingrediente('Macarrao', 4.0)]);
  }
  function ingredientesBolo() {
    return listOf([new Ingrediente('Chocolate em po', 8.0), new Ingrediente('Manteiga', 4.0), new Ingrediente('Farinha de Trigo', 3.5), new Ingrediente('A\xE7ucar', 4.0), new Ingrediente('Leite', 10.0)]);
  }
  function ingredientesDrink() {
    return listOf([new Ingrediente('Gin', 90.0), new Ingrediente('Suco de Tangerina', 11.0), new Ingrediente('Cardamomo', 4.5), new Ingrediente('Alecrim', 4.0)]);
  }
  function precoDrink() {
    var x = calculaIngredientes(ingredientesDrink()).toString();
    window.alert('Voc\xEA ir\xE1 gastar ' + x + ' reais nessa receita');
  }
  function precoMacarrao() {
    var x = calculaIngredientes(ingredientesMacarrao()).toString();
    window.alert('Voc\xEA ir\xE1 gastar ' + x + ' reais nessa receita');
  }
  function precoBolo() {
    var x = calculaIngredientes(ingredientesBolo()).toString();
    window.alert('Voc\xEA ir\xE1 gastar ' + x + ' reais nessa receita');
  }
  function calculaIngredientes(l) {
    if (l.size === 0) {
      return 0.0;
    } else {
      return l.get_za3lpa$(0).preco + calculaIngredientes(drop(l, 1));
    }
  }
  function main() {
  }
  _.Ingrediente = Ingrediente;
  _.ingredientesMacarrao = ingredientesMacarrao;
  _.ingredientesBolo = ingredientesBolo;
  _.ingredientesDrink = ingredientesDrink;
  _.precoDrink = precoDrink;
  _.precoMacarrao = precoMacarrao;
  _.precoBolo = precoBolo;
  _.calculaIngredientes_t5pr6l$ = calculaIngredientes;
  _.main = main;
  main();
  Kotlin.defineModule('FrontEnd', _);
  return _;
}(typeof FrontEnd === 'undefined' ? {} : FrontEnd, kotlin);
