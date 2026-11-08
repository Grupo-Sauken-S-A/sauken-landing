// Contenido de la oferta de infraestructura gestionada.
// Fuente: página de ingreso de infraestructura (sauken.com.ar/infra/login), redactado en lenguaje cualitativo:
// las cifras exactas y los detalles operativos se dejan solo en esa página.

export const INFRA_PILARES = [
   {
      title: "Disponibilidad",
      resumen: "Conexiones y servidores con respaldo, y cada aplicación crítica en su propio entorno aislado.",
      lead: "Servidores y conexiones de Internet con respaldo, máquinas virtuales aisladas por aplicación y mantenimiento programado fuera del horario de trabajo, con aviso previo.",
      items: [
         "Salida a Internet redundante, con equipos de respaldo.",
         "Cada aplicación crítica, en su propio entorno aislado.",
         "Cambios disruptivos solo en ventanas acordadas.",
      ],
   },
   {
      title: "Seguridad",
      resumen: "Mínimo privilegio y varias capas de defensa, con vigilancia permanente de vulnerabilidades.",
      lead: "Mínimo privilegio y varias capas de defensa, sin depender de una sola barrera.",
      items: [
         "Acceso administrativo con claves criptográficas y solo para personas autorizadas.",
         "Bloqueo automático de intentos sospechosos y registro de cada acceso.",
         "Comunicaciones cifradas con certificados que se renuevan solos.",
         "Cortafuegos por zonas: cada servicio expone solo lo imprescindible.",
         "Vulnerabilidades vigiladas de forma permanente y atendidas de inmediato.",
      ],
   },
   {
      title: "Respaldo",
      resumen: "Copias automáticas en equipos distintos del original, con informe del resultado de cada una.",
      lead: "Copias automáticas de bases de datos y aplicaciones, enviadas por canal cifrado y guardadas en equipos distintos del original, con una política de retención definida.",
      items: [
         "Informe por correo del resultado de cada copia.",
         "Aviso inmediato ante cualquier falla.",
      ],
   },
   {
      title: "Visibilidad",
      resumen: "Monitoreo permanente con alertas, para actuar antes de que un problema llegue al usuario.",
      lead: "Monitoreo permanente con tablero en vivo y alertas, para actuar antes de que un problema llegue al usuario.",
      items: [
         "Medición continua de bases de datos, servicios, máquinas virtuales, discos, memoria y copias.",
         "Prueba real de las aplicaciones publicadas, no solo de que el servidor esté encendido.",
         "Alertas cuando un problema persiste y aviso cuando se resuelve.",
         "Historia y gráficos para anticipar tendencias.",
      ],
   },
]

export const INFRA_VULN = {
   intro: "Todos los días aparecen fallas nuevas en el software que usa cualquier empresa. La diferencia está en enterarse primero y saber qué hacer.",
   pasos: [
      { title: "Nos enteramos", text: "Revisamos de forma continua las fuentes oficiales y las listas de vulnerabilidades conocidas, incluidas las que ya se están explotando, y las cruzamos con el software que realmente tenemos instalado." },
      { title: "La valoramos", text: "Evaluamos si nos afecta, qué tan grave es y si el servicio está expuesto a Internet. Separamos lo urgente del ruido, para actuar donde hace falta." },
      { title: "Actuamos de inmediato", text: "Si el riesgo es real, bajamos el servicio vulnerable hasta corregirlo o aplicamos el parche de seguridad apenas está disponible." },
      { title: "Verificamos y registramos", text: "Comprobamos que la falla quedó cerrada y dejamos asentado qué se hizo, dónde y cómo se verificó." },
   ],
   nota: "No esperamos a la próxima ventana de mantenimiento: ante una falla crítica en un servicio expuesto, cortamos o corregimos en el momento.",
}

export const INFRA_IA = {
   title: "Administración y monitoreo con inteligencia artificial",
   lead: "Usamos IA para trabajar mejor, no para reemplazar el criterio de las personas.",
   items: [
      { title: "Análisis asistido", text: "La IA ayuda a revisar el estado de cada servidor, interpretar cambios inesperados y resolver incidentes con rapidez." },
      { title: "Documentación viva", text: "Inventario y procedimientos se mantienen al día con asistencia de IA." },
      { title: "Tareas rutinarias automatizadas", text: "Verificaciones que antes eran manuales hoy corren solas." },
      { title: "Supervisión humana siempre", text: "Cada acción sobre producción es responsabilidad de una persona y queda registrada." },
   ],
}

