pipeline {
  agent any

  environment {
    IMAGE_NAME = 'mon-express-backend'
  }

  stages {
    stage('Install & Test') {
      agent {
        docker {
          image 'node:20' 
        }
      }
      steps {
        sh 'npm install'
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("${IMAGE_NAME}")
        }
      }
    }
  }
}
