# NgawangNorbu_02250358_DS0101

# Assignment 1(todo-app) report


## Introduction

This project is a full-stack Todo Application developed using React for the frontend, Express.js and Node.js for the backend, and PostgreSQL as the database. The application allows users to add, view, and delete tasks.

## Technologies Used

* React.js
* Node.js
* Express.js
* PostgreSQL
* Docker
* GitHub
* Render

## Implementation

The frontend was developed using React and communicates with the backend through REST APIs. The backend was built using Express.js and connects to a PostgreSQL database. The application data is stored in a PostgreSQL table named `tasks`.

Docker was used to containerize both frontend and backend services. The source code was pushed to GitHub and deployed on Render. Environment variables were configured to connect the frontend, backend, and database services.

## Challenges Faced

Several issues were encountered during deployment, including:

* Git push conflicts
* Database connection errors
* Missing database tables
* CORS policy errors
* Incorrect environment variable configuration
* Frontend and backend deployment path issues

These issues were resolved by updating configuration settings, creating the required database table, correcting API URLs, and redeploying the services.

## Conclusion

The Todo Application was successfully developed and deployed on Render. Users can add, view, and delete tasks, and the application stores data in a PostgreSQL database. This project provided practical experience in full-stack web development, Docker containerization, database management, and cloud deployment.

# Assignment 2(Jenkins CI/CD Pipeline for To-Do Application) report


## Introduction

This project demonstrates the implementation of a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins for a To-Do web application. The application consists of a React frontend and a Node.js backend hosted in a GitHub repository.

## Objectives

The main objective was to automate the software development process, including code retrieval, dependency installation, building, testing, and deployment using Jenkins.

## Tools Used

* Jenkins
* GitHub
* Node.js
* React
* Express.js
* Render

## Implementation

A Jenkins pipeline was created using a Jenkinsfile stored in the GitHub repository. The pipeline performs the following tasks:

1. Checks out the source code from GitHub.
2. Installs frontend dependencies using npm.
3. Builds the React frontend application.
4. Runs frontend tests.
5. Installs backend dependencies.
6. Executes a deployment stage.

## Results

The Jenkins pipeline executed successfully. All stages completed without errors, including checkout, dependency installation, build, testing, and deployment. The application was successfully integrated with Jenkins and automated build processes were verified.

## Challenges Faced

Several challenges were encountered during the setup process, including plugin dependency issues, Jenkinsfile path configuration errors, and test stage failures due to missing test files. These issues were resolved through plugin installation, path correction, and updating the test command to allow execution without test files.

## Conclusion

The project successfully demonstrated the use of Jenkins for automating the software development lifecycle. The CI/CD pipeline improved efficiency by automating repetitive tasks such as building, testing, and deployment, ensuring a more reliable development workflow.


# Assignment 3(Continuous Integration and Continuous Deployment (CI/CD)) report

## Introduction

The purpose of this assignment was to implement a CI/CD pipeline for a Todo Application using GitHub Actions, Docker, DockerHub, and Render. The goal was to automate the process of building, testing, and deploying the application.

## Steps Taken

First, I verified that the GitHub repository was properly configured and contained the required project files. Next, I created Dockerfiles for both the frontend and backend applications and tested them locally using Docker.

After successfully building the Docker images, I pushed them to DockerHub under separate repositories for the frontend and backend. I then created a GitHub Actions workflow file (`deploy.yml`) to automate the build and deployment process whenever changes were pushed to the main branch.

To complete the deployment process, I connected the application to Render and configured a deployment webhook. GitHub Secrets were used to securely store DockerHub credentials and the Render deployment hook URL.

## Challenges Faced

During the implementation, I faced several challenges such as Docker connection errors, database connection issues, workflow configuration errors, and GitHub secret configuration problems. These issues were resolved through troubleshooting, correcting environment variables, and fixing workflow syntax errors.

## Learning Outcomes

Through this assignment, I learned how to containerize applications using Docker, manage container images with DockerHub, automate workflows using GitHub Actions, and deploy applications using Render. I also gained practical experience in implementing a complete CI/CD pipeline and debugging deployment issues.

## Conclusion

The assignment was completed successfully. The Todo Application was containerized, pushed to DockerHub, and deployed automatically through GitHub Actions and Render. The CI/CD pipeline reduced manual deployment effort and improved the overall software delivery process.
