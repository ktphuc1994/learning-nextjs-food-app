const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUNDINARY_CLOUD_NAME,
  api_key: process.env.CLOUNDINARY_API_KEY,
  api_secret: process.env.CLOUNDINARY_API_SECRECT,
});

export async function uploadCloudinaryImage(
  imageFile,
  fileName = 'untitle',
  extension
) {
  if (!imageFile || !extension)
    return { error: true, message: 'Missing file or extension!' };
  try {
    const imageArrayBuffer = await imageFile.arrayBuffer();

    const uploadOption = {
      public_id: fileName,
      folder: process.env.NEXT_PUBLIC_CLOUNDINARY_IMAGE_FOLDER,
      unique_filename: false,
      overwrite: true,
      resource_type: 'image',
      format: extension,
    };
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(uploadOption, (error, uploadResult) => {
          if (error) {
            return reject();
          }

          return resolve(uploadResult);
        })
        .end(Buffer.from(imageArrayBuffer));
    });

    return uploadResult;
  } catch (_error) {
    return { error: true, message: 'Failed to upload image!' };
  }
}
