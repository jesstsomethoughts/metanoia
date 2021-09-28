#!/bin/bash

CUR_DIR="$(pwd)"
WORKING_DIR="$(dirname $0)"

cd $WORKING_DIR

cd "./client"
npm run build
npm ci

cd ".."
npm ci

cd $CUR_DIR