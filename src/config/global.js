export default {
  global: {
    Name: 'Diseño orientado a objetos y arquitectura de <em>software</em>',
    Description:
      'El componente aborda los fundamentos del diseño orientado a objetos y la arquitectura de software, a partir del análisis de requerimientos y la toma de decisiones de diseño. Se presentan conceptos, principios, diagramas, patrones de diseño y tipos de arquitectura, así como arquitecturas modernas y prácticas de desarrollo que permiten estructurar sistemas de software mantenibles, escalables y eficientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis y toma de decisiones en el diseño de software',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Interpretación del informe de análisis',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis de requerimientos y toma de decisiones de diseño',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos del diseño orientado a objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos del diseño orientado a objetos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios de calidad en el diseño de software',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelado orientado a objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diagramas de clases y sus elementos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Vistas del sistema',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Patrones de diseño de software',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos y clasificación de patrones de diseño',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Patrones creacionales, estructurales y comportamentales',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Arquitectura de software',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conceptos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de arquitecturas y cualidades sistémicas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Arquitectura cliente-servidor',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Modelo Vista Controlador (MVC)',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Arquitecturas modernas y prácticas de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Arquitectura orientada a servicios',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Arquitecturas basadas en APIs REST y GraphQL',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Arquitectura de microservicios',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Arquitectura serverless',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'DevOps e integración continua',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Plataformas tecnológicas y documentación del diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Plataformas tecnológicas para el desarrollo de software',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Motores de bases de datos relacionales y no relacionales',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Documento de diseño de software',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Arquitectura candidata',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'API (Interfaz de Programación de Aplicaciones)',
      significado:
        'conjunto de reglas y mecanismos que permite que diferentes aplicaciones o sistemas se comuniquen entre sí e intercambien información o funcionalidades.',
    },
    {
      termino: 'Arquitectura de software',
      significado:
        'estructura fundamental de un sistema de software que define la organización de sus componentes, sus relaciones y los principios que guían su diseño y evolución.',
    },
    {
      termino: 'Arquitectura cliente-servidor',
      significado:
        'modelo de arquitectura en el que los clientes solicitan servicios o recursos y los servidores procesan esas solicitudes y envían las respuestas correspondientes.',
    },
    {
      termino: 'Arquitectura orientada a servicios (SOA)',
      significado:
        'enfoque arquitectónico basado en la creación de servicios reutilizables que pueden ser utilizados por diferentes aplicaciones dentro de un sistema o entre varios sistemas.',
    },
    {
      termino: 'DevOps',
      significado:
        'conjunto de prácticas que integran el desarrollo de software y las operaciones de tecnología para mejorar la colaboración, automatizar procesos y acelerar la entrega de aplicaciones.',
    },
    {
      termino: 'Diagrama de clases',
      significado:
        'representación gráfica utilizada en el modelado orientado a objetos que presenta las clases de un sistema, sus atributos, métodos y relaciones.',
    },
    {
      termino: 'GraphQL',
      significado:
        'lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan, optimizando la comunicación entre cliente y servidor.',
    },
    {
      termino: 'Modelo Vista Controlador (MVC)',
      significado:
        'patrón arquitectónico que separa una aplicación en tres componentes: modelo (gestión de datos), vista (interfaz de usuario) y controlador (lógica que conecta ambos).',
    },
    {
      termino: 'Plataforma tecnológica',
      significado:
        'conjunto de herramientas, lenguajes, frameworks y recursos tecnológicos utilizados para desarrollar, ejecutar y mantener aplicaciones de software.',
    },
    {
      termino: 'REST (Representational State Transfer)',
      significado:
        'estilo arquitectónico utilizado para diseñar servicios web que se comunican mediante protocolos estándar de Internet, generalmente utilizando HTTP.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bass, L., Clements, P., & Kazman, R. (2021). Software architecture in practice (4th ed.). Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'BEcosistema de Recursos Educativos Digitales SENA. (2021). Bases de datos relacionales y no relacionales [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=r97Ko4ZvIDQ',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Patrones creacionales [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=_KZkbL0MMbQ',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024). Componentes de una arquitectura de software [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=kiV7aeJCqUQ',
    },
    {
      referencia:
        'Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). Design patterns: Elements of reusable object-oriented software. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2020). Software engineering: A practitioner’s approach (9th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2016). Software engineering (10th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Shaw, M., & Garlan, D. (1996). Software architecture: Perspectives on an emerging discipline. Prentice Hall.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarría Orozco',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
