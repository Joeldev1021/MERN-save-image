const AuthService = require("../services/auth.service");

class AuthController {
  async signUp (req, res) {
    const responseUser = await AuthService.register({ user: req.body });
    if (!responseUser) res.status(404).send("user not registered");
    res.status(200).send({
      token: responseUser.token
    });
  }

  async signIn (req, res) {
    const { email, password } = req.body;
    const response = await AuthService.login({ email, password });
    res.status(200).send({
      token: response
    });
  }

  async logout (req, res) {
    const response = await AuthService.logout(req);
    return res.status(200).send({ token: response });
  }
}

module.exports = new AuthController();
