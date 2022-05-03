echo "Start Update Stack process ..."
sleep 1

cd ../

cd ./infra

aws cloudformation update-stack --stack-name cowarcade-main-app \
--template-body file://aws-app-resource.yml \
--capabilities CAPABILITY_NAMED_IAM \
--profile nutchapon