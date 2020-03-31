# NEXTJS SEED

## Iniciar contenedor de docker

    docker-compose up
    docker-compose up --build

## Pasar variables de entorno al contenedor de docker

    docker-compose.yml
        version: '3.1'
        services:
        nextjs:
            ports:
                - 8080:3000
            build:
                context: .
                dockerfile: Dockerfile
            environment:
                PRIVATE_HOSTNAME: localhost
                PRIVATE_PROTOCOL: http
                PRIVATE_PORT: 3000
                PUBLIC_HOSTNAME: localhost
                PUBLIC_PROTOCOL: http
                PUBLIC_PORT: 8080

## Helpers

### Ver valores de las variables de entorno en Powershell

    Get-ChildItem Env:
    Get-ChildItem Env:PUBLIC_HOSTNAME
    Get-ChildItem Env:PUBLIC_PROTOCOL
    Get-ChildItem Env:PUBLIC_PORT

### Actualizar valores de las variables de entorno en Powershell

    Set-Item Env::PUBLIC_HOSTNAME -Value [value]
    Set-Item Env::PUBLIC_PROTOCOL -Value [value]
    Set-Item Env::PUBLIC_PORT -Value [value]


### Eliminar variable de entorno

    Remove-Item Env::PUBLIC_HOSTNAME
    Remove-Item Env::PUBLIC_PROTOCOL
    Remove-Item Env::PUBLIC_PORT