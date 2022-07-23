import { DATE_TIME_FORMAT, DATE_TIME_FORMAT1 } from './datetime-format';
import dateFnsParse from 'date-fns/parse';
import dateFnsFormat from 'date-fns/format';
import ko from 'date-fns/locale/ko';
import enUS from 'date-fns/locale/en-US';

const locales = { enUS, ko } as const;

type LocaleIdType = keyof typeof locales;
export type DateTimeFormatModule = typeof import('./datetime-format');
export type DateTimeFormatType =
  DateTimeFormatModule[keyof DateTimeFormatModule];

const defaultLocaleId: LocaleIdType = 'enUS';

export const parseDateFns = (
  dateTime: string,
  format: DateTimeFormatType = DATE_TIME_FORMAT
) => {
  return dateFnsParse(dateTime, format, new Date(), {
    locale: locales[defaultLocaleId],
  });
};

export const parseDate = (dateTime: string) => {
  return new Date(dateTime);
};

export const transformDateTimeStrToText = (
  datetimeStr: string,
  format: DateTimeFormatType = DATE_TIME_FORMAT
) => {
  return toDateTimeText(parseDate(datetimeStr), format);
};

export const toDateTimeText = (
  datetime: number | Date,
  format: DateTimeFormatType = DATE_TIME_FORMAT
) => {
  return dateFnsFormat(datetime, format, {
    locale: locales[defaultLocaleId],
  });
};

export const today = () => {
  return new Date();
};

export const todayFormat = () => {
  return toDateTimeText(new Date(), DATE_TIME_FORMAT1);
};

export const todayTime = () => {
  return new Date().getTime();
};
