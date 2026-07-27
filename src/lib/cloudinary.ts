export type CloudinaryImageOptions = {
  publicId: string;
  transformations?: readonly string[];
};

export const transformCloudinaryUrl = (
  sourceUrl: string,
  transformations: readonly string[] = ["f_auto", "q_auto"],
): string => {
  const transformationPath = transformations.filter(Boolean).join(",");

  if (!transformationPath) {
    return sourceUrl;
  }

  return sourceUrl.replace(
    "/image/upload/",
    `/image/upload/${transformationPath}/`,
  );
};

export const buildCloudinaryImageUrl = ({
  publicId,
  transformations = ["f_auto", "q_auto"],
}: CloudinaryImageOptions): string | null => {
  const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME?.trim();
  const cleanPublicId = publicId.trim().replace(/^\/+|\/+$/g, "");

  if (!cloudName || !cleanPublicId) {
    return null;
  }

  const transformationPath = transformations.filter(Boolean).join(",");
  const encodedPublicId = cleanPublicId
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return [
    "https://res.cloudinary.com",
    encodeURIComponent(cloudName),
    "image",
    "upload",
    transformationPath,
    encodedPublicId,
  ]
    .filter(Boolean)
    .join("/");
};
