module.exports = {
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Traceability Vocabulary Test Suite',
        // logoImgPath: './logo.png',
        publicPath: '../../docs/testsuite',
        filename: 'index.html',
        expand: true,
      },
    ],
  ],
};
