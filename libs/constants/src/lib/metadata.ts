import _ from "lodash";

const metadataItem = {
  description: "BoBeen Lee",
  keywords: "BoBeenLee, ReactJS, React Native, Javascript",
  metaImage: "https://bbl.netlify.com/meta_img.png",
  url: "https://bbl.netlify.com",
  title: "BoBeen Lee",
  backgroundColor: `#fff`,
  themeColor: `#5191FD`,
};

const siteMetadataMap = _.cond([
  [_.matches({ isProduction: false }), _.constant(metadataItem)],
  [_.matches({ isProduction: true }), _.constant(metadataItem)],
]);

export const getMetadata = (isProduction: boolean) =>
  siteMetadataMap({ isProduction });
