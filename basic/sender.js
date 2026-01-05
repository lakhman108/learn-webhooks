const express=require('express');
const app=express();


app.get('/trigger',async (req,res) => {
    await fetch('http://localhost:3000/webhook',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({event:'order.created',orderId:123})
    })
    res.send('webhook sent')
})

app.listen(4000,()=>{
    console.log('sender on 4000 done')
})