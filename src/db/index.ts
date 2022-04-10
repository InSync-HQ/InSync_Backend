import mongoose from "mongoose";
import { db, environment } from "../config";
import logger from "../core/logger";

// Build the connection string
const dbURI: string = environment === "dev" ? db.devUrl : db.prodUrl;

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};


// Create the database connection

mongoose.connect(dbURI, options).then(
    () => logger.info(`Mongoose connection successful: ${dbURI}`),
    err => logger.info(`Mongoose connection failed: ${dbURI}`)
);



// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
    logger.info("Mongoose default connection open to " + dbURI);
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
    logger.error("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
    logger.info("Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        logger.info(
            "Mongoose default connection disconnected through app termination"
        );
        process.exit(0);
    });
});