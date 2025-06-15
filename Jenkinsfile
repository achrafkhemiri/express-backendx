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
        bat 'npm install'
        bat 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        bat 'docker build -t express-backend . '
      }
    }

    
  }
}