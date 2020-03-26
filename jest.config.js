module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  rootDir: './src',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./config/tests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svgrMock.ts',
  },
  globals: {
    window: {},
  },
};
