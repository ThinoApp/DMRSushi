const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const config = {
  IMG_BASE_PATH: BASE_URL.replace(/\/$/, ""),
};

export const assetUrl = (path: string) =>
  `${BASE_URL}${path.replace(/^\/+/, "")}`;
