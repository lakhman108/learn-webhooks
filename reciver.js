const express=require('express');
const app=express();

app.use(express.json());


app.post('/webhook',(req,res)=>{
    console.log(`${req.body.event} + ${req.body.orderId} recevied`);
    res.status(200).send('ok');
})

app.listen(3000,()=>{
    console.log('reciver on 3000 done');
})