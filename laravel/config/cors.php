<?php

return [
    /*
     |--------------------------------------------------------------------------
     | Laravel CORS Options
     |--------------------------------------------------------------------------
     |
     | Here you may configure your settings for handling CORS (Cross-Origin
     | Resource Sharing). This configuration controls how your application
     | responds to cross-origin requests from different domains.
     |
     */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'], // Permitir todos os métodos HTTP

    'allowed_origins' => ['*'], // Permitir todos os domínios (ou seja, qualquer frontend)

    'allowed_headers' => ['*'], // Permitir todos os cabeçalhos

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];