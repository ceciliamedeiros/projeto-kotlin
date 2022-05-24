if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'FrontEnd2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'FrontEnd2'.");
}var FrontEnd2 = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var regiao1;
  var regiao2;
  function imprime(aviso) {
    var tmp$;
    var avisos = document.getElementsByClassName('aviso');
    tmp$ = asList(avisos).iterator();
    while (tmp$.hasNext()) {
      var elm = tmp$.next();
      elm.innerHTML = elm.innerHTML + aviso;
    }
  }
  function main$lambda(closure$vezes, closure$timer) {
    return function () {
      var tmp$;
      regiao2.innerHTML = regiao2.innerHTML + ('<br>esta fun\xE7\xE3o \xE9 chamada a cada segundo.' + '\n' + 'J\xE1 executei ' + (tmp$ = closure$vezes.v, closure$vezes.v = tmp$ + 1 | 0, tmp$) + ' vezes');
      if (closure$vezes.v > 10) {
        regiao2.innerHTML = '<br>j\xE1 executei muitas vezes';
        window.clearInterval(closure$timer.v);
      }return Unit;
    };
  }
  function main$lambda_0(it) {
    println('Regi\xE3o 1 clicada');
    return Unit;
  }
  function main() {
    var tmp$;
    println('ola para todos\nbom dia');
    if (!window.confirm('voc\xEA deseja ver essa p\xE1gina?')) {
      window.open('http://www.google.com/', '_self');
    }var vezes = {v: 0};
    var timer = {v: 0};
    var vezesPagina = toInt((tmp$ = window.localStorage.getItem('acessos')) != null ? tmp$ : '0');
    imprime('<br>voce ja acessou esta p\xE1gina ' + vezesPagina + ' vezes<br>');
    window.localStorage.setItem('acessos', (vezesPagina + 1 | 0).toString());
    timer.v = window.setInterval(main$lambda(vezes, timer), 1000);
    regiao1.innerHTML = regiao1.innerHTML + '<br>Este c\xF3digo HTML foi inserido pelo programa em <B>kotlin<\/B>\n';
    regiao1.onclick = main$lambda_0;
  }
  Object.defineProperty(_, 'regiao1', {
    get: function () {
      return regiao1;
    }
  });
  Object.defineProperty(_, 'regiao2', {
    get: function () {
      return regiao2;
    }
  });
  _.imprime_61zpoe$ = imprime;
  _.main = main;
  var tmp$, tmp$_0;
  regiao1 = Kotlin.isType(tmp$ = document.getElementById('regiao1'), HTMLDivElement) ? tmp$ : throwCCE();
  regiao2 = Kotlin.isType(tmp$_0 = document.getElementById('regiao2'), HTMLDivElement) ? tmp$_0 : throwCCE();
  main();
  Kotlin.defineModule('FrontEnd2', _);
  return _;
}(typeof FrontEnd2 === 'undefined' ? {} : FrontEnd2, kotlin);
