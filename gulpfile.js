var elixir = require('laravel-elixir');

/*
 |----------------------------------------------------------------
 | Have a Drink!
 |----------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic
 | Gulp tasks for your Laravel application. Elixir supports
 | several common CSS, JavaScript and even testing tools!
 | this is task runner;
 |
 */

elixir(function(mix) {
    mix.sass("app.scss")
       .phpUnit()
       .publish("vendor/bower_components");
});
