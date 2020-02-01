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

        let saveData = {
          data: { ...user.data.user },
          token: user.data.token
        };

        let res = await Storage().set({
          data: saveData
        });

        if (res == "LOGGED_IN") {
          resolve(saveData);
        } else {
          reject(res);
        }
      } catch (err) {
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
        let res = await Storage().remove();
        if (res.message == "LOGGED_OUT") {
          resolve(true);
        } else {
          reject(res);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
}

module.exports = Auth;
