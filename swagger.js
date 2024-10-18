const swaggerAutogen=require('swagger-autogen')();

const doc={
    info:{
        title:'Users Api',
        decription:'Users Api'
    },
    host:"localhost:3005",
    schemes:["http"]
};
const outputFile='./swagger.json';
const endpointsFile=['./routes/index.js'];

swaggerAutogen(outputFile,endpointsFile,doc);