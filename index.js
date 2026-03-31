const e = require('express');
const a = require('jsonwebtoken');
const app = e();
app.use(e.json());
app.listen(3000,()=>console.log("Server is up and running.."))

app.get('/login',(req,res)=>{
    
    return res.json({
        success:true,
        token : auth()
    });
})

const auth = () =>{
    return a.sign({name:'saveen',
        userid:23434
    },'mykey',{expiresIn:'1h'})
}