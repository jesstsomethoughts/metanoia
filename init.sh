#!/bin/bash

CUR_DIR="$(pwd)"
WORKING_DIR="$(dirname $0)"

cd $WORKING_DIR
rm -rf node_modules ./client/node_modules

cd "./client"
npm ci
npm run build

cd ".."
npm ci

cd $CUR_DIR
