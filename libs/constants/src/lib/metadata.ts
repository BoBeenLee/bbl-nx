
const metadataItem = {
  description: 'BoBeen Lee',
  keywords: 'BoBeen Lee, React, React Native, Typescript, Javascript',
  metaImage: '/meta_img.png',
  url: 'https://bbl-nx.vercel.app/',
  title: 'BoBeen Lee',
};

export type MetadataItem = Readonly<typeof metadataItem>;

export const getMetadata = (): MetadataItem => metadataItem;
