<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desafío del arquitecto del <em>software.</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con el análisis, diseño y arquitectura de <em>software</em>, incluyendo el diseño orientado a objetos, el modelado del sistema, los patrones de diseño, las arquitecturas modernas y las plataformas tecnológicas utilizadas en el desarrollo de <em>software.</em>',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del análisis de requerimientos en el diseño de <em>software?</em>',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir la estructura del código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprender las necesidades del sistema y de los usuarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar la interfaz gráfica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear los diagramas de clases.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué documento contiene la información obtenida durante el proceso de análisis del sistema?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manual de usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documento de pruebas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Informe de análisis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Guía de instalación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes conceptos pertenece al diseño orientado a objetos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compilación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encapsulamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Conectividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Indexación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué principio del diseño de <em>software</em> busca reducir la dependencia entre componentes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acoplamiento bajo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alta cohesión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modularidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reutilización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de diagrama se utiliza para representar las clases y sus relaciones?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagrama de clases.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diagrama de red.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diagrama de secuencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diagrama de flujo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué representan las vistas del sistema en el modelado de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diferentes perspectivas del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Versiones del <em>software.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesos de compilación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el objetivo de los patrones de diseño de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporcionar soluciones reutilizables a problemas comunes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar la velocidad del <em>hardware.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar redes de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál de los siguientes es un patrón creacional?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Singleton',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Observer',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adapter',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decorator',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es una característica de los patrones estructurales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definen cómo se comunican los objetos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crean instancias de clases.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizan las relaciones entre clases y objetos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Controlan los algoritmos del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué describe la arquitectura de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El lenguaje de programación utilizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La estructura general del sistema y sus componentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los manuales del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El <em>hardware</em> requerido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es una característica del modelo cliente-servidor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El servidor proporciona servicios a múltiples clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No utiliza redes de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Funciona sin base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Todos los procesos funcionan de manera independiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál es la función del modelo MVC?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar redes informáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear bases de datos distribuidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Separar la lógica, la interfaz y el control de la aplicación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Administrar servidores <em>web.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué caracteriza a la arquitectura orientada a servicios (SOA)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso exclusivo de bases de datos relacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integración de servicios independientes que se comunican entre sí.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Programación sin servidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso de una sola aplicación centralizada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué tecnología se utiliza comúnmente para desarrollar APIs <em>web</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'HTML',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'FTP',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'SMTP',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'REST',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es una característica principal de los microservicios?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los servicios son independientes y escalables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No utilizan bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No permiten actualizaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Toda la aplicación funciona como un solo módulo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué significa el concepto de arquitectura <em>serverless</em>?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No se utilizan servidores físicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proveedor de nube administra la infraestructura del servidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El <em>software</em> no requiere Internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los programas se ejecutan localmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Cuál es el propósito principal de DevOps?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Integrar desarrollo y operaciones para mejorar la entrega del <em>software.</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar interfaces de usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Separar completamente desarrollo y operaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué busca la integración continua en el desarrollo de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar cambios en el código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Integrar y probar el código frecuentemente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de desarrolladores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las pruebas de <em>software.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué tipo de base de datos organiza la información en tablas relacionadas?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No relacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Jerárquica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Relacional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Distribuida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué es la arquitectura candidata en el diseño de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una propuesta inicial de estructura del sistema basada en los requerimientos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El manual del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La base de datos definitiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La arquitectura final del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el diseño y la arquitectura de <em>software.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
