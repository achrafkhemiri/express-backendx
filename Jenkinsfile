pipeline {
  agent any

  stages {
    stage('Install & Test') {
      steps {
        sh 'npm install'   // au lieu de bat
        sh 'npm test'      // au lieu de bat
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t express-backend .'  // au lieu de bat
      }
    }
  }
}
