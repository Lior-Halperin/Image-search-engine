
export enum urlDomain {
    protocol = 'https://',
    domain = '8d60-5-22-128-70.eu.ngrok.io/'
}

export interface IConfig {
    baseURL:string
    loginURL: string
    imagesURL:string
    imagesCategories:string
}

const environments:any = { 
    development: {
      baseURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/',
      loginURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/auth/login',
      imagesURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/images/',
      imagesCategories:`${urlDomain.protocol}`+`${urlDomain.domain}`+'api/images/categories-list'
    },
    test: {
        baseURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/',
        loginURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/auth/login',
        imagesURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/images/',
        imagesCategories:`${urlDomain.protocol}`+`${urlDomain.domain}`+'api/images/categories-list'
    },
    production: {
        baseURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/',
        loginURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/auth/login',
        imagesURL: `${urlDomain.protocol}`+`${urlDomain.domain}`+'api/images/',
        imagesCategories:`${urlDomain.protocol}`+`${urlDomain.domain}`+'api/images/categories-list'
    }
  }
  
  const currentEnvironment = process.env.NODE_ENV || 'development'
  
  const config:IConfig = {
    ...environments[currentEnvironment],
  }
  
  export default config;
