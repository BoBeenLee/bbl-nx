import moment from 'moment/moment';
import { Moment } from 'moment';
import _ from 'lodash';
import { DATE_TIME_FORMAT, DATE_TIME_FORMAT1 } from "./datetime-format";

export type DateTimeFormatModule = typeof import("./datetime-format");
export type DateTimeFormatType = DateTimeFormatModule[keyof DateTimeFormatModule];

export const changeDateTimeLocale = (language: string) => {
  moment.locale(language);
};

export const parseDateTime = (dateTime: string, format: string) => {
  return moment(dateTime, format);
};

export const toDateTimeText = (
  datetime: Moment | number | string,
  format: DateTimeFormatType = DATE_TIME_FORMAT
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
