const axios = require('axios')

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
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