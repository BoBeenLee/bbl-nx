import _ from "lodash";
import softhomeImages from "~/images/portfolio/softhome";
import competitionImages from "~/images/portfolio/competition";
import skhualarmImages from "~/images/portfolio/skhualarm";
import intersectionImages from "~/images/portfolio/intersection";
import houseImages from "~/images/portfolio/house";

export interface IProjectPortfolio {
  id: string;
  name: string;
  period: string;
  githubRepoName: string[];
  skills: string[];
  summary: string;
  githubUrl?: string;
  linkUrl?: string;
  storybookUrl?: string;
  googleStoreUrl?: string;
  appStoreUrl?: string;
  images: string[];
}

export const companyPortfolios: IProjectPortfolio[] = [
  {
    id: "FITSME",
    name: "FITSME",
    period: "2019.4 - 2020.1",
    githubRepoName: [],
    skills: [
      "react native",
      "mobx state tree",
      "mobx",
      "react native navigation v2",
      "styled components",
      "typescript",
      "storybook",
      "graphql",
      "firebase"
    ],
    summary: "나에게 맞는, 더 나은 뷰티라이프",
    githubUrl: "",
    linkUrl: "https://fitsme.kr/",
    googleStoreUrl:
      "https://play.google.com/store/apps/details?id=kr.fitsme.app",
    appStoreUrl: "https://apps.apple.com/kr/app/id1466041001",
    images: []
  },
  {
    id: "HAECHI",
    name: "HAECHI",
    period: "2019.6 - 2019.6",
    githubRepoName: [],
    skills: [
      "react",
      "gatsby",
      "styled components",
      "typescript",
      "storybook",
      "18next"
    ],
    summary: "haechi website",
    githubUrl: "",
    linkUrl: "https://haechi.io/",
    googleStoreUrl: "",
    appStoreUrl: "",
    images: []
  },
  {
    id: "Henesis",
    name: "Henesis",
    period: "2019.6 - 2019.6",
    githubRepoName: [],
    skills: ["react", "gatsby", "styled components", "typescript", "storybook"],
    summary: "An all-in-one platform for blockchain integration",
    githubUrl: "",
    linkUrl: "https://henesis.io/",
    googleStoreUrl: "",
    appStoreUrl: "",
    images: []
  },
  {
    id: "COSMEE",
    name: "COSMEE",
    period: "2017.4 - 2019.3",
    githubRepoName: [],
    skills: [
      "react native",
      "mobx state tree",
      "mobx",
      "react native navigation v2",
      "styled components",
      "antd",
      "typescript",
      "storybook",
      "appcenter"
    ],
    summary: "보상을 통한 뷰티 커뮤니티",
    githubUrl: "",
    linkUrl:
      "https://medium.com/@Cosmochain/cosmee-app-now-available-on-google-play-store-f80149a2fa4c",
    images: []
  },
  {
    id: "buxi",
    name: "Buxi",
    period: "2017.8 - 2017.11",
    githubRepoName: [],
    skills: [
      "react",
      "styled components",
      "nodejs",
      "redux",
      "redux saga",
      "webpack",
      "storybook"
    ],
    summary:
      "같은 목적지를 오가는 분들이 원하는 시간대에 함께 쓰는 새로운 카셰어링",
    githubUrl: "",
    linkUrl: "https://www.buxikorea.com/",
    images: []
  },
  {
    id: "coupang",
    name: "Coupang Account System",
    period: "2015.6 - 2017.7",
    githubRepoName: [],
    skills: [
      "react",
      "jquery",
      "underscore",
      "requrejs",
      "handlebars",
      "spring framework"
    ],
    summary: "쿠팡 회계 시스템",
    githubUrl: "",
    linkUrl: "",
    images: []
  },
  {
    id: "team42",
    name: "Team42",
    period: "",
    githubRepoName: [],
    skills: ["bootstrap", "jQuery", "velocity", "lessjs"],
    summary: "Team42 Site",
    githubUrl: "",
    linkUrl: "http://team42.net/",
    images: []
  }
];

