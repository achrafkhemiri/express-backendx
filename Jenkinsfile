pipeline {
  agent {
    docker { image 'node:20' }
  }
  stages {
    stage('Install & Test') {
      steps {
        sh 'npm install'
        sh 'npm test'
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t express-backend .'
      }
    }
  }
}