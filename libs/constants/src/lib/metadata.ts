export const metadataItem = {
  title: 'BoBeen Lee',
  siteName: 'BoBeen Lee',
  description: 'Front-end developer, TypeScript enthusiast',
  keywords: 'BoBeen Lee, React, React Native, Typescript, Javascript',
  url: 'https://bbl-nx.vercel.app/',
  type: 'website',
  robots: 'follow, index',
  /**
   * large-og image
   * path: /public/images/large-og.png
   */
  image: 'https://bbl-nx.vercel.app/assets/quokka.webp',
  twitter: {
    site: '@BoBeenLee', // ex) twiiterId @BoBeenLee
  },
};

export type MetadataItem = Readonly<typeof metadataItem>;