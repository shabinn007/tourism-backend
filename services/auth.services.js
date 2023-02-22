/** @format */

import adminModel from "../models/admin.js";
export async function save(data) {
  const admin = new adminModel(data);
  await admin.save();
  return { admin };
}

//   export async function getSingelDoctorByToken(id) {
//     const doctor = await doctorModel
//       .findById(id, {}, { projection: { timeEnd: 0, timeStart: 0 } })
//       .populate("userId", ["username", "name", "address", "mobileNo", "email"]);
//     console.log(doctor);
//     return { doctor };
//   }
