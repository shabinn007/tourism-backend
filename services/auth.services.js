/** @format */

import adminModel from "../models/admin.js";

// .......................auth controller startSession......................

export async function findAdmin(username) {
  const admin = await adminModel.findOne({ username: username });
  return { admin };
}

// ......save admin (auth controller)..............
export async function save(data) {
  const admin = new adminModel(data);
  await admin.save();
  return { admin };
}
