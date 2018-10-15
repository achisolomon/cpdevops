node {
  try {
    stage('Checkout') {
        checkout scm
    }
    stage('Environment') {
        sh 'git --version'
        echo "Branch: ${env.BRANCH_NAME}"
        sh 'docker -v'
        sh 'printenv'
    }
    stage('Build Docker'){
        sh "docker build -t counter-app-${env.BRANCH_NAME} --no-cache --label ${env.BRANCH_NAME} ."
    }
    stage('Deploy'){
        sh "docker run --publish-all=true -d -e VIRTUAL_HOST=${env.BRANCH_NAME} counter-app-${env.BRANCH_NAME}"
    }
  }
  catch (err) {
    throw err
  }
}