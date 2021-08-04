const server = require('./app');
const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://Sushant:qwerty1899@cluster0.duvbg.mongodb.net/User?retryWrites=true&w=majority";

mongoose.connect(dbUrl,{
    useFindAndModify:false,
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
})

server.listen(5000,() => {
    console.log('app started');
});