// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    case 'ceylanenes.com.tr':
    case 'www.ceylanenes.com.tr':
    case '3d-portfolio-fcldcepaz-enesceees-projects.vercel.app':
    case 'localhost':
      return process.env.REACT_APP_DATOCMS_API_TOKEN || '';

    default:
      console.warn(`Using default token for hostname: ${hostname}`);
      return process.env.REACT_APP_DATOCMS_API_TOKEN || '';
  }
};
