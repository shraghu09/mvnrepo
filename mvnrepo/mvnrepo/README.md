# AWS Java + Frontend Deployment Sample

Project layout:
- `frontend/`: static HTML, CSS, and JavaScript for EC2
- `backend/`: Maven WAR application for Tomcat on ECS Fargate
- `Jenkinsfile`: starter CI pipeline to build and validate the WAR

## Backend build
Requires JDK 17 and Maven:
```bash
cd backend
mvn clean package
```
Output: `backend/target/backend.war`

## Local container build
From the repository root:
```bash
docker build -t mvnrepo-backend ./backend
docker run --rm -p 8080:8080 mvnrepo-backend
```
Test: `http://localhost:8080/backend/api/hello`

The frontend API URL is a placeholder. Before using it, replace it in `frontend/app.js` with your deployed backend URL.

## AWS notes
- Deploy `frontend/` to EC2 and serve it with Nginx or Apache.
- Build and push the backend image to Amazon ECR, then run it on ECS Fargate.
- Configure the ECS task security group and RDS security group so the database is reachable only from the backend task security group.
- Store database credentials in AWS Secrets Manager or SSM Parameter Store, not in Git.
- This sample endpoint does not yet connect to RDS; database integration depends on your database engine and schema.
