
function getKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

let prefix = '';

export const setImagePrefixPath = (newPrefix: string) => {
  prefix = newPrefix;
};

const withPrefixPath = <T extends keyof U, U extends { [key in T]: string }>(
  imageKeys: T[],
  images: U
): U => {
  return imageKeys.reduce((res, curr) => {
    return {
      ...res,
      [curr]: `${prefix}${images[curr]}`,
    };
  }, images);
};

export const getImages = () => {
  const logoImages = {
    quokkaWebp: `/assets/quokka.webp`,
    quokkaPng: '/assets/quokka.png',
  };
  const logoImageKeys = getKeys(logoImages);

  const iconImages = {
    googlePlayButton: '/assets/google-play.png',
    octocat: '/assets/octocat.png',
    storybook: '/assets/storybook.png',
  };
  const iconImageKeys = getKeys(iconImages);

  return {
    logoImages: withPrefixPath(logoImageKeys, logoImages),
    iconImages: withPrefixPath(iconImageKeys, iconImages),
  };
};
