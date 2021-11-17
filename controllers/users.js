module.exports ={
    signupForm: (req, res)=>{
        res.render("signup.html");
    },
    loginForm: (req, res)=>{
        res.render("login.html");
    },
    profile: (req, res)=>{
        res.render("perfil.html")
    },
    recoverPassword:  (req, res)=>{
        res.render("recoverPassword.html")
    }
}