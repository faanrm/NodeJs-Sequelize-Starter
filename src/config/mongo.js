import mongoose from "mongoose"

mongoose.Promise= global.Promise

// const MONGODB_URI = `mongodb://${username}:${password}@${host}:${port}/${databaseName}`;
const options = {
reconnectTries : Number.MAX_VALUE , // Never give up (or set to a high number)
reconnectInterval : 500 , //reconnect every 500ms
useNewUrlParser : true
}
if(!process.env.MONGO_URI){
    console.log("Invalid URL");
    process.exit
}

mongoose.connect(process.env.MONGO_URI , options)

mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB");
})
mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:', err);
    process.exit(-1);
  });


mongoose.connection.on('disconnected', () => {
console.log("MongoDb disconnected");  
});

export default mongoose
  