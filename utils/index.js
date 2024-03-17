export function getCloudinaryUrl(imageName) {
  return `${process.env.NEXT_PUBLIC_CLOUNDINARY_PROTOCAL}://${process.env.NEXT_PUBLIC_CLOUNDINARY_HOSTNAME}/${process.env.NEXT_PUBLIC_CLOUNDINARY_CLOUD_NAME}/image/upload/${process.env.NEXT_PUBLIC_CLOUNDINARY_IMAGE_FOLDER}/${imageName}`;
}
