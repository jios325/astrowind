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
  actions: [{ text: 'Consulta Gratuita', href: getPermalink('/contacto'), variant: 'primary' }],
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
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Checklist Web Hotelera', href: getPermalink('/recursos/checklist-web-hotelera') },
        { text: 'Guías SEO', href: getPermalink('/recursos/guias-seo') },
        { text: 'Casos de Éxito', href: getPermalink('/portfolio') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre Mí', href: getPermalink('/sobre-mi') },
        { text: 'Metodología', href: getPermalink('/metodologia') },
        { text: 'Contacto', href: getPermalink('/contacto') },
        { text: 'FAQ', href: getPermalink('/faq') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacidad', href: getPermalink('/privacidad') },
        { text: 'Términos', href: getPermalink('/terminos') },
        { text: 'Cookies', href: getPermalink('/cookies') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terminos') },
    { text: 'Política de Privacidad', href: getPermalink('/privacidad') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/tu-perfil' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/tu-usuario' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: 'https://twitter.com/tu-usuario' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/tu-usuario' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/favicon.png)]"></span>
    J. Carlos Salgado · Project Manager Web · Todos los derechos reservados.
  `,
};
