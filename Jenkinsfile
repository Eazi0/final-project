
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://https://github.com/Eazi0/final-project.git'
            }
        }

        stage('Build Java App') {
            steps {
                dir('java-app') {
                    sh 'docker build -t java-app .'
                }
            }
        }

        stage('Build Portfolio App') {
            steps {
                dir('portfolio-app') {
                    sh 'docker build -t portfolio-app .'
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
