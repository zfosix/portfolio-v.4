const BASE_URL = 'https://res.cloudinary.com/doyxblnme/image/upload/v1742036590/bg_opvy5f.jpg'

export function getCloudinaryUrl(path: string) {
  return BASE_URL + path
}
