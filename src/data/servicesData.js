// /src/data/servicesData.js
// Puedes editar o añadir lo que estimes conveniente aquí. Aquí estan todos los servicios y sus datos detallados.
// La idea es importar este objeto en la vista de detalle de servicio para mostrar la info correspondiente según el slug.

export const servicesData = {
  'gestion-normativa': {
    title: 'Gestión Normativa y Documentación',
    imageUrl: '/src/assets/img/services/details/hero-gestion.jpg',
    intro:
      'Aseguramos que tu organización no solo cumpla, sino que integre eficientemente la normativa vigente en seguridad y medio ambiente, protegiendo a tus equipos y evitando sanciones.',
    includes: [
      {
        icon: 'bi-journal-check', // Usaremos iconos de Bootstrap Icons
        title: 'Reglamento Interno',
        text: 'Actualización del Reglamento Interno de Orden, Higiene y Seguridad (RIOHS) según la normativa vigente.',
      },
      {
        icon: 'bi-file-earmark-text',
        title: 'Procedimientos Seguros',
        text: 'Elaboración y revisión de procedimientos de trabajo seguro (PTS) y políticas ambientales adaptadas a tus operaciones.',
      },
      {
        icon: 'bi-folder2-open',
        title: 'Documentación para Auditorías',
        text: 'Preparación de toda la documentación y reportes requeridos para enfrentar con éxito fiscalizaciones y auditorías.',
      },
    ],
    methodology: [
      // ... Aquí iría el paso a paso si el brochure lo detallara para este servicio.
    ],
  },
  'control-riesgos': {
    title: 'Identificación y Control de Riesgos',
    imageUrl: '/src/assets/img/services/details/hero-riesgos.jpg',
    intro:
      'Nuestra metodología se enfoca en identificar, evaluar y controlar proactivamente los riesgos laborales y ambientales para crear un entorno de trabajo seguro y sostenible, minimizando accidentes y daños.',
    includes: [
      {
        icon: 'bi-search',
        title: 'Inspecciones y Levantamiento',
        text: 'Realizamos inspecciones exhaustivas para el levantamiento de riesgos laborales y ambientales en todas las áreas de tu empresa.',
      },
      {
        icon: 'bi-shield-check',
        title: 'Matrices de Riesgos',
        text: 'Diseñamos y gestionamos Matrices de Riesgos y Ambientales para priorizar y controlar los peligros más críticos.',
      },
      {
        icon: 'bi-graph-up-arrow',
        title: 'Monitoreo y Seguimiento',
        text: 'Hacemos un seguimiento continuo para verificar la eficacia de los controles implementados y proponer mejoras.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Evaluación Inicial',
        text: 'Inspecciones en terreno de procesos, instalaciones y levantamiento de riesgos laborales y ambientales.',
      },
      {
        step: '02',
        title: 'Clasificación de Peligros',
        text: 'Registro y categorización según gravedad y probabilidad, priorizando los riesgos críticos.',
      },
      {
        step: '03',
        title: 'Diseño de Controles',
        text: 'Aplicamos la jerarquía de control (eliminación, sustitución, ingeniería, EPP) y medidas ambientales.',
      },
      {
        step: '04',
        title: 'Planes de Acción',
        text: 'Estrategias específicas para mitigar riesgos, incorporando protocolos MINSAL y normativas vigentes.',
      },
      {
        step: '05',
        title: 'Monitoreo y Medición',
        text: 'Evaluaciones periódicas de agentes de riesgo (ruido, polvo) y parámetros ambientales (aire, agua).',
      },
      {
        step: '06',
        title: 'Mejora Continua',
        text: 'Informes técnicos con resultados y recomendaciones, y acompañamiento en auditorías.',
      },
    ],
  },
}
