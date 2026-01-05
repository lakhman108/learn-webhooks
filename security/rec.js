const express=require('express');
const app=express();
const crypto=require('crypto');
app.use(express.json());

const secret='my-key';



app.post('/webhook',(req,res)=>{
    const signature=req.headers['x-signature'];
    const expectedSignature=crypto.createHmac('sha256',secret).update(JSON.stringify(req.body)).digest('hex');
console.log(signature,"                                 ",expectedSignature);

if (signature !== expectedSignature) {
    console.log('invalid signature');
    return res.status(401).send('Invalid Signature');
}

else {
    console.log(`${req.body.event} + ${req.body.orderId} recevied`);
   return  res.status(200).send('ok');}
})

app.listen(3000,()=>{
    console.log('reciver on 3000 done');
})