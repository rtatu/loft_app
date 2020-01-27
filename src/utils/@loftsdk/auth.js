const axios = require("axios").default;
const Storage = require("./storageFunction");

class Auth {
  getCurrentUser = () => {
    return Storage().get();
  };

  signInWithEmailAndPassword = async (email, password) => {
    return new Promise(async (resolve, reject) => {
      let user;
      try {
        user = await axios({
          method: "POST",
          url: `${process.env.BASE_API_URL}/login`,
          data: {
            email,
            password
          },
          headers: {
            "Content-Type": "application/json"
          }
        });
        await Storage().set({
          data: {
            ...user.data.user,
            token: user.data.token
          }
        });
        resolve(user);
      } catch (err) {
        console.log(err);
        reject(err.response);
      }
    });
  };

  changePassword = async (currentPassword, newPassword) => {
    console.log("Not Implemented");
  };

  logout = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await Storage().remove();
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
}

module.exports = Auth;
