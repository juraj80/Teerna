const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./API/index.js'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js');
})
