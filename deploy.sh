#!/bin/bash
# Build the project
npm run build

# Prepare the deployment
cd out
touch .nojekyll

# Create the target directory structure
mkdir -p dashboards/esg
mv * dashboards/esg/ 2>/dev/null || true  # Move all files except the dashboards directory
mv dashboards/esg/dashboards/esg/* dashboards/esg/  # Fix nested directories
rm -rf dashboards/esg/dashboards  # Clean up

# Initialize git and push
git init
git add -A
git commit -m "Deploy ESG Dashboard to /dashboards/esg"
git remote add origin git@github.com:joelludin/joelludin.github.io.git
git fetch origin main
git checkout -b temp-deploy
git add -A
git commit -m "Deploy ESG Dashboard to /dashboards/esg"
git push origin temp-deploy:main
cd .. 