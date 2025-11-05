// /src/data/servicesData.js
// Puedes editar o añadir lo que estimes conveniente aquí. Aquí estan todos los servicios y sus datos detallados.
// La idea es importar este objeto en la vista de detalle de servicio para mostrar la info correspondiente según el slug.
import gestionNormativaImg from '@/assets/img/services/gestion-normativa.webp'
import seguridadIndustrialImg from '@/assets/img/services/seguridad-industrial.webp'
import controlRiesgosImg from '@/assets/img/services/control-riesgos.webp'
import capacitacionImg from '@/assets/img/services/capacitacion-y-formacion.webp'
import programasPreventivosImg from '@/assets/img/services/programas-preventivos.webp'
import acompanamientoCulturalImg from '@/assets/img/services/acompanamiento-cultural.webp'
import cumplimientoLegalImg from '@/assets/img/services/cumplimiento-legal.webp'
import investigacionIncidentesImg from '@/assets/img/services/investigacion-incidentes.webp'
import asesoriaTecnicaImg from '@/assets/img/services/asesoria-tecnica.webp'
import asesoriaCompletaImg from '@/assets/img/services/asesoria-completa.webp'
import protocolosMinisterialesImg from '@/assets/img/services/protocolos-ministeriales.webp'
import apoyoGranIndustriaImg from '@/assets/img/services/apoyo-gran-industria.webp'

