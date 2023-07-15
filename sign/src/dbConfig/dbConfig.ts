

console.log(process.env.MONGO_URI);
import mongoose from 'mongoose';
export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected successfully')
        })
        connection.on('error',(err)=>{
          console.log('Mongo db me error hai' + err) ;
          process.exit();
        })
    } catch (error) {
        console.log('something wrong');
        console.log(error);
    }
}

