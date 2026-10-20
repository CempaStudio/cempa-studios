/* Traducción local ES/EN: sin redirecciones ni APIs externas. */
(function(){
'use strict';
const dictionary = {
  "A diferencia de los dos prototipos comerciales, El Búho Político MX es un portal editorial desarrollado originalmente con PHP y MySQL. Integra publicación de noticias, categorías, buscador y un panel administrativo para gestionar contenido.": "Unlike the other two projects, El Búho Político MX is an editorial platform originally built with PHP and MySQL. It supports publishing articles, uploading images, embedding videos, searching and filtering content, and managing posts in an admin dashboard.",
  "A diferencia de los otros dos proyectos, El Búho Político MX es una plataforma editorial desarrollada con PHP y MySQL. Su sistema original permite publicar noticias, subir imágenes, incorporar videos, buscar y filtrar contenidos y gestionar publicaciones desde un panel administrativo.": "Unlike the other two projects, El Búho Político MX is an editorial platform built with PHP and MySQL. Its original system supports publishing news, uploading images, embedding videos, searching and filtering content, and managing posts from an admin dashboard.",
  "Además del diseño responsive, el portal original incorpora información de fecha, clima y tipo de cambio USD/MXN, gestión de categorías, editor de publicaciones y acceso por roles, con permisos limitados para editores. Esta demostración es una adaptación independiente con contenido de prueba: no es el sitio oficial ni incorpora todas las funciones del sistema real.": "Beyond responsive design, the original platform provides date, weather and USD/MXN exchange-rate information, category management, a publishing editor, and role-based access with limited editor permissions. This independent demo uses sample content; it is not the official website and does not replicate every feature of the real system.",
  "Publicación y edición de noticias": "News publishing and editing",
  "Carga de imágenes y contenido multimedia": "Image and multimedia uploading",
  "Inserción de videos": "Video embedding",
  "Búsqueda y filtrado de publicaciones": "Search and content filtering",
  "Categorías y navegación editorial": "Categories and editorial navigation",
  "Fecha, clima y tipo de cambio USD/MXN": "Date, weather, and USD/MXN exchange rate",
  "Panel de administración y roles con permisos diferenciados": "Admin dashboard and role-based permissions",

  "Inicio": "Home",
  "Ideas que toman forma.": "Ideas take shape.",
  "Transformamos ideas en experiencias digitales que combinan creatividad, diseño, tecnología y funcionalidad.": "We turn ideas into digital experiences that combine creativity, design, technology, and functionality.",
  "Dos creativos, un mismo propósito.": "Two creatives, one shared purpose.",
  "Somos": "We are",
  ", los integrantes detrás de CEMPA STUDIOS. Combinamos creatividad, diseño y tecnología para transformar ideas en proyectos digitales funcionales y personalizados.": ", the team behind CEMPA STUDIOS. We combine creativity, design, and technology to turn ideas into functional, tailored digital projects.",
  "Somos Elián González y Axel Ortiz, los integrantes detrás de CEMPA STUDIOS. Combinamos creatividad, diseño y tecnología para transformar ideas en proyectos digitales funcionales y personalizados.": "We are Elián González and Axel Ortiz, the team behind CEMPA STUDIOS. We combine creativity, design, and technology to turn ideas into functional, tailored digital projects.",
  "Trabajamos directamente contigo en la planeación, el diseño, el desarrollo y las pruebas de cada sitio, con comunicación clara y atención al detalle.": "We work with you directly on planning, design, development, and testing, with clear communication and attention to detail.",
  "Inspiración en el arte mexicano": "Inspired by Mexican art",
  "Diseñamos, desarrollamos y mejoramos sitios web que funcionan para personas y negocios.": "We design, develop, and improve websites that work for people and businesses.",
  "Diseño y desarrollo web": "Web design and development",
  "Creamos sitios web modernos, funcionales y adaptables a diferentes dispositivos.": "We create modern, functional websites that adapt to different devices.",
  "Optimización y mejora web": "Website optimization and improvements",
  "Corregimos errores, perfeccionamos interfaces y mejoramos la experiencia móvil.": "We fix issues, refine interfaces, and improve mobile experiences.",
  "Planeación de proyectos": "Project planning",
  "Organizamos ideas, requisitos y estructuras para construir sitios con una dirección clara.": "We organize ideas, requirements, and structures to build websites with a clear direction.",
  "Conoce al equipo": "Meet the team",
  "Las personas detrás de cada proyecto": "The people behind every project",
  "Colaborarás directamente con nosotros durante el desarrollo de tu proyecto, con comunicación clara y atención personalizada.": "You will work directly with us throughout your project, with clear communication and personalized attention.",
  "Escríbenos por WhatsApp ↗": "Message us on WhatsApp ↗",
  "Contactar a CEMPA STUDIOS por WhatsApp": "Contact CEMPA STUDIOS on WhatsApp",
  "Desarrollo web y dirección técnica": "Web development and technical direction",
  "Implementación de funcionalidades, revisión de código, solución de problemas técnicos y colaboración en diseño de interfaces.": "Feature implementation, code review, troubleshooting, and collaboration on interface design.",
  "Diseño web y planeación de proyectos": "Web design and project planning",
  "Diseño de interfaces, estructura y documentación de proyectos, con participación en desarrollo frontend con HTML, CSS y JavaScript.": "Interface design, project structure and documentation, plus frontend work with HTML, CSS, and JavaScript.",
  "Tres proyectos que muestran distintas capacidades de diseño y desarrollo web.": "Three projects showcasing different web design and development capabilities",
  "El Búho Político MX": "El Búho Político MX",
  "Proyecto · Portal editorial": "Project · Editorial platform",
  "Una plataforma de noticias con gestión de contenido": "A news platform with content management",
  "A diferencia de los dos prototipos comerciales, El Búho Político MX es un portal editorial desarrollado originalmente con PHP y MySQL. Integra publicación de noticias, categorías, buscador y un panel administrativo para gestionar contenido.": "Unlike the two commercial prototypes, El Búho Político MX is an editorial platform originally developed with PHP and MySQL. It includes news publishing, categories, search and an administrative content management panel.",
  "Su principal diferencia es la arquitectura de contenido: además de una interfaz pública responsive, incluye funcionalidades de backend, persistencia en base de datos y administración editorial. La demostración pública es una adaptación estática e interactiva, sin cuentas ni acceso al panel real.": "Its key distinction is its content architecture: beyond a responsive public interface, it includes backend features, database persistence and editorial administration. The public demo is a static interactive adaptation without accounts or access to the real dashboard.",
  "Backend": "Backend",
  "Gestión de contenido": "Content management",
  "Dos prototipos conceptuales. Explora cada proyecto y su demostración.": "Two conceptual prototypes. Explore each project and its demo.",
  "Este proyecto fue desarrollado para un cliente. Por su alcance y para proteger su código, base de datos y herramientas administrativas, no distribuimos la versión completa. La demostración es una adaptación pública; cuando el sitio oficial esté disponible, añadiremos su enlace aquí.": "This project was developed for a client. Given its scope and to protect its source code, database and administrative tools, we do not distribute the complete version. This is a public demo; we will add a link to the official website when it becomes available.",
  "Lo que muestra esta demostración": "What this demo shows",
  "La galería reúne capturas reales de la demo pública: portada con noticias recientes, secciones editoriales, módulo de videos, pie de página y acceso al panel. También se incluyen vistas del dashboard y del editor para comunicar el alcance técnico del sistema original.": "This gallery brings together real screenshots from the public demo: the latest-news homepage, editorial sections, the video module, the footer, and the admin login. It also includes dashboard and editor views to communicate the technical scope of the original system.",
  "Taquería El Sabor Mexicano": "Taquería El Sabor Mexicano",
  "Prototipo · Restaurante": "Prototype · Restaurant",
  "Un menú digital con personalidad": "A digital menu with personality",
  "Sitio conceptual de restaurante con presentación audiovisual, menú de productos, versión adaptable a móvil y modo oscuro.": "Concept restaurant website with a video hero, product menu, mobile-friendly layout, and dark mode.",
  "Prototipo demostrativo sin negocio real ni pedidos comerciales. Mostramos una solución web para restaurantes con estructura clara y navegación fácil.": "A showcase prototype, not a real business or ordering service. It demonstrates a restaurant website with clear structure and easy navigation.",
  "Boutique Luna": "Boutique Luna",
  "Prototipo · Catálogo digital": "Prototype · Digital catalog",
  "Una vitrina digital elegante": "An elegant digital storefront",
  "Boutique conceptual con catálogo de productos, páginas individuales, carrito demostrativo y traducciones.": "Concept boutique with product catalog, individual detail pages, demo shopping cart, and translations.",
  "Prototipo comercial sin pagos ni compras reales. Explora cómo mostrar colecciones y fichas de producto mediante una experiencia web atractiva.": "A commerce prototype with no real payments or purchases. It shows collections and product details through an engaging web experience.",
  "Ver demo del proyecto": "View project demo",
  "Descargar ZIP": "Download ZIP",
  "Demostración conceptual. No se realizan compras, pedidos ni contrataciones desde estos sitios.": "Concept demo. No purchases, orders, or real contracts are handled on these websites.",
  "Próximamente: contacto directo": "Direct contact coming soon",
  "Catálogo digital": "Digital catalog",
  "Frontend": "Frontend",
  "Responsive": "Responsive",

  "Nosotros": "About",
  "Servicios": "Services",
  "Portafolio": "Portfolio",
  "Contacto": "Contact",
  "Diseño que conecta cultura y tecnología": "Design connecting culture and technology",
  "Creamos experiencias visuales que dan vida a ideas, combinando diseño, tecnología y la riqueza de la cultura mexicana.": "We create visual experiences that bring ideas to life, combining design, technology, and the richness of Mexican culture.",
  "Ver proyectos": "View projects",
  "CONOCE A TELAR": "MEET TELAR",
  "Quiénes somos": "Who we are",
  "Un estudio creativo con raíces mexicanas": "A creative studio with Mexican roots",
  "En CEMPA STUDIOS fusionamos creatividad, diseño y tecnología para contar historias que inspiran. Nos mueve la cultura, la innovación y el poder de las ideas bien hechas.": "At CEMPA STUDIOS, we blend creativity, design, and technology to tell inspiring stories. We are driven by culture, innovation, and the power of thoughtful ideas.",
  "Conoce más": "Learn more",
  "Creatividad con propósito": "Creativity with purpose",
  "Inspiración en la cultura mexicana": "Inspired by Mexican culture",
  "Soluciones visuales y digitales": "Visual and digital solutions",
  "Nuestros servicios": "Our services",
  "Lo que hacemos": "What we do",
  "Diseño, tecnología y cultura para crear proyectos únicos y memorables.": "Design, technology, and culture to create unique, memorable projects.",
  "Diseño web": "Web design",
  "Diseño 3D": "3D design",
  "Sitios web funcionales y visualmente atractivos.": "Functional, visually appealing websites.",
  "Modelado y visualización para ideas que cobran vida.": "Modeling and visualization to bring ideas to life.",
  "Investigación": "Research",
  "Exploramos, analizamos y traducimos ideas en soluciones creativas.": "We explore, analyze, and turn ideas into creative solutions.",
  "Proyectos destacados": "Featured projects",
  "Nuestro trabajo": "Our work",
  "Ver todos los proyectos": "View all projects",
  "Identidad visual": "Visual identity",
  "Diseño gráfico": "Graphic design",
  "Exploración 3D": "3D exploration",
  "Proyecto web": "Web project",
  "¿Tienes un proyecto en mente?": "Have a project in mind?",
  "Trabajemos juntos": "Let’s work together",
  "Contáctanos": "Contact us",
  "Desarrollado por": "Developed by",
  "Volver a Portafolio": "Back to Portfolio",
  "Proyecto": "Project",
  "Concepto creativo": "Creative concept",
  "Herramientas": "Tools",
  "Disciplinas": "Disciplines",
  "Hablemos de tu proyecto": "Let’s talk about your project",
  "Anterior": "Previous",
  "Siguiente": "Next",
  "Abrir menú": "Open menu",
  "Cambiar tema": "Toggle theme",
  "Ver imagen": "View image",
  "Imagen": "Image",
  "Desarrollamos la identidad visual de CEMPA STUDIOS, un estudio creativo con raíces mexicanas que fusiona diseño, tecnología y cultura para dar vida a ideas.": "We developed the visual identity of CEMPA STUDIOS, a creative studio with Mexican roots that blends design, technology, and culture to bring ideas to life.",
  "Una identidad vibrante y contemporánea que reinterpreta elementos de la cultura mexicana, como el cempasúchil, a través de un lenguaje gráfico moderno, geométrico y lleno de energía.": "A vibrant contemporary identity that reinterprets Mexican cultural elements, such as the marigold flower, through a bold, geometric, modern visual language.",
  "Branding": "Branding",
  "Ilustración": "Illustration",
  "Dirección de arte": "Art direction",
  "Proyecto 1": "Project 1",
  "Proyecto 2": "Project 2",
  "Proyecto 3": "Project 3",
  "Proyecto Web": "Web Project",
  "Sitios que comunican con claridad": "Websites that communicate clearly",
  "Diseño y desarrollo de sitios web funcionales, responsive y con personalidad, orientados a negocios y profesionales.": "Design and development of functional, responsive websites with personality for businesses and professionals.",
  "Priorizamos jerarquía visual, velocidad y una experiencia clara en móvil y escritorio.": "We prioritize visual hierarchy, speed, and a clear experience on mobile and desktop.",
  "Formas que cobran volumen": "Shapes brought to life in 3D",
  "Exploración de modelado y visualización digital para piezas creativas e identidad tridimensional.": "Exploration of digital modeling and visualization for creative pieces and three-dimensional identities.",
  "Combinamos geometría y color de la marca en un espacio digital.": "We combine brand geometry and color in a digital space.",
  "Visualización": "Visualization",
  "← Volver a Portafolio": "← Back to Portfolio",
  "Proyecto 01 / 03": "Project 01 / 03",
  "Branding, Ilustración, Dirección de arte, Diseño gráfico": "Branding, Illustration, Art direction, Graphic design"
};
const originals = new WeakMap();
const reverse = Object.fromEntries(Object.entries(dictionary).map(([es,en])=>[en,es]));
let lang = 'es';
function translateNode(root) {
 const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
 const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
 nodes.forEach(node=>{
   if(node.parentElement && /^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement.tagName))return;
   if(!originals.has(node))originals.set(node,node.nodeValue.replace(/^\s*([^\n]*?)\s*$/, (full, core)=>reverse[core] ? full.replace(core,reverse[core]) : full));
   const raw=originals.get(node);const value=raw.trim().replace(/\s+/g," ");
   let mapped=dictionary[value];
   if(!mapped && value.startsWith('Proyecto ') && /^Proyecto \d+ \/ \d+$/.test(value))mapped=value.replace('Proyecto','Project');
   if(!mapped && value.startsWith('Imagen ') && value.endsWith(' del proyecto'))mapped=value.replace('Imagen','Image').replace(' del proyecto',' of the project');
   if(mapped && lang==='en') {
     // Conservar la indentación, pero permitir saltos de línea entre las palabras.
     const start = raw.search(/\S/);
     const end = raw.search(/\s*$/);
     node.nodeValue = raw.slice(0, start) + mapped + raw.slice(end);
   }
   else if(lang==='es')node.nodeValue=raw;
 });
 root.querySelectorAll('[aria-label]').forEach(el=>{
   if(!el.dataset.originalAria)el.dataset.originalAria=el.getAttribute('aria-label');
   const original=el.dataset.originalAria;
   const dynamicLabel = original.match(/^Ver imagen (\d+)$/);
   el.setAttribute('aria-label',lang==='en'?(dynamicLabel ? 'View image '+dynamicLabel[1] : (dictionary[original]||original)):original);
 });
}
function setLanguage(next){
 if(next!=='es'&&next!=='en')return;
 lang=next;document.documentElement.lang=lang;
 document.querySelectorAll('.lang-btn').forEach(b=>{const selected=b.dataset.lang===lang;b.classList.toggle('is-current',selected);b.setAttribute('aria-pressed',String(selected));});
 translateNode(document.body);
 try{localStorage.setItem('cempa-language',lang);}catch(_e){}
}
window.CempaI18n={refresh:()=>translateNode(document.body),getLanguage:()=>lang,translate:(text)=>lang==='en'?(dictionary[text]||text):text};
document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
let stored='es';try{stored=localStorage.getItem('cempa-language')||'es';}catch(_e){}
setLanguage(stored);
})();
