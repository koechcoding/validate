import express, { json } from 'express'
import authrouter from './Router/authRoutes'
const app= express()

app.use(json()) 


app.use('/auth',authrouter)


app.listen(4000,()=>{
  console.log("server running...");
})