import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Sobre Mí',
      href: getPermalink('/sobre-mi'),
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Diseño Web Hotelero',
          href: getPermalink('/servicios/diseno-web-hotelero'),
        },
        {
          text: 'SEO para Hoteles',
          href: getPermalink('/servicios/seo-hotelero'),
        },
        {
          text: 'Optimización de Conversión',
          href: getPermalink('/servicios/optimizacion-conversion'),
        },
        {
          text: 'Project Management',
          href: getPermalink('/servicios/project-management'),
        },
        {
          text: 'Todos los Servicios',
          href: getPermalink('/servicios'),
        },
      ],
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [{ text: 'Agendar Consulta', href: getPermalink('/contacto'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Diseño Web Hotelero', href: getPermalink('/servicios/diseno-web-hotelero') },
        { text: 'SEO para Hoteles', href: getPermalink('/servicios/seo-hotelero') },
        { text: 'Optimización de Conversión', href: getPermalink('/servicios/optimizacion-conversion') },
        { text: 'Project Management', href: getPermalink('/servicios/project-management') },
        { text: 'Todos los Servicios', href: getPermalink('/servicios') },
      ],
    },
    {
      title: 'Información',
      links: [
        { text: 'Sobre Mí', href: getPermalink('/sobre-mi') },
        { text: 'Portfolio', href: getPermalink('/portfolio') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Recursos', href: getPermalink('/recursos') },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Guías SEO Hotelero', href: getPermalink('/categoria/seo-hotelero') },
        { text: 'CRO para Hoteles', href: getPermalink('/categoria/cro-hoteles') },
        { text: 'Gestión de Proyectos', href: getPermalink('/categoria/gestion-proyectos') },
        { text: 'Transformación Digital', href: getPermalink('/categoria/transformacion-digital') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Contacto', href: getPermalink('/contacto') },
        { text: 'Agendar Consulta', href: getPermalink('/consulta') },
        { text: 'LinkedIn', href: 'https://linkedin.com/in/jcarlossalgado' },
        { text: 'GitHub', href: 'https://github.com/jios325' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/terminos') },
    { text: 'Política de Privacidad', href: getPermalink('/privacidad') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/jcarlossalgado' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/jios325' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: 'https://twitter.com/jcarlossalgado' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/jcarlossalgado' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} J. Carlos Salgado · Todos los derechos reservados.
  `,
};
