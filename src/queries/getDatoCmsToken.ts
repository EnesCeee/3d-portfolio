// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    case 'enesceylan.dev':
    case 'www.enesceylan.dev':
    case 'localhost':
      return process.env.REACT_APP_DATOCMS_API_TOKEN || '';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
