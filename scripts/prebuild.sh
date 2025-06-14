#!/bin/bash
set -e

echo "ℹ️Increasing the version number..."

yarn version:dev

echo "ℹ️ Running Changeset..."

yarn changeset

echo "✅ Version number increased and changeset created successfully."