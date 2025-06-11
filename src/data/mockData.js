export const proyectosData = [
  {
    id: 'p1',
    titulo: 'AGUA POTABLE Y SANEAMIENTO BÁSICO',
    descripcion: 'Iniciativa para mejorar el acceso a servicios básicos en zonas rurales.',
    fuentesDisponibles: 'e262c8c4-7295-4832-a1ee-1e7da5be36c1',
    fechaCreacion: 'viernes, 22 de septiembre de 2023, 5:03 a. m.',
    autor: 'adminAguaMinvivienda',
    imagenProyectoUrl: 'https://mexico.unir.net/wp-content/uploads/sites/6/2022/05/grafico-de-barras.jpg'
  },
  {
    id: 'p2',
    titulo: 'ELECTRO ELEMTENTOS',
    descripcion: 'Actualización de componentes legacy a la nueva librería de diseño.',
    fuentesDisponibles: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
    fechaCreacion: 'lunes, 18 de octubre de 2023, 9:15 a. m.',
    autor: 'admin_dev',
    imagenProyectoUrl: 'https://mexico.unir.net/wp-content/uploads/sites/6/2022/05/grafico-diagramas.jpg'
  },
  {
    id: 'p3',
    titulo: 'ANÁLISIS FINANCIERO Q3 2024',
    descripcion: 'Reporte de resultados trimestrales y proyecciones para el cierre de año.',
    fuentesDisponibles: 'f4e3d2c1-b0a9-8765-4321-fedcba987654',
    fechaCreacion: 'martes, 01 de julio de 2024, 11:30 a. m.',
    autor: 'finance_dept',
    imagenProyectoUrl: 'https://www.lifeder.com/wp-content/uploads/2020/07/ejemplo-gr%C3%A1fico-navegadores-lifeder-696x492.jpg'
  },
  {
    id: 'p4',
    titulo: 'CAMPAÑA DE MARKETING DIGITAL',
    descripcion: 'Lanzamiento del nuevo producto "Omega" en redes sociales y buscadores.',
    fuentesDisponibles: 'abcdef12-3456-7890-abcd-ef1234567890',
    fechaCreacion: 'jueves, 15 de febrero de 2024, 2:00 p. m.',
    autor: 'mkt_manager',
    imagenProyectoUrl: 'https://tudashboard.com/wp-content/uploads/2021/03/diagrama-de-dispersio%CC%81n.png'
  },
  {
    id: 'p5',
    titulo: 'MIGRACIÓN A INFRAESTRUCTURA CLOUD',
    descripcion: 'Mover servidores on-premise de la aplicación principal a AWS.',
    fuentesDisponibles: 'fedcba98-7654-3210-fedc-ba9876543210',
    fechaCreacion: 'sábado, 20 de enero de 2024, 8:45 p. m.',
    autor: 'it_ops',
    imagenProyectoUrl: 'https://tudashboard.com/wp-content/uploads/2021/03/grafica-de-mapa.png'
  },
  {
    id: 'p6',
    titulo: 'ENCUESTA DE CLIMA LABORAL 2024',
    descripcion: 'Medición de la satisfacción y el compromiso de los empleados.',
    fuentesDisponibles: 'c1c2c3c4-d5d6-e7e8-f9f0-a1b2c3d4e5f6',
    fechaCreacion: 'lunes, 05 de agosto de 2024, 10:00 a. m.',
    autor: 'hr_dept',
    imagenProyectoUrl: 'https://www.lifeder.com/wp-content/uploads/2020/07/grafico-circular-elecciones-parlamento-europeo-696x537.jpg'
  },
  {
    id: 'p7',
    titulo: 'Zonificación de Riesgos Geológicos', 
    descripcion: 'Análisis y mapeo de zonas con alta vulnerabilidad.', 
    fuentesDisponibles: 'z1y2x3w4-v5u6-t7s8-r9q0-p1o2i3n4m5l6', 
    fechaCreacion: 'miércoles, 10 de enero de 2024, 12:00 p. m.', 
    autor: 'Xavier Zuluaga', 
    imagenProyectoUrl: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  
  }
];


