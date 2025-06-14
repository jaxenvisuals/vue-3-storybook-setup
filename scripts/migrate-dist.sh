#!/bin/bash
set -e

TARGET_DIR="../build"
TARGET_DIST_DIR="../build/dist"

if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Target directory $TARGET_DIR does not exist. Aborting migration."
    exit 1
fi

echo "ℹ️ Cleaning up old build files..."
rm -rf "$TARGET_DIST_DIR"

echo "ℹ️ Migrating dist files to $TARGET_DIST_DIR..."
mkdir -p "$TARGET_DIST_DIR"
cp -r dist/* "$TARGET_DIST_DIR"

echo "✅ Migration completed successfully."