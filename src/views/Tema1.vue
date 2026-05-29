<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Análisis y toma de decisiones en el diseño de #[i software]

    p.mb-4 El análisis en el diseño de #[i software] corresponde a la etapa en la que se estudian los requerimientos del sistema con el fin de comprender el problema que se desea resolver y definir una base clara para la construcción de la solución tecnológica. Durante este proceso se revisa la información obtenida en la fase de análisis del sistema, identificando las necesidades de los usuarios, las funciones que debe cumplir la aplicación y las condiciones del entorno en el que operará.

    .bloque-texto-gg.bloque-texto-gg--inverso.color-primario.mb-4(data-aos="flip-up")(style="background-color:#68EAE0 !important")
      .bloque-texto-gg__texto.p-4
        p A partir de esta comprensión inicial, el equipo de desarrollo puede transformar los requerimientos en decisiones de diseño que orienten la estructura del #[i software]. Estas decisiones influyen en la organización de los componentes del sistema, la forma en que interactúan entre sí y las tecnologías que pueden emplearse para su implementación.
        p.mb-0 El análisis no se limita únicamente a revisar los requerimientos funcionales del sistema. También implica considerar aspectos relacionados con el desempeño, la seguridad, la escalabilidad y la facilidad de mantenimiento del #[i software], ya que estos factores influyen directamente en la calidad y sostenibilidad de la solución desarrollada.
      .bloque-texto-gg__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema1/img-01v.png')})`}"
      )

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-02.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") En este contexto, la toma de decisiones en el diseño de #[i software] requiere evaluar diferentes alternativas de solución y seleccionar aquellas que permitan responder de manera adecuada a las necesidades del proyecto. Para ello, es necesario analizar el problema desde una perspectiva técnica y funcional, considerando los recursos disponibles, las restricciones del entorno y los objetivos del sistema.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0 Un proceso de análisis bien estructurado permite reducir riesgos en el desarrollo, mejorar la organización del sistema y facilitar la implementación de soluciones que sean comprensibles, adaptables y mantenibles a lo largo del tiempo. Por esta razón, el análisis y la toma de decisiones constituyen una base fundamental dentro del proceso de diseño de #[i software].

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1. Interpretación del informe de análisis

    p.mb-4 La interpretación del informe de análisis consiste en examinar y comprender la información obtenida durante el levantamiento de requerimientos del sistema. Este informe reúne los resultados del estudio del problema, las necesidades de los usuarios, las funcionalidades esperadas y las restricciones que pueden influir en el desarrollo del #[i software].

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta-bg01.p-4.mb-4
          .row.justify-content-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img-03.svg", alt="alt").img100.m-auto
            .col-lg-10
              p Una correcta interpretación permite transformar esta información en una base clara para el diseño del sistema, ya que facilita comprender qué debe hacer la aplicación y bajo qué condiciones deberá operar.
              p.mb-0 Durante este proceso se analizan distintos elementos del informe con el fin de garantizar que los requerimientos sean comprensibles y útiles para la etapa de diseño.

    p.text-center Entre los aspectos que normalmente se revisan se encuentran los siguientes:

    .BG06.px-md-5.p-lg-0.p-4.mb-4
      .row.justify-content-center.align-items-end.my-0.BG06-row
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img-04.png", alt="alt")
        .col-lg-8 
          SlyderF.custom.color-acento-botones(columnas="col-lg-4 col-xl-4")
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema1/img-05.svg", alt="alt")
              p.text-center Requerimientos funcionales del sistema.
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema1/img-06.svg", alt="alt")
              p.text-center Requerimientos no funcionales relacionados con rendimiento, seguridad o disponibilidad.
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema1/img-07.svg", alt="alt")
              p.text-center Actores o usuarios que interactúan con el sistema.
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema1/img-08.svg", alt="alt")
              p.text-center Procesos o flujos de información que debe soportar la aplicación.
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema1/img-09.svg", alt="alt")
              p.text-center Restricciones técnicas o de negocio que condicionan el desarrollo.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-4 La interpretación también implica revisar la calidad de la información presentada en el informe de análisis. En esta etapa se busca identificar posibles ambigüedades, inconsistencias o vacíos que puedan afectar el diseño del sistema.

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Elementos analizados en la interpretación del informe
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Elemento del informe
                th(style="width: 20%; background-color: #FFEEBC;") Qué se analiza
                th(style="width: 20%; background-color: #FFEEBC;") Importancia para el diseño
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Requerimientos funcionales.
                td(style="background-color: #F0F8FF;") Funciones que debe cumplir el sistema.
                td(style="background-color: #F0F8FF;") Permiten definir módulos o componentes.
              tr(data-aos="fade-right")
                td Requerimientos no funcionales.
                td Calidad del sistema (rendimiento, seguridad y disponibilidad).
                td Influyen en la arquitectura del #[i software].
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Actores del sistema.
                td(style="background-color: #F0F8FF;") Usuarios o sistemas externos que interactúan.
                td(style="background-color: #F0F8FF;") Orientan el diseño de interfaces.
              tr(data-aos="fade-right")
                td Procesos del sistema.
                td Flujo de actividades y operaciones.
                td Definen la lógica de funcionamiento.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Restricciones.
                td(style="background-color: #F0F8FF;") Limitaciones técnicas o de negocio.
                td(style="background-color: #F0F8FF;") Condicionan decisiones tecnológicas.

        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0 En síntesis, la interpretación del informe de análisis permite comprender de manera estructurada los requerimientos del sistema y constituye la base para la toma de decisiones durante el diseño del #[i software].

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2. Análisis de requerimientos y toma de decisiones de diseño

    p.mb-4 El análisis de requerimientos es el proceso mediante el cual se examina y organiza la información obtenida durante la etapa de análisis del sistema con el propósito de comprender con mayor precisión las necesidades que debe satisfacer el #[i software]. A partir de este análisis se identifican las funcionalidades que debe ofrecer el sistema, las restricciones técnicas existentes y los criterios de calidad que orientarán su desarrollo.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.cajon.C01.p-4.mb-4
          p Este proceso permite transformar los requerimientos en insumos concretos para el diseño del sistema, facilitando la definición de su estructura, los componentes que lo integran y las tecnologías que se utilizarán en su implementación.
          p En el análisis de requerimientos se consideran principalmente los siguientes elementos:

          .row.requerimientos-grid.mb-4
            .col-lg-5.col-8.mb-4.mb-lg-0
              .bloque-texto-gg.tarjeta--fondo1
                .bloque-texto-gg__texto.p-4
                  p.mb-0 Identificación de funcionalidades que debe cumplir el sistema.
                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/tema1/img-10.svg')})`}"
                )           
            .col-lg-5.col-8.mb-4.mb-lg-0
              .bloque-texto-gg.tarjeta--fondo1
                .bloque-texto-gg__texto.p-4
                  p.mb-0 Evaluación de requisitos de calidad como rendimiento, seguridad o escalabilidad.
                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/tema1/img-11.svg')})`}"
                )           
            .col-lg-5.col-8.mb-4.mb-lg-0
              .bloque-texto-gg.tarjeta--fondo1
                .bloque-texto-gg__texto.p-4
                  p.mb-0 Determinación de los actores que interactúan con la aplicación.
                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/tema1/img-12.svg')})`}"
                )
            .col-lg-5.col-8.mb-4.mb-lg-0
              .bloque-texto-gg.tarjeta--fondo1
                .bloque-texto-gg__texto.p-4
                  p.mb-0 Priorización de funcionalidades según las necesidades del proyecto.
                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/tema1/img-13.svg')})`}"
                )
            .col-lg-5.col-8.mb-4.mb-lg-0
              .bloque-texto-gg.tarjeta--fondo1
                .bloque-texto-gg__texto.p-4
                  p.mb-0 Análisis de restricciones técnicas o de negocio.
                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/tema1/img-14.svg')})`}"
                )
        
        figure.mb-4
          img(src='@/assets/curso/tema1/img-15.png', alt='')

        p.mb-4 Una vez analizados los requerimientos, el equipo de desarrollo debe tomar decisiones de diseño que permitan definir la forma en que el sistema será construido. Estas decisiones influyen directamente en la arquitectura del #[i software], la organización de los componentes y las tecnologías seleccionadas.

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Relación entre análisis de requerimientos y decisiones de diseño
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Elemento analizado
                th(style="width: 20%; background-color: #FFEEBC;") Pregunta orientadora
                th(style="width: 20%; background-color: #FFEEBC;") Decisión de diseño asociada
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Funcionalidades del sistema.
                td(style="background-color: #F0F8FF;") ¿Qué debe hacer el sistema?
                td(style="background-color: #F0F8FF;") Definición de módulos o componentes.
              tr(data-aos="fade-right")
                td Usuarios o actores.
                td ¿Quién interactúa con el sistema?
                td Diseño de interfaces y flujos de interacción.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Restricciones técnicas.
                td(style="background-color: #F0F8FF;") ¿Qué limitaciones existen?
                td(style="background-color: #F0F8FF;") Selección de tecnologías y herramientas.
              tr(data-aos="fade-right")
                td Requisitos de calidad.
                td ¿Cómo debe comportarse el sistema?
                td Definición de arquitectura y patrones de diseño.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Prioridad de requerimientos.
                td(style="background-color: #F0F8FF;") ¿Qué funcionalidades son más importantes?
                td(style="background-color: #F0F8FF;") Planificación del desarrollo.

        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0 En este sentido, el análisis de requerimientos y la toma de decisiones de diseño se encuentran estrechamente relacionados, ya que cada decisión técnica debe basarse en la comprensión clara de las necesidades del sistema. Una adecuada interpretación de los requerimientos permite definir soluciones más coherentes, escalables y mantenibles dentro del proceso de desarrollo de #[i software].


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
