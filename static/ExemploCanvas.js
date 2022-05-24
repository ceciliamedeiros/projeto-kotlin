if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ExemploCanvas'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ExemploCanvas'.");
}var ExemploCanvas = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var areaDesenho;
  function main$lambda(it) {
    println('O mouse est\xE1 na area de desenho');
    return Unit;
  }
  function main$lambda_0(it) {
    println('O mouse saiu da area de desenho');
    return Unit;
  }
  function main$lambda_1(closure$ctx) {
    return function (ev) {
      if (ev.buttons === 1) {
        var x = ev.offsetX;
        var y = ev.offsetY;
        closure$ctx.fillRect(x - 5.0, y - 5.0, 10.0, 10.0);
        println('O mouse moveu (' + ev.x + ', ' + ev.y + ') botoes ' + ev.buttons);
      }return Unit;
    };
  }
  function main$lambda_2(it) {
    println('teclado pressionado');
    return Unit;
  }
  function main() {
    var tmp$;
    println('Front-End Executado');
    var ctx = Kotlin.isType(tmp$ = areaDesenho.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    ctx.lineWidth = 15.0;
    ctx.strokeStyle = 'green';
    ctx.strokeRect(75.0, 140.0, 150.0, 110.0);
    ctx.fillStyle = 'blue';
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = 'blue';
    ctx.ellipse(240.0, 180.0, 200.0, 100.0, 1.0, 0.0, 6.3);
    ctx.stroke();
    areaDesenho.onmouseenter = main$lambda;
    areaDesenho.onmouseleave = main$lambda_0;
    areaDesenho.onmousemove = main$lambda_1(ctx);
    document.onkeypress = main$lambda_2;
  }
  Object.defineProperty(_, 'areaDesenho', {
    get: function () {
      return areaDesenho;
    }
  });
  _.main = main;
  var tmp$;
  areaDesenho = Kotlin.isType(tmp$ = document.getElementById('AreaDesenho'), HTMLCanvasElement) ? tmp$ : throwCCE();
  main();
  Kotlin.defineModule('ExemploCanvas', _);
  return _;
}(typeof ExemploCanvas === 'undefined' ? {} : ExemploCanvas, kotlin);
