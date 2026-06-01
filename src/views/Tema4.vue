<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Patrones de diseño de #[i software]

    p.mb-4 En el desarrollo de #[i software], es común enfrentar problemas similares durante el proceso de diseño de los sistemas. Para abordar estas situaciones de manera eficiente, se utilizan patrones de diseño, los cuales representan soluciones probadas y reutilizables para resolver problemas recurrentes dentro del diseño de #[i software].

    .row.justify-content-center
      .col-lg-3.col-sm-7.col-10.mb-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img-01.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p Un patrón de diseño no corresponde a un código específico ni a una implementación exacta, sino a una estructura conceptual que orienta la forma en que se organizan los componentes del sistema para resolver un problema determinado. De esta manera, los patrones proporcionan guías que ayudan a los desarrolladores a diseñar soluciones más organizadas, flexibles y fáciles de mantener.
        p El uso de patrones de diseño permite aprovechar el conocimiento acumulado en la ingeniería de #[i software], ya que estos patrones han sido identificados y documentados a partir de experiencias reales en el desarrollo de sistemas. Por esta razón, constituyen una herramienta importante para mejorar la calidad del diseño y facilitar la comunicación entre los miembros del equipo de desarrollo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 Entre los principales beneficios de los patrones de diseño se destacan:

    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema4/img-02.svg", alt="alt").img80.m-auto
          p Facilitan la reutilización de soluciones a problemas comunes.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema4/img-03.svg", alt="alt").img80.m-auto
          p Promueven diseños más organizados y estructurados.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema4/img-04.svg", alt="alt").img80.m-auto
          p Mejoran la mantenibilidad y la escalabilidad del #[i software].
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema4/img-05.svg", alt="alt").img80.m-auto
          p Favorecen la comunicación entre desarrolladores mediante un lenguaje común de diseño.

    p.mb-4 En el contexto del diseño orientado a objetos, los patrones de diseño ayudan a definir cómo deben relacionarse las clases y los objetos para resolver situaciones frecuentes dentro de un sistema. Esto permite construir aplicaciones más flexibles y adaptables a cambios futuros.

    .row.justify-content-center.align-items-center
      .col-lg-12
        .tarjeta-bg01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-11
              p.mb-0 En síntesis, los patrones de diseño constituyen una herramienta fundamental dentro del diseño de #[i software], ya que proporcionan modelos de solución reutilizables que permiten estructurar sistemas de manera más eficiente, mejorar la calidad del código y apoyar el proceso de desarrollo de aplicaciones orientadas a objetos.
            .col-lg-1.d-none.d-lg-block
              img(src="@/assets/curso/tema4/img-06.svg", alt="alt").img100.m-auto
    
    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Conceptos y clasificación de patrones de diseño

    p.mb-4 Los patrones de diseño son soluciones generales y reutilizables que se aplican a problemas recurrentes en el diseño de #[i software]. No representan un algoritmo específico ni una implementación exacta, sino una forma estructurada de organizar clases y objetos para resolver situaciones comunes dentro de un sistema.

    .row.justify-content-center
      .col-lg-10
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0 En el contexto del desarrollo orientado a objetos, los patrones ayudan a mejorar la organización del #[i software], ya que proponen formas adecuadas de distribuir responsabilidades entre los componentes del sistema. De esta manera, permiten construir aplicaciones más flexibles, reutilizables y fáciles de mantener.

    p.text-center Un patrón de diseño generalmente describe varios elementos que orientan su aplicación dentro del sistema:

    .row.mb-4
      .col-lg.col-md-6.tarjeta-bg01.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img-07.svg' alt="Imagen decorativa")
        p.mb-0 Nombre del patrón, que permite identificar la solución propuesta.
      .col-lg.col-md-6.tarjeta-bg02.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img-08.svg' alt="Imagen decorativa")
        p.mb-0 Problema, que describe la situación o necesidad que se desea resolver.
      .col-lg.col-md-6.tarjeta-bg01.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img-09.svg' alt="Imagen decorativa")
        p.mb-0 Solución, que explica cómo deben organizarse los elementos del sistema para resolver el problema.
      .col-lg.col-md-6.tarjeta-bg02.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img-10.svg' alt="Imagen decorativa")
        p.mb-0 Consecuencias, que muestran los beneficios y posibles limitaciones del patrón.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Estos elementos permiten comprender cuándo y cómo aplicar un patrón dentro del proceso de diseño.
        p Los patrones de diseño suelen clasificarse según el tipo de problema que ayudan a resolver dentro de la estructura del #[i software]. Esta clasificación facilita su estudio y aplicación durante el diseño del sistema.

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 6.
          span Clasificación general de los patrones de diseño
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Tipo de patrón
                th(style="width: 20%; background-color: #FFEEBC;") Qué aborda
                th(style="width: 20%; background-color: #FFEEBC;") En qué se enfoca
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Patrones creacionales.
                td(style="background-color: #F0F8FF;") Gestionan la forma en que se crean los objetos dentro del sistema.
                td(style="background-color: #F0F8FF;") Facilitar la creación flexible de objetos.
              tr(data-aos="fade-right")
                td Patrones estructurales.
                td Definen cómo se relacionan y organizan las clases y objetos.
                td Mejorar la estructura del sistema.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Patrones comportamentales.
                td(style="background-color: #F0F8FF;") Describen la comunicación y distribución de responsabilidades entre objetos.
                td(style="background-color: #F0F8FF;") Optimizar la interacción entre componentes.

        .bloque-texto-gg.bloque-texto-gg--inverso.color-primario.mb-4(data-aos="flip-up")(style="background-color:#C0F6F2 !important")
          .bloque-texto-gg__texto.p-4
            p Esta clasificación permite comprender que los patrones no se aplican todos para el mismo propósito, sino que cada grupo responde a necesidades diferentes dentro del diseño de #[i software].
            p.mb-0 En síntesis, comprender el concepto y la clasificación de los patrones de diseño permite seleccionar soluciones adecuadas para organizar el sistema de manera eficiente, mejorar la reutilización del código y facilitar la evolución del #[i software] a lo largo del tiempo.
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema4/img-11.png')})`}"
          )

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Patrones creacionales, estructurales y comportamentales

    p Los patrones de diseño pueden agruparse en tres grandes categorías según el tipo de problema que buscan resolver dentro del sistema. Estas categorías permiten comprender cómo se organiza el #[i software], cómo se crean los objetos y cómo interactúan entre sí los diferentes componentes de una aplicación.
    p.mb-4 Cada grupo de patrones aborda un aspecto específico del diseño orientado a objetos, lo que facilita la construcción de sistemas más estructurados, flexibles y mantenibles.

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row(titulo="a) Patrones creacionales")
        .col-12.mb-0.mb-md-0
          p Se enfocan en la forma en que se crean los objetos dentro del sistema. Su propósito es controlar el proceso de instanciación, evitando dependencias rígidas entre las clases y permitiendo que el sistema sea más flexible frente a cambios.
          p Estos patrones ayudan a separar la lógica de creación de objetos de la lógica principal del sistema, lo que facilita la reutilización del código y la adaptación a diferentes contextos de ejecución.
          .row.justify-content-center
            .col-lg-10.col-12
              .titulo-sexto.color-acento-contenido
                h5 Tabla 7.
                span Ejemplos de patrones creacionales
              .tabla-a.color-acento-contenido.mb-4
                table
                  thead
                    tr
                      th(style="width: 20%; background-color: #FFEEBC;") Patrón
                      th(style="width: 20%; background-color: #FFEEBC;") Descripción
                      th(style="width: 20%; background-color: #FFEEBC;") Uso principal
                  tbody
                    tr
                      td(style="background-color: #F0F8FF;") Singleton
                      td(style="background-color: #F0F8FF;") Garantiza que una clase tenga una única instancia durante la ejecución del sistema.
                      td(style="background-color: #F0F8FF;") Controlar el acceso a recursos compartidos.
                    tr
                      td(style="background-color: #FFFF;") Factory Method
                      td(style="background-color: #FFFF;") Define una interfaz para crear objetos sin especificar su clase concreta.
                      td(style="background-color: #FFFF;") Delegar la creación de objetos.
                    tr
                      td(style="background-color: #F0F8FF;") Abstract Factory
                      td(style="background-color: #F0F8FF;") Permite crear familias de objetos relacionados sin especificar sus clases concretas.
                      td(style="background-color: #F0F8FF;") Construcción de sistemas configurables.
                    tr
                      td(style="background-color: #FFFF;") Builder
                      td(style="background-color: #FFFF;") Separa la construcción de un objeto complejo de su representación final.
                      td(style="background-color: #FFFF;") Crear objetos paso a paso.

              .cajon.cajon.C04.p-3.mb-4
                p.mb-0.text-white.text-center Para complementar la información sobre patrones creacionales, se recomienda acceder al siguiente video.
              
              figure.mb-4(data-aos="zoom-in")
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/_KZkbL0MMbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption Video: Leyenda del video

      .row(titulo="b) Patrones estructurales")
        .col-12.mb-0.mb-md-0
          p Se centran en la organización de las clases y objetos dentro del sistema. Su objetivo es facilitar la forma en que los componentes se relacionan entre sí para construir estructuras más claras y eficientes.
          p Estos patrones permiten combinar diferentes clases para formar estructuras más complejas sin perder flexibilidad ni aumentar innecesariamente el acoplamiento entre los componentes del sistema.
          .row.justify-content-center
            .col-lg-10.col-12
              .titulo-sexto.color-acento-contenido
                h5 Tabla 8.
                span Ejemplos de patrones estructurales
              .tabla-a.color-acento-contenido.mb-4
                table
                  thead
                    tr
                      th(style="width: 20%; background-color: #FFEEBC;") Patrón
                      th(style="width: 20%; background-color: #FFEEBC;") Descripción
                      th(style="width: 20%; background-color: #FFEEBC;") Uso principal
                  tbody
                    tr
                      td(style="background-color: #F0F8FF;") Adapter
                      td(style="background-color: #F0F8FF;") Permite que clases con interfaces incompatibles trabajen juntas.
                      td(style="background-color: #F0F8FF;") Integrar componentes existentes.
                    tr
                      td(style="background-color: #FFFF;") Facade
                      td(style="background-color: #FFFF;") Proporciona una interfaz simplificada para un conjunto de clases complejas.
                      td(style="background-color: #FFFF;") Simplificar el acceso a subsistemas.
                    tr
                      td(style="background-color: #F0F8FF;") Composite
                      td(style="background-color: #F0F8FF;") Permite tratar objetos individuales y composiciones de objetos de forma uniforme.
                      td(style="background-color: #F0F8FF;") Representar estructuras jerárquicas.
                    tr
                      td(style="background-color: #FFFF;") Decorator
                      td(style="background-color: #FFFF;") Añade funcionalidades a un objeto de manera dinámica.
                      td(style="background-color: #FFFF;") Extender comportamiento sin modificar la clase.

      .row(titulo="c) Patrones comportamentales")
        .col-12.mb-0.mb-md-0
          p Se enfocan en la comunicación entre objetos y en la forma en que se distribuyen las responsabilidades dentro del sistema. Estos patrones permiten definir cómo interactúan los componentes para ejecutar tareas de manera coordinada.
          p Su aplicación facilita la organización de la lógica del sistema y permite reducir el acoplamiento entre los diferentes elementos que participan en un proceso.
          .row.justify-content-center
            .col-lg-10.col-12
              .titulo-sexto.color-acento-contenido
                h5 Tabla 9.
                span Ejemplos de patrones comportamentales
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 20%; background-color: #FFEEBC;") Patrón
                      th(style="width: 20%; background-color: #FFEEBC;") Descripción
                      th(style="width: 20%; background-color: #FFEEBC;") Uso principal
                  tbody
                    tr
                      td(style="background-color: #F0F8FF;") Observer
                      td(style="background-color: #F0F8FF;") Permite que varios objetos sean notificados cuando cambia el estado de otro objeto.
                      td(style="background-color: #F0F8FF;") Sistemas de eventos o notificaciones.
                    tr
                      td(style="background-color: #FFFF;") Strategy
                      td(style="background-color: #FFFF;") Define diferentes algoritmos intercambiables para realizar una tarea.
                      td(style="background-color: #FFFF;") Seleccionar comportamientos dinámicamente.
                    tr
                      td(style="background-color: #F0F8FF;") Command
                      td(style="background-color: #F0F8FF;") Encapsula una solicitud como un objeto independiente.
                      td(style="background-color: #F0F8FF;") Desacoplar quien solicita la acción de quien la ejecuta.
                    tr
                      td(style="background-color: #FFFF;") State
                      td(style="background-color: #FFFF;") Permite que un objeto cambie su comportamiento según su estado interno.
                      td(style="background-color: #FFFF;") Modelar comportamientos dependientes del estado.

    .row.justify-content-center.align-items-center
      .col-lg-10
        figure.mb-4
          img(src='@/assets/curso/tema4/img-12.png', alt='')

        p En síntesis, los patrones creacionales, estructurales y comportamentales ofrecen soluciones organizadas para diferentes aspectos del diseño de #[i software]. Su aplicación permite desarrollar sistemas más flexibles, reutilizables y fáciles de mantener dentro de los procesos de desarrollo orientados a objetos.

</template>

<script>
export default {
  name: 'Tema4',
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
