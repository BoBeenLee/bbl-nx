
const metadataItem = {
  description: 'BoBeen Lee',
  keywords: 'BoBeenLee, ReactJS, React Native, Javascript',
  metaImage: '/meta_img.png',
  url: 'https://bbl.netlify.com',
  title: 'BoBeen Lee',
  backgroundColor: `#fff`,
  themeColor: `#5191FD`,
};

export type MetadataItem = Readonly<typeof metadataItem>;

export const getMetadata = (): MetadataItem => metadataItem;
