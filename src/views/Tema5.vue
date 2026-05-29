<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Arquitectura de #[i software]

    p.mb-4 La arquitectura de #[i software] constituye la estructura fundamental que define cómo se organizan los componentes de un sistema, cómo interactúan entre sí y cuáles son los principios que guían su construcción y evolución. En esta etapa del diseño se establecen las decisiones estructurales que permiten garantizar que el sistema cumpla con los requerimientos funcionales y no funcionales definidos durante el análisis.

    .row.no-gutters.align-items-center.style___box_2.m-0.mb-4(data-aos="zoom-in")
      .col-xl.px-0
        p Desde una perspectiva conceptual, la arquitectura describe la organización global del sistema, incluyendo sus módulos principales, las relaciones entre ellos, los mecanismos de comunicación y las tecnologías que soportan su funcionamiento. Estas decisiones permiten establecer una base sólida que orienta el desarrollo, facilita la comprensión del sistema y reduce riesgos asociados a cambios futuros.
        p.mb-0 El concepto de arquitectura de #[i software] comenzó a consolidarse como disciplina dentro de la ingeniería de #[i software] durante la década de 1990, cuando se reconoció la necesidad de estructurar los sistemas complejos mediante modelos y principios arquitectónicos. Autores como Mary Shaw y David Garlan contribuyeron significativamente al desarrollo del concepto moderno de arquitectura, destacando la importancia de describir los sistemas a través de componentes, conectores y configuraciones estructurales.
      .col-xl-auto.px-0.col-img-box
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema5/img-01.png', alt='').m-auto

    p De acuerdo con lo planteado en el libro #[i software] Architecture: Perspectives on an Emerging Discipline, la arquitectura permite comprender el sistema desde una visión de alto nivel que facilita la toma de decisiones técnicas, la comunicación entre los miembros del equipo y la planificación del crecimiento del sistema.
    p.mb-4 En el proceso de desarrollo de #[i software], definir la arquitectura implica analizar diversos aspectos del sistema, entre los que se destacan:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta-bg02.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/tema5/img-02.svg", alt="alt").img100.m-auto
            .col-lg-10
              ul.lista-ul
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | La organización de los componentes del sistema.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | Los mecanismos de interacción entre módulos o servicios.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | La distribución de responsabilidades entre los diferentes elementos.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | Las tecnologías que soportarán la implementación.
                li
                  i.fas.fa-computer(style="color: #FFC928 !important")
                  | Las cualidades de calidad que se desean garantizar, como escalabilidad, seguridad o mantenibilidad.

        p Una arquitectura bien definida permite reducir la complejidad del sistema y proporciona una guía clara para el desarrollo del #[i software]. Además, facilita la evolución del sistema a lo largo del tiempo, ya que establece principios estructurales que permiten incorporar nuevas funcionalidades sin afectar significativamente los componentes existentes.

        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p En síntesis, la arquitectura de #[i software] representa el marco estructural que orienta el diseño y la construcción de sistemas informáticos, permitiendo organizar sus componentes, definir sus interacciones y garantizar que el sistema cumpla con los objetivos técnicos y funcionales del proyecto.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1. Conceptos

    p.mb-4 La arquitectura de #[i software] corresponde a la organización estructural de un sistema, donde se definen los componentes que lo conforman, las relaciones entre ellos y los principios que orientan su diseño y evolución. Esta arquitectura actúa como un plano que guía el desarrollo del sistema, permitiendo comprender cómo se distribuyen sus funcionalidades y cómo interactúan los diferentes elementos que lo integran.

    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img-03.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p Desde una perspectiva conceptual, la arquitectura permite establecer una visión global del sistema antes de su implementación. Esto facilita tomar decisiones relacionadas con la organización de los componentes, la distribución de responsabilidades, la comunicación entre módulos y la selección de tecnologías que soportarán el funcionamiento del #[i software].
        p Según Len Bass, la arquitectura de #[i software] describe las estructuras de un sistema, los elementos que las componen, las propiedades visibles de dichos elementos y las relaciones que existen entre ellos. Esta definición resalta que la arquitectura no solo describe componentes, sino también la forma en que estos colaboran para cumplir los objetivos del sistema.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 En el proceso de desarrollo, la arquitectura cumple varias funciones importantes:

    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema5/img-04.svg", alt="alt").img80.m-auto
          p Proporciona una estructura organizativa para el sistema.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema5/img-05.svg", alt="alt").img80.m-auto
          p Facilita la comunicación entre los miembros del equipo de desarrollo.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema5/img-06.svg", alt="alt").img80.m-auto
          p Permite analizar decisiones técnicas antes de la implementación.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/tema5/img-07.svg", alt="alt").img80.m-auto
          p Sirve como base para la documentación y mantenimiento del #[i software].

    .row.justify-content-center.align-items-center
      .col-lg-10
        p De esta manera, la arquitectura se convierte en un elemento fundamental para asegurar que el sistema sea comprensible, escalable y fácil de mantener a lo largo del tiempo.

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 10.
          span Elementos conceptuales de la arquitectura de #[i software]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Elemento
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Componentes.
                td(style="background-color: #F0F8FF;") Partes del sistema que realizan funciones específicas.
              tr(data-aos="fade-right")
                td Conectores.
                td Mecanismos que permiten la comunicación entre componentes.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Configuración.
                td(style="background-color: #F0F8FF;") Forma en que se organizan y relacionan los componentes.
              tr(data-aos="fade-right")
                td Restricciones. 
                td Reglas o decisiones que condicionan la estructura del sistema.

        p En síntesis, los conceptos de arquitectura de #[i software] permiten comprender cómo se organiza un sistema a nivel estructural, proporcionando una base conceptual que orienta el diseño, la implementación y la evolución de las aplicaciones informáticas.

        .cajon.cajon.C04.p-3.mb-4
          p.mb-0.text-white.text-center Para complementar la información sobre la arquitectura de #[i software], se recomienda acceder al siguiente video.

        figure.mb-4(data-aos="zoom-in")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_KZkbL0MMbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Leyenda del video

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2. Tipos de arquitecturas y cualidades sistémicas

    p.mb-4 En el diseño de #[i software], la arquitectura puede organizarse de diferentes maneras según las necesidades del sistema, el tipo de aplicación y el entorno en el que se implementará. Estas organizaciones estructurales se conocen como tipos de arquitectura, y cada una define una forma particular de distribuir los componentes, las responsabilidades y la comunicación dentro del sistema.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta-bg01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/tema5/img-08.svg", alt="alt").img100.m-auto
            .col-lg-10
              p.mb-0 La elección de una arquitectura adecuada influye directamente en el rendimiento, la escalabilidad y la facilidad de mantenimiento del #[i software]. Por esta razón, durante el proceso de diseño es necesario evaluar las características del proyecto antes de seleccionar una arquitectura específica.

        p A continuación, se presentan algunos tipos de arquitecturas utilizados con frecuencia en el desarrollo de #[i software].

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 11.
          span Tipos de arquitecturas de #[i software]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Tipo de arquitectura
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
                th(style="width: 20%; background-color: #FFEEBC;") Característica principal
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Arquitectura monolítica.
                td(style="background-color: #F0F8FF;") El sistema se desarrolla como una única aplicación donde todos los componentes están integrados.
                td(style="background-color: #F0F8FF;") Simplicidad en el desarrollo inicial.
              tr(data-aos="fade-right")
                td Arquitectura cliente-servidor.
                td Divide el sistema entre clientes que realizan solicitudes y servidores que procesan la información.
                td Distribución de responsabilidades.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Arquitectura en capas.
                td(style="background-color: #F0F8FF;") Organiza el sistema en diferentes niveles funcionales, como presentación, lógica de negocio y datos.
                td(style="background-color: #F0F8FF;") Separación de responsabilidades.
              tr(data-aos="fade-right")
                td Arquitectura orientada a servicios.
                td El sistema se compone de servicios independientes que se comunican entre sí.
                td Integración y reutilización de servicios.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Arquitectura de microservicios.
                td(style="background-color: #F0F8FF;") El sistema se divide en pequeños servicios autónomos que pueden desarrollarse y desplegarse de forma independiente.
                td(style="background-color: #F0F8FF;") Alta escalabilidad y flexibilidad.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img-09.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Además de los tipos de arquitectura, en el diseño de #[i software] también se consideran las cualidades sistémicas, conocidas también como atributos de calidad. Estas cualidades permiten evaluar qué tan adecuado es el diseño de un sistema frente a diferentes condiciones de uso.
        p Las cualidades sistémicas representan propiedades que influyen en el comportamiento, la eficiencia y la capacidad de evolución del #[i software].

    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 12.
          span Principales cualidades sistémicas
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Cualidad
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
                th(style="width: 20%; background-color: #FFEEBC;") Importancia en el sistema
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Escalabilidad.
                td(style="background-color: #F0F8FF;") Capacidad del sistema para crecer y soportar mayor carga de trabajo.
                td(style="background-color: #F0F8FF;") Permite ampliar el sistema sin afectar su funcionamiento.
              tr(data-aos="fade-right")
                td Mantenibilidad.
                td Facilidad para modificar o actualizar el sistema.
                td Reduce costos de mantenimiento.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Confiabilidad.
                td(style="background-color: #F0F8FF;") Capacidad del sistema para funcionar correctamente durante el tiempo esperado.
                td(style="background-color: #F0F8FF;") Garantiza estabilidad en la operación.
              tr(data-aos="fade-right")
                td Desempeño.
                td Capacidad para responder de manera eficiente a las solicitudes.
                td Mejora la experiencia del usuario.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Seguridad.
                td(style="background-color: #F0F8FF;") Protección de la información y de los recursos del sistema.
                td(style="background-color: #F0F8FF;") Previene accesos no autorizados.

        p En conjunto, los tipos de arquitectura y las cualidades sistémicas permiten orientar las decisiones de diseño, ya que ayudan a seleccionar la estructura más adecuada para cada proyecto y a garantizar que el sistema cumpla con los requisitos técnicos y operativos establecidos.
  
    Separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3. Arquitectura cliente-servidor

    p.mb-4 La arquitectura cliente-servidor es uno de los modelos más utilizados en el desarrollo de sistemas informáticos y aplicaciones web. En este modelo, el sistema se divide en dos tipos principales de componentes: clientes y servidores. 

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p El cliente es la aplicación o dispositivo que realiza solicitudes de información o servicios, mientras que el servidor es el sistema encargado de procesar esas solicitudes y enviar una respuesta.

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2
        .row.justify-content-center
          .col
            p Este modelo permite distribuir las responsabilidades dentro del sistema, lo que facilita la organización del #[i software] y mejora la eficiencia en la gestión de recursos.
            p En muchos sistemas actuales, el cliente suele ser una aplicación instalada en un dispositivo o un navegador web, mientras que el servidor se ejecuta en una infraestructura centralizada donde se almacenan los datos y la lógica principal del sistema.
      .col-lg-3.col-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img-10.svg', alt='') 

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Para comprender mejor este modelo, es importante identificar los elementos que participan en la comunicación entre cliente y servidor.
        
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 13.
          span Componentes de la arquitectura cliente-servidor
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Componente
                th(style="width: 20%; background-color: #FFEEBC;") Descripción
                th(style="width: 20%; background-color: #FFEEBC;") Ejemplo
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Cliente.
                td(style="background-color: #F0F8FF;") Aplicación que solicita información o servicios al servidor.
                td(style="background-color: #F0F8FF;") Navegador web.
              tr(data-aos="fade-right")
                td Servidor.
                td Sistema que procesa las solicitudes y envía respuestas.
                td Servidor web.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Red.
                td(style="background-color: #F0F8FF;") Medio de comunicación entre cliente y servidor.
                td(style="background-color: #F0F8FF;") Internet.
              tr(data-aos="fade-right")
                td Base de datos.
                td Sistema donde se almacenan los datos del sistema.
                td Sistema gestor de bases de datos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 El funcionamiento de este modelo se basa en un proceso de solicitud y respuesta.

    .BG06.px-md-5.p-lg-0.p-4.mb-4
      .row.justify-content-center.align-items-end.my-0.BG06-row
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema5/img-11.png", alt="alt")
        .col-lg-8 
          SlyderF.custom.color-acento-botones(columnas="col-lg-4 col-xl-4")
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema5/img-12.svg", alt="alt")
              p.text-center El cliente envía una solicitud al servidor.
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema5/img-13.svg", alt="alt")
              p.text-center El servidor recibe y procesa la solicitud.
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema5/img-14.svg", alt="alt")
              p.text-center El servidor accede a los recursos necesarios, como bases de datos o servicios.
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema5/img-15.svg", alt="alt")
              p.text-center El servidor envía una respuesta al cliente.
            .tarjeta.bgslyder2.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/tema5/img-16.svg", alt="alt")
              p.text-center El cliente presenta la información al usuario.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Este mecanismo permite que múltiples clientes puedan comunicarse con un mismo servidor, lo que hace posible el funcionamiento de servicios como páginas web, aplicaciones móviles y sistemas empresariales.
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p Un ejemplo sencillo de arquitectura cliente-servidor puede presentarse en una aplicación web de comercio electrónico, como la utilizada por plataformas de compras en línea como Amazon.
        p En este tipo de aplicaciones, el navegador web funciona como cliente, mientras que el sistema que procesa la información y gestiona los datos funciona como servidor.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 Ejemplo de funcionamiento de un usuario que desea buscar unos audífonos en la página web.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-17.svg' alt='AvatarTop')
          h4.text-center Solicitud del cliente
          p.mb-0 El usuario escribe “audífonos” en la barra de búsqueda del navegador.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-18.svg' alt='AvatarTop')
          h4.text-center Envío de la solicitud
          p.mb-0 El navegador envía una solicitud al servidor web para obtener los productos relacionados con esa búsqueda.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-19.svg' alt='AvatarTop')
          h4.text-center Procesamiento en el servidor
          p.mb-0 El servidor recibe la solicitud, consulta la base de datos donde están almacenados los productos y obtiene la información correspondiente.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-20.svg' alt='AvatarTop')
          h4.text-center Respuesta del servidor
          p.mb-0 El servidor envía al navegador la lista de productos encontrados.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-21.svg' alt='AvatarTop')
          h4.text-center Visualización en el cliente
          p.mb-0 El navegador presenta los resultados al usuario en forma de lista con imágenes, precios y descripciones.

    .row.justify-content-center.align-items-center
      .col-lg-12
        .tarjeta-bg01.p-4.mb-4
          .row.justify-content-center.align-items-center
            p.mb-0 Este proceso explica el funcionamiento de la arquitectura cliente-servidor: el cliente solicita información, el servidor la procesa y responde, y el usuario puede interactuar con el sistema a través de esa comunicación continua entre ambos componentes.

    Separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.4. Modelo Vista Controlador (MVC)

    p El Modelo Vista Controlador (MVC) es un patrón de arquitectura de #[i software] que organiza una aplicación en tres componentes principales con el fin de separar la lógica del sistema, la presentación de la información y la gestión de las interacciones del usuario. Esta separación facilita el mantenimiento del sistema, mejora la organización del código y permite desarrollar aplicaciones más escalables.
    p.mb-4 El modelo divide la aplicación en las siguientes partes:

    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img-22.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Modelo (model)
            h5.t2.mb-2 Modelo (model)
            p.mb-0 Representa los datos del sistema y la lógica de negocio. Se encarga de gestionar la información, realizar cálculos, aplicar reglas del sistema y comunicarse con la base de datos. El modelo no depende de la interfaz de usuario.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img-23.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Vista (view)
            h5.t2.mb-2 Vista (view)
            p.mb-0 Es la interfaz que muestra la información al usuario. Su función es presentar los datos provenientes del modelo de manera comprensible, por ejemplo mediante páginas web, formularios o paneles de visualización.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img-24.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Controlador (controller)
            h5.t2.mb-2 Controlador (controller)
            p.mb-0 Actúa como intermediario entre el modelo y la vista. Recibe las acciones del usuario (clics, formularios y solicitudes), interpreta estas solicitudes y decide qué acciones debe ejecutar el modelo y qué vista se debe mostrar.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.text-center
        .titulo3.p-4(data-aos="fade-left")
          p.mb-0 A continuación, un ejemplo sencillo en una aplicación web:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.cajon.C02.p-4.mb-4
          p En una plataforma de reservas de hoteles:
          
          .cajon.cajon.C03.p-4.mb-4
            .row.align-items-center.justify-content-center
              .col-lg-3.col-md-4.col-8.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema5/img-25.svg', alt='Imagen decorativa')
              
              .col-lg-9.col-md-8.col-12
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p Modelo: gestiona la información de los hoteles, habitaciones disponibles, precios y reservas almacenadas en la base de datos.
                  li.mb-0
                    i.lista-ul__vineta
                    p Vista: presenta al usuario las páginas web donde puede buscar hoteles, revisar habitaciones disponibles y realizar la reserva.
                  li.mb-0
                    i.lista-ul__vineta
                    p Controlador: recibe la solicitud del usuario cuando busca un hotel, consulta la información en el modelo y envía los resultados a la vista para que se presenten en la página.
          p.mb-0 De esta manera, el modelo se encarga de los datos, la vista presenta la información y el controlador coordina la interacción entre ambos, permitiendo que el sistema funcione de forma organizada y eficiente.  
        


</template>

<script>
export default {
  name: 'Tema5',
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
