<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Plataformas tecnológicas y documentación del diseño

    p.mb-4 En el desarrollo de #[i software], la selección de las plataformas tecnológicas y la elaboración de la documentación de diseño constituyen actividades fundamentales para garantizar la calidad, organización y sostenibilidad de los sistemas. Las plataformas tecnológicas proporcionan las herramientas, lenguajes, #[i frameworks] y entornos necesarios para construir y ejecutar las aplicaciones, mientras que la documentación permite registrar las decisiones técnicas tomadas durante el proceso de diseño.

    .bloque-texto-gg.bloque-texto-gg--inverso.color-primario(data-aos="flip-up")(style="background-color:#68EAE0 !important")
      .bloque-texto-gg__texto.p-4
        p La adecuada elección de tecnologías influye directamente en aspectos como el rendimiento, la escalabilidad, la seguridad y la facilidad de mantenimiento del sistema. Por esta razón, los equipos de desarrollo deben analizar diferentes alternativas tecnológicas antes de iniciar la implementación.
        p Por otra parte, la documentación del diseño cumple un papel esencial dentro del ciclo de vida del #[i software], ya que permite comunicar la estructura del sistema, las decisiones arquitectónicas y la organización de los componentes a todos los integrantes del equipo de desarrollo.
        p.mb-0 En conjunto, las plataformas tecnológicas y la documentación del diseño permiten estructurar el desarrollo del sistema de manera organizada, facilitando la colaboración entre los miembros del equipo y garantizando que las decisiones técnicas queden registradas para futuras etapas del proyecto.
      .bloque-texto-gg__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema7/img-01.png')})`}"
      )

    Separador

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.1 Plataformas tecnológicas para el desarrollo de #[i software]

    .bg-c2.px-md-5.px-4.mb-4
      p.mb-4 Las plataformas tecnológicas para el desarrollo de #[i software] corresponden al conjunto de herramientas, lenguajes, #[i frameworks] y entornos que permiten diseñar, construir, ejecutar y mantener aplicaciones informáticas. Estas plataformas proporcionan la infraestructura necesaria para que los desarrolladores puedan implementar las funcionalidades del sistema y gestionar los diferentes componentes que lo conforman.

      .row.justify-content-center.align-items-center
        .col-lg-10
          .cajon.cajon.C02.color-secundario.p-4.mb-4
            p La elección de una plataforma tecnológica depende de diversos factores, entre ellos el tipo de aplicación que se desea desarrollar, los requerimientos del sistema, el entorno de ejecución y las necesidades de escalabilidad o mantenimiento. Una selección adecuada de tecnologías contribuye a mejorar el rendimiento del sistema, facilitar su evolución y garantizar la compatibilidad con otros sistemas.
          p En el desarrollo de #[i software], las plataformas tecnológicas suelen integrarse en un ecosistema que incluye herramientas de programación, entornos de desarrollo, motores de bases de datos y sistemas de gestión de versiones.

          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 19.
            span Componentes de una plataforma tecnológica de desarrollo
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 20%; background-color: #FFEEBC;") Componente
                  th(style="width: 20%; background-color: #FFEEBC;") Descripción
                  th(style="width: 20%; background-color: #FFEEBC;") Ejemplo
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #F0F8FF;") Lenguajes de programación.
                  td(style="background-color: #F0F8FF;") Permiten escribir el código fuente del sistema y definir su lógica de funcionamiento.
                  td(style="background-color: #F0F8FF;") Java, Python y JavaScript.
                tr(data-aos="fade-right")
                  td(style="background-color: #FFFF;") #[i Frameworks].
                  td(style="background-color: #FFFF;") Conjunto de herramientas y librerías que facilitan el desarrollo de aplicaciones.
                  td(style="background-color: #FFFF;") Spring, Django y React.
                tr(data-aos="fade-right")
                  td(style="background-color: #F0F8FF;") Entornos de desarrollo (IDE).
                  td(style="background-color: #F0F8FF;") Aplicaciones que proporcionan herramientas para escribir, probar y depurar código.
                  td(style="background-color: #F0F8FF;") IntelliJ IDEA y Visual Studio Code.
                tr(data-aos="fade-right")
                  td(style="background-color: #FFFF;") Motores de bases de datos.
                  td(style="background-color: #FFFF;") Sistemas que permiten almacenar, gestionar y consultar información.
                  td(style="background-color: #FFFF;") MySQL, PostgreSQL y MongoDB.
                tr(data-aos="fade-right")
                  td(style="background-color: #F0F8FF;") Sistemas de control de versiones.
                  td(style="background-color: #F0F8FF;") Herramientas que permiten gestionar cambios en el código fuente.
                  td(style="background-color: #F0F8FF;") Git.

    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema7/img-02.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") La integración de estos componentes permite construir entornos de desarrollo completos que facilitan la creación de aplicaciones robustas y escalables. Además, el uso adecuado de plataformas tecnológicas contribuye a mejorar la productividad de los equipos de desarrollo y a mantener la organización del proyecto a lo largo de su ciclo de vida.

    Separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.2 Motores de bases de datos relacionales y no relacionales

    p.mb-4 Los motores de bases de datos son sistemas encargados de almacenar, gestionar y recuperar la información utilizada por las aplicaciones de #[i software]. Estos motores permiten organizar grandes volúmenes de datos de manera estructurada y facilitan su consulta, actualización y mantenimiento.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta-bg01.p-4.mb-4
          .row.justify-content-center
            .col-lg-10
              p En el desarrollo de #[i software], la selección del motor de base de datos depende de diversos factores, como el tipo de aplicación, la cantidad de información que se debe manejar, el nivel de concurrencia de usuarios y los requerimientos de escalabilidad del sistema.
              p De manera general, los motores de bases de datos pueden clasificarse en dos grandes categorías: 
              .cajon.cajon.C03.p-2
                p.mb-0.text-center Relacionales y no relacionales.
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/tema7/img-03.svg", alt="alt").img100.m-auto

    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 20.
          span  Tipos de motores de bases de datos
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Tipo de base de datos
                th(style="width: 20%; background-color: #FFEEBC;") Características principales
                th(style="width: 20%; background-color: #FFEEBC;") Ejemplos
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Bases de datos relacionales.
                td(style="background-color: #F0F8FF;") Organizan la información en tablas compuestas por filas y columnas. Utilizan un esquema estructurado y permiten establecer relaciones entre las diferentes tablas mediante claves.
                td(style="background-color: #F0F8FF;") MySQL, PostgreSQL y Oracle.
              tr(data-aos="fade-right")
                td Bases de datos no relacionales.
                td Almacenan la información utilizando estructuras más flexibles, como documentos, grafos o pares clave-valor. Son utilizadas en aplicaciones que requieren alta escalabilidad y manejo de grandes volúmenes de datos.
                td MongoDB, Cassandra y Redis.
        p Las bases de datos relacionales han sido ampliamente utilizadas en sistemas empresariales debido a su capacidad para mantener la integridad de los datos y establecer relaciones claras entre la información almacenada. Estas bases utilizan el lenguaje SQL para realizar consultas, inserciones, actualizaciones y eliminación de datos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img-04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Por otra parte, las bases de datos no relacionales, también conocidas como NoSQL, han surgido como una alternativa para aplicaciones modernas que manejan grandes volúmenes de información, como plataformas #[i web], redes sociales o sistemas de análisis de datos.
        br
        br
        p.mb-0 En síntesis, la elección entre un motor de base de datos relacional o no relacional depende de las necesidades específicas del sistema. Mientras los motores relacionales ofrecen una estructura organizada y consistente para la gestión de datos, los motores no relacionales brindan mayor flexibilidad y escalabilidad para aplicaciones distribuidas o con altos volúmenes de información.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C04.p-3.mb-4
          p.mb-0.text-white.text-center Para complementar la información sobre bases de datos relacionales y no relacionales, se recomienda acceder al siguiente video.

        figure.mb-4(data-aos="zoom-in")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/r97Ko4ZvIDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Leyenda del video

    Separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.3 Documento de diseño de #[i software]

    p.mb-4 El documento de diseño de #[i software] es un artefacto técnico que describe la estructura, organización y funcionamiento del sistema que se desea desarrollar. Este documento permite registrar de manera formal las decisiones de diseño tomadas durante el proceso de desarrollo y sirve como guía para los equipos encargados de implementar la solución.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta-bg01.p-4.mb-4
          .row.justify-content-center
            .col-lg-9
              p En el proceso de ingeniería de #[i software], el documento de diseño cumple un papel fundamental, ya que traduce los requerimientos del sistema en una propuesta estructurada que describe cómo se construirá la aplicación. De esta manera, facilita la comunicación entre analistas, arquitectos de #[i software], desarrolladores y demás actores involucrados en el proyecto.
              p.mb-0 Además, este documento permite mantener una referencia clara sobre la arquitectura del sistema, los componentes que lo conforman, las tecnologías seleccionadas y las relaciones entre los distintos módulos del #[i software].
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/tema7/img-05.svg", alt="alt").img100.m-auto

        p Un documento de diseño de #[i software] suele incluir diferentes secciones que describen aspectos técnicos y estructurales del sistema.
        
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 21.
          span  Componentes de un documento de diseño de #[i software]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Componente
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
                th(style="width: 20%; background-color: #FFEEBC;") Propósito
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Descripción general del sistema.
                td(style="background-color: #F0F8FF;") Presenta una visión general del sistema, sus objetivos y alcance.
                td(style="background-color: #F0F8FF;") Contextualizar el sistema dentro del proyecto.
              tr(data-aos="fade-right")
                td Arquitectura del sistema.
                td Describe la estructura general del #[i software] y el modelo arquitectónico utilizado.
                td Definir la organización del sistema.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Componentes del sistema.
                td(style="background-color: #F0F8FF;") Identifica los módulos o componentes que conforman la aplicación.
                td(style="background-color: #F0F8FF;") Explicar cómo se divide el sistema.
              tr(data-aos="fade-right")
                td Modelo de datos.
                td Describe la estructura de los datos y su organización en la base de datos.
                td Definir cómo se almacenará la información.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Diagramas del sistema.
                td(style="background-color: #F0F8FF;") Incluye diagramas como diagramas de clases, componentes o despliegue.
                td(style="background-color: #F0F8FF;") Facilitar la comprensión visual del sistema.
              tr(data-aos="fade-right")
                td Tecnologías utilizadas.
                td Indica los lenguajes, #[i frameworks] y herramientas empleadas.
                td Documentar la infraestructura tecnológica del proyecto.
    
    .bg-c2.px-md-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          p La elaboración de este documento permite planificar de manera organizada el desarrollo del #[i software], reducir riesgos durante la implementación y facilitar el mantenimiento del sistema en el futuro.
          .cajon.cajon.C02.color-secundario.p-4.mb-4
            p Asimismo, el documento de diseño sirve como base para la documentación técnica del proyecto, permitiendo que nuevos miembros del equipo comprendan rápidamente la estructura y funcionamiento del sistema.

        .row.justify-content-center
          .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema7/img-06.svg', alt='')
          .col.col-lg-9.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") En síntesis, el documento de diseño de #[i software] constituye una herramienta esencial dentro del proceso de desarrollo, ya que permite documentar la arquitectura, los componentes y las decisiones técnicas del sistema, garantizando una construcción más organizada, comprensible y sostenible del #[i software].

    Separador

    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.4 Arquitectura candidata

    p.mb-4 La arquitectura candidata corresponde a la propuesta inicial de arquitectura de #[i software] que se plantea para satisfacer los requerimientos funcionales y no funcionales de un sistema. Esta arquitectura se construye a partir del análisis de los requerimientos, las restricciones tecnológicas, las necesidades del negocio y las características del entorno donde será implementado el sistema.

    .row.justify-content-center.mb-4
      .col-lg-5.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta-bg01.p-4.mb-4
              p Durante el proceso de diseño de #[i software], la arquitectura candidata permite definir una estructura preliminar del sistema, identificando los principales componentes, las tecnologías que se utilizarán y la forma en que estos elementos interactúan entre sí. Esta propuesta sirve como base para orientar el desarrollo del sistema y facilitar la toma de decisiones técnicas.
              p.mb-0 La arquitectura candidata no representa necesariamente la versión final del diseño del sistema. En muchos casos, puede ser ajustada o refinada a medida que el equipo de desarrollo profundiza en el análisis del proyecto o surgen nuevos requerimientos.
      .col-lg-5.col-8.order-1.order-lg-2.mb-3.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img-07.png', alt='') 

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Para construir una arquitectura candidata se consideran diversos elementos que permiten estructurar adecuadamente el sistema:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-08.svg' alt='AvatarTop')
          h4.text-center Requerimientos del sistema
          p.mb-0 Corresponden a las necesidades funcionales y no funcionales que el #[i software] debe cumplir. Estos requerimientos orientan las decisiones de diseño y garantizan que la arquitectura responda a los objetivos del sistema.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-09.svg' alt='AvatarTop')
          h4.text-center Modelo arquitectónico
          p.mb-0 Define el tipo de arquitectura que se utilizará, como cliente-servidor, microservicios o modelo vista controlador. Este modelo establece la forma en que se organizarán los componentes del sistema.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-10.svg' alt='AvatarTop')
          h4.text-center Componentes del sistema
          p.mb-0 Se refiere a los módulos, servicios o capas que conforman el #[i software]. Identificar estos componentes permite estructurar la lógica del sistema y facilitar su desarrollo.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-11.svg' alt='AvatarTop')
          h4.text-center Tecnologías y plataformas
          p.mb-0 Incluye los lenguajes de programación, #[i frameworks], bases de datos y herramientas tecnológicas que se utilizarán en el proyecto.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-12.svg' alt='AvatarTop')
          h4.text-center Interacción entre componentes
          p.mb-0 Describe la forma en que los diferentes módulos del sistema se comunican entre sí, permitiendo el intercambio de información y el funcionamiento integrado del #[i software].

    p La definición de una arquitectura candidata permite evaluar distintas alternativas de diseño antes de iniciar la implementación del sistema. Esto ayuda a seleccionar la arquitectura más adecuada de acuerdo con criterios como escalabilidad, rendimiento, seguridad y facilidad de mantenimiento.
    p.mb-4 Asimismo, la arquitectura candidata facilita la comunicación entre los miembros del equipo de desarrollo, ya que proporciona una representación clara de cómo se organizará el sistema y cómo se integrarán sus diferentes componentes.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 A continuación, un ejemplo conceptual de arquitectura candidata:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C02.p-4.mb-4
          p Supóngase que una empresa desea desarrollar una aplicación #[i web] para gestionar reservas de hoteles. Antes de iniciar la programación, el equipo de desarrollo propone una arquitectura candidata que permita organizar el sistema.
          p En esta propuesta inicial se definen los siguientes elementos:

          .cajon.cajon.C03.p-4.mb-4              
            .col-lg-12.col-md-12.col-12
              ul.lista-ul.mb-0
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  span #[b Interfaz de usuario:] se desarrollará una aplicación #[i web] a la que los usuarios accederán desde su navegador para buscar hoteles, consultar disponibilidad y realizar reservas.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  span #[b Servidor de aplicación:] el servidor procesará las solicitudes enviadas por los usuarios, gestionará la lógica del sistema y controlará las operaciones relacionadas con las reservas.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  span #[b Base de datos:] se utilizará un sistema gestor de bases de datos para almacenar información sobre hoteles, habitaciones, usuarios y reservas.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  span #[b Servicios del sistema:] se implementarán servicios que permitirán gestionar funcionalidades como autenticación de usuarios, consulta de disponibilidad y registro de reservas.

          p De manera simplificada, la arquitectura candidata podría representarse así:
          .row.mb-4.arquitectura-cards
            .col-lg.col-md-6.tarjeta-bg03.p-4(data-aos="fade-right")
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/tema7/img-13.svg' alt="Imagen decorativa")
              p.mb-0.text-center Usuario (navegador #[i web])

            .col-lg.col-md-6.tarjeta-bg03.p-4(data-aos="flip-right")
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/tema7/img-14.svg' alt="Imagen decorativa")
              p.mb-0.text-center Aplicación #[i web]

            .col-lg.col-md-6.tarjeta-bg03.p-4(data-aos="flip-left")
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/tema7/img-15.svg' alt="Imagen decorativa")
              p.mb-0.text-center Servidor de aplicación

            .col-lg.col-md-6.tarjeta-bg03.p-4(data-aos="fade-left")
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/tema7/img-16.svg' alt="Imagen decorativa")
              p.mb-0.text-center Base de datos
          p.mb-0 Esta propuesta permite al equipo de desarrollo analizar si la arquitectura seleccionada responde a los requerimientos del sistema antes de iniciar su implementación.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p En síntesis, la arquitectura candidata constituye una propuesta inicial de diseño que orienta el desarrollo del #[i software], permitiendo estructurar el sistema de manera coherente y asegurar que las decisiones técnicas respondan a los objetivos del proyecto.



</template>

<script>
export default {
  name: 'Tema7',
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
