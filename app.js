const path=require('path');
const express=require('express');
const app=express();
const Port=1111;
const expressSession=require('express-session');
const MongoStore=require('connect-mongo');
const flash=require('connect-flash');

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(flash());

app.use(expressSession({
secret:'keyboard cat',
resave:false,
saveUninitialized:true,
store:MongoStore.create({
    mongoUrl:'mongodb+srv://prateekdoomroli:prateek@cluster0.mozmjbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'})
}))

app.get('/',(req,res)=>{
    // console.log(req.session);
    // res.send("Learning express session for the first time");

    res.redirect('/login');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.post('/signup',(req,res)=>{
    const {username,password}=req.body;
console.log(username,password);
req.session.username=username;
req.session.password=password;
console.log(req.session);
req.flash('success','You have successfully signed up');
res.redirect('/login');
})

app.get('/login',(req,res)=>{
    res.render('login',{msg:req.flash('success')});
})

app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    if(req.session.username===username && req.session.password===password){
        res.redirect('/profile');
    }
    else{
        res.redirect('/login');
    }
})

app.get('/profile',(req,res)=>{
    if(!req.session.username){
        return res.redirect('/login');
    }
    else{
    res.render('profile')}

})

app.get('/logout',(req,res)=>{
req.session.destroy();
res.redirect('/login');

})

app.listen(Port,()=>{
    console.log('http://localhost:'+Port);
})
