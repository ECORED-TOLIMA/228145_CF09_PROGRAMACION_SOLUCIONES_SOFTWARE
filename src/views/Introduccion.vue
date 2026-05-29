<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 El diseño de #[i software] es una etapa fundamental en el desarrollo de sistemas informáticos, ya que permite transformar los requerimientos identificados durante el análisis en una estructura organizada que guíe la construcción de la solución tecnológica. En este proceso, las decisiones de diseño influyen directamente en la calidad, el rendimiento, la escalabilidad y la mantenibilidad del sistema.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/introduccion/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Uno de los enfoques más utilizados en la ingeniería de #[i software] es el diseño orientado a objetos, el cual propone organizar los sistemas a partir de objetos que interactúan entre sí mediante atributos y métodos. Este enfoque permite representar de manera más natural los elementos del mundo real dentro del #[i software] y facilita la reutilización, la modularidad y la evolución de las aplicaciones.
        br
        br
        p.mb-0 Para apoyar este proceso de diseño se emplean herramientas de modelado, como los diagramas de clases, de componentes y de despliegue, que permiten representar la estructura del sistema y las relaciones entre sus elementos. Asimismo, se utilizan patrones de diseño que ofrecen soluciones probadas a problemas comunes en el desarrollo de #[i software].

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        p De igual forma, la arquitectura de #[i software] define la organización general del sistema, los componentes que lo conforman y la manera en que interactúan entre sí. En este contexto, han surgido diferentes enfoques arquitectónicos como cliente-servidor, arquitectura orientada a servicios, microservicios y modelos modernos de desarrollo apoyados por prácticas como DevOps e integración continua.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0 En conjunto, estos elementos permiten construir sistemas de #[i software] robustos, escalables y adaptables a los cambios, facilitando su evolución y mantenimiento a lo largo del tiempo.

        p Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CCfi6k0nmHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video


</template>

<script>
export default {
  name: 'Introduccion',
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
