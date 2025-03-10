# Projeto ES-NEXT

Projeto Fullstack com Laravel, Docker e Next.Js

## Passo a passo para rodar o projeto

1.  **Clone o projeto:**

    ```bash
    git clone [https://github.com/DEVGabrielferreira/ES-NEXT](https://github.com/DEVGabrielferreira/ES-NEXT) laravel-esnext
    ```

    ```bash
    cd laravel-esnext/
    ```

2.  **Crie o arquivo `.env`:**

    ```bash
    cp .env.example .env
    ```

3.  **Atualize as variáveis de ambiente no arquivo `.env`:**

    ```ini
    APP_NAME=Laravel
    APP_ENV=local
    APP_KEY=base64:FaOT/+gOE48KhoX6WOsUUE++ixTk6v7IJjKxQ34nutY=
    APP_DEBUG=true
    APP_URL=http://localhost:9000

    LOG_CHANNEL=stack
    LOG_LEVEL=debug

    DB_CONNECTION=mysql
    DB_HOST=db
    DB_PORT=3306
    DB_DATABASE=laravel_db
    DB_USERNAME=root
    DB_PASSWORD=password

    BROADCAST_DRIVER=log
    CACHE_DRIVER=file
    FILESYSTEM_DISK=local
    QUEUE_CONNECTION=sync
    SESSION_DRIVER=file
    SESSION_LIFETIME=120

    MEMCACHED_HOST=127.0.0.1

    REDIS_HOST=127.0.0.1
    REDIS_PASSWORD=null
    REDIS_PORT=6379

    MAIL_MAILER=smtp
    MAIL_HOST=mailpit
    MAIL_PORT=1025
    MAIL_USERNAME=null
    MAIL_PASSWORD=null
    MAIL_ENCRYPTION=null
    MAIL_FROM_ADDRESS="noreply@example.com"
    MAIL_FROM_NAME="${APP_NAME}"

    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_REGION=us-east-1
    AWS_BUCKET=

    PUSHER_APP_ID=
    PUSHER_APP_KEY=
    PUSHER_APP_SECRET=
    PUSHER_HOST=
    PUSHER_PORT=443
    PUSHER_SCHEME=https
    PUSHER_APP_CLUSTER=mt1

    MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
    MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

    PMA_HOST=db
    PMA_PORT=3306
    ```

4.  **Suba os containers do projeto (usando Docker Compose):**

    ```bash
    docker-compose up -d
    ```

5.  **Acesse o container da aplicação:**

    ```bash
    docker-compose exec app bash
    ```

6.  **Instale as dependências do projeto:**

    ```bash
    composer install
    ```

7.  **Gere a chave do projeto:**

    ```bash
    php artisan key:generate
    ```

8.  **Acesse o projeto:**

    ```
    http://localhost:9000
    ```

## Observações

- Certifique-se de ter o Docker e Docker Compose instalados.
- O `PMA_HOST` e `PMA_PORT` são para phpMyAdmin, se configurado.
- A chave `APP_KEY` já está no `.env`.
- Para migrações, use `php artisan migrate`.
