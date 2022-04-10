aws cloudformation create-stack --stack-name cowarcade-main-app \
--template-body file://aws-app-resource.yml \
--capabilities CAPABILITY_NAMED_IAM \
--profile nutchapon 