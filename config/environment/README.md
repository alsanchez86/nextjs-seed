# ¿Para que vale el private y el public de la configuración de un entorno (dev o prod)?

## Private

- Donde se ejecuta el proceso de Nextjs (protocolo, puerto, dominio...).
- Peticiones desde el lado del servidor a la api de next (SSR).

## Public

- assetPrefix (load js, css, public url folder)
- Custom Link component