const axios = require('axios')

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: '0.0.0.0',
        routes: {
          cors: {
            origin: ['*']
          },
        }
    });

    server.route({
      method: 'GET',
      path: '/bbb',
      handler: async (request, h) => {
        const response = await axios.get('https://d1izikxk6qog.cloudfront.net/cdn/brothers/list.json')
        return response.data
      }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();