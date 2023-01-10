import db from "../models";

const connectToPostgres = () => {
    db.authenticate()
        .then(() => console.log(`Connected to ${db.config.database} successfully`))
        .catch((err) => console.log(`Unable to connect ${db.config.database}:`, err.message))

    db.sync({ force: false })
        .then(() => console.log(`Synced ${db.config.database} successfully`))
        .catch((err) => console.log(`Unable to sync ${db.config.database}:`, err))

};

export { connectToPostgres };
