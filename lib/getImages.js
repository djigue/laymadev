import { imagesMap } from "./images";

export function getImages(name) {
  return imagesMap[name] || [];
}