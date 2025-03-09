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
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/juancarlossalgadoascencio/', target: '_blank' },
        { text: 'GitHub', href: 'https://github.com/jios325', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/terminos') },
    { text: 'Política de Privacidad', href: getPermalink('/privacidad') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/juancarlossalgadoascencio/', target: '_blank' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/jios325', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/people/J-Carlos-Salgado/61554769997589/', target: '_blank' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@juancarlossalgado__', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@JuanCarlosSalgado325', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/juancarlossalgado__', target: '_blank' },
    { ariaLabel: 'Linktree', icon: 'tabler:tree', href: 'https://linktr.ee/juancarlossalgado', target: '_blank' },
  ],
  footNote: `
    © ${new Date().getFullYear()} J. Carlos Salgado · Todos los derechos reservados.
  `,
};
