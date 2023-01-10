let DB_NAME: string
let DB_USERNAME: string
let DB_PASSWORD: string
let DB_HOST: string
let DB_PORT: number
let APP_PORT: number

if (process.env.NODE_ENV === 'development') {
    APP_PORT = process.env.APP_PORT
    DB_NAME = process.env.DB_NAME_DEV
    DB_USERNAME = process.env.DB_USERNAME_DEV
    DB_PASSWORD = process.env.DB_PASSWORD_DEV
    DB_HOST = process.env.DB_HOST_DEV
    DB_PORT = process.env.DB_PORT_DEV
}

export {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    APP_PORT
}