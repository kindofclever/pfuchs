module.exports = {
  locales: ['en', 'de'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: '<rootDir>/locale/{locale}/messages',
      include: ['<rootDir>/src'],
    },
  ],
  format: 'minimal',
};