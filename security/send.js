const crypto=require('crypto');
const express=require('express');
const app=express();


const secret='my-key-secreat';
const payload=JSON.stringify({event:'order completed'});
const signature=crypto.createHmac('sha256',secret).update(payload).digest('hex');


app.get('/trigger',async (req,res) => {
    await fetch('http://localhost:3000/webhook',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-Signature': signature
        },
        body:payload
    })
    
    res.send('webhook sent')
})

app.listen(4000,()=>{
    console.log('sender on 4000 done')
})