pipeline {
  agent any



  stages {
    stage('Pull code') {
      steps {
        git 'https://github.com/achrafkhemiri/express-backend.git'
      }
    }

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
