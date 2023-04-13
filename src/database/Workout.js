const mongoose= require('mongoose')
const DB_zafira = `mongodb://localhost:27017`

module.exports = () =>{

    const connect = ()=>{
    mongoose.connect(
        DB_zafira,
        {
            keepAlive:true,
            useNewUrlParser: true,
            useUnifiedTopology:true
        },
        (err)=>{
            if(err){
            console.log('DB:ERROR!!')
        } else{
            console.log('Conexion correcta!!')

        }
        connect();



    })} }
