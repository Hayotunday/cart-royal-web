export const getDictionary = async (locale: {
  code: string;
  name: string;
  country: string;
}) => {
  return import(`../locales/${locale.code}.json`).then((mod) => mod.default);
};
