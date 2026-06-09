<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos del diseño orientado a objetos

    p.mb-4 El diseño orientado a objetos es un enfoque de desarrollo de #[i software] que organiza los sistemas a partir de objetos, los cuales representan entidades del mundo real o conceptos del dominio del problema. Cada objeto integra datos y comportamientos, lo que permite estructurar el #[i software] de manera modular, comprensible y fácil de mantener.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Este enfoque se basa en la idea de que un sistema puede modelarse mediante la interacción de diferentes objetos que colaboran entre sí para cumplir determinadas funciones. Cada objeto posee atributos que representan su estado y métodos que definen las acciones que puede realizar.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p El diseño orientado a objetos facilita la construcción de sistemas más organizados y adaptables, ya que permite dividir la complejidad del #[i software] en componentes más pequeños e independientes. De esta manera, es posible modificar o ampliar ciertas partes del sistema sin afectar de forma significativa el funcionamiento del resto de la aplicación.
        p Entre las características que distinguen este enfoque se encuentran:

        .tarjeta-bg02.p-4.mb-4
          .row.justify-content-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img-02.svg", alt="alt").img100.m-auto
            .col-lg-10
              ul.lista-ul.mb-0
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | Representación del sistema mediante clases y objetos.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | Encapsulación de datos y comportamientos en una misma estructura.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | Reutilización de código a través de mecanismos como la herencia y la composición.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | Flexibilidad para extender o modificar funcionalidades del sistema.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  span Organización modular que facilita el mantenimiento y evolución del #[i software].

        p El diseño orientado a objetos se utiliza ampliamente en el desarrollo de aplicaciones modernas, ya que permite construir sistemas más robustos y escalables. Además, este enfoque se integra con herramientas de modelado como los diagramas del lenguaje UML, los cuales permiten representar de manera estructurada los elementos que conforman el sistema antes de su implementación.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Conceptos del diseño orientado a objetos

    p El diseño orientado a objetos se fundamenta en un conjunto de conceptos que permiten estructurar el #[i software] mediante componentes independientes que interactúan entre sí. Estos conceptos facilitan la organización del código, la reutilización de funcionalidades y la construcción de sistemas más flexibles y mantenibles.
    p.mb-4 A continuación, se presentan algunos de los conceptos más importantes utilizados en el diseño orientado a objetos.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img-03.svg' alt='AvatarTop')
          h4.text-center Encapsulamiento
          p.mb-0 Consiste en agrupar los datos y los métodos que operan sobre ellos dentro de una misma estructura denominada clase. Este principio permite controlar el acceso a la información interna de los objetos, evitando modificaciones directas que puedan afectar el funcionamiento del sistema.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img-04.svg' alt='AvatarTop')
          h4.text-center Herencia
          p.mb-0 Permite crear nuevas clases a partir de otras ya existentes. La clase derivada hereda atributos y métodos de la clase base, lo que facilita la reutilización de código y la extensión de funcionalidades sin duplicar estructuras.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img-05.svg' alt='AvatarTop')
          h4.text-center Polimorfismo
          p.mb-0 Permite que diferentes objetos respondan de manera distinta a un mismo mensaje o método. Esto significa que una misma operación puede ejecutarse de formas diferentes dependiendo del tipo de objeto que la utilice.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img-06.svg' alt='AvatarTop')
          h4.text-center Composición
          p.mb-0 Se refiere a la construcción de objetos complejos a partir de otros objetos más simples. Este mecanismo permite modelar relaciones de “parte de” dentro del sistema, promoviendo estructuras más organizadas y reutilizables.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img-07.svg' alt='AvatarTop')
          h4.text-center Interfaces
          p.mb-0 Se definen un conjunto de métodos que una clase debe implementar. No describen cómo se ejecuta una acción, sino qué operaciones deben estar disponibles, lo que permite establecer contratos de comportamiento entre diferentes componentes del sistema.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img-08.svg' alt='AvatarTop')
          h4.text-center Cohesión
          p.mb-0 Se relaciona con el grado en que los elementos de una clase o módulo están enfocados en una única responsabilidad. Una alta cohesión indica que los componentes cumplen funciones claramente definidas dentro del sistema.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img-09.svg' alt='AvatarTop')
          h4.text-center Acoplamiento
          p.mb-0 Describe el nivel de dependencia entre diferentes clases o módulos. En un diseño adecuado se busca mantener un bajo acoplamiento, de manera que los cambios en un componente no afecten significativamente a los demás.

    .row.justify-content-center
      .col-lg-10
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0 Estos conceptos constituyen la base del diseño orientado a objetos y permiten construir sistemas organizados, flexibles y fáciles de evolucionar. En el siguiente apartado se presentan los principios que orientan la calidad del diseño de #[i software].

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Principios de calidad en el diseño de #[i software]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tarjeta-bg01.p-4
          .row.justify-content-center
            .col-lg-1.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img-10.svg", alt="alt").img100.m-auto
            .col-lg-11
              p El diseño de #[i software] no solo busca estructurar correctamente los componentes de un sistema, sino también garantizar que el producto resultante cumpla con criterios de calidad que faciliten su evolución, mantenimiento y adaptación a diferentes contextos tecnológicos. Para ello, el diseño orientado a objetos se apoya en una serie de principios que orientan la construcción de sistemas eficientes, robustos y sostenibles en el tiempo.

    p Estos principios permiten evaluar si una solución técnica es adecuada y si el sistema podrá responder a cambios futuros sin generar altos costos de modificación.
    p.mb-4 A continuación, se presentan algunos de los principios de calidad más relevantes en el diseño de #[i software].

    .cajon.tabs-a__tab.p-5.mb-4
      SlyderB(:datos="datosSlyder")  

    .row.justify-content-center.align-items-center
      .col-lg-10
        p La aplicación de estos principios permite desarrollar sistemas más robustos, sostenibles y preparados para evolucionar a lo largo del tiempo. Estos criterios se complementan con técnicas de modelado que permiten representar la estructura del sistema antes de su implementación.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Adaptabilidad',
        texto:
          'Se refiere a la capacidad del sistema para ajustarse a cambios en el entorno, en los requerimientos o en las tecnologías utilizadas. Un diseño adaptable facilita la incorporación de nuevas funcionalidades sin alterar significativamente la estructura existente.',
        imagen: require('@/assets/curso/tema2/img-11.png'),
      },
      {
        titulo: 'Extensibilidad',
        texto:
          'Permite ampliar las capacidades del sistema mediante la adición de nuevos módulos o componentes. Un sistema extensible está preparado para crecer sin necesidad de modificar el código base de manera profunda.',
        imagen: require('@/assets/curso/tema2/img-12.png'),
      },
      {
        titulo: 'Mantenibilidad',
        texto:
          'Describe la facilidad con la que el <em>software</em> puede ser corregido, actualizado o mejorado. Un diseño claro, modular y bien documentado facilita la identificación de errores y la implementación de mejoras.',
        imagen: require('@/assets/curso/tema2/img-13.png'),
      },
      {
        titulo: 'Reusabilidad',
        texto:
          'Implica que los componentes del sistema puedan utilizarse en otros proyectos o en diferentes partes del mismo sistema. Esto reduce el tiempo de desarrollo y mejora la consistencia del <em>software</em>.',
        imagen: require('@/assets/curso/tema2/img-14.png'),
      },
      {
        titulo: 'Desempeño',
        texto:
          'Se relaciona con la eficiencia con la que el sistema utiliza los recursos disponibles, como memoria, procesamiento y almacenamiento. Un diseño adecuado busca optimizar estos recursos para garantizar un funcionamiento rápido y estable.',
        imagen: require('@/assets/curso/tema2/img-15.png'),
      },
      {
        titulo: 'Escalabilidad',
        texto:
          'Hace referencia a la capacidad del sistema para soportar un aumento en la carga de trabajo, ya sea en número de usuarios, volumen de datos o transacciones. Un sistema escalable puede crecer sin comprometer su rendimiento.',
        imagen: require('@/assets/curso/tema2/img-16.png'),
      },
      {
        titulo: 'Confiabilidad',
        texto:
          'Indica el grado en que el sistema funciona correctamente durante un periodo determinado sin presentar fallos. Un diseño confiable incorpora mecanismos que permiten prevenir errores y garantizar la estabilidad del sistema.',
        imagen: require('@/assets/curso/tema2/img-17.png'),
      },
      {
        titulo: 'Eficiencia',
        texto:
          'Se relaciona con la utilización adecuada de los recursos del sistema para cumplir con los objetivos funcionales sin generar desperdicio de capacidad computacional.',
        imagen: require('@/assets/curso/tema2/img-18.png'),
      },
    ],
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