export const servicesData = {
  'gestion-normativa-y-documentacion': {
    title: 'Gestión Normativa y Documentación',
    imageUrl: gestionNormativaImg,
    intro:
      'Nos aseguramos que tu organización no solo cumpla, sino que integre eficientemente la normativa vigente en seguridad y medio ambiente, protegiendo a tus equipos y evitando sanciones.',
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
        text: 'Preparación de reportes y documentación requerida para enfrentar con éxito fiscalizaciones y auditorías.',
      },
    ],
    methodology: [
      // ... Aquí iría el paso a paso si el brochure lo detallara para este servicio.
    ],
  },
  'identificacion-y-control-de-riesgos': {
    title: 'Identificación y Control de Riesgos',
    imageUrl: controlRiesgosImg, // Usamos la variable importada
    intro:
      'Identificamos, evaluamos y controlamos proactivamente los riesgos laborales (físicos, químicos, ergonómicos) y ambientales (emisiones, residuos) para crear un entorno de trabajo seguro y sostenible.',
    includes: [
      {
        icon: 'bi-search',
        title: 'Inspección y Levantamiento',
        text: 'Inspecciones y levantamiento de riesgos laborales y ambientales.',
      },
      {
        icon: 'bi-shield-check',
        title: 'Matrices de Riesgos (SSOMA)',
        text: 'Matrices de Riesgos y Ambientales, para minimizar accidentes y daños al medio ambiente.',
      },
      {
        icon: 'bi-graph-up-arrow',
        title: 'Monitoreo de Controles',
        text: 'Monitoreo y seguimiento de la eficacia de los controles implementados.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'EVALUACIÓN INICIAL',
        text: 'Inspecciones en terreno de procesos, instalaciones y condiciones de trabajo. Levantamiento de riesgos laborales (físicos, químicos, biológicos, ergonómicos y psicosociales). Identificación de riesgos ambientales (emisiones, residuos, vertimientos, consumo energético e hídrico).',
      },
      {
        step: '02',
        title: 'IDENTIFICACIÓN Y CLASIFICACIÓN DE PELIGROS',
        text: 'Registro y categorización según gravedad y probabilidad de ocurrencia. Priorización de riesgos críticos en seguridad y sostenibilidad.',
      },
      {
        step: '03',
        title: 'DISEÑO DE CONTROLES',
        text: 'Aplicación de la jerarquía de control: eliminación, sustitución, ingeniería, administrativos y EPP. Medidas ambientales: reducción de emisiones, gestión de residuos, ahorro energético y planes de contingencia.',
      },
      {
        step: '04',
        title: 'PLANES DE ACCIÓN',
        text: 'Estrategias específicas para mitigar riesgos en cada rubro (construcción, automotriz, industria, comercio, servicios, etc.). Incorporación de protocolos MINSAL y normativas ambientales vigentes.',
      },
      {
        step: '05',
        title: 'MONITOREO Y MEDICIÓN',
        text: 'Evaluaciones periódicas de agentes de riesgo (ruido, polvo, iluminación, ventilación, vibración). Control de parámetros ambientales (calidad de aire, agua, suelo, generación de residuos).',
      },
      {
        step: '06',
        title: 'SEGUIMIENTO Y MEJORA CONTINUA',
        text: 'Informes técnicos con resultados y recomendaciones. Actualización de medidas frente a cambios normativos o nuevos procesos. Acompañamiento en auditorías internas y externas.',
      },
    ],
  },
  'capacitacion-y-formacion': {
    title: 'Capacitación y Formación',
    imageUrl: capacitacionImg, // Usamos la variable importada
    intro:
      'Equipamos a tus equipos con el conocimiento práctico para un entorno laboral seguro y sostenible, desde la inducción obligatoria (RIOHS, Protocolos MINSAL) hasta el entrenamiento avanzado en tareas críticas.',
    includes: [
      {
        icon: 'bi-easel',
        title: 'Programas, Talleres y Cursos',
        text: 'Programas de inducción, talleres y cursos en seguridad laboral y medio ambiente.',
      },
      {
        icon: 'bi-tools',
        title: 'Entrenamiento Tareas Críticas y EPP',
        text: 'Entrenamiento especializado en tareas críticas y manejo de EPP.',
      },
      {
        icon: 'bi-heart-pulse',
        title: 'Cultura y Sensibilización',
        text: 'Sensibilización y refuerzo de hábitos seguros y sostenibles.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'DIAGNÓSTICO DE NECESIDADES',
        text: 'Identificación de brechas de conocimiento en seguridad laboral y gestión ambiental. Selección de temáticas prioritarias según riesgos específicos de cada rubro.',
      },
      {
        step: '02',
        title: 'DISEÑO DE PROGRAMAS FORMATIVOS',
        text: 'Cursos presenciales, online o mixtos. Material didáctico práctico, con ejemplos de aplicación en terreno. Evaluaciones para medir aprendizaje y efectividad.',
      },
      {
        step: '03',
        title: 'CAPACITACIÓN OBLIGATORIA Y NORMATIVA',
        text: 'Inducción en seguridad y medio ambiente para nuevos trabajadores. Uso y cuidado de EPP y procedimientos seguros. Protocolos MINSAL y ambientales aplicables (gestión de residuos, emisiones, ahorro de recursos).',
      },
      {
        step: '04',
        title: 'FORMACIÓN ESPECIALIZADA',
        text: 'Seguridad en tareas críticas (trabajo en altura, espacios confinados, manejo de maquinaria). Gestión ambiental específica: reducción de residuos, control de emisiones, eficiencia energética y uso racional de recursos. Primeros auxilios y brigadas de emergencia.',
      },
      {
        step: '05',
        title: 'CULTURA PREVENTIVA Y AMBIENTAL',
        text: 'Talleres prácticos para reforzar hábitos seguros y sostenibles. Campañas motivacionales y de sensibilización. Liderazgo en seguridad y medio ambiente para supervisores y jefaturas.',
      },
      {
        step: '06',
        title: 'SEGUIMIENTO Y EVALUACIÓN',
        text: 'Informes de resultados y recomendaciones. Ajustes a los programas según cambios normativos o necesidades detectadas. Monitoreo de indicadores de desempeño en seguridad y sostenibilidad.',
      },
    ],
  },
  'programas-preventivos-a-medida': {
    title: 'Programas Preventivos a Medida',
    imageUrl: programasPreventivosImg, // Usamos la variable importada
    intro:
      'Desarrollamos programas adaptados a las necesidades específicas de tu empresa, integrando normativas y planes de acción personalizados.',
    includes: [
      {
        icon: 'bi-journal-richtext',
        title: 'Planes Personalizados',
        text: 'Elaboración de planes de acción personalizados para cada empresa.',
      },
      {
        icon: 'bi-shield-shaded',
        title: 'Diseño de Planes de Gestión',
        text: 'Diseño de planes de emergencia, gestión de residuos, control de emisiones y eficiencia de recursos.',
      },
      {
        icon: 'bi-file-earmark-check',
        title: 'Integración Normativa',
        text: 'Integración de normativas laborales y ambientales vigentes (DS 44, Ley 16.744, DS ambientales, Ley REP, entre otras).',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'DIAGNÓSTICO Y ANÁLISIS INICIAL',
        text: 'Identificación de riesgos laborales y ambientales por procesos y áreas. Evaluación de cumplimiento normativo y brechas existentes.',
      },
      {
        step: '02',
        title: 'DEFINICIÓN DE OBJETIVOS Y METAS',
        text: 'Establecimiento de indicadores de seguridad y sostenibilidad. Priorización de acciones según impacto y probabilidad de riesgos.',
      },
      {
        step: '03',
        title: 'DISEÑO DE MEDIDAS PREVENTIVAS',
        text: 'Procedimientos de trabajo seguro (PTS) y protocolos ambientales. Planes de control de riesgos críticos y emergencias laborales y ambientales. Estrategias de gestión de residuos, eficiencia energética y reducción de emisiones.',
      },
      {
        step: '04',
        title: 'IMPLEMENTACIÓN EN TERRENO',
        text: 'Aplicación práctica de las medidas diseñadas. Capacitación de trabajadores y supervisores en seguridad y medio ambiente.',
      },
      {
        step: '05',
        title: 'MONITOREO Y SEGUIMIENTO',
        text: 'Evaluación periódica de la eficacia de las medidas implementadas. Informes técnicos con recomendaciones de mejora continua. Ajustes frente a cambios normativos, tecnológicos o de procesos.',
      },
      {
        step: '06',
        title: 'CULTURA PREVENTIVA Y SOSTENIBLE',
        text: 'Promoción de hábitos seguros y responsables con el entorno. Incentivos y reconocimiento a buenas prácticas laborales y ambientales.',
      },
    ],
  },
  'seguimiento-y-acompanamiento-cultural': {
    title: 'Seguimiento y Acompañamiento Cultural',
    imageUrl: acompanamientoCulturalImg, // Usamos la variable importada
    intro:
      'Fomentamos una cultura de seguridad sostenible en tu organización, evaluando continuamente los hábitos y apoyando a los comités internos.',
    includes: [
      {
        icon: 'bi-clipboard2-check',
        title: 'Evaluación Continua',
        text: 'Evaluación continua de hábitos preventivos y sostenibles.',
      },
      {
        icon: 'bi-people-fill',
        title: 'Apoyo en Comités',
        text: 'Apoyo en comités paritarios y comités ambientales.',
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Fomento Cultural Corporativo',
        text: 'Fomento de la cultura de seguridad y cuidado del medio ambiente como valor corporativo.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'EVALUACIÓN DE LA CULTURA PREVENTIVA',
        text: 'Diagnóstico del comportamiento y compromiso en seguridad y medio ambiente. Identificación de brechas entre lo planificado y lo ejecutado.',
      },
      {
        step: '02',
        title: 'ACOMPAÑAMIENTO EN TERRENO',
        text: 'Visitas periódicas para reforzar conductas seguras y sostenibles. Asesoría a supervisores y líderes en implementación de medidas preventivas y ambientales. Participación en comités paritarios y comités ambientales internos.',
      },
      {
        step: '03',
        title: 'FOMENTO DE HÁBITOS SEGUROS Y SOSTENIBLES',
        text: 'Campañas internas de sensibilización en seguridad y cuidado del medio ambiente. Charlas, talleres y actividades prácticas para trabajadores. Promoción de la responsabilidad compartida y el autocuidado.',
      },
      {
        step: '04',
        title: 'MONITOREO Y MEDICIÓN',
        text: 'Indicadores de desempeño en seguridad y sostenibilidad. Encuestas de percepción y análisis de efectividad de programas. Ajustes de estrategias según resultados y cambios normativos.',
      },
      {
        step: '05',
        title: 'MEJORA CONTINUA',
        text: 'Informes periódicos con recomendaciones. Implementación de acciones correctivas y preventivas. Reforzamiento constante de la cultura preventiva y ambiental en la organización.',
      },
    ],
  },
  'cumplimiento-legal-y-auditorias': {
    title: 'Cumplimiento Legal y Auditorías',
    imageUrl: cumplimientoLegalImg, // Usamos la variable importada
    intro:
      'Aseguramos que tu empresa cumpla con todas las normativas vigentes, apoyándote en fiscalizaciones e implementando sistemas de gestión.',
    includes: [
      {
        icon: 'bi-shield-exclamation',
        title: 'Apoyo en Fiscalizaciones',
        text: 'Apoyo en fiscalizaciones de autoridades laborales y ambientales.',
      },
      {
        icon: 'bi-clipboard2-plus',
        title: 'Planes Correctivos',
        text: 'Elaboración de planes correctivos y medidas preventivas frente a observaciones.',
      },
      {
        icon: 'bi-patch-check',
        title: 'Asesoría en Estándares ISO',
        text: 'Asesoría en implementación de sistemas de gestión SSOMA y estándares internacionales (ISO 45001 e ISO 14001).',
      },
    ],
    methodology: [], // <-- Vacío, tal como pediste
  },
  'investigacion-de-accidentes-e-incidentes': {
    title: 'Investigación de Accidentes e Incidentes',
    imageUrl: investigacionIncidentesImg, // Usamos la variable importada
    intro:
      'Analizamos y prevenimos futuros incidentes en el lugar de trabajo, identificando la causa raíz para implementar medidas correctivas eficaces y definitivas.',
    includes: [
      {
        icon: 'bi-clipboard-pulse',
        title: 'Investigación de Hechos',
        text: 'Investigación de accidentes y enfermedades profesionales.',
      },
      {
        icon: 'bi-search-heart',
        title: 'Análisis Causa Raíz',
        text: 'Identificación de causas raíz y propuesta de medidas correctivas para prevenir reincidencias.',
      },
      {
        icon: 'bi-file-earmark-medical',
        title: 'Reporte y Seguimiento',
        text: 'Elaboración de informes para mutualidades y reportes a la autoridad (DIAT/DIEP).',
      },
    ],
    methodology: [], // <-- Vacío, tal como pediste
  },
  'asesoria-tecnica-especializada': {
    title: 'Asesoría Técnica Especializada',
    imageUrl: asesoriaTecnicaImg, // Usamos la variable importada
    intro:
      'Brindamos soporte técnico avanzado en seguridad, salud ocupacional e ingeniería de proyectos para resolver desafíos complejos.',
    includes: [
      {
        icon: 'bi-shield-check',
        title: 'Selección de EPP',
        text: 'Asesoría experta en la selección, certificación y uso correcto de Elementos de Protección Personal (EPP).',
      },
      {
        icon: 'bi-gear-wide-connected',
        title: 'Ingeniería y Proyectos',
        text: 'Soporte técnico en ingeniería de seguridad y control ambiental en proyectos, obras o procesos productivos.',
      },
      {
        icon: 'bi-file-earmark-medical',
        title: 'Normativas y Protocolos',
        text: 'Interpretación y aplicación de protocolos ministeriales (MINSAL) y normativas técnicas específicas.',
      },
    ],
    methodology: [], // <-- Vacío, tal como pediste
  },
  'asesoria-completa-en-prevencion-de-riesgos-laborales-y-ambientales': {
    title: 'Asesoría Completa en Prevención de Riesgos Laborales y Ambientales',
    imageUrl: asesoriaCompletaImg, // Usamos la variable importada
    intro:
      'Ofrecemos un servicio integral 360°, desde el diagnóstico inicial y cumplimiento normativo (Ley 16.744, ISO) hasta el diseño de planes preventivos y el acompañamiento cultural para crear un entorno laboral seguro y sostenible.',
    includes: [
      {
        icon: 'bi-clipboard2-data',
        title: 'Diagnóstico Integral y Auditoría Legal',
        text: 'Revisión completa de cumplimiento (Ley 16.744, DS, ISO 45001/14001) e identificación de riesgos laborales y ambientales.',
      },
      {
        icon: 'bi-file-earmark-text',
        title: 'Diseño de Planes y Programas SSOMA',
        text: 'Elaboración de planes preventivos, protocolos MINSAL, gestión de residuos (Ley REP) y planes de emergencia.',
      },
      {
        icon: 'bi-shield-check',
        title: 'Acompañamiento y Defensa Legal',
        text: 'Visitas en terreno, apoyo a comités (CPHS) y preparación experta ante fiscalizaciones (Seremi, DT, SMA).',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'DIAGNÓSTICO INICIAL',
        text: 'Identificación de peligros laborales y ambientales en procesos, instalaciones y actividades. Evaluación de cumplimiento legal en seguridad ocupacional y normativa ambiental.',
      },
      {
        step: '02',
        title: 'CUMPLIMIENTO NORMATIVO',
        text: 'Aplicación de Ley 16.744, Código del Trabajo, DS 44, DS 594, DS 109 y normativas ambientales (MMA, DS de emisiones, Ley REP, DS 148 sobre residuos peligrosos, entre otros). Orientación en certificaciones y estándares internacionales (ISO 45001, ISO 14001).',
      },
      {
        step: '03',
        title: 'DISEÑO DE PLANES PREVENTIVOS',
        text: 'Estrategias de control de riesgos laborales (ergonomía, químicos, ruido, psicosociales, etc.). Programas ambientales (gestión de residuos, eficiencia energética, control de emisiones, cuidado del agua y suelo).',
      },
      {
        step: '04',
        title: 'ACOMPAÑAMIENTO CONTINUO',
        text: 'Visitas periódicas y asesoría técnica en terreno. Informes de seguimiento con propuestas de mejora. Apoyo en la gestión de comités paritarios y comités ambientales internos.',
      },
      {
        step: '05',
        title: 'PREPARACIÓN ANTE FISCALIZACIONES',
        text: 'Asesoría para responder a la Seremi de Salud, Dirección del Trabajo, Superintendencia de Medio Ambiente y otros organismos. Elaboración de documentación y planes correctivos.',
      },
      {
        step: '06',
        title: 'CULTURA PREVENTIVA Y SOSTENIBLE',
        text: 'Fomento de prácticas seguras y responsables con el medio ambiente. Integración de la seguridad y el respeto por el entorno como valores organizacionales.',
      },
    ],
  },
  'apoyo-en-cumplimiento-legal-y-protocolos-ministeriales': {
    title: 'Apoyo en cumplimiento Legal y Protocolos Ministeriales',
    imageUrl: protocolosMinisterialesImg, // Usamos la variable importada
    intro:
      'Garantizamos el cumplimiento normativo (Ley 16.744, DS 44, Ley REP) y la correcta implementación de todos los protocolos ministeriales (MINSAL) en tu empresa, desde la revisión documental hasta el apoyo directo en auditorías.',
    includes: [
      {
        icon: 'bi-clipboard2-data',
        title: 'Auditoría y Revisión Normativa',
        text: 'Revisión y actualización de cumplimiento legal (Ley 16.744, DS 44, Ley REP) e identificación de brechas.',
      },
      {
        icon: 'bi-file-earmark-medical',
        title: 'Implementación Protocolos MINSAL',
        text: 'Aplicación experta de protocolos PREXOR, TMERT, Psicosociales, Químicos y Ergonomía.',
      },
      {
        icon: 'bi-shield-check',
        title: 'Apoyo en Fiscalizaciones',
        text: 'Asistencia y preparación de planes correctivos ante inspecciones de Seremi de Salud, Dirección del Trabajo y SMA.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'REVISIÓN Y ACTUALIZACIÓN NORMATIVA',
        text: 'Seguridad laboral: Ley 16.744, Código del Trabajo, DS 44, DS 594, DS 109, entre otros. Medio ambiente: Normativa MMA, DS de emisiones, Ley REP, DS 148 sobre residuos peligrosos, etc. Identificación de brechas y necesidades de mejora en la empresa.',
      },
      {
        step: '02',
        title: 'IMPLEMENTACIÓN DE PROTOCOLOS',
        text: 'Protocolos MINSAL (PREXOR, TMERT, factores psicosociales, químicos, ergonomía). Protocolos ambientales internos (gestión de residuos, emisiones, consumo de agua y energía). Integración con sistemas de gestión SSOMA (ISO 45001 e ISO 14001).',
      },
      {
        step: '03',
        title: 'GESTIÓN DOCUMENTAL Y REGISTROS',
        text: 'Elaboración y actualización de reglamentos internos y procedimientos. Preparación de informes y reportes para autoridades fiscalizadoras. Registro de medidas correctivas y preventivas implementadas.',
      },
      {
        step: '04',
        title: 'CAPACITACIÓN Y SENSIBILIZACIÓN',
        text: 'Formación de trabajadores y líderes sobre obligaciones legales y protocolos. Charlas prácticas sobre aplicación de normativas en terreno.',
      },
      {
        step: '05',
        title: 'APOYO EN AUDITORÍAS E INSPECCIONES',
        text: 'Asistencia en fiscalizaciones de Seremi de Salud, Dirección del Trabajo, Superintendencia del Medio Ambiente y otros organismos. Desarrollo de planes correctivos frente a observaciones.',
      },
      {
        step: '06',
        title: 'MEJORA CONTINUA',
        text: 'Ajustes según cambios normativos, tecnológicos o de procesos. Recomendaciones estratégicas para asegurar cumplimiento sostenible.',
      },
    ],
  },
  'apoyo-a-la-gran-mineria-e-industria': {
    title: 'Apoyo a la Gran Minería e Industria',
    imageUrl: apoyoGranIndustriaImg, // Usamos la variable importada
    intro:
      'Apoyo especializado para contratistas que prestan servicios a la gran minería e industria (CODELCO, CMPC, Puertos, etc.), asegurando el cumplimiento documental y operacional para el ingreso y la gestión en faena.',
    includes: [
      {
        icon: 'bi-folder-check',
        title: 'Gestión de Carpetas de Arranque',
        text: 'Confección, presentación y aprobación de Carpetas de Arranque para ingreso a faenas mineras e industriales (CODELCO, CMPC, Puertos).',
      },
      {
        icon: 'bi-person-workspace',
        title: 'Asignación de Profesionales SSOMA',
        text: 'Suministro de profesionales SSOMA (Ingenieros, Técnicos) para cubrir puestos y asesorías en terreno.',
      },
      {
        icon: 'bi-files',
        title: 'Administración de Contratistas',
        text: 'Gestión y administración documental de sistemas (Checklist, CGE, WeContract) para asegurar el cumplimiento continuo.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'CARPETAS DE ARRANQUE',
        text: 'Confección de Carpetas de Arranque: Minera Los Bronces, Minera Escondida, CODELCO en sus divisiones, Minera Los Pelambres, Minera Antucoya, CMPC, Puertos, Pesqueras, Industrias agropecuarias y forestales. Entre otras. Presentación de Carpetas de Arranque a lo largo de Chile. Entrega al cliente, listo para poder ingresar a las diferentes instalaciones (medio digital y físico, según requerimiento).',
      },
      {
        step: '02',
        title: 'PRESTACIÓN DE SERVICIOS',
        text: 'Profesionales disponibles para cubrir puestos dentro de todos los rubros mineros e industriales. Confección de documentación. Asesorías en general.',
      },
    ],
  },
  'seguridad-industrial': {
    title: 'Seguridad Industrial',
    imageUrl: seguridadIndustrialImg,
    intro: 'Prevenir accidentes laborales derivados de condiciones inseguras o actos inseguros.', //

    // Dejamos estos vacíos para que la vista actual los oculte
    includes: [],
    methodology: [],

    // ¡AQUÍ LA NUEVA MAGIA!
    // Un array con toda la información en párrafos y listas.
    contentSections: [
      {
        type: 'paragraphs', // Un bloque de texto normal
        items: [
          'La Seguridad Industrial es el conjunto de acciones, procedimientos y medidas orientadas a prevenir accidentes laborales provocados por condiciones o actos inseguros.', //
          'Su correcta gestión permite mantener la continuidad operacional, proteger los recursos materiales y, sobre todo, resguardar la integridad de las personas.', //
          'En SegurCon SPA aplicamos metodologías actualizadas y adaptadas a cada rubro, para garantizar la máxima efectividad en el control de riesgos.', //
        ],
      },
      {
        type: 'list', // Un bloque de lista con viñetas
        title: 'Nuestras principales acciones en Seguridad Industrial', //
        color: 'green', // ¡El color que pediste para la viñeta!
        items: [
          'Evaluaciones de riesgo en terreno según DS 44.', //
          'Elaboración de Procedimientos de Trabajo Seguro (PTS).', //
          'Inspecciones periódicas y listas de verificación por proceso.', //
          'Programas preventivos personalizados.', //
          'Planes de emergencia, evacuación y control de incendios.', //
          'Charlas y capacitaciones prácticas en seguridad y uso de EPP.', //
          'Investigación y análisis de accidentes o incidentes.', //
        ],
      },
      {
        type: 'list',
        title: 'Beneficios para tu empresa', //
        color: 'yellow', // ¡El otro color de la paleta!
        items: [
          'Disminución de accidentes laborales y costos asociados.', //
          'Cumplimiento normativo frente a organismos fiscalizadores.', //
          'Optimización de la productividad y la eficiencia operativa.', //
          'Mejor clima laboral y compromiso del personal con la seguridad.', //
          'Imagen corporativa responsable y profesional.', //
        ],
      },
      {
        type: 'paragraphs',
        title: 'Tu empresa más segura con SegurCon SPA', //
        items: [
          'Nuestra asesoría integral te permite implementar un sistema preventivo eficaz y sostenible, adaptado al tamaño, rubro y realidad de tu empresa.', //
          'Con SegurCon SPA, transformamos la prevención en una herramienta de crecimiento y confianza para tus trabajadores y clientes.', //
        ],
      },
    ],
  },
}
