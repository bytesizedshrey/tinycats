import express,{type Request, type Response} from 'express'
import catsRoute from './routes/cat.routes.ts'
import aiRoute from './routes/ai.routes.ts'

const app = express()

app.use(express.json())

app.get('/',(req: Request, res : Response)=>{
    res.send({
        success : true,
        message : 'Tiny cats backend running.'
    })
})

app.use("/api/cats",catsRoute)
app.use("/api/ai",aiRoute)

export default app;