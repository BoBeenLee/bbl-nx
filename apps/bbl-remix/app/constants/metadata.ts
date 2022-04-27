import _ from "lodash";

const metadataItem = {
  description: "BoBeen Lee",
  keywords: "BoBeenLee, ReactJS, React Native, Javascript",
  og_image: "https://bbl.netlify.com/meta_img.png",
  site_url: "https://bbl.netlify.com",
  title: "BoBeen Lee",
  titleTemplate: "%s",
  backgroundColor: `#fff`,
  themeColor: `#5191FD`,
};

const siteMetadataMap = _.cond([
  [_.matches({ isProduction: false }), _.constant(metadataItem)],
  [_.matches({ isProduction: true }), _.constant(metadataItem)],
]);

export const getMetadata = (isProduction: boolean) =>
  siteMetadataMap({ isProduction });
