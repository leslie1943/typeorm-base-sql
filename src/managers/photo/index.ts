import { findOnePhoto } from "./photo.findOne";
import { findAllPhoto } from "./photo.find";
import { createPhoto } from "./photo.save";
import { createPhotoByGetConnectionManager } from "./getConnection.photo.save";
import { createPhotoByGetManager } from "./getManager.photo.save";

export {
  findOnePhoto,
  findAllPhoto,
  createPhoto,
  createPhotoByGetConnectionManager,
  createPhotoByGetManager,
};
