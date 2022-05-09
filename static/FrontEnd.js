if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'FrontEnd'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'FrontEnd'.");
}var FrontEnd = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var vezes;
  function click() {
    var tmp$, tmp$_0, tmp$_1;
    var regiao1 = Kotlin.isType(tmp$ = document.getElementById('regiao1'), HTMLDivElement) ? tmp$ : throwCCE();
    var nome = Kotlin.isType(tmp$_0 = document.getElementById('nome'), HTMLInputElement) ? tmp$_0 : throwCCE();
    regiao1.innerHTML = regiao1.innerHTML + ('<br> O ' + nome.value + ' clicou o bot\xE3o ' + (tmp$_1 = vezes, vezes = tmp$_1 + 1 | 0, tmp$_1) + ' vezes');
  }
  function limpa() {
    var tmp$;
    var regiao1 = Kotlin.isType(tmp$ = document.getElementById('regiao1'), HTMLDivElement) ? tmp$ : throwCCE();
    regiao1.innerHTML = '';
  }
  function main() {
    var tmp$;
    println('ola para todos\nbom dia');
    var regiao1 = Kotlin.isType(tmp$ = document.getElementById('regiao1'), HTMLDivElement) ? tmp$ : throwCCE();
    regiao1.innerHTML = regiao1.innerHTML + '<br>Novo texto inserido pelo programa Kotlin';
  }
  Object.defineProperty(_, 'vezes', {
    get: function () {
      return vezes;
    },
    set: function (value) {
      vezes = value;
    }
  });
  _.click = click;
  _.limpa = limpa;
  _.main = main;
  vezes = 0;
  main();
  Kotlin.defineModule('FrontEnd', _);
  return _;
}(typeof FrontEnd === 'undefined' ? {} : FrontEnd, kotlin);