export const INFRA_TRABAJO = [
   { title: "Relevar, planificar, cambiar, verificar", text: "Nada se toca sin un plan y una forma de volver atrás." },
   { title: "Todo documentado", text: "Inventario, procedimientos y decisiones, siempre actualizados." },
   { title: "Un equipo con suplencia", text: "La operación no depende de una sola persona." },
   { title: "Mejora continua", text: "Planificamos la evolución de la plataforma antes de que sea una urgencia." },
]

export const INFRA_CLIENTE = [
   { title: "Te avisamos antes", text: "Cada mantenimiento llega con fecha y horario por correo, y te escribimos de nuevo cuando todo vuelve a estar operativo." },
   { title: "Un informe semanal", text: "Recibís por correo el estado de tu servicio de la semana, sin tener que pedirlo." },
   { title: "Acceso remoto seguro", text: "Te conectás por VPN con un certificado propio, que solo permite entrar a lo tuyo." },
   { title: "Tu escritorio, desde el navegador", text: "Abrís tus máquinas virtuales desde cualquier navegador, sin instalar programas." },
]

export const INFRA_SERVICIOS = [
   { title: "Alojamiento de aplicaciones", text: "Tus sistemas web y de gestión corren en nuestros servidores, operados y vigilados por nosotros." },
   { title: "Máquinas virtuales y servidores dedicados", text: "Un entorno aislado para cada aplicación o, si lo necesitás, un equipo completo solo para vos." },
   { title: "Copias de seguridad", text: "Copias automáticas de tus bases y aplicaciones, en equipos distintos del original y con informe del resultado." },
   { title: "Acceso remoto seguro", text: "VPN con certificado individual y escritorio remoto desde el navegador, con permisos por cliente." },
   { title: "Ambientes de prueba", text: "Un entorno de testing para probar cambios y versiones antes de llevarlos a producción." },
   { title: "Monitoreo y soporte", text: "Vigilancia permanente, alertas y un equipo que responde en soporte@sauken.com.ar." },
]

export const INFRA_FAQ = [
   { q: "¿Usan inteligencia artificial en su infraestructura?", a: "Sí, como asistencia: ayuda a revisar el estado de cada servidor, interpretar cambios inesperados y resolver incidentes con rapidez. Cada acción sobre producción es responsabilidad de una persona y queda registrada." },
   { q: "¿Qué pasa si se corta Internet?", a: "Contamos con conexiones redundantes y un esquema de respaldo: si una falla, el tráfico pasa a la otra y el monitoreo nos avisa en el momento." },
   { q: "¿Y si se corta la luz?", a: "Los equipos cuentan con respaldo de energía que da tiempo para actuar, y tenemos un procedimiento definido para cada tipo de corte." },
   { q: "¿Qué hacen cuando aparece una vulnerabilidad?", a: "Nos enteramos por nuestra vigilancia permanente, evaluamos si nos afecta y qué tan expuesto está el servicio, y actuamos: bajamos el servicio vulnerable o aplicamos el parche de seguridad, según corresponda. Después verificamos y lo dejamos registrado." },
   { q: "¿Mantienen el software actualizado?", a: "Sí. Preparamos las actualizaciones de forma regular y las instalamos en ventanas programadas, con aviso previo. Si aparece una falla crítica, no esperamos a la próxima ventana." },
   { q: "¿Cómo se enteran de una falla?", a: "Medimos todo de forma continua y probamos las aplicaciones como lo haría un usuario. Si algo falla, nos llega una alerta; muchas veces lo resolvemos antes de que lo notes." },
   { q: "¿Dónde quedan mis datos?", a: "En tus servidores de Sauken, con copias automáticas guardadas en equipos distintos del original. Recibimos un informe del resultado de cada copia." },
   { q: "¿Cuándo hacen los mantenimientos?", a: "Fuera del horario de trabajo. Te avisamos por correo con anticipación y de nuevo cuando terminamos." },
   { q: "¿Cómo pido ayuda?", a: "Escribinos a soporte@sauken.com.ar. Y si querés sumar un servicio o consultar por una propuesta, usá el formulario de contacto del portal o escribí a info@sauken.com.ar." },
]
