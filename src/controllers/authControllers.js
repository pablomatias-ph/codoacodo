const LicenceService = require("../services/licenceService");

const userCredentials = {
    email: 'funkoshop@gmail.com',
    password: 'soyunfunko'
  }

  
module.exports = {
    loginView:  (req, res) => res.render('./auth/login', {
      view: {
        title: 'Ingreso a la tienda | Funkoshop'
      }
    }),
    loginUser:  (req, res) => {
      const { email, password } = req.body;
      const emailValidation = userCredentials.email == email;
      const passwordValidation = userCredentials.password == password;
  
      req.session.isLogged = emailValidation && passwordValidation ? true : false;
  
      if (req.session.isLogged) {
        res.locals.isLogged = true;
        return res.redirect('/admin');
      }
  return res.status(401).send('Credenciales inválidas');
        
    },
    registerView:  (req, res) => res.render('./auth/register', {
      view: {
        title: 'Regístrese en la tienda | Funkoshop'
      }
    }),
    registerUser:  (req, res) => res.send('Ingresa los datos de registro del usuario'),
    logoutUser: async (req, res) => {
      req.session.isLogged = false; 
      return res.redirect('/');
}}