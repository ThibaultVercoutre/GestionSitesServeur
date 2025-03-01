import * as Hapi from '@hapi/hapi';
import * as dotenv from 'dotenv';
import sequelize, { testDatabaseConnection } from './config/database';

// Chargement des variables d'environnement
dotenv.config();

// Initialisation du serveur
const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: true
    }
  });

  // Définition des routes
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return { message: 'Bienvenue sur l\'API!' };
    }
  });

  // Connexion à la base de données
  try {
    await testDatabaseConnection();
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
    process.exit(1);
  }

  // Démarrage du serveur
  await server.start();
  console.log(`Serveur en cours d'exécution sur ${server.info.uri}`);

  return server;
};

// Gestion des erreurs non capturées
process.on('unhandledRejection', (err) => {
  console.error('Erreur non gérée:', err);
  process.exit(1);
});

// Lancement du serveur
init(); 