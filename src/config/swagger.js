// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configurações do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API dos Bruxos e Casas',
      version: '1.0.0',
      description: 'Documentação da API para gerenciar bruxos e casas de Hogwarts',
    },
  },
  apis: ['./src/routes/*.js'], // Caminho onde estão as rotas
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
