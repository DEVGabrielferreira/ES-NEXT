<?php

return [

    /*
    |--------------------------------------------------------------------------
    | View Storage Paths
    |--------------------------------------------------------------------------
    |
    | Laravel armazenará todas as views compiladas no diretório abaixo. Normalmente,
    | isso será configurado para a pasta de views do Laravel. Certifique-se de que
    | o diretório está legível e gravável para o seu aplicativo.
    |
    */

    'paths' => [
        resource_path('views'),
    ],

    /*
    |--------------------------------------------------------------------------
    | View Compiled Path
    |--------------------------------------------------------------------------
    |
    | Laravel armazenará as views compiladas no diretório abaixo. O diretório de cache
    | deve ser configurado corretamente para que o sistema de cache funcione.
    |
    */

    'compiled' => storage_path('framework/views'),

    /*
    |--------------------------------------------------------------------------
    | View Namespace
    |--------------------------------------------------------------------------
    |
    | O Laravel permite que você utilize namespaces para organizar suas views.
    | Aqui, você pode definir os namespaces, se necessário.
    |
    */

    'namespaces' => [
        //
    ],

    /*
    |--------------------------------------------------------------------------
    | View Cache
    |--------------------------------------------------------------------------
    |
    | Esta opção controla o cache de views compiladas. Laravel usa o cache para
    | armazenar views compiladas e melhorar o desempenho, evitando recompilações.
    |
    */

    'cache' => true,
];