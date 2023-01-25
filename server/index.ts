import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

import app from "./app";

app.listen(process.env.APP_PORT, () => {
    console.log('App is listening on port ' + process.env.APP_PORT)
})