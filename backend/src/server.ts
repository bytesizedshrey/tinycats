import dotenv from 'dotenv'
dotenv.config()
import app from './app.ts'
import { connectDB } from './config/db.ts'

connectDB()

let port = process.env.PORT

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})