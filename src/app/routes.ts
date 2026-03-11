export const routes = {
  home: '/',
  sslc: {
    home: '/sslc',
    mathematics: {
      home: '/sslc/mathematics',
      chapter: (id: string) => `/sslc/mathematics/${id}`,
    },
    physics: {
      home: '/sslc/physics',
      chapter: (id: string) => `/sslc/physics/${id}`,
    },
  },
  plusOne: {
    home: '/plusone',
    accountancy: {
      home: '/plusone/accountancy',
      unit: (id: string) => `/plusone/accountancy/${id}`,
    },
  },
  dars: {
    home: '/dars',
    subject: (id: string) => `/dars/${id}`,
    chapter: (sid: string, cid: string) => `/dars/${sid}/${cid}`,
  },
};
