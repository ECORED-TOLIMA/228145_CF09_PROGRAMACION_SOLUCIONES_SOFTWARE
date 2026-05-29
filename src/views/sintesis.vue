<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos y procesos esenciales para el diseño de software, iniciando con el análisis de requerimientos y la interpretación del informe de análisis como base para la toma de decisiones de diseño. Posteriormente, se presentan los principios del diseño orientado a objetos y los criterios de calidad que orientan la construcción de soluciones estructuradas y mantenibles. A partir de estos fundamentos, se estudian herramientas de modelado como los diagramas de clases y las vistas del sistema, que permiten representar la estructura y organización de una aplicación. Asimismo, se analizan los patrones de diseño y su clasificación, junto con los principales enfoques de arquitectura de software, incluyendo modelos como cliente-servidor y Modelo Vista Controlador (MVC). Finalmente, se examinan arquitecturas modernas y prácticas actuales de desarrollo, como servicios, APIs, microservicios, serverless y DevOps, además de las plataformas tecnológicas, los motores de bases de datos y los documentos de diseño que permiten definir y documentar la arquitectura candidata de un sistema.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt=" En la síntesis se presenta una descripción general de los aspectos fundamentales del diseño de software, incluyendo el análisis de requerimientos, los principios del diseño orientado a objetos, el modelado del sistema y el uso de patrones de diseño. Asimismo, se abordan diferentes arquitecturas de software, prácticas modernas de desarrollo y las plataformas tecnológicas utilizadas para documentar y definir la arquitectura de un sistema.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
