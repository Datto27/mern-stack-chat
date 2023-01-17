const passport = require("passport")
const router = require("express").Router()
 // imisatvis rom auth/google/ route amushavdes sachiroa passport.js-is importi
const passportSetup = require("../passport")
const CLIENT_URL = "http://localhost:3000"


router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}))

router.get("/google/callback", passport.authenticate("google"),
  (req, res) => {
    res.redirect(CLIENT_URL)
  }
)

router.get("/login/success", (req, res) => {
  // console.log("login req.user ==> ", req.user)
  if (req.isAuthenticated()) {
    res.json(req.user)
  } else {
    res.json({error: "Can not authenticate user"})
  }
})

router.get("/logout", (req, res) => {
  req.logout()
  res.redirect(CLIENT_URL)
})

module.exports = router