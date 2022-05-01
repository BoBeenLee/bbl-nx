import moment from "moment/moment";
import { Moment } from "moment";
import _ from "lodash";

export const DATE_TIME_FORMAT = "YYYY/MM/DD HH:mm:ss";
export const DATE_TIME_FORMAT1 = "YYYY.MM.DD HH:mm:ss a";
export const DATE_TIME_FORMAT2 = "YYYY년 MM월 DD일 HH:mm:ss a";
export const DATE_TIME_FORMAT3 = "YYYY/MM/DD";
export const DATE_TIME_FORMAT4 = "YYYY-MM-DD";
export const DATE_TIME_FORMAT_INCLUDE_TIME_ZONE = "YYYY/MM/DD HH:mm:ss (UTCZ)";

export const changeDateTimeLocale = (language: string) => {
  moment.locale(language);
};

export const parseDateTime = (dateTime: string, format: string) => {
  return moment(dateTime, format);
};

export const toDateTimeText = (
  datetime: Moment | number | string,
  format: string = DATE_TIME_FORMAT
) => {
  return moment(datetime).format(format);
};

export const today = () => {
  return moment();
};

export const todayFormat = () => {
  return toDateTimeText(moment(), DATE_TIME_FORMAT1);
};

export const todayTime = () => {
  return new Date().getTime();
};
