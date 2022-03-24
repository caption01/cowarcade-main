aws cloudformation create-stack --stack-name example-assume-role \
--template-body file://aws-app-resource.yml \
--capabilities CAPABILITY_NAMED_IAM \
--profile nutchapon 

aws cloudformation delete-stack \
--stack-name example-assume-role \
--profile nutchapon 

aws cloudformation validate-template --template-body file://aws-app-resource.yml --profile nutchapon