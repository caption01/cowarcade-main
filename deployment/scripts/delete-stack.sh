#!/bin/bash

echo "Start Delete Stack process ..."
sleep 1

aws cloudformation delete-stack \
--stack-name cowarcade-main-app \
--profile nutchapon 