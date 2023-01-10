import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

import app from "./app";
import { connectToPostgres } from './clients/connectToPostgres';
import { APP_PORT } from './configurations'

connectToPostgres()

app.listen(process.env.APP_PORT, () => {
    console.log('App is listening on port ' + APP_PORT)
})