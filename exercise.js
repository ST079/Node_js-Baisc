// //role checking function

// const roles = ["Moderator", "Team lead", "Vendor"];
// const userRoles = ["Admin", "Member"];

// const roleCheck = (roles, userRoles) => {
//   const checkingRoles = roles.map((role) => userRoles.includes(role));
//   if (checkingRoles.includes(true)) {
//     return true;
//   }
//   return false;
// };
// const checl = roleCheck(roles, userRoles);
// console.log({ checl });

// node js application to encrypt password by usinf package called bcrypt

const bcrypt = require("bcryptjs");

const encryptPw = (string) => {
  return bcrypt.hashSync(string, 10);
};

const decryptPw = (string, hash) => {
  return bcrypt.compareSync(string, hash);
};

const hashPw = encryptPw("Iloveyoukusum");

console.log(decryptPw("Iloveyoukusum", hashPw));
