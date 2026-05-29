<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Arquitecturas modernas y prácticas de desarrollo

    p.mb-4 El desarrollo de software ha evolucionado significativamente debido al crecimiento de Internet, las aplicaciones distribuidas y la necesidad de construir sistemas cada vez más escalables, flexibles y fáciles de mantener. En este contexto, han surgido nuevas arquitecturas y prácticas de desarrollo que permiten diseñar soluciones tecnológicas más eficientes y adaptadas a entornos dinámicos. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las arquitecturas modernas buscan resolver problemas asociados con la complejidad de los sistemas, la integración entre múltiples servicios y la necesidad de desplegar aplicaciones de forma rápida y segura. Para ello, se emplean enfoques que promueven la modularidad, la comunicación entre servicios y la automatización de procesos de desarrollo.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Entre estos enfoques se encuentran la arquitectura orientada a servicios, los microservicios, las arquitecturas serverless y las prácticas asociadas a DevOps y la integración continua. Estos modelos permiten que las aplicaciones se construyan mediante componentes independientes que pueden desarrollarse, actualizarse y desplegarse de manera autónoma.
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p Asimismo, el uso de interfaces de comunicación como REST y GraphQL facilita el intercambio de información entre sistemas, permitiendo que diferentes aplicaciones y servicios se integren de forma eficiente dentro de una misma plataforma tecnológica.
        p En conjunto, estas arquitecturas y prácticas contribuyen a crear sistemas más flexibles, escalables y preparados para responder a las necesidades cambiantes de las organizaciones y de los usuarios.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1. Arquitectura orientada a servicios

    p.mb-4 La arquitectura orientada a servicios (SOA, Service-Oriented Architecture) es un enfoque de diseño de software que organiza las funcionalidades de un sistema en servicios independientes que pueden comunicarse entre sí a través de una red.

    .bloque-texto-gg.bloque-texto-gg--inverso.color-primario.mb-4(data-aos="flip-up")(style="background-color:#C9E8F7 !important")
      .bloque-texto-gg__texto.p-4
        p En este tipo de arquitectura, cada servicio representa una funcionalidad específica del sistema, como la gestión de usuarios, el procesamiento de pagos o el manejo de inventarios. Estos servicios pueden ser reutilizados por diferentes aplicaciones, lo que facilita la integración entre sistemas y mejora la flexibilidad del software.
        p.mb-0 La arquitectura orientada a servicios surge como una solución para integrar sistemas empresariales complejos, ya que permite que diferentes aplicaciones, incluso desarrolladas con tecnologías distintas, se comuniquen entre sí mediante interfaces estandarizadas.
      .bloque-texto-gg__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema6/img-02.png')})`}"
      )

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Este enfoque presenta diversas características que facilitan el desarrollo, la integración y el mantenimiento de los sistemas:

        ol.lista-ol--cuadro.lista-ol--separador
          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 1
            | Modularidad: el sistema se divide en servicios independientes.

          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 2
            | Reutilización: un mismo servicio puede ser utilizado por diferentes aplicaciones.

          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 3
            | Interoperabilidad: permite la comunicación entre sistemas desarrollados en distintas tecnologías.

          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 4
            | Escalabilidad: los servicios pueden ampliarse o modificarse sin afectar todo el sistema.

          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 5
            | Desacoplamiento: cada servicio funciona de manera relativamente independiente.

        p La arquitectura orientada a servicios se fundamenta además en un conjunto de elementos que permiten estructurar y gestionar la comunicación entre los diferentes sistemas y aplicaciones. Estos elementos facilitan la publicación, el descubrimiento, el consumo y el intercambio de servicios dentro de una organización, garantizando interoperabilidad, reutilización y escalabilidad en los sistemas de información. A continuación, se presentan algunos de los componentes más representativos que hacen posible el funcionamiento de esta arquitectura.
        
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 14.
          span Componentes de la arquitectura orientada a servicios
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Componente
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
                th(style="width: 20%; background-color: #FFEEBC;") Ejemplo
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Servicio.
                td(style="background-color: #F0F8FF;") Funcionalidad específica que el sistema ofrece.
                td(style="background-color: #F0F8FF;") Servicio de autenticación de usuarios.
              tr(data-aos="fade-right")
                td Proveedor de servicio.
                td Sistema o aplicación que ofrece el servicio.
                td Servidor que gestiona el login.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Consumidor de servicio.
                td(style="background-color: #F0F8FF;") Aplicación que utiliza el servicio.
                td(style="background-color: #F0F8FF;") Aplicación web o móvil.
              tr(data-aos="fade-right")
                td Contrato de servicio.
                td Define cómo se utiliza el servicio y qué información intercambia.
                td API o especificación de comunicación.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 A continuación, un ejemplo práctico:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C02.p-4.mb-4
          p Supóngase una plataforma de comercio electrónico. En este sistema, diferentes funcionalidades pueden implementarse como servicios independientes:
          
          .cajon.cajon.C03.p-4.mb-4
            .row.align-items-center.justify-content-center
              .col-lg-3.col-md-4.col-8.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema6/img-03.svg', alt='Imagen decorativa')
              
              .col-lg-9.col-md-8.col-12
                ul.lista-ul
                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de gestión de usuarios.
                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de procesamiento de pagos.
                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de gestión de productos.
                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de envíos y logística.
          
          p.mb-0 Cada uno de estos servicios puede funcionar de manera independiente y ser utilizado por diferentes aplicaciones, como la página web de la tienda, una aplicación móvil o un sistema interno de administración.

        p La arquitectura orientada a servicios ha sido un paso importante en la evolución de los sistemas distribuidos, ya que permite construir aplicaciones más flexibles, escalables y fáciles de integrar.
        p Además, este enfoque ha influido en arquitecturas modernas como los microservicios y el desarrollo basado en APIs, que continúan ampliando las posibilidades de integración entre sistemas en entornos tecnológicos actuales.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2. Arquitecturas basadas en APIs REST y GraphQL

    p.mb-4 Las arquitecturas basadas en APIs (Application Programming Interfaces) permiten que diferentes aplicaciones o sistemas se comuniquen entre sí mediante interfaces bien definidas. En este enfoque, los sistemas exponen servicios o recursos que pueden ser consumidos por otras aplicaciones a través de solicitudes realizadas generalmente mediante protocolos web.

    .bloque-texto-gg.bloque-texto-gg--inverso.color-primario.mb-4(data-aos="flip-up")(style="background-color:#68EAE0 !important")
      .bloque-texto-gg__texto.p-4
        p Este modelo es ampliamente utilizado en aplicaciones web y móviles, ya que permite separar el frontend (interfaz de usuario) del backend (lógica del sistema y manejo de datos). De esta manera, diferentes aplicaciones pueden utilizar los mismos servicios sin necesidad de duplicar funcionalidades.
        p.mb-0 Entre los enfoques más utilizados para construir APIs se encuentran REST y GraphQL, los cuales ofrecen distintas formas de acceder y gestionar la información dentro de un sistema.
      .bloque-texto-gg__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema6/img-04.png')})`}"
      )

    .row.justify-content-center.align-items-center
      .col-lg-10
        p REST (Representational State Transfer) es un estilo arquitectónico que organiza los recursos del sistema mediante direcciones URL y utiliza métodos estándar del protocolo HTTP para interactuar con ellos. En este modelo, cada recurso puede ser consultado, creado, modificado o eliminado mediante solicitudes específicas.
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p Por su parte, GraphQL es un lenguaje de consulta para APIs que permite a los clientes solicitar exactamente la información que necesitan. A diferencia de REST, donde cada recurso suele tener un endpoint específico, GraphQL permite realizar consultas más flexibles y obtener múltiples datos en una sola solicitud.
        p Para comprender mejor las diferencias entre estos enfoques, se presenta la siguiente comparación:

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 15.
          span Comparación entre REST y GraphQL
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Característica
                th(style="width: 20%; background-color: #FFEEBC;") REST
                th(style="width: 20%; background-color: #FFEEBC;") GraphQL
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Modelo de acceso.
                td(style="background-color: #F0F8FF;") Basado en recursos.
                td(style="background-color: #F0F8FF;") Basado en consultas.
              tr(data-aos="fade-right")
                td Endpoints.
                td Varios endpoints para diferentes recursos.
                td Un único endpoint.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Obtención de datos.
                td(style="background-color: #F0F8FF;") Devuelve estructuras definidas por el servidor.
                td(style="background-color: #F0F8FF;") El cliente solicita exactamente los datos necesarios.
              tr(data-aos="fade-right")
                td Flexibilidad.
                td Menor flexibilidad en consultas.
                td Alta flexibilidad en consultas.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Uso común.
                td(style="background-color: #F0F8FF;") Servicios web tradicionales.
                td(style="background-color: #F0F8FF;") Aplicaciones modernas y aplicaciones móviles.

    .row.justify-content-center
      .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/img-05.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p En muchos sistemas modernos, las APIs REST continúan siendo ampliamente utilizadas debido a su simplicidad y compatibilidad con tecnologías web. Sin embargo, GraphQL ha ganado popularidad en aplicaciones donde se requiere mayor flexibilidad en la consulta de datos y optimización en la comunicación entre cliente y servidor.
        p.mb-0 En síntesis, las arquitecturas basadas en APIs permiten construir sistemas más modulares, escalables e interoperables, facilitando la integración entre diferentes aplicaciones y servicios dentro de entornos tecnológicos modernos.

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3. Arquitectura de microservicios

    p.mb-4 La arquitectura de microservicios es un enfoque de diseño de software en el que una aplicación se construye como un conjunto de servicios pequeños, independientes y especializados, donde cada uno cumple una función específica dentro del sistema.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img-06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") A diferencia de las arquitecturas monolíticas, en las que toda la aplicación se desarrolla como una única unidad, la arquitectura de microservicios permite que cada componente se desarrolle, despliegue y escale de manera independiente. Esto facilita que los equipos de desarrollo trabajen de forma paralela y que el sistema evolucione con mayor flexibilidad.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p En este modelo, cada microservicio se encarga de una responsabilidad específica del negocio, como la gestión de usuarios, el procesamiento de pagos o el manejo de productos dentro de una aplicación.
        p Este enfoque facilita la construcción de sistemas distribuidos que pueden adaptarse con mayor facilidad a cambios tecnológicos o a incrementos en la demanda de usuarios.
        
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 16.
          span Características de la arquitectura de microservicios
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Característica
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Independencia.
                td(style="background-color: #F0F8FF;") Cada servicio puede desarrollarse y desplegarse de forma independiente.
              tr(data-aos="fade-right")
                td Escalabilidad.
                td Es posible escalar únicamente los servicios que requieren mayor capacidad.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Especialización
                td(style="background-color: #F0F8FF;") Cada microservicio se enfoca en una función específica del sistema.
              tr(data-aos="fade-right")
                td Despliegue independiente.
                td Las actualizaciones pueden realizarse sin afectar todo el sistema.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Flexibilidad tecnológica.
                td(style="background-color: #F0F8FF;") Cada servicio puede desarrollarse utilizando diferentes tecnologías.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 A continuación, un ejemplo conceptual:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C02.p-4.mb-4
          p Supóngase una plataforma de comercio electrónico. En una arquitectura de microservicios, el sistema podría dividirse en varios servicios independientes, tales como:

          .cajon.cajon.C03.p-4.mb-4
            .row.align-items-center.justify-content-center
              .col-lg-2.col-md-4.col-8.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema6/img-07.svg', alt='Imagen decorativa')
              
              .col-lg-10.col-md-8.col-12
                ul.lista-ul
                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de usuarios, encargado del registro y autenticación.

                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de productos, responsable de gestionar el catálogo.

                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de carrito de compras, que administra los productos seleccionados por el usuario.

                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de pagos, encargado de procesar las transacciones.

                  li
                    i.fas.fa-computer(style="color: #FFC928 !important")
                    | Servicio de envíos, responsable de gestionar la logística de entrega.
          
          p Cada uno de estos servicios puede ejecutarse de forma independiente y comunicarse con los demás mediante APIs.
          p.mb-0 Gracias a esta organización, si el sistema necesita procesar un mayor número de pagos, únicamente se puede escalar el servicio de pagos sin afectar el resto de los componentes.

        p En síntesis, la arquitectura de microservicios permite construir sistemas más modulares, escalables y adaptables, facilitando el mantenimiento, la evolución del software y el trabajo colaborativo en equipos de desarrollo.

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4. Arquitectura serverless

    p.mb-4 La arquitectura serverless es un modelo de desarrollo en el que las aplicaciones se ejecutan sin que los desarrolladores tengan que administrar directamente los servidores o la infraestructura donde se ejecuta el software. Aunque los servidores siguen existiendo, su gestión es responsabilidad del proveedor de servicios en la nube.

    .row.justify-content-center.mb-4
      .col-lg-5.order-lg-1.order-2
        .row.justify-content-center
          .col
            p En este modelo, el desarrollador se enfoca principalmente en escribir el código y definir las funciones que ejecutará el sistema, mientras que la plataforma se encarga automáticamente de tareas como el aprovisionamiento de recursos, la escalabilidad, la disponibilidad y el mantenimiento de la infraestructura.
            p La arquitectura serverless se basa en el concepto de ejecución bajo demanda, lo que significa que las funciones del sistema se ejecutan únicamente cuando ocurre un evento específico, como una solicitud de un usuario, una actualización en una base de datos o la carga de un archivo.
      .col-lg-5.col-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img-08.png', alt='') 

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C05.p-4.mb-4
          p Este enfoque permite optimizar el uso de los recursos y reducir costos, ya que el sistema solo consume infraestructura cuando realmente se utiliza.

    .row.justify-content-center.align-items-center
      .col-lg-10        
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 17.
          span Características de la arquitectura serverless
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Característica
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
                th(style="width: 20%; background-color: #FFEEBC;") Beneficio
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Gestión automática de infraestructura.
                td(style="background-color: #F0F8FF;") El proveedor en la nube administra servidores, redes y escalabilidad.
                td(style="background-color: #F0F8FF;") Reduce la complejidad operativa.
              tr(data-aos="fade-right")
                td Ejecución basada en eventos.
                td Las funciones se ejecutan cuando ocurre una acción específica.
                td Uso eficiente de recursos.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Escalabilidad automática.
                td(style="background-color: #F0F8FF;") El sistema ajusta automáticamente la cantidad de recursos necesarios.
                td(style="background-color: #F0F8FF;") Soporta variaciones de carga sin intervención manual.
              tr(data-aos="fade-right")
                td Pago por uso.
                td Solo se paga por el tiempo real de ejecución del código.
                td Optimización de costos.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Despliegue rápido.
                td(style="background-color: #F0F8FF;") Las funciones pueden actualizarse de manera independiente.
                td(style="background-color: #F0F8FF;") Mayor agilidad en el desarrollo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 A continuación, un ejemplo práctico:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C02.p-4.mb-4
          p Supóngase una aplicación web que permite a los usuarios subir fotografías a una plataforma en línea.
          p Cuando el usuario carga una imagen, se activa automáticamente una función serverless que realiza varias tareas:
          
          .cajon.cajon.C03.p-4.mb-4
            .row.align-items-center.justify-content-center
              .col-lg-3.col-md-4.col-8.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema6/img-09.svg', alt='Imagen decorativa')
              
              .col-lg-9.col-md-8.col-12
                ol.lista-ol--cuadro
                  li(data-aos="flip-up") 
                    .lista-ol--cuadro__vineta
                      span a
                    | Verifica el formato y tamaño del archivo.
                  li(data-aos="flip-right") 
                    .lista-ol--cuadro__vineta
                      span b
                    | Genera una versión comprimida de la imagen.
                  li(data-aos="flip-right") 
                    .lista-ol--cuadro__vineta
                      span c
                    | Guarda la imagen en el almacenamiento del sistema.
                  li(data-aos="flip-right") 
                    .lista-ol--cuadro__vineta
                      span d
                    | Actualiza la base de datos con la información del archivo.
          
          p.mb-0 En este proceso no es necesario mantener servidores activos de forma permanente. La función se ejecuta únicamente cuando ocurre la carga de la imagen.

        p En síntesis, la arquitectura serverless permite desarrollar aplicaciones más flexibles y escalables, delegando la gestión de la infraestructura a los proveedores de servicios en la nube y permitiendo que los desarrolladores se concentren principalmente en la lógica del negocio y en la creación de funcionalidades del sistema.

    Separador

    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.5. DevOps e integración continua

    p.mb-4 En el desarrollo moderno de software, los equipos buscan entregar aplicaciones de manera más rápida, confiable y continua. Para lograrlo, surge el enfoque DevOps, una práctica que integra el trabajo de los equipos de desarrollo (development) y operaciones (operations), promoviendo la colaboración, la automatización y la mejora continua en el ciclo de vida del software.

    .row.no-gutters.align-items-center.style___box_3.m-0.mb-4(data-aos="zoom-in")
      .col-xl.px-0
        p Tradicionalmente, el desarrollo y la operación de sistemas funcionaban como áreas separadas. Los desarrolladores creaban el software y posteriormente lo entregaban al equipo de operaciones para su implementación y mantenimiento. Este proceso generaba retrasos, dificultades en la comunicación y problemas al momento de desplegar nuevas versiones.
        p.mb-0 DevOps propone un enfoque colaborativo donde ambos equipos trabajan de forma coordinada durante todo el proceso de desarrollo, desde la programación hasta la implementación y monitoreo del sistema.
      .col-xl-auto.px-0.col-img-box
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema6/img-10.png', alt='').m-auto

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Una de las prácticas más importantes dentro de DevOps es la integración continua.
        p La integración continua consiste en integrar de manera frecuente los cambios realizados en el código dentro de un repositorio central. Cada vez que se realiza una modificación, el sistema ejecuta automáticamente procesos de compilación, pruebas y verificación para asegurar que el software funcione correctamente.
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 18.
          span  Principales prácticas de DevOps
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Característica
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
                th(style="width: 20%; background-color: #FFEEBC;") Beneficio
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Integración continua.
                td(style="background-color: #F0F8FF;") Los cambios en el código se integran frecuentemente en un repositorio común.
                td(style="background-color: #F0F8FF;") Permite detectar errores rápidamente.
              tr(data-aos="fade-right")
                td Entrega continua.
                td El software puede prepararse automáticamente para su publicación.
                td Reduce el tiempo de despliegue.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Automatización.
                td(style="background-color: #F0F8FF;") Se automatizan procesos como pruebas, compilación y despliegue.
                td(style="background-color: #F0F8FF;") Mejora la eficiencia del desarrollo.
              tr(data-aos="fade-right")
                td Monitoreo continuo.
                td Se supervisa el comportamiento del sistema en producción.
                td Permite identificar fallos y mejorar el rendimiento.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Colaboración entre equipos.
                td(style="background-color: #F0F8FF;") Desarrollo y operaciones trabajan de manera integrada.
                td(style="background-color: #F0F8FF;") Mejora la comunicación y la calidad del software.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 A continuación, un ejemplo práctico:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C02.p-4.mb-4
          p Supóngase que un equipo de desarrollo trabaja en una aplicación web:
          
          .cajon.cajon.C03.p-4.mb-4
            .row.align-items-center.justify-content-center
              .col-lg-2.col-md-4.col-8.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema6/img-11.svg', alt='Imagen decorativa')
              
              .col-lg-10.col-md-8.col-12
                ol.lista-ol--cuadro
                  li(data-aos="flip-up") 
                    .lista-ol--cuadro__vineta
                      span a
                    | Un desarrollador realiza una mejora en el código.

                  li(data-aos="flip-right") 
                    .lista-ol--cuadro__vineta
                      span b
                    | El cambio se envía a un repositorio de control de versiones.

                  li(data-aos="flip-right") 
                    .lista-ol--cuadro__vineta
                      span c
                    | El sistema de integración continua detecta la actualización.

                  li(data-aos="flip-right") 
                    .lista-ol--cuadro__vineta
                      span d
                    | Automáticamente se ejecutan pruebas para verificar que el sistema funcione correctamente.

                  li(data-aos="flip-right") 
                    .lista-ol--cuadro__vineta
                      span e
                    | Si las pruebas son exitosas, la nueva versión puede prepararse para su despliegue.
          
          p.mb-0 Este proceso permite detectar errores de forma temprana y mantener el software actualizado de manera constante.

        p En síntesis, DevOps y la integración continua permiten mejorar la calidad del software, reducir los tiempos de desarrollo y facilitar la entrega continua de nuevas funcionalidades, contribuyendo a la creación de sistemas más confiables y eficientes.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
