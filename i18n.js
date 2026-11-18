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
    'Inicia la conversación': 'Start the conversation', 'Cuéntame brevemente sobre tu situación actual.': 'Tell me briefly about your current situation.',
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
    'Abrir la captura en tamaño completo ↗': 'Open the full-size screenshot ↗',
    "Diseño y desarrollo soluciones de datos de punta a punta en el ecosistema Microsoft. Empecé con SQL Server y Power BI, y hoy trabajo sobre Microsoft Fabric como plataforma de datos y aplicaciones: bases de datos, modelos semánticos, gobierno de datos, aplicaciones de gestión y reportes.": "I design and build end-to-end data solutions in the Microsoft ecosystem. I started with SQL Server and Power BI, and today I work on Microsoft Fabric as a data and application platform: databases, semantic models, data governance, business applications and reports.",
    "He trabajado con clientes de Estados Unidos, Canadá y Argentina en seguros, retail, distribución, logística y sector público. Hoy trabajo de forma independiente a través de NUdata, consultora de Microsoft Fabric y Power BI.": "I have worked with clients in the United States, Canada and Argentina across insurance, retail, distribution, logistics and the public sector. Today I work independently through NUdata, a Microsoft Fabric and Power BI consultancy.",
    "IA aplicada a datos": "AI applied to data",
    "Analista de Datos · Microsoft Fabric": "Data Analyst · Microsoft Fabric",
    "Analista de Datos · Power BI Developer": "Data Analyst · Power BI Developer",
    "Analista de Datos · Proyectista BI": "Data Analyst · BI Designer",
    "NUdata — Consultoría Microsoft Fabric & Power BI": "NUdata — Microsoft Fabric & Power BI Consulting",
    "Gold Data — Consultoría Microsoft Fabric & Power BI": "Gold Data — Microsoft Fabric & Power BI Consulting",
    "Modelado semántico en Power BI: relaciones, medidas DAX y optimización de rendimiento según volumen y frecuencia de actualización.": "Semantic modeling in Power BI: relationships, DAX measures and performance tuning based on data volume and refresh frequency.",
    "Dashboards e informes de negocio en Power BI y Report Builder, publicados como Power BI Apps por área de negocio.": "Business dashboards and reports in Power BI and Report Builder, published as Power BI Apps by business area.",
    "Integración de datos de múltiples fuentes en Microsoft Fabric: pipelines con Dataflows Gen2, Lakehouse y SQL database.": "Multi-source data integration in Microsoft Fabric: pipelines with Dataflows Gen2, Lakehouse and SQL database.",
    "Gobierno y seguridad de datos: RLS/OLS y despliegue controlado en Dev/Test/Prod.": "Data governance and security: RLS/OLS and controlled Dev/Test/Prod deployment.",
    "Automatización de tareas de modelado y documentación con un servidor MCP propio, integrando asistentes de IA al flujo de trabajo de Power BI y Fabric.": "Automation of modeling and documentation tasks with my own MCP server, bringing AI assistants into the Power BI and Fabric workflow.",
    "Desarrollo de punta a punta de una aplicación transaccional en Fabric Apps para el sector logístico.": "End-to-end development of a transactional application in Fabric Apps for the logistics sector.",
    "Manual de usuario y capacitación a usuarios finales de la aplicación y de los reportes de Power BI.": "User manual and end-user training for the application and the Power BI reports.",
    "Integración de datos de múltiples fuentes: modelado tabular en Power BI y ETL con Power Query y SQL Server.": "Multi-source data integration: tabular modeling in Power BI and ETL with Power Query and SQL Server.",
    "Dashboards interactivos con DAX y administración de SQL Server con SSMS: tablas, vistas, relaciones, roles y permisos.": "Interactive dashboards with DAX and SQL Server administration in SSMS: tables, views, relationships, roles and permissions.",
    "Optimización de medidas DAX y consultas SQL, con menores tiempos de actualización y mejor experiencia de usuario.": "Optimization of DAX measures and SQL queries, with shorter refresh times and a better user experience.",
    "Implementación de RLS/OLS y publicación de Power BI Apps integradas con Microsoft Fabric.": "RLS/OLS implementation and publishing of Power BI Apps integrated with Microsoft Fabric.",
    "Relevamiento de requerimientos de negocio y traducción a modelos de datos y KPIs.": "Gathering business requirements and translating them into data models and KPIs.",
    "Solución de BI para obras públicas: modelo estrella (data mart) en SQL Server, Gantt interactivo y KPIs de avance físico-financiero.": "BI solution for public works: star schema (data mart) in SQL Server, interactive Gantt and physical-financial progress KPIs.",
    "Procesos ETL con SQL Server y Power Query integrando múltiples fuentes, con documentación de reglas de transformación, limpieza y calidad de datos.": "ETL processes with SQL Server and Power Query across multiple sources, with documented transformation, cleansing and data quality rules.",
    "Dashboards interactivos y panel de control para el seguimiento de gestión.": "Interactive dashboards and a control panel for management tracking.",
    "Relevamiento de requerimientos con la Dirección de Infraestructura para definir métricas de gestión pública.": "Requirements gathering with the Infrastructure Department to define public management metrics.",
    "Automatización del análisis de costos con Excel y Power Query, reemplazando consolidaciones manuales y reduciendo los tiempos de cierre mensual.": "Automation of cost analysis with Excel and Power Query, replacing manual consolidation and shortening month-end close.",
    "Reportes financieros con KPIs de rentabilidad para el seguimiento y control de proyectos por parte de la dirección.": "Financial reports with profitability KPIs for project tracking and control by management.",
    "Modelo estrella": "Star schema",
    "Excel avanzado": "Advanced Excel",
    "Power BI y modelado": "Power BI and modeling",
    "DAX avanzado, Power Query (M), Direct Lake, Tabular Editor, DAX Studio, reportes paginados en Report Builder y Power BI Apps.": "Advanced DAX, Power Query (M), Direct Lake, Tabular Editor, DAX Studio, paginated reports in Report Builder and Power BI Apps.",
    "OneLake, Dataflows Gen2, Lakehouse, SQL database, pipelines y aplicaciones con Fabric Apps.": "OneLake, Dataflows Gen2, Lakehouse, SQL database, pipelines and applications with Fabric Apps.",
    "Bases de datos y ETL": "Databases and ETL",
    "SQL Server y T-SQL, SSMS, Azure Data Factory y modelo estrella (data mart).": "SQL Server and T-SQL, SSMS, Azure Data Factory and star schema (data mart).",
    "Gobierno y seguridad": "Governance and security",
    "RLS/OLS, SSO con Entra ID, administración de workspaces y documentación de reglas de transformación.": "RLS/OLS, SSO with Entra ID, workspace administration and documentation of transformation rules.",
    "Desarrollo, automatización e IA": "Development, automation and AI",
    "Python y pandas, React, Vite y TypeScript, Node.js, Power Automate, Git y servidores MCP para integrar asistentes de IA al trabajo con Power BI y Fabric.": "Python and pandas, React, Vite and TypeScript, Node.js, Power Automate, Git and MCP servers to bring AI assistants into Power BI and Fabric work.",
    "Idiomas": "Languages",
    "Español": "Spanish",
    "· nativo": "· native",
    "Inglés": "English",
    "· intermedio escrito, básico oral": "· intermediate written, basic spoken",
    "Power BI – Análisis de Datos y Business Intelligence": "Power BI – Data Analysis and Business Intelligence",
    "Modelado y funciones DAX para Power BI": "DAX Modeling and Functions for Power BI",
    "Reportes profesionales con Power BI Desktop": "Professional Reports with Power BI Desktop",
    "Mi trabajo": "My work",
    "Mira lo que": "See what I",
    "construyo": "build",
    "Casos reales, con el problema, la solución y los resultados.": "Real cases, with the problem, the solution and the results.",
    "Ver casos de éxito": "See case studies",
    'Así trabajo en cada proyecto, desde el diagnóstico hasta el soporte.': 'How I work on every project, from assessment to support.',
    "API de Claude": "Claude API",
    "API de Claude (lectura de facturas)": "Claude API (invoice reading)",
    "Acceso a la información": "Access to information",
    "Administración": "Administration",
    "Analiza costo, venta y margen por empresa en Power BI.": "Analyzes cost, sales and margin by company in Power BI.",
    "Aplicaciones de gestión a medida": "Custom business applications",
    "Aplicación (React · Fabric Apps)": "App (React · Fabric Apps)",
    "Aplicación de gestión": "Business application",
    "Aplicación de gestión y base de datos en producción": "Business application and database in production",
    "Aplicación de gestión: stock consolidado por lote": "Business application: stock consolidated by lot",
    "Arquitectura e ingeniería de datos": "Data architecture and engineering",
    "Artículo Destacado": "Featured article",
    "Automatización de flujos de trabajo": "Workflow automation",
    "Automatización e IA": "Automation and AI",
    "Automatización e inteligencia artificial": "Automation and artificial intelligence",
    "Automatizo flujos e incorporo IA, por ejemplo para leer facturas.": "I automate workflows and add AI, for example to read invoices.",
    "Base de datos": "Database",
    "Base de datos SQL": "SQL database",
    "Base de datos, aplicación de gestión, carga de facturas con IA y reportes de Power BI sobre Microsoft Fabric, en uso en producción.": "Database, business application, AI-assisted invoice entry and Power BI reports on Microsoft Fabric, in production use.",
    "Cada responsable consulta lo que necesita desde la aplicación o desde la app de Power BI, según su rol.": "Each person checks what they need from the application or the Power BI app, based on their role.",
    "Carga de datos": "Data loading",
    "Carga de facturas con IA": "AI-assisted invoice entry",
    "Carga de facturas: de 10 a 2 minutos.": "Invoice entry: from 10 to 2 minutes.",
    "Carga de ventas: de 20 a 5 minutos.": "Sales entry: from 20 to 5 minutes.",
    "Caso de éxito · Implementación productiva": "Case study · Production deployment",
    "Centralizar la información operativa en una sola base de datos.": "Centralize operational information in a single database.",
    "Compras con costeo de facturas, ventas y preventa, stock por lote con vencimientos, transferencias, cuentas corrientes y caja, con registro de auditoría de cada cambio.": "Purchases with invoice costing, sales and pre-sales, stock by lot with expiry dates, transfers, customer accounts and cash, with an audit log of every change.",
    "Concilia cobros, caja y cuentas corrientes de clientes.": "Reconciles collections, cash and customer accounts.",
    "Configuración de workspaces y capacidad": "Workspace and capacity setup",
    "Construyo modelos y reportes de Power BI con indicadores consistentes.": "I build Power BI models and reports with consistent metrics.",
    "Consulta el stock actualizado y registra ventas y preventas.": "Checks up-to-date stock and records sales and pre-sales.",
    "Cómo funciona": "How it works",
    "Dar a cada área acceso a la información que necesita.": "Give each area access to the information it needs.",
    "Datos, modelos y reportes en una misma plataforma, con despliegue controlado y acceso según el rol de cada usuario.": "Data, models and reports on one platform, with controlled deployment and access based on each user's role.",
    "Del depósito": "From the warehouse",
    "Deployment Pipelines Dev / Test / Prod y seguridad por rol": "Dev / Test / Prod Deployment Pipelines and role-based security",
    "Depósito": "Warehouse",
    "Desarrollo una aplicación de gestión que registra cada operación con validaciones.": "I build a business application that records every operation with validations.",
    "Desarrollé la solución de punta a punta de forma individual: la base de datos, la aplicación, la integración con IA, el modelo semántico y los reportes. También preparé el manual de usuario y capacité al equipo del cliente.": "I built the solution end to end on my own: the database, the application, the AI integration, the semantic model and the reports. I also wrote the user manual and trained the client's team.",
    "Dificultad para consultar el stock actualizado.": "Hard to check up-to-date stock.",
    "Dirección": "Management",
    "Diseño de bases de datos y modelos relacionales": "Database and relational model design",
    "Diseño e implementación de una base de datos SQL en Microsoft Fabric que centraliza toda la información operativa.": "Design and implementation of a SQL database in Microsoft Fabric that centralizes all operational information.",
    "Distribución": "Distribution",
    "Documentación de reglas de transformación y calidad de datos": "Documentation of transformation and data quality rules",
    "El problema": "The problem",
    "En producción · distribuidora de bebidas": "In production · beverage distributor",
    "Falta de una visión integral de las operaciones.": "No complete view of operations.",
    "Formularios de carga con validaciones": "Data entry forms with validations",
    "Hablemos de lo que necesita": "Let's talk about what your company",
    "Hablemos de lo que necesita mejorar tu empresa": "Let's talk about what your company needs to improve",
    "Implementación productiva": "Production deployment",
    "Indicadores consistentes, disponibles para cada responsable según lo que necesita ver.": "Consistent metrics, available to each person based on what they need to see.",
    "Información distribuida en archivos de Excel.": "Information spread across Excel files.",
    "Integración de asistentes de IA en el trabajo con datos": "Integration of AI assistants into data work",
    "Integración de datos": "Data integration",
    "Integración directa con la base de datos y los reportes": "Direct integration with the database and reports",
    "La aplicación lee las facturas de compra con la API de Claude y completa los datos, para reducir la carga manual.": "The application reads purchase invoices with the Claude API and fills in the data, to reduce manual entry.",
    "La aplicación, la base de datos y el modelo analítico trabajan sobre la misma información, sin copias intermedias. Los datos históricos en Excel se importaron con Dataflows Gen2.": "The application, the database and the analytical model work on the same information, with no intermediate copies. Historical Excel data was imported with Dataflows Gen2.",
    "La centralizo en una base de datos que se actualiza sin consolidaciones manuales.": "I centralize it in a database that updates without manual consolidation.",
    "La información está repartida en archivos de Excel y sistemas que no se comunican entre sí, y consolidarla depende de trabajo manual.": "Information is spread across Excel files and systems that don't talk to each other, and consolidating it depends on manual work.",
    "La operación pasó de archivos sueltos a una sola plataforma, que la empresa usa en producción.": "Operations moved from scattered files to a single platform, which the company uses in production.",
    "La solución": "The solution",
    "Lakehouse, Dataflows Gen2 y SQL database": "Lakehouse, Dataflows Gen2 and SQL database",
    "Las compras, las ventas, el stock o los registros se cargan en planillas, con errores de tipeo y sin historial de cambios.": "Purchases, sales, stock or records are entered in spreadsheets, with typos and no change history.",
    "Las decisiones se toman con reportes armados a mano, que llegan tarde o con números que no coinciden entre áreas.": "Decisions are made with hand-built reports that arrive late or with numbers that don't match across areas.",
    "Las herramientas con las que construyo cada solución.": "The tools I use to build each solution.",
    "Lo que gana la empresa": "What the company gains",
    "Los datos, los reportes y las aplicaciones viven en herramientas separadas, sin una plataforma común ni un despliegue controlado.": "Data, reports and applications live in separate tools, with no common platform or controlled deployment.",
    "Los procesos operativos quedan registrados en un sistema, y la información llega a los reportes sin pasos manuales.": "Operational processes are recorded in a system, and information reaches the reports with no manual steps.",
    "Los reportes llegan tarde o no coinciden entre áreas": "Reports arrive late or don't match across areas",
    "Los reúno en Microsoft Fabric, con despliegue controlado y acceso por rol.": "I bring them together in Microsoft Fabric, with controlled deployment and role-based access.",
    "Manual de usuario y capacitación del equipo": "User manual and team training",
    "Menos carga manual y menos errores en las tareas operativas.": "Less manual work and fewer errors in operational tasks.",
    "Mi participación": "My role",
    "Mira todas las soluciones o cuéntame qué necesitas resolver.": "See all solutions or tell me what you need to solve.",
    "Modelo analítico": "Analytical model",
    "Modelos semánticos compartidos por todos los reportes": "Semantic models shared by all reports",
    "Modelos semánticos y medidas DAX": "Semantic models and DAX measures",
    "No vendo herramientas sueltas: desarrollo la solución completa, desde los datos hasta la aplicación y los reportes.": "I don't sell isolated tools: I build the complete solution, from the data to the application and the reports.",
    "Plataforma de gestión para distribución de bebidas": "Management platform for beverage distribution",
    "Plataforma de gestión y analítica para distribución de bebidas": "Management and analytics platform for beverage distribution",
    "Plataforma integral de gestión y analítica · Distribuidora de bebidas": "End-to-end management and analytics platform · Beverage distributor",
    "Problemas que": "Problems I",
    "Procesamiento de documentos con IA, como la lectura de facturas": "AI document processing, such as invoice reading",
    "Procesos ETL y ELT para integrar y transformar fuentes": "ETL and ELT processes to integrate and transform sources",
    "Procesos manuales y dependencia de personas para conciliar la información.": "Manual processes and reliance on people to reconcile information.",
    "Publicación como Power BI Apps por área de negocio": "Publishing as Power BI Apps by business area",
    "Punto de partida": "Starting point",
    "Qué incluye": "What it includes",
    "Qué puedo construir": "What I can build",
    "Reducir el tiempo de carga de facturas y ventas.": "Reduce the time spent entering invoices and sales.",
    "Reemplazar la carga en planillas por una aplicación de gestión.": "Replace spreadsheet entry with a business application.",
    "Registra compras y movimientos de mercadería. Las facturas se cargan con ayuda de la IA.": "Records purchases and stock movements. Invoices are entered with AI assistance.",
    "Reporte de Power BI: costo, venta y margen": "Power BI report: cost, sales and margin",
    "Reportes de Power BI por área de negocio": "Power BI reports by business area",
    "SQL database de Microsoft Fabric": "Microsoft Fabric SQL database",
    "Seguridad por fila y por objeto (RLS / OLS)": "Row-level and object-level security (RLS / OLS)",
    "Soy ingeniero civil. De la ingeniería me quedó la forma de trabajar: entender primero el proceso, ordenar información compleja y diseñar una solución que funcione en la práctica.": "I'm a civil engineer. Engineering gave me a way of working: understand the process first, organize complex information and design a solution that works in practice.",
    "Stock consolidado en tiempo real, visible para depósito, ventas y administración.": "Stock consolidated in real time, visible to the warehouse, sales and administration.",
    "Tareas repetitivas como cargar facturas, copiar datos entre sistemas o preparar reportes consumen horas del equipo.": "Repetitive tasks like entering invoices, copying data between systems or preparing reports take up the team's hours.",
    "Tecnologías": "Technologies",
    "Tecnologías utilizadas": "Technologies used",
    "Trabajo por proyecto, con alcance y entregables definidos. Puede ser una sola de estas soluciones o varias conectadas, desde la base de datos hasta los reportes.": "I work by project, with defined scope and deliverables. It can be one of these solutions or several connected ones, from the database to the reports.",
    "Tu equipo pierde horas en tareas repetitivas": "Your team loses hours on repetitive tasks",
    "Tu información está repartida en planillas": "Your information is spread across spreadsheets",
    "Tus datos y reportes viven en herramientas separadas": "Your data and reports live in separate tools",
    "Un modelo semántico compartido y reportes de Power BI por área: costo, venta y margen, stock y movimientos.": "A shared semantic model and Power BI reports by area: cost, sales and margin, stock and movements.",
    "Una distribuidora de bebidas gestionaba compras, ventas y stock en Excel. Desarrollé una plataforma en Microsoft Fabric con aplicación de gestión, carga de facturas con IA y reportes de Power BI. Hoy la empresa la usa en producción.": "A beverage distributor managed purchases, sales and stock in Excel. I built a platform on Microsoft Fabric with a business application, AI-assisted invoice entry and Power BI reports. The company now uses it in production.",
    "Una distribuidora de bebidas gestionaba compras, ventas y stock en archivos de Excel y procesos manuales. Desarrollé una plataforma que conecta la operación diaria con la información analítica: base de datos, aplicación de gestión, carga de facturas con IA y reportes de Power BI, sobre Microsoft Fabric. Hoy la empresa la usa en producción.": "A beverage distributor managed purchases, sales and stock with Excel files and manual processes. I built a platform that connects daily operations with analytics: database, business application, AI-assisted invoice entry and Power BI reports, on Microsoft Fabric. The company now uses it in production.",
    "Una plataforma,": "One platform,",
    "Una sola fuente de datos confiable, que se actualiza sin consolidaciones manuales.": "A single reliable data source that updates without manual consolidation.",
    "Ver el caso de la distribuidora de bebidas": "See the beverage distributor case",
    "Ver el caso de la distribuidora →": "See the distributor case →",
    "Ver el caso de éxito": "See the case study",
    "Ver el recorrido en video": "Watch the video walkthrough",
    "Ver la implementación en el portfolio →": "See the implementation in the portfolio →",
    "Ver reportes en el portfolio →": "See reports in the portfolio →",
    "Ver solución →": "See solution →",
    "Ver todas las soluciones →": "See all solutions →",
    "a la dirección": "to management",
    "mejorar tu empresa": "needs to improve",
    "para tu empresa": "for your company",
    "¿Tu caso es otro?": "Is your case different?",
    'Soluciones': 'Solutions', 'seis componentes': 'six components', 'resuelvo': 'solve', 'Soluciones · Ricardo Ugarte': 'Solutions · Ricardo Ugarte',
    'Caso de éxito': 'Case study', 'Ver portfolio': 'View portfolio', 'Ventas': 'Sales',
    'Lo que aprendo': 'What I learn', 'implementando': 'by building',
    'Artículos técnicos basados en problemas reales que resolví en proyectos con Power BI, Power Apps y Microsoft Fabric.': 'Technical articles based on real problems I solved in Power BI, Power Apps and Microsoft Fabric projects.',
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
