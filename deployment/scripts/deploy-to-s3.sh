#!/bin/bash

echo "Start Deploying process ..."
sleep 1

build_artifact_dir=out
s3_bucket_name=cowarcade-main-app-frontend
aws_profile_name=""

while getopts p: flag
do
    case "${flag}" in
        p) aws_profile_name=${OPTARG};;
    esac
done

cd ../..

if [ -d $build_artifact_dir ] 
then
    cd ./$build_artifact_dir

    cur_dir=$PWD

    echo "Upload any files in $cur_dir to s3 ..." 
    sleep 2

    if [ -z $aws_profile_name ]
    then
    echo "deploy without profile setting" 
    aws s3 sync . s3://$s3_bucket_name
    else
    echo "deploy with profile setting $aws_profile_name" 
    aws s3 sync . s3://$s3_bucket_name --profile $aws_profile_name
    fi
else
    echo "Error: $build_artifact_dir build artifact directory not found"
    exit 1
fi

echo "Finished... Happy Coding!"
exit 0