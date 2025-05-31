module.exports = {
  apps: [
    {
      name: 'HOS',
      script: './app.js',
      instances: "1",
      exec_mode: 'cluster',
      env: {

        PORT: '3000'
      }
    }
  ]
};
