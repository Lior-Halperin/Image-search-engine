if(!process.env.NODE_ENV) process.env.NODE_ENV = "development";

class Config {
    public isDevelopment = process.env.NODE_ENV === "development";
    public isProduction = process.env.NODE_ENV === "production";
    public port = 0;
    public connectionString = "https://pixabay.com/api/?key=";

}

class DevelopmentConfig extends Config {
    public port = 3001;
    public connectionString = "https://pixabay.com/api/?key=";

}

class ProductionConfig extends Config {
    public port = +process.env.PORT;
    public connectionString = "https://pixabay.com/api/?key=";
    ;
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
