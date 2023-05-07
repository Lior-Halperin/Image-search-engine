
// localhost refers to the device itself, not the emulator or physical device where the app is running.
// you should use the IP address of your development machine instead of "localhost".
export enum urlDomain {
    protocol = 'http://',
    domain = '192.168.1.102:3001/'
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

    }
  }
  
  const currentEnvironment = process.env.NODE_ENV || 'development'
  
  const config:IConfig = {
    ...environments[currentEnvironment],
  }
  
  export default config;
