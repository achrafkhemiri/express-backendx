pipeline {
  agent any

  stages {
    stage('Install & Test') {
      steps {
        bat 'npm install'
        bat 'npm test'
      }
    }
    stage('Build Docker Image') {
      steps {
        bat 'docker build -t express-backend .'
      }
    }
  }
}