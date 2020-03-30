# METAJOB

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
            PUBLIC_HOSTNAME: localhost
            PUBLIC_PROTOCOL: https
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

# Estandarización de nombrado de los servicios

La estandarización de los endpoints de los microservicios sigue la siguiente regla de nombrado:

https://dev.metajn.es/${microserviceGroup}-${microserviceName}

Por ejemplo, en el repositorio https://steps.everis.com/git/METAJOB/management-portal/user-activity/, el endpoint sería https://dev.everjn.es/management-portal-user-activity/

# Ver métodos de cada endpoint

## Local

http://localhost:3000//swagger-ui/${path}

Por ejemplo:

http://localhost:3000/swagger-ui/improvements/

## AWS

https://dev.everjn.es/${microserviceGroup}-${microserviceName}/swagger-ui.html
https://dev.everjn.es/${microserviceGroup}-${microserviceName}/v2/api-docs

Por ejemplo:

https://dev.everjn.es/management-portal-user-activity/swagger-ui.html
https://dev.everjn.es/management-portal-user-activity/v2/api-docs

# Lanzar servicios Ambientes localmente para el desarrollo

1. Crear usuario develop en pgAdmin con todos los permisos.
1. Conectarse a postgres a través de su propia termina (SQL Shell): psql posgres postgres
    - password: usuario
3. CREATE DATABASE "improvement-area" OWNER develop;
4. CREATE DATABASE "questionary" OWNER develop;
5. CREATE DATABASE "skills" OWNER develop;
6. Lanzar ambos .jar. En este lanzamiento se crearán todos los schemas en las bases de datos previamente creadas.
7. Ejecutar scripts en cada base de datos para importar los datos.
8. Importar los scripts en la base de datos correspondiente. pgAdmin > clic derecho > CREATE SCRIPT
9. Remplazar {{improvement_server}} o  {{server}} en los archivos de JSON antes de importarlos a postman, por el valor correspontiente siguiente:
    - improvement-area: http://localhost:8080
    - questionary: http://localhost:8081
    - skills: http://localhost:8083
9. Test en postman