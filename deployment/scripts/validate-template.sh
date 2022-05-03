#!/bin/bash

echo "Start Validate Template process ..."
sleep 1

cd ../

cd ./infra

aws cloudformation validate-template --template-body file://aws-app-resource.yml --profile nutchapon