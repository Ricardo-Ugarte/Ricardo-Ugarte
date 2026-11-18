// Cambio de idioma ES / EN.
// El español vive en el HTML; aquí está el diccionario al inglés.
// Si editas un texto en español, actualiza también su clave aquí:
// una clave que no coincide deja ese texto en español.
(function () {
  var EN = {
    // navegación y pie
    'Inicio': 'Home', 'Acerca de': 'About', 'Contacto': 'Contact', 'Servicios': 'Services', 'Navegación': 'Navigation',
    'Desarrollo Web & CRM': 'Web Development & CRM',
    'Data Analyst. Trabajo con Microsoft Fabric, Power BI, DAX y SQL Server para que las empresas decidan con sus datos.':
      'Data Analyst. I work with Microsoft Fabric, Power BI, DAX and SQL Server so companies can make decisions with their data.',
    // inicio
    'Convierte los datos en': 'Turn data into', 'decisiones claras': 'clear decisions',
    'Ingeniero de formación, analista de datos por elección.': 'Engineer by training, data analyst by choice.',
    'Ver mi portfolio': 'View my portfolio', 'Contactarme': 'Get in touch', 'Resultado Final': 'End result',
    'Las herramientas con las que trabajo a diario.': 'The tools I work with every day.',
    'Dashboards interactivos, reportes paginados en Report Builder, medidas DAX avanzadas, RLS y OLS.':
      'Interactive dashboards, paginated reports in Report Builder, advanced DAX measures, RLS and OLS.',
    'Implementaciones end-to-end: OneLake, Deployment Pipelines, Semantic Models y publicación de apps.':
      'End-to-end implementations: OneLake, Deployment Pipelines, Semantic Models and app publishing.',
    'Stored procedures complejos, diseño de warehouses con esquemas fact/dim, optimización de queries.':
      'Complex stored procedures, warehouse design with fact/dim schemas, query optimization.',
    'Integración de Python con Microsoft Fabric mediante Semantic Link para análisis directo sobre modelos semánticos y validación de datos con pandas.':
      'Python integrated with Microsoft Fabric through Semantic Link for analysis directly on semantic models and data validation with pandas.',
    'Aplicaciones canvas para captura de datos, formularios y automatización de flujos de trabajo.':
      'Canvas apps for data capture, forms and workflow automation.',
    'Visualización & BI': 'Visualization & BI',
    'Storytelling con datos, diseño de dashboards orientados a decisiones, KPIs y métricas de negocio.':
      'Data storytelling, decision-oriented dashboard design, KPIs and business metrics.',
    'Hablemos de tu': "Let's talk about your", 'proyecto': 'project',
    'Cuéntame qué necesitas resolver con tus datos y te propongo cómo abordarlo.':
      "Tell me what you need to solve with your data and I'll propose how to approach it.",
    'Descargar CV': 'Download CV',
    // maquetas del inicio
    'app.powerbi.com · Reporte de Ventas': 'app.powerbi.com · Sales Report', 'Ventas · Resumen': 'Sales · Overview',
    'Compartir': 'Share', 'Ventas Totales': 'Total Sales', 'Clientes': 'Customers', 'Margen': 'Margin', 'Órdenes': 'Orders',
    'Ventas por Mes': 'Sales by Month', 'Ago': 'Aug', 'Dic': 'Dec', 'Ene': 'Jan', 'Por Categoría': 'By Category',
    'Región': 'Region', 'Ventas': 'Sales', 'Estado': 'Status', 'Alerta': 'Alert', 'Power BI · Reportes': 'Power BI · Reports',
    '← Volver': '← Back', 'Ver todos los tickets activos': 'View all active tickets', 'Tickets sin asignar': 'Unassigned tickets',
    'En curso · asignados': 'In progress · assigned', 'Pausados · pendientes': 'Paused · pending', 'Cerrados · resueltos': 'Closed · resolved',
    '+ Nuevo item': '+ New item', 'Nombre': 'Name', 'Tipo': 'Type', 'Actualizado': 'Updated', 'Propietario': 'Owner',
    'Prueba': 'Test', 'Modelo Semántico': 'Semantic Model', 'hace 2h': '2h ago', 'Reporte': 'Report', 'ayer': 'yesterday',
    '3 días': '3 days', '1 sem': '1 wk', '2 sem': '2 wks', 'Rept. Paginado': 'Paginated Rpt.',
    'OneLake · Fuente unificada': 'OneLake · Single source', 'Todas las tablas disponibles en el workspace': 'All tables available in the workspace',
    '✓ RLS/OLS activo': '✓ RLS/OLS enabled', 'Sistema Ventas': 'Sales System', 'Distribuidora · Depósito': 'Distributor · Warehouse',
    'Ventas Hoy': 'Sales Today', 'Stock Total': 'Total Stock', 'Movimiento Stock · Hoy': 'Stock Movement · Today',
    'Últimas Facturas': 'Latest Invoices', '✓ Ingresada': '✓ Entered', '⟳ Pendiente': '⟳ Pending', '✓ Entregada': '✓ Delivered',
    'Ver en Power BI App': 'Open in Power BI App', 'Dashboard dueños · tiempo real': 'Owners dashboard · real time', 'Web App · Gestión': 'Web App · Management',
    // acerca de
    'Años en análisis de datos': 'Years in data analysis', 'Sobre mí': 'About me',
    'Soy Analista de Datos especializado en el ecosistema Microsoft — Microsoft Fabric, Power BI y SQL Server. Trabajo de forma independiente facilitando a las empresas la transformación de sus datos en herramientas concretas para la toma de decisiones.':
      'I am a Data Analyst specialized in the Microsoft ecosystem — Microsoft Fabric, Power BI and SQL Server. I work independently, helping companies turn their data into concrete tools for decision-making.',
    'Convierto los datos en ventaja competitiva. De la fuente al insight, en un solo flujo.':
      'I turn data into a competitive advantage. From source to insight, in a single flow.',
    'Inteligencia de Negocio': 'Business Intelligence', 'Experiencia': 'Experience', 'Trayectoria profesional': 'Professional experience',
    'Enero 2026 — Presente': 'January 2026 — Present', 'Abril 2024 — Diciembre 2025': 'April 2024 — December 2025',
    'Junio 2019 — Julio 2025': 'June 2019 — July 2025', 'Abril 2018 — Mayo 2019': 'April 2018 — May 2019',
    'Desarrollo de reportes interactivos y paginados en Power BI conectados a modelos semánticos y SQL Server.':
      'Development of interactive and paginated Power BI reports connected to semantic models and SQL Server.',
    'Traducción de stored procedures SQL a medidas DAX con validación de paridad mediante Python y pandas.':
      'Translation of SQL stored procedures into DAX measures, with parity validation in Python and pandas.',
    'Optimización de modelos semánticos, Power Query y lógica DAX para clientes del sector asegurador.':
      'Optimization of semantic models, Power Query and DAX logic for insurance clients.',
    'Gestión de Deployment Pipelines Dev → Prod, configuración de seguridad RLS/OLS y publicación de apps en Power BI Service.':
      'Management of Dev → Prod Deployment Pipelines, RLS/OLS security setup and app publishing in Power BI Service.',
    'Implementaciones en Microsoft Fabric siguiendo buenas prácticas de gobernanza, rendimiento y escalabilidad.':
      'Microsoft Fabric implementations following good practices for governance, performance and scalability.',
    'Desarrollo web y CRM a medida para integración con soluciones BI.': 'Custom web and CRM development integrated with BI solutions.',
    'Modelado de datos tabulares en Power BI y procesos ETL con Power BI Desktop y SQL Server.':
      'Tabular data modeling in Power BI and ETL processes with Power BI Desktop and SQL Server.',
    'Extracción, transformación y carga de datos desde múltiples fuentes locales y en la nube.':
      'Extraction, transformation and loading of data from multiple on-premises and cloud sources.',
    'Desarrollo y optimización de fórmulas en DAX y M para dashboards interactivos.': 'Development and optimization of DAX and M formulas for interactive dashboards.',
    'Gestión y exploración de bases de datos en SQL Server Management Studio (SSMS).': 'Database management and exploration in SQL Server Management Studio (SSMS).',
    'Implementación de roles y permisos para control de acceso en Power BI.': 'Implementation of roles and permissions for access control in Power BI.',
    'Desarrollo de aplicaciones en Power BI con Microsoft Fabric para integración en entorno colaborativo.':
      'Development of Power BI apps with Microsoft Fabric for a collaborative environment.',
    'Proyectista / Analista de Datos': 'Project Designer / Data Analyst', 'Municipalidad de Vicente López': 'Municipality of Vicente López',
    'Implementación de herramientas de seguimiento en Power BI con diagramas de Gantt y curvas de inversión para supervisión de obras.':
      'Implementation of tracking tools in Power BI with Gantt charts and investment curves for public works supervision.',
    'Procesos ETL con SQL Server y Power Query integrando datos de fuentes locales y en la nube.':
      'ETL processes with SQL Server and Power Query, integrating on-premises and cloud data sources.',
    'Reportes interactivos para visualizar tendencias a partir de encuestas y reclamos ciudadanos.':
      'Interactive reports to visualize trends from surveys and citizen service requests.',
    'Optimización de dashboards con DAX y Performance Analyzer.': 'Dashboard optimization with DAX and Performance Analyzer.',
    'Identificación de patrones recurrentes en reclamos para mejorar la gestión de proyectos.':
      'Identification of recurring patterns in service requests to improve project management.',
    'Excel Avanzado': 'Advanced Excel', 'Análisis de costos': 'Cost analysis', 'Analista de Costos': 'Cost Analyst',
    'Automatización de análisis de costos con Excel y Power Query, optimizando flujos de trabajo manuales.':
      'Automation of cost analysis with Excel and Power Query, streamlining manual workflows.',
    'Reportes financieros para seguimiento y control de proyectos.': 'Financial reports for project tracking and control.',
    'Estimación de costos, control de presupuestos y gestión de proveedores.': 'Cost estimation, budget control and vendor management.',
    'Reducción significativa del tiempo requerido para la elaboración de presupuestos mediante procesos ETL.':
      'Significant reduction in the time required to prepare budgets through ETL processes.',
    'Habilidades técnicas': 'Technical skills',
    'Reportes interactivos, paginados, modelos semánticos, DAX avanzado': 'Interactive and paginated reports, semantic models, advanced DAX',
    'OneLake, pipelines, dataflows Gen2, deployment, gobernanza': 'OneLake, pipelines, Dataflows Gen2, deployment, governance',
    'Consultas complejas, stored procedures, optimización, ETL': 'Complex queries, stored procedures, optimization, ETL',
    'Validación SQL↔DAX, automatización, análisis de datos': 'SQL↔DAX validation, automation, data analysis',
    'Transformación de datos, ETL, fuentes múltiples': 'Data transformation, ETL, multiple sources',
    'Node.js & Desarrollo Web': 'Node.js & Web Development',
    'API REST, sistemas de gestión a medida, integración con BI': 'REST APIs, custom management systems, BI integration',
    'Formación': 'Education', 'Educación y certificados': 'Education and certificates', 'Educación': 'Education',
    'Ingeniero Civil': 'Civil Engineer',
    'Formación en análisis cuantitativo, estructuras de datos, estadística aplicada y gestión de proyectos.':
      'Training in quantitative analysis, data structures, applied statistics and project management.',
    'Certificados': 'Certificates',
    'Fundamentos profesionales del análisis de datos': 'Career Essentials in Data Analysis',
    'Análisis de Datos y Business Intelligence': 'Data Analysis and Business Intelligence',
    'Modelamiento y Análisis de Datos con Excel y Power BI': 'Data Modeling and Analysis with Excel and Power BI',
    // portfolio
    'Mi Portfolio': 'My Portfolio', 'Selección de los trabajos que he realizado.': "A selection of the work I've done.",
    'Todos los Proyectos': 'All Projects', 'Desarrollo Web / CRM': 'Web Development / CRM',
    'Reporte de seguimiento de solicitudes': 'Service request tracking report',
    'Dashboard Power BI para análisis y seguimiento de reclamos ciudadanos vinculados a obras públicas, con visualización por tipo, estado y zona geográfica.':
      'Power BI dashboard to analyze and track citizen service requests related to public works, with views by type, status and geographic area.',
    'Municipalidad': 'Municipality', 'Ver Detalles →': 'View details →',
    'Reporte de Ventas e Inventario': 'Sales and Inventory Report',
    'Consolidación de múltiples Excel en un reporte Power BI unificado para análisis de ventas e inventario.':
      'Multiple Excel files consolidated into a single Power BI report for sales and inventory analysis.',
    'Modelado': 'Modeling', 'Automotriz': 'Automotive', 'Tu navegador no soporta el elemento de video.': 'Your browser does not support the video element.',
    'Sistema de Registro en Power Apps': 'Record-keeping system in Power Apps',
    'Aplicación Power Apps para registro y gestión de operaciones internas — compras, ventas, artículos, proveedores, sociedades y clientes — con dashboard analítico en Power BI.':
      'Power Apps application to record and manage internal operations — purchases, sales, items, vendors, companies and customers — with an analytical dashboard in Power BI.',
    'Logística': 'Logistics', 'Implementación Microsoft Fabric': 'Microsoft Fabric implementation',
    'Implementación completa desde la ingesta hasta el reporte: Dataflows Gen2, OneLake, Semantic Models con RLS/OLS y Deployment Pipelines.':
      'Full implementation from ingestion to report: Dataflows Gen2, OneLake, Semantic Models with RLS/OLS and Deployment Pipelines.',
    'Consultoría': 'Consulting', 'Dashboard Corporativo de Encuestas': 'Corporate Survey Dashboard',
    'Dashboard Power BI construido sobre datos de Google Forms y Excel. Transformación con Power Query y medidas DAX para análisis de respuestas por categoría':
      'Power BI dashboard built on Google Forms and Excel data. Transformation with Power Query and DAX measures to analyze responses by category',
    'Lenguaje M': 'M language', 'UTech Warehouse - Sistema Web': 'UTech Warehouse - Web System',
    'Aplicación web full-stack para gestión de almacén con dashboard interactivo, gestión de inventario en tiempo real y panel administrativo completo.':
      'Full-stack web application for warehouse management with an interactive dashboard, real-time inventory management and a complete admin panel.',
    'Stack & Metodología': 'Stack & Methodology', 'Stack técnico': 'Tech stack', 'Medidas': 'Measures', 'Cómo trabajo': 'How I work',
    'Discovery y modelado': 'Discovery and modeling', 'Sprints iterativos': 'Iterative sprints', 'Validación y despliegue': 'Validation and deployment',
    'Enfoque ágil · Scrum': 'Agile approach · Scrum',
    // modales del portfolio
    'Aplicación de Registro en Power Apps': 'Record-keeping app in Power Apps', 'Resumen del Proyecto': 'Project summary',
    'Aplicación canvas desarrollada en Power Apps con 6 módulos integrados para automatizar la gestión completa de stock, compras, ventas y proveedores de una empresa de alimentos y licores.':
      'Canvas app built in Power Apps with 6 integrated modules to automate the full management of stock, purchases, sales and vendors for a food and liquor company.',
    'Tu navegador no soporta video.': 'Your browser does not support video.', 'Problemática:': 'The problem:',
    'Sin sistema centralizado para stock, compras y ventas': 'No centralized system for stock, purchases and sales',
    'Cálculo manual de impuestos, IVA y percepciones por factura': 'Manual calculation of taxes, VAT and withholdings per invoice',
    'Sin validación de stock disponible al momento de vender': 'No check of available stock at the time of sale',
    'Sin historial consolidado de proveedores ni clientes': 'No consolidated history of vendors or customers',
    'Stock automático': 'Automatic stock', 'Cada venta descuenta el inventario en tiempo real — sin actualización manual': 'Every sale updates inventory in real time — no manual updates',
    'Cálculos eliminados': 'No more manual calculations',
    'IVA, impuestos internos y percepciones se calculan automáticamente por factura': 'VAT, excise taxes and withholdings are calculated automatically per invoice',
    'Compras, ventas, stock, proveedores y clientes en un solo lugar': 'Purchases, sales, stock, vendors and customers in one place',
    'Acceso directo a los datos': 'Direct access to data', 'Conexión directa a la fuente — cualquier dato disponible al instante': 'Direct connection to the source — any data available instantly',
    'Registro más rápido': 'Faster data entry', 'Reducción considerable del tiempo para registrar compras y ventas': 'Considerably less time to record purchases and sales',
    'Ver en GitHub': 'View on GitHub', 'Código y documentación completa': 'Code and full documentation',
    'Dashboard de Gestión de Reclamos Municipales': 'Municipal Service Request Dashboard',
    'Dashboard Power BI para análisis de reclamos ciudadanos en Vicente López. Geolocalización por barrio, Frecuencia de incidentes y drill-through al detalle por tipo de reclamo.':
      'Power BI dashboard to analyze citizen service requests in Vicente López. Geolocation by neighborhood, incident frequency and drill-through to detail by request type.',
    'Características:': 'Features:', '- Linea del tiempo': '- Timeline', '- Mapeo geográfico interactivo de zonas afectadas': '- Interactive map of affected areas',
    '- Drill-through para análisis detallado': '- Drill-through for detailed analysis', '- Filtros dinámicos para segmentación': '- Dynamic filters for segmentation',
    'Resultados Obtenidos': 'Results', 'Reducción tiempo de respuesta': 'Reduction in response time', 'Optimización de recursos': 'Resource optimization',
    'Ver en Power BI': 'Open in Power BI', 'Dashboard interactivo en vivo': 'Live interactive dashboard',
    'Consolidación de múltiples archivos Excel desorganizados en un dashboard unificado para análisis de ventas e inventario en tiempo real.':
      'Multiple unorganized Excel files consolidated into a single dashboard for real-time sales and inventory analysis.',
    '- KPIs: ventas, gastos, utilidad, inversión': '- KPIs: sales, expenses, profit, investment', '- Análisis de rotación y margen por modelo': '- Turnover and margin analysis by model',
    '- Alertas visuales de stock - Formatos condicionales': '- Visual stock alerts - Conditional formatting',
    '- Segmentación de datos por categoría y proveedor': '- Data segmentation by category and vendor',
    'Dashboard de ventas e inventario en vivo': 'Live sales and inventory dashboard',
    'UTech Warehouse — Sistema Web Full Stack': 'UTech Warehouse — Full-Stack Web System', 'Descripción': 'Description',
    'Aplicación web full-stack para gestión integral de almacén con dashboard interactivo, control de inventario y panel administrativo completo.':
      'Full-stack web application for end-to-end warehouse management with an interactive dashboard, inventory control and a complete admin panel.',
    'Dashboard con métricas en tiempo real': 'Dashboard with real-time metrics', 'Gestión completa de inventario y stock': 'Full inventory and stock management',
    'Interfaz responsive y moderna': 'Modern, responsive interface', 'Panel administrativo integral': 'Complete admin panel',
    'Aplicación en Vivo': 'Live application', 'Ver Aplicación en GitHub Pages': 'Open the app on GitHub Pages', 'Sistema completo en producción': 'Complete system in production',
    'Implementación Microsoft Fabric — End-to-End': 'Microsoft Fabric Implementation — End-to-End', 'Qué se implementó': 'What was implemented',
    'Implementación end-to-end en Microsoft Fabric: desde la configuración del workspace y la ingesta de datos hasta la publicación de reportes en producción con pipelines de deployment.':
      'End-to-end implementation in Microsoft Fabric: from workspace setup and data ingestion to publishing reports in production with deployment pipelines.',
    'Capas implementadas:': 'Layers implemented:', 'Ingesta — Dataflow Gen2': 'Ingestion — Dataflow Gen2',
    'Conexión a SQL Server y Excel, transformaciones con Power Query, carga a OneLake': 'Connection to SQL Server and Excel, Power Query transformations, load into OneLake',
    'Almacenamiento — OneLake': 'Storage — OneLake', 'Fuente unificada de datos para todos los reportes y modelos del workspace': 'Single data source for every report and model in the workspace',
    'Modelo — Semantic Model': 'Model — Semantic Model',
    'Construido desde cero: relaciones, 50+ medidas DAX, RLS por rol, OLS por objeto': 'Built from scratch: relationships, 50+ DAX measures, RLS by role, OLS by object',
    'Configuración de stages, asignación de workspaces, promotion controlada de cambios': 'Stage setup, workspace assignment, controlled promotion of changes',
    'Reportes — Power BI + Paginados': 'Reports — Power BI + Paginated',
    'Dashboards interactivos y reportes paginados en Report Builder sobre el mismo modelo': 'Interactive dashboards and paginated reports in Report Builder on the same model',
    'Distribución — Power BI App': 'Distribution — Power BI App',
    'App publicada desde el workspace: navegación centralizada, acceso controlado por rol, todos los reportes en un solo lugar para el usuario final':
      'App published from the workspace: centralized navigation, role-based access, every report in one place for the end user',
    'Deployment Pipeline en acción': 'Deployment Pipeline in action', 'Data Lake Unificado': 'Unified Data Lake', 'DAX · RLS · OLS · Relaciones': 'DAX · RLS · OLS · Relationships',
    'Lo que diferencia esta implementación': 'What sets this implementation apart',
    'Un solo modelo semántico sirve tanto dashboards interactivos como reportes paginados. Los datos fluyen desde SQL Server hasta el reporte final sin duplicarse.':
      'A single semantic model serves both interactive dashboards and paginated reports. Data flows from SQL Server to the final report without being duplicated.',
    'Dashboard Power BI construido sobre datos de encuestas exportados de Google Forms y Excel. Transformación y limpieza con Power Query, medidas DAX para análisis de respuestas por categoría.':
      'Power BI dashboard built on survey data exported from Google Forms and Excel. Transformation and cleaning with Power Query, DAX measures to analyze responses by category.',
    'Capacidades técnicas usadas:': 'Technical capabilities used:', 'Power Query + Lenguaje M': 'Power Query + M language',
    '— transformación y limpieza de datos de Google Forms y Excel': '— transformation and cleaning of Google Forms and Excel data',
    '— comparativas y tendencias por región y generación': '— comparisons and trends by region and generation',
    'Slicers dinámicos': 'Dynamic slicers', '— segmentación por área, generación y tipo de trabajo': '— segmentation by area, generation and type of work',
    '— análisis detallado por pregunta y segmento': '— detailed analysis by question and segment',
    // blog
    'Artículo destacado': 'Featured article', 'Destacado': 'Featured', '29 de septiembre, 2025': 'September 29, 2025',
    'De Power Apps a Power BI: Cómo logré visualizar fotos de una lista de SharePoint': 'From Power Apps to Power BI: how I displayed photos from a SharePoint list',
    'Descubre cómo superé el desafío de visualizar imágenes almacenadas en SharePoint directamente en Power BI, creando una solución integrada que conecta Power Apps, SharePoint y Power BI para mostrar fotografías en informes interactivos y dashboards empresariales.':
      'How I solved the challenge of displaying images stored in SharePoint directly in Power BI, building an integrated solution that connects Power Apps, SharePoint and Power BI to show photos in interactive reports and business dashboards.',
    'Ing. Ricardo Ugarte': 'Ricardo Ugarte, Eng.', 'Analista de Datos': 'Data Analyst', 'Leer Artículo →': 'Read article →',
    'Contribuciones a la comunidad': 'Community contributions', 'Mejores prácticas e innovaciones en análisis de datos': 'Good practices and ideas in data analysis',
    '24 de octubre, 2025': 'October 24, 2025',
    'Incorporar banderas de países 🎌en sus reportes de Power BI de manera eficiente': 'Adding country flags 🎌 to your Power BI reports efficiently',
    'Al desarrollar visualizaciones para análisis regionales o globales, incluir banderas mejora la identificación de países. Sin embargo, obtener y mantener estos recursos de forma manual puede resultar poco práctico.':
      'When building visuals for regional or global analysis, flags make countries easier to identify. However, getting and maintaining those assets by hand can be impractical.',
    'Leer Más →': 'Read more →', '(artículo en español)': '(article in Spanish)',
    // contacto
    'Ponte en contacto': 'Get in touch',
    'Transformemos tus datos en información procesable. Analicemos cómo podemos trabajar juntos para lograr tus objetivos comerciales.':
      "Let's turn your data into actionable information. Let's look at how we can work together to reach your business goals.",
    'Para consultas sobre proyectos y colaboraciones': 'For project inquiries and collaborations',
    'Para consultas rápidas y comunicación directa': 'For quick questions and direct communication', 'Conéctate conmigo': 'Connect with me',
    'Inicia la Conversación': 'Start the conversation', 'Cuéntame brevemente sobre tu situación actual.': 'Tell me briefly about your current situation.',
    'Nombre completo *': 'Full name *', '¿Qué desafío estás enfrentando con tus datos? *': 'What challenge are you facing with your data? *',
    'Información adicional (opcional):': 'Additional information (optional):', 'Empresa': 'Company', 'Tu rol': 'Your role', 'Selecciona...': 'Select...',
    'Director/Gerente': 'Director/Manager', 'Analista de datos': 'Data analyst', 'Consultor': 'Consultant', 'Otro': 'Other',
    'Enviar Mensaje': 'Send message', '¡Mensaje Enviado Exitosamente!': 'Message sent!',
    'Gracias por contactarme. Me pondré en contacto contigo dentro de 24 horas.': "Thanks for reaching out. I'll get back to you within 24 hours.",
    'Mi enfoque de los proyectos de análisis de datos garantiza el éxito desde el descubrimiento hasta la implementación':
      'How I run data analysis projects, from discovery through implementation',
    'Diagnóstico': 'Assessment', 'Comprender tus objetivos comerciales, fuentes de datos y requisitos analíticos': 'Understanding your business goals, data sources and analytical requirements',
    'Estrategia': 'Strategy', 'Desarrollo de una estrategia de análisis integral y una arquitectura de soluciones': 'Defining an analytics strategy and a solution architecture',
    'Implementación': 'Implementation', 'Desarrollo e implementación de soluciones de datos y mejoramiento interactivo.': 'Building and deploying data solutions, with iterative improvement.',
    'Soporte': 'Support', 'Proporcionar servicios continuos de asistencia, formación y optimización.': 'Ongoing support, training and optimization.',
    'Aplicaciones de gestión construidas dentro de Microsoft Fabric con el SDK Rayfin, sobre los mismos datos que usan los reportes.':
      'Business applications built inside Microsoft Fabric with the Rayfin SDK, on the same data the reports use.',
    'Bases de datos SQL Server y SQL database en Fabric: modelado de tablas, stored procedures y consultas que alimentan aplicaciones y reportes.':
      'SQL Server and SQL database in Fabric: table modeling, stored procedures and queries that feed applications and reports.',
    'Python integrado con Microsoft Fabric mediante Semantic Link para análisis directo sobre modelos semánticos y validación de datos con pandas.':
      'Python integrated with Microsoft Fabric through Semantic Link for analysis directly on semantic models and data validation with pandas.',
    'Soluciones de datos · Microsoft Fabric': "Data solutions · Microsoft Fabric",
    'Ingeniero de formación, construyo soluciones de datos de punta a punta.': "Engineer by training, I build end-to-end data solutions.",
    'Diseño y construyo soluciones de datos de punta a punta en Microsoft Fabric: base de datos, modelo semántico, aplicaciones y reportes de Power BI.': "I design and build end-to-end data solutions on Microsoft Fabric: database, semantic model, applications and Power BI reports.",
    'Ingeniero civil de formación. Diseño y construyo soluciones de datos de punta a punta en el ecosistema Microsoft — Microsoft Fabric, Power BI y SQL Server. Trabajo de forma independiente facilitando a las empresas la transformación de sus datos en herramientas concretas para la toma de decisiones.': "Civil engineer by training. I design and build end-to-end data solutions in the Microsoft ecosystem — Microsoft Fabric, Power BI and SQL Server. I work independently, helping companies turn their data into concrete tools for decision-making.",
    'Microsoft Fabric y Power BI': "Microsoft Fabric and Power BI",
    'Ricardo Ugarte · Soluciones de datos en Microsoft Fabric y Power BI': "Ricardo Ugarte · Data solutions on Microsoft Fabric and Power BI",
    "Diseño y desarrollo soluciones de datos de punta a punta en Microsoft Fabric: arquitectura y bases de datos, aplicaciones de gestión, automatización y reportes de Power BI.": "I design and build end-to-end data solutions on Microsoft Fabric: data architecture and databases, business applications, automation and Power BI reports.",
    // casos de éxito
    'Casos de éxito': 'Case studies', 'Caso de éxito': 'Case study', 'Distribuidora mayorista de bebidas': 'Wholesale beverage distributor',
    'De Excel manual a': 'From manual Excel to',
    'Una distribuidora mayorista de bebidas gestionaba compras, ventas y stock en archivos de Excel. Las facturas se cargaban a mano, consolidar el stock era difícil y los errores eran frecuentes. Construí un sistema de gestión sobre Microsoft Fabric, con reportes de Power BI encima.':
      'A wholesale beverage distributor ran purchases, sales and stock on Excel files. Invoices were typed by hand, stock was hard to consolidate and errors were common. I built a management system on Microsoft Fabric with Power BI reporting on top.',
    'Una distribuidora mayorista de bebidas gestionaba compras, ventas y stock en Excel. Construí un sistema de gestión sobre Microsoft Fabric, con reportes de Power BI encima.':
      'A wholesale beverage distributor ran purchases, sales and stock on Excel. I built a management system on Microsoft Fabric with Power BI reporting on top.',
    'Carga de facturas': 'Invoice entry', 'Carga de ventas': 'Sales entry', 'Stock consolidado': 'Consolidated stock', 'En tiempo real': 'Real time',
    'Quiero algo así para mi empresa': 'I want this for my company', 'Ver el caso completo': 'See the full case study', 'Ver el caso completo →': 'See the full case study →',
    'De Excel manual a Microsoft Fabric · distribuidora de bebidas': 'From manual Excel to Microsoft Fabric · beverage distributor',
    'El sistema en 40 segundos, con subtítulos en español.': 'The system in 40 seconds.',
    'Módulos': 'Modules', 'Entregables': 'Delivered',
    'Compras y costeo de facturas': 'Purchases and invoice costing', 'Ventas y preventa': 'Sales and pre-sales',
    'Stock por lote, vencimientos y transferencias': 'Stock by lot, expiry and transfers', 'Cuentas corrientes de clientes y caja': 'Customer accounts and cash',
    'Registro de auditoría de cada cambio': 'Audit log of every change', 'Reportes de Power BI por área del negocio': 'Power BI reports by business area',
    'Despliegue en entornos Dev / Test / Prod': 'Dev / Test / Prod deployment', 'Manual de usuario': 'User manual', 'Capacitación del equipo del cliente': "Training for the client's team",
    'La aplicación': 'The application', 'La operación diaria': 'Daily operations', 'en un solo lugar': 'in one place',
    'Carga de compras con costeo automático de la factura.': 'Purchase entry with automatic invoice costing.',
    'Stock consolidado por lote, con alertas de stock bajo y vencimientos.': 'Stock consolidated by lot, with low-stock and expiry alerts.',
    'Seguimiento de vencimientos por lote, antes de perder mercadería.': 'Expiry tracking per lot, before stock is lost.',
    'Cuentas corrientes de clientes y saldos pendientes.': 'Customer accounts and pending balances.',
    'Por dentro': 'Under the hood', 'Construido de punta a punta en': 'Built end to end on',
    'Aplicación': 'App', 'Base de datos SQL de Fabric': 'Fabric SQL database', 'Modelo semántico con DAX': 'Semantic model with DAX',
    'Reportes de Power BI publicados como app': 'Power BI reports published as an app', 'Arquitectura': 'Architecture',
    'Linaje del workspace: aplicación, base de datos SQL, modelo semántico y 5 reportes.': 'Workspace lineage: app, SQL database, semantic model and 5 reports.',
    'Un solo modelo semántico compartido por todos los reportes.': 'Semantic model shared by every report.',
    'Power BI: costo, venta y margen por empresa.': 'Power BI: cost, sales and margin by company.',
    'Capturas del entorno de prueba. Datos del cliente ocultos.': 'Screenshots from the test environment. Client data hidden.',
    'Tu caso': 'Your case', '¿Tu empresa todavía funciona con': 'Is your company still running on', 'archivos de Excel': 'Excel files',
    'Escríbeme con tu caso y te cuento cómo lo construiría en Microsoft Fabric.': "Message me with your case and I'll tell you how I would build it on Microsoft Fabric.",
    'Ver más proyectos': 'See more projects', 'Ampliar imagen': 'Enlarge image', 'Cerrar': 'Close', 'Imagen ampliada': 'Enlarged image',
    'Recorrido por el sistema de gestión': 'Walkthrough of the management system',
    'Pantalla de carga de compras con costeo de factura': 'Purchase entry screen with invoice costing', 'Pantalla de stock consolidado por lote': 'Consolidated stock by lot screen',
    'Pantalla de vencimientos por lote': 'Expiry by lot screen', 'Pantalla de cuentas corrientes de clientes': 'Customer accounts screen',
    'Vista de linaje del workspace en Microsoft Fabric': 'Workspace lineage view in Microsoft Fabric', 'Diagrama del modelo semántico': 'Semantic model diagram',
    'Reporte de Power BI de resumen de ventas': 'Power BI sales summary report',
    'Caso de éxito: de Excel manual a Microsoft Fabric · Ricardo Ugarte': 'Case study: from manual Excel to Microsoft Fabric · Ricardo Ugarte',
    // atributos
    '¿Cómo te llamas?': "What's your name?", 'tu@empresa.com': 'you@company.com', 'Nombre de tu empresa': 'Your company name',
    "Ej: 'Pasamos 2 días semanales consolidando reportes de ventas en Excel' o 'No tenemos visibilidad en tiempo real del inventario'": "E.g. 'We spend 2 days a week consolidating sales reports in Excel' or 'We have no real-time visibility of inventory'",
    'Remoto': 'Remote', 'Híbrido': 'Hybrid', 'Presencial': 'On-site',
    'Abrir menú': 'Open menu', 'Ricardo Ugarte, inicio': 'Ricardo Ugarte, home', 'Cambiar idioma': 'Change language',
    // títulos de pestaña
    'Ricardo Ugarte · Data Analyst · Microsoft Fabric y Power BI': 'Ricardo Ugarte · Data Analyst · Microsoft Fabric & Power BI',
    'Acerca de · Ricardo Ugarte': 'About · Ricardo Ugarte', 'Contacto · Ricardo Ugarte': 'Contact · Ricardo Ugarte'
  };

  var ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  var originals = new WeakMap();
  var titleEs = document.title;
  var lang = 'es';

  function norm(t) { return t.replace(/\s+/g, ' ').trim(); }

  function textNodes(root) {
    var out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        for (var p = n.parentNode; p && p !== root.parentNode; p = p.parentNode) {
          if (SKIP[p.nodeName] || (p.hasAttribute && (p.hasAttribute('data-en') || p.hasAttribute('data-no-i18n')))) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (w.nextNode()) out.push(w.currentNode);
    return out;
  }

  function apply(root) {
    textNodes(root).forEach(function (n) {
      if (!originals.has(n)) originals.set(n, n.nodeValue);
      var es = originals.get(n);
      if (lang === 'en') {
        var en = EN[norm(es)];
        n.nodeValue = en ? es.replace(es.trim(), en) : es;
      } else {
        n.nodeValue = es;
      }
    });
    var scope = root.querySelectorAll ? root : document;
    scope.querySelectorAll('[data-en]').forEach(function (el) {
      if (!el.hasAttribute('data-es')) el.setAttribute('data-es', el.innerHTML);
      el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
    });
    // enlaces con versión en inglés (por ejemplo, el CV)
    scope.querySelectorAll('[data-href-en]').forEach(function (el) {
      if (!el.hasAttribute('data-href-es')) el.setAttribute('data-href-es', el.getAttribute('href'));
      el.setAttribute('href', el.getAttribute(lang === 'en' ? 'data-href-en' : 'data-href-es'));
    });
    ATTRS.forEach(function (a) {
      scope.querySelectorAll('[' + a + ']').forEach(function (el) {
        var key = 'data-es-' + a;
        if (!el.hasAttribute(key)) el.setAttribute(key, el.getAttribute(a));
        var es = el.getAttribute(key);
        el.setAttribute(a, lang === 'en' && EN[norm(es)] ? EN[norm(es)] : es);
      });
    });
  }

  function setLang(next, save) {
    lang = next === 'en' ? 'en' : 'es';
    document.documentElement.lang = lang;
    document.title = lang === 'en' && EN[norm(titleEs)] ? EN[norm(titleEs)] : titleEs;
    apply(document.body);
    document.querySelectorAll('.lang-toggle [data-l]').forEach(function (s) {
      s.classList.toggle('is-on', s.getAttribute('data-l') === lang);
    });
    document.querySelectorAll('.lang-toggle').forEach(function (b) { b.setAttribute('aria-pressed', String(lang === 'en')); });
    if (save) { try { localStorage.setItem('lang', lang); } catch (e) {} }
  }

  function initial() {
    var q = /[?&]lang=(en|es)\b/.exec(location.search);
    if (q) return q[1];
    try { var s = localStorage.getItem('lang'); if (s === 'en' || s === 'es') return s; } catch (e) {}
    return /^es\b/i.test(navigator.language || 'es') ? 'es' : 'en';
  }

  function start() {
    document.querySelectorAll('.lang-toggle').forEach(function (b) {
      b.addEventListener('click', function () { setLang(lang === 'en' ? 'es' : 'en', true); });
    });
    // contenido que se inserta después (modal de proyectos)
    ['modal-title', 'modal-content'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      new MutationObserver(function () { if (lang === 'en') apply(el); }).observe(el, { childList: true, subtree: true });
    });
    setLang(initial(), false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