export const panelesData = [
  { id: 'pan1', nombre: 'ESTADO AL CORTE', autor: 'admin_platform', proyectoId: 'p1', descripcion: 'Análisis detallado del estado actual de todos los segmentos.', fechaCreacion: 'lunes, 25 de sep de 2023', fechaModificacion: 'lunes, 25 de sep de 2023' },
  { id: 'pan2', nombre: 'MÉTRICAS DE RENDIMIENTO', autor: 'admin_dev', proyectoId: 'p2', descripcion: 'No registra', fechaCreacion: 'martes, 19 de oct de 2023', fechaModificacion: 'jueves, 21 de oct de 2023' },
  { id: 'pan3', nombre: 'ANÁLISIS DE COBERTURA', autor: 'admin_platform', proyectoId: 'p1', descripcion: 'Visualización geográfica de la cobertura del servicio.', fechaCreacion: 'miércoles, 27 de sep de 2023', fechaModificacion: 'miércoles, 27 de sep de 2023'},
  { id: 'pan4', nombre: 'RESULTADOS POR REGIÓN', autor: 'finance_dept', proyectoId: 'p3', descripcion: 'Comparativa de ingresos y gastos por centro de costo regional.', fechaCreacion: 'jueves, 02 de jul de 2024', fechaModificacion: 'viernes, 03 de jul de 2024' },
  { id: 'pan5', nombre: 'RENDIMIENTO DE ANUNCIOS', autor: 'mkt_manager', proyectoId: 'p4', descripcion: 'Análisis de CTR y CPC de la campaña "Omega".', fechaCreacion: 'viernes, 16 de feb de 2024', fechaModificacion: 'viernes, 16 de feb de 2024'
   },  { id: 'pan5', nombre: 'RENDIMIENTO DE ANUNCIOS', autor: 'mkt_manager', proyectoId: 'p4', descripcion: 'Análisis de CTR y CPC.', fechaCreacion: 'viernes, 16 de feb de 2024', fechaModificacion: 'viernes, 16 de feb de 2024' },
  { id: 'pan6', nombre: 'MAPA DE VULNERABILIDAD SÍSMICA', autor: 'Xavier Zuluaga', proyectoId: 'p7', descripcion: 'Detalle de zonas con mayor riesgo sísmico.', fechaCreacion: 'jueves, 11 de ene de 2024', fechaModificacion: 'jueves, 11 de ene de 2024' }
];


export const fuentesData = [
  { id: 'fue1', nombre: 'Registros de Saneamiento (DB Maestra)', cantidad: 20, proyectoId: 'p1' },
  { id: 'fue2', nombre: 'Datos Geográficos de Cobertura', cantidad: 9, proyectoId: 'p1' },
  

  { id: 'fue3', nombre: 'Google Analytics (Métricas UX)', cantidad: 7, proyectoId: 'p2' },
  { id: 'fue4', nombre: 'Hotjar (Mapas de Calor)', cantidad: 14, proyectoId: 'p2' },


  { id: 'fue5', nombre: 'SAP (Módulo Financiero)', cantidad: 25, proyectoId: 'p3' },
  { id: 'fue6', nombre: 'Reportes de Inversión (Excel)', cantidad: 32, proyectoId: 'p3' },


  { id: 'fue7', nombre: 'Salesforce CRM Data (Leads)', cantidad: 8, proyectoId: 'p4' },
  { id: 'fue8', nombre: 'Google Ads API (Rendimiento)', cantidad: 12, proyectoId: 'p4' },


  { id: 'fue9', nombre: 'Datadog (Logs de Servidor)', cantidad: 5, proyectoId: 'p5' },
  { id: 'fue10', nombre: 'AWS Cost Explorer (Costos)', cantidad: 18, proyectoId: 'p5' },
];


export const tablerosData = [
  { id: 'tab1', nombre: 'INDICADORES AGUA V1', autor: 'admin_platform', proyectoId: 'p1', descripcion: 'Dashboard principal con los KPIs de consumo de agua.', fechaCreacion: 'miércoles, 27 de sep de 2023', fechaModificacion: 'jueves, 28 de sep de 2023' },
  { id: 'tab2', nombre: 'KPIs DE USUARIO', autor: 'admin_dev', proyectoId: 'p2', descripcion: 'Métricas de engagement: DAU, MAU y tiempo en página.', fechaCreacion: 'miércoles, 20 de oct de 2023', fechaModificacion: 'miércoles, 20 de oct de 2023'},
  { id: 'tab3', nombre: 'INDICADORES SANEAMIENTO V2', autor: 'admin_platform', proyectoId: 'p1', descripcion: 'Versión actualizada con nuevas métricas de saneamiento.', fechaCreacion: 'viernes, 29 de sep de 2023', fechaModificacion: 'sábado, 30 de sep de 2023' },
  { id: 'tab4', nombre: 'ESTADO DE SERVIDORES EN TIEMPO REAL', autor: 'it_ops', proyectoId: 'p5', descripcion: 'Dashboard de monitoreo de CPU, RAM y latencia de red.', fechaCreacion: 'domingo, 21 de ene de 2024', fechaModificacion: 'domingo, 21 de ene de 2024' },
  { id: 'tab5', nombre: 'RESULTADOS ENCUESTA GENERAL', autor: 'hr_dept', proyectoId: 'p6', descripcion: 'Resultados agregados y anónimos de la encuesta de clima.', fechaCreacion: 'martes, 06 de ago de 2024', fechaModificacion: 'martes, 06 de ago de 2024' },
];