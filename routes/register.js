var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

// router.get('/register', function(req, res, next) {
//     res.send('respond with a resource');
//   });

//dasom wrote//
/* GET users listing. */

router.get('/register', (req, res) => {
  res.render('register', {
    locals: {
      error: null,
    },
  });
});

router.post('/register', (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.render('main', {
      locals: {
        error: 'please submit all required fields',
      },
    });
    return;
  }
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    console.log('User', password, hash);
    db.User.create({
      email: email,
      password: hash,
    }).then(user => {
      res.redirect('/login');
    });
  });
});
module.exports = router;
