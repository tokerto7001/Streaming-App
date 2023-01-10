declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_NAME_DEV: string
            DB_USERNAME_DEV: string
            DB_PASSWORD_DEV: string
            DB_HOST_DEV: string
            DB_PORT_DEV: number
            APP_PORT: number
            NODE_ENV: 'test' | 'development' | 'production'
        }
    }
}
export { }