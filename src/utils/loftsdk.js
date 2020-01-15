import axios from "axios";
import Storage from "./storageFunction";

/**
 *
 * @param {email} email
 * @param {password} password
 */
const signInWithEmailAndPassword = async (email, password) => {
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
      Storage.setItem("currentUser", user.data.user);
      Storage.setItem("token", user.data.token);
      resolve(user);
    } catch (err) {
      reject(err.response.data);
    }
  });
};

/**
 *
 * @param {currentPassword} currentPassword
 * @param {newPassword} newPassword
 */
const changePassword = async (currentPassword, newPassword) => {
  console.log("Not Implemented");
};

const logout = () => {
  return new Promise((resolve, reject) => {
    try {
      Storage.removeItem("currentUser");
      Storage.removeItem("token");
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

const auth = () => {
  return {
    currentUser: Storage.getItem("currentUser"),
    signInWithEmailAndPassword,
    logout,
    currentUser: Storage.getItem("currentStorage")
  };
};

const database = () => {
  let token = Storage.getItem("token");
  return {};
};

export default auth;
