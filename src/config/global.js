export default {
  global: {
    componenteFormativo: 'Enfermedades transmitidas por los alimentos',
    descripcionCurso:
      'Las enfermedades transmitidas por los alimentos (ETAS) son causadas por bacterias, virus, parásitos y toxinas. Este componente formativo describe estos microorganismos patógenos y ofrece directrices para prevenir la contaminación alimentaria. Proporciona conocimientos esenciales para manipuladores de alimentos y profesionales de la salud, promoviendo prácticas seguras y reduciendo la incidencia de ETAS para mejorar la salud pública. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Organismos causantes de enfermedades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clasificación de los microorganismos y agentes patógenos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Bacterias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Virus',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Protozoos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Hongos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Enfermedades de transmisión alimentaria (ETAS)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Intoxicaciones más comunes transmitidas por alimentos',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33110014_CF03_DU.pdf',
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
  complementario: [
    {
      tema: 'Organismos causantes de enfermedades ',
      referencia:
        'González Flores, T. (2006). Enfermedades transmitidas por alimentos y PCR: prevención y diagnóstico: ( ed.). Red Salud Pública de México.  ',
      tipo: 'Artículo',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/22197  ',
    },
    {
      tema: 'Clasificación de los microorganismos y agentes patógenos ',
      referencia:
        'unProfesor (2016). Qué es un microorganismo y tipos. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://youtu.be/gKUNoccyYhU?feature=shared  ',
    },
    {
      tema: 'Clasificación de los microorganismos y agentes patógenos ',
      referencia:
        'Álvarez, A. R. (2006).<em>Los protozoos. Características generales y su rol como agentes patógenos. Ciencia veterinaria</em>, Vol. 8, 2006:( ed.). Red Universidad Nacional de La Pampa.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/20629  ',
    },
    {
      tema: 'Enfermedades de transmisión alimentaria (ETAS) ',
      referencia:
        'U.S. Food and Drug Administration  (2023). Cómo la FDA rastrea brotes de enfermedades. [Archivo de video] Youtube.    ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=nacue2_hNTw&ab_channel=U.S.FoodandDrugAdministration  ',
    },
    {
      tema: 'Intoxicaciones más comunes transmitidas por alimentos ',
      referencia:
        'DiprecaTV Más Cerca (2019). Intoxicación por Alimentos.[Archivo de video] Youtube.    ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=_ITCxK-Q64I&ab_channel=DiprecaTVM%C3%A1sCerca  ',
    },
  ],
  glosario: [
    {
      termino: 'Contaminación cruzada',
      significado:
        'transferencia de bacterias o microorganismos nocivos de una superficie o alimento a otro. ',
    },
    {
      termino: 'ETAS',
      significado: ' Enfermedades Transmitidas por los Alimentos. ',
    },
    {
      termino: 'Higiene',
      significado:
        'conjunto de prácticas y hábitos para mantener la limpieza y salud. ',
    },
    {
      termino: 'Infección',
      significado:
        'invasión y multiplicación de microorganismos en el cuerpo, causando enfermedad. ',
    },
    {
      termino: 'Manipulación segura',
      significado:
        'prácticas adecuadas al manejar alimentos para evitar la contaminación y proliferación de patógenos. ',
    },
    {
      termino: 'Microorganismo',
      significado:
        'organismo microscópico que puede ser una bacteria, virus, hongo o parásito. ',
    },
    {
      termino: 'Patógeno',
      significado:
        'microorganismo que puede causar enfermedades en los seres vivos. ',
    },
    {
      termino: 'Refrigeración',
      significado:
        'proceso de enfriar los alimentos para prevenir el crecimiento de microorganismos patógenos. ',
    },
    {
      termino: 'Salmonella',
      significado:
        'género de bacterias patógenas que pueden causar enfermedades transmitidas por los alimentos. ',
    },
    {
      termino: 'Toxina',
      significado:
        'sustancia venenosa producida por organismos vivos que puede causar enfermedades. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Hipertextos del área de la biología. (2008). Mecanismo invasivo de Salmonella.',
      link: 'http://www.biologia.edu.ar/bacterias/ecoliep/salmonella.htm',
    },
    {
      referencia: 'Ivovic, C. (s.f.). Género Bacillus. ',
      link: '',
    },
    {
      referencia:
        'Larrañaga, I. J. (1998). Control e higiene de los alimentos. Madrid: McGraw-Hill. ',
      link: '',
    },
    {
      referencia:
        'Madigan, M.T., Martinko, J.M., Parker, J., & Sanchez, M. (2003). Biología de los microorganismos: Brock. Madrid: Pearson Educación. ',
      link: '',
    },
    {
      referencia:
        'Malo, M., Fernández, B., Gómez, M., Marquina, R., Peri, M.L., Prior, S., & Valle, M. (2009). Manual para la formación de manipuladores de alimentos. Cantabria, España: Imprenta Regional del Gobierno de Cantabria.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Protección Social. (1997). Decreto 3075. Bogotá, Colombia. ',
      link: '',
    },
    {
      referencia:
        'Pascual, M. R. (2005). Enfermedades de origen alimentario: su prevención. España: Díaz de Santos S.A. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla ',
          cargo: 'Experta técnica ',
          centro: 'Centro Agroindustrial - Regional Quindío ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez ',
          cargo: 'Diseñador de contenidos digitales ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
