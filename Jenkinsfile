pipeline {
  agent any          // Exécuter sur n’importe quel agent Jenkins (machine disponible)

  stages {
    stage('Install & Test') {
      steps {
        bat 'npm install'   // Installe les dépendances du projet Node.js
        bat 'npm test'      // Exécute les tests avec Jest (ou autre)
      }
    }

    stage('Build Docker Image') {
      steps {
        bat 'docker build -t express-backend .'   // Crée une image Docker locale nommée "express-backend"
      }
    }
  }
}
