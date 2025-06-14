#!/bin/bash
set -e

echo "ℹ️ Running Changeset..."

yarn changeset

echo "ℹ️Increasing the version number..."

yarn version:dev

echo "✅ Version number increased and changeset created successfully."