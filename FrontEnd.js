if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'FrontEnd'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'FrontEnd'.");
}var FrontEnd = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main() {
    println('ola para todos');
  }
  _.main = main;
  main();
  Kotlin.defineModule('FrontEnd', _);
  return _;
}(typeof FrontEnd === 'undefined' ? {} : FrontEnd, kotlin);
