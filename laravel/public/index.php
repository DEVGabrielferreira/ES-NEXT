<?php

/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 */

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Autoload
|--------------------------------------------------------------------------
|
| Carrega o autoloader gerado pelo Composer.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Bootstrapping the Application
|--------------------------------------------------------------------------
|
| Obtém a instância do aplicativo Laravel.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
|
*/

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);