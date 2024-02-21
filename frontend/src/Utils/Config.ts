import UrlDomainModel from "../Models/UrlDomainModel"

const urlDomain: UrlDomainModel = new UrlDomainModel('https://88a2-2a0d-6fc0-2a88-d700-3d38-bbcf-686-6ab5.ngrok-free.app') // For development or testing use ngrok (for example: https://88a2-2a0d-6fc0-2a88-d700-3d38-bbcf-686-6ab5.ngrok-free.app)
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
