#!/bin/bash
set -e

echo "ℹ️ Pulling latest changes from the repository..."

git pull origin master --no-rebase

echo "✅ Latest changes pulled successfully."