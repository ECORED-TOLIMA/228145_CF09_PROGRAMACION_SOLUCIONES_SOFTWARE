<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Modelado orientado a objetos

    p.mb-4 El modelado orientado a objetos es una técnica utilizada para representar de manera estructurada los elementos que componen un sistema de software y las relaciones que existen entre ellos. Este proceso permite visualizar la organización del sistema antes de su implementación, facilitando la comprensión del diseño y la comunicación entre los diferentes miembros del equipo de desarrollo.

    .bloque-texto-gg.bloque-texto-gg--inverso.color-primario.mb-4(data-aos="flip-up")(style="background-color:#68EAE0 !important")
      .bloque-texto-gg__texto.p-4
        p A través del modelado, los diseñadores pueden describir cómo se estructuran las clases, cómo interactúan los componentes y cómo se distribuyen los elementos dentro de la arquitectura del sistema. Esta representación ayuda a identificar posibles problemas en etapas tempranas del desarrollo y permite realizar ajustes antes de iniciar la fase de programación.
        p.mb-0 El modelado orientado a objetos se apoya en diagramas que permiten representar diferentes perspectivas del sistema. Estos diagramas forman parte del Lenguaje Unificado de Modelado (UML), ampliamente utilizado en la ingeniería de software para documentar y comunicar decisiones de diseño.
      .bloque-texto-gg__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema3/img-01.png')})`}"
      )

    p.text-center Entre los principales objetivos del modelado se encuentran los siguientes:

    .row.mb-4
      .col-lg.col-md-6.tarjeta-bg01.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img-02.svg' alt="Imagen decorativa")
        ul.lista-ul.mb-0
          li.mb-0
            i.lista-ul__vineta
            p Representar la estructura del sistema de manera clara y organizada.
      .col-lg.col-md-6.tarjeta-bg02.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img-03.svg' alt="Imagen decorativa")
        ul.lista-ul.mb-0
          li.mb-0
            i.lista-ul__vineta
            p Identificar las clases, sus atributos y métodos.
      .col-lg.col-md-6.tarjeta-bg01.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img-04.svg' alt="Imagen decorativa")
        ul.lista-ul.mb-0
          li.mb-0
            i.lista-ul__vineta
            p Definir las relaciones entre los diferentes elementos del sistema.
      .col-lg.col-md-6.tarjeta-bg02.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img-05.svg' alt="Imagen decorativa")
        ul.lista-ul.mb-0
          li.mb-0
            i.lista-ul__vineta
            p Visualizar cómo se distribuyen los componentes en la arquitectura.
      .col-lg.col-md-6.tarjeta-bg01.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img-06.svg' alt="Imagen decorativa")
        ul.lista-ul.mb-0
          li.mb-0
            i.lista-ul__vineta
            p Facilitar la documentación del diseño de software.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p El uso de modelos permite reducir la complejidad del sistema, ya que proporciona una representación conceptual que sirve como guía para el desarrollo. De esta manera, el equipo puede analizar el comportamiento del sistema, evaluar alternativas de diseño y tomar decisiones informadas antes de escribir código.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1. Diagramas de clases y sus elementos

    p.mb-4 El diagrama de clases es uno de los modelos más utilizados en el diseño orientado a objetos, ya que permite representar la estructura estática de un sistema. En este tipo de diagrama se describen las clases que componen el sistema, junto con sus atributos, métodos y las relaciones que existen entre ellas.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Este tipo de representación facilita comprender cómo se organiza la información dentro del sistema y cómo interactúan los diferentes elementos que lo componen. Por esta razón, los diagramas de clases se utilizan con frecuencia durante la etapa de diseño para planificar la estructura del software antes de iniciar la programación.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Una clase representa una plantilla o modelo que define las características y comportamientos de un conjunto de objetos. Cada clase puede incluir atributos, que describen las propiedades del objeto, y métodos, que representan las acciones que puede realizar.
        p Los diagramas de clases están compuestos por diferentes elementos que permiten representar la estructura del sistema de manera clara.

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3.
          span Elementos principales de un diagrama de clases
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Elemento
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
                th(style="width: 20%; background-color: #FFEEBC;") Ejemplo
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Clase.
                td(style="background-color: #F0F8FF;") Representa una entidad del sistema que agrupa atributos y métodos.
                td(style="background-color: #F0F8FF;") Clase Usuario
              tr(data-aos="fade-right")
                td Atributos.
                td Propiedades que describen las características de la clase.
                td nombre, correo, contraseña
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Métodos.
                td(style="background-color: #F0F8FF;") Funciones o comportamientos que puede realizar la clase.
                td(style="background-color: #F0F8FF;") iniciarSesion(), registrarUsuario()
              tr(data-aos="fade-right")
                td Asociación.
                td Relación entre dos clases que indica interacción o dependencia.
                td Usuario realiza Pedido
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Herencia.
                td(style="background-color: #F0F8FF;") Relación donde una clase hereda características de otra.
                td(style="background-color: #F0F8FF;") Empleado hereda de Persona
              tr(data-aos="fade-right")
                td Composición.
                td Relación fuerte donde un objeto depende completamente de otro.
                td Pedido contiene DetallePedido
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Agregación.
                td(style="background-color: #F0F8FF;") Relación donde una clase agrupa a otra, pero ambas pueden existir de forma independiente.
                td(style="background-color: #F0F8FF;") Curso contiene Estudiantes

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 Representación básica de una clase: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Clase en UML

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/figura-1-1v.svg', alt='En la figura 1 se presenta un diagrama explicativo sobre una clase en UML. En el centro aparece un rectángulo con un ícono de computadora y texto general, conectado mediante líneas a tres recuadros. Cada recuadro describe una parte de la clase: el nombre en la parte superior, los atributos que representan características del objeto y los métodos que indican las operaciones que puede realizar.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema3/figura-1-2v.svg', alt='En la figura 1 se presenta un diagrama explicativo sobre una clase en UML. En el centro aparece un rectángulo con un ícono de computadora y texto general, conectado mediante líneas a tres recuadros. Cada recuadro describe una parte de la clase: el nombre en la parte superior, los atributos que representan características del objeto y los métodos que indican las operaciones que puede realizar.', style="width: 1043px").m-auto

    p.text-center A continuación, se presenta un ejemplo conceptual simplificado de la estructura de una clase:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span Ejemplo conceptual de una clase
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Clase
                th(style="width: 20%; background-color: #FFEEBC;") Atributos
                th(style="width: 20%; background-color: #FFEEBC;") Métodos
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Usuario
                td(style="background-color: #F6F6F6;") 
                  p.mb-1 idUsuario 
                  p.mb-1 nombre() 
                  p.mb-1 correo 
                  p contraseña
                td(style="background-color: #F6F6F6;") 
                  p.mb-1 registrar() 
                  p.mb-1 iniciarSesion() 
                  p cerrarSesion()

        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p Esta estructura permite representar de forma organizada la información que pertenece a cada clase dentro del sistema.
          p.mb-0 Además de representar clases individuales, los diagramas de clases permiten describir las relaciones entre los diferentes elementos del sistema. Estas relaciones ayudan a comprender cómo interactúan las clases dentro de la aplicación.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 Las relaciones más comunes son:

    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema3/img-08.svg", alt="alt").img80.m-auto
          h4.text-center Asociación
          p Indica que dos clases se relacionan entre sí.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema3/img-09.svg", alt="alt").img80.m-auto
          h4.text-center Herencia
          p Permite reutilizar características de una clase base en otra clase derivada.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema3/img-10.svg", alt="alt").img80.m-auto
          h4.text-center Agregación
          p Representa una relación donde un objeto contiene a otro, pero ambos pueden existir de forma independiente.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema3/img-11.svg", alt="alt").img80.m-auto
          h4.text-center Composición
          p Indica una relación fuerte donde un objeto no puede existir sin el otro.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Para comprender mejor estas relaciones, se puede considerar un ejemplo conceptual aplicado a un sistema de gestión de biblioteca. En este sistema intervienen las clases Libro, Usuario y Préstamo.
        .tarjeta-bg01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/tema3/img-12.svg", alt="alt").img100.m-auto
            .col-lg-10
              p Un Usuario puede solicitar uno o varios Préstamos, mientras que cada Préstamo se asocia con un Libro específico. Además, el sistema registra información relevante como la fecha de préstamo y la fecha de devolución.
              p.mb-0 El diagrama de clases permite representar estas relaciones y comprender la estructura del sistema antes de implementar la solución.
        p En síntesis, los diagramas de clases constituyen una herramienta fundamental para el diseño de software, ya que permiten organizar la estructura del sistema, identificar las relaciones entre los componentes y facilitar la documentación del diseño dentro del proceso de desarrollo orientado a objetos.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2. Vistas del sistema

    p.mb-4 En el proceso de diseño de software, los sistemas suelen ser complejos y están compuestos por múltiples componentes que interactúan entre sí. Para facilitar su comprensión y organización, se utilizan vistas del sistema, las cuales permiten representar el sistema desde diferentes perspectivas.

    .row.no-gutters.align-items-center.style___box_1.m-0.mb-4(data-aos="zoom-in")
      .col-xl.px-0
        p Cada vista describe un aspecto particular del sistema, lo que permite analizarlo de manera estructurada sin necesidad de prestar atención a todos sus elementos al mismo tiempo. De esta forma, las vistas ayudan a comprender cómo funciona el sistema, cómo se organiza y cómo interactúan sus componentes.
        p.mb-0 El uso de vistas resulta especialmente útil en proyectos de desarrollo de software, ya que diferentes actores como analistas, diseñadores, desarrolladores o arquitectos, pueden enfocarse en la información que resulta más relevante para su rol.
      .col-xl-auto.px-0.col-img-box
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema3/img-13.png', alt='').m-auto

    p.mb-4 En el diseño de software existen diferentes tipos de vistas que permiten representar diversos aspectos del sistema.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          span Principales vistas del sistema
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Vista
                th(style="width: 20%; background-color: #FFEEBC;") Qué describe
                th(style="width: 20%; background-color: #FFEEBC;") Propósito en el diseño
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Vista lógica.
                td(style="background-color: #F0F8FF;") Representa la estructura del sistema y la organización de las clases y objetos.
                td(style="background-color: #F0F8FF;") Comprender la organización funcional del sistema.
              tr(data-aos="fade-right")
                td Vista de procesos.
                td Describe la interacción y comunicación entre procesos o componentes.
                td Analizar el comportamiento dinámico del sistema.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Vista de desarrollo.
                td(style="background-color: #F0F8FF;") Muestra cómo se organizan los componentes del software dentro del entorno de desarrollo.
                td(style="background-color: #F0F8FF;") Facilitar la organización del código y los módulos.
              tr(data-aos="fade-right")
                td Vista física o de despliegue.
                td Representa cómo se distribuyen los componentes del sistema en el hardware o infraestructura.
                td Planificar la implementación del sistema.

        p.mb-4 Cada una de estas vistas permite analizar el sistema desde una perspectiva diferente, lo que facilita la toma de decisiones durante el diseño y la planificación del software.

        .cajon.cajon.C02.p-4.mb-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-2.order-2
              h4 Relación entre las vistas del sistema
              p Las vistas no se utilizan de forma aislada, sino que se complementan entre sí para ofrecer una comprensión integral del sistema. Mientras una vista permite analizar la estructura lógica del software, otra puede mostrar su comportamiento o su distribución en la infraestructura tecnológica.
              .cajon.cajon.C03.p-4.mb-4
                p.mb-0 Por ejemplo, la vista lógica permite identificar las clases y relaciones del sistema mediante diagramas de clases, mientras que la vista de despliegue permite comprender cómo se distribuyen los componentes en servidores o dispositivos dentro de una infraestructura tecnológica.
              p.mb-0 Esta combinación de perspectivas permite a los equipos de desarrollo diseñar sistemas más organizados, escalables y fáciles de mantener.
            .col.col-lg-2.col-5.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema3/img-14.svg', alt='Imagen decorativa')

        p En síntesis, las vistas del sistema constituyen una herramienta fundamental en el modelado de software, ya que permiten representar diferentes aspectos del sistema de manera estructurada, facilitando la comunicación entre los miembros del equipo y apoyando la toma de decisiones durante el proceso de diseño.


</template>

<script>
export default {
  name: 'Tema3',
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