export const teamPortfolios: IProjectPortfolio[] = [
  {
    id: "onesecondmusicgame",
    name: "onesecondmusicgame",
    period: "current",
    githubRepoName: [],
    skills: [
      "react",
      "react-native",
      "gatsby",
      "mobx-state-tree",
      "styled components",
      "typescript",
      "storybook"
    ],
    summary: "1초 음악 맞추기 게임",
    githubUrl: "",
    storybookUrl: "http://onesecondmusicgame.surge.sh/",
    linkUrl: "",
    appStoreUrl:
      "https://apps.apple.com/kr/app/%EC%95%8C%EC%8F%AD%EB%8B%AC%EC%8F%AD/id1493107650",
    googleStoreUrl:
      "https://play.google.com/store/apps/details?id=kr.nexters.onesecondmusicgame",
    images: []
  },
  {
    id: "bbl",
    name: "bbl",
    period: "current",
    githubRepoName: [],
    skills: [
      "react",
      "gatsby",
      "styled components",
      "offline",
      "typescript",
      "storybook"
    ],
    summary: "personal site",
    githubUrl: "https://github.com/BoBeenLee/bbl",
    storybookUrl: "https://bobeenlee.github.io/bbl/",
    linkUrl: "",
    images: []
  },
  {
    id: "inhousekitchen",
    name: "Inhousekitchen",
    period: "",
    githubRepoName: [],
    skills: [
      "react native",
      "nativebase",
      "expo",
      "redux offline",
      "redux",
      "redux saga",
      "storybook"
    ],
    summary: "셰프와 게스트 연결해주는 서비스",
    githubUrl: "https://github.com/Nexters/inhousekitchen",
    linkUrl: "",
    images: _.values(houseImages)
  },
  {
    id: "flass",
    name: "Flass",
    period: "",
    githubRepoName: ["flass"],
    skills: [
      "react",
      "react router",
      "mocha",
      "redux",
      "material ui",
      "webpack",
      "sass",
      "rails"
    ],
    summary: "Site For Flipped Learning",
    githubUrl: "https://github.com/Nexters/flass",
    linkUrl: "http://flass.me",
    images: []
  },
  {
    id: "onepage",
    name: "Onepage",
    period: "",
    githubRepoName: [],
    skills: [
      "android",
      "retrofit2",
      "butterknife",
      "spring boot",
      "queryDSL",
      "swaggerUI",
      "mockito",
      "mysql"
    ],
    summary: "위치기반 익명 SNS",
    githubUrl: "https://github.com/OnePageAndroid",
    linkUrl:
      "https://play.google.com/store/apps/details?id=kr.nexters.onepage&hl=ko",
    images: []
  },
  {
    id: "intersection",
    name: "Intersection",
    period: "",
    githubRepoName: [],
    skills: [
      "android",
      "material design",
      "spring framework",
      "hibernate",
      "postgreSQL"
    ],
    summary: "너와 나의 중간지점",
    githubUrl: "https://github.com/BoBeenLee/map",
    linkUrl:
      "https://play.google.com/store/apps/details?id=com.nexters.intersection.intersectionapp",
    images: _.values(intersectionImages)
  },
  {
    id: "skhualarm",
    name: "Skhualarm",
    period: "",
    githubRepoName: [],
    skills: [
      "android",
      "facebook Graph API",
      "Picasso",
      "spring framework",
      "myBatis",
      "jsoup",
      "quartz",
      "mariaDB"
    ],
    summary: "Sungkonghoe University Alarm App",
    githubUrl: "https://github.com/BoBeenLee/SkhuApp",
    linkUrl:
      "https://play.google.com/store/apps/details?id=com.skhu.bobinlee.skhuapp&hl=ko",
    images: _.values(skhualarmImages)
  },
  {
    id: "competition",
    name: "Competition",
    period: "",
    githubRepoName: [],
    skills: [
      "bootstrap",
      "angularJS",
      "lessJS",
      "jQuery",
      "spring framework",
      "tiles",
      "myBatis",
      "mariaDB"
    ],
    summary: "Sungkonghoe University Competition Site",
    githubUrl: "https://github.com/BoBeenLee/SkhuCompetition.Server",
    linkUrl: "",
    images: _.values(competitionImages)
  },
  {
    id: "softhome",
    name: "Softhome",
    period: "",
    githubRepoName: [],
    skills: ["jQuery", "prototypeJs", "jPagejs", "jsp", "myBatis"],
    summary: "Sungkonghoe University Software Engineering Department Site",
    githubUrl: "https://github.com/BoBeenLee/swhome",
    linkUrl: "",
    images: _.values(softhomeImages)
  }
];
