#!/bin/bash

# Exit on error
set -e

echo "🏗️ Building project..."
npm run build

echo "📦 Preparing deployment..."
cd out
touch .nojekyll

echo "🗂 Setting up Git..."
git init
git add -A

echo "📥 Fetching existing site..."
git remote add origin git@github.com:joelludin/joelludin.github.io.git
git fetch origin main

echo "🔀 Creating deployment branch..."
git checkout -b temp-deploy
git add -A
git commit -m "Deploy: ESG Dashboard update $(date +%Y-%m-%d)"

echo "🚀 Deploying to GitHub Pages..."
git push -f origin temp-deploy:main

echo "🧹 Cleaning up..."
cd ..

echo "✅ Deployment complete! Site will be available at joelludin.com/esg-dashboard" 