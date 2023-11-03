export const getCloudinaryCloudName = () => {
  return import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
};

export const getCloudinaryImageURL = (publicId) => {
  const cloudName = getCloudinaryCloudName();
  return `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}.jpg`;
};

// export const getCloudinaryPublicId = () => {
//   return import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
// };
