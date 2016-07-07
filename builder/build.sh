#!/bin/bash 

API_DIR=.. 
SPEC_DIR=../api-spec
CODEGEN_TEMPLATE_DIR=./templates

# cleanup output dir before generating files 
./clear.sh 

# generate json spec file 
java -jar swagger-codegen-cli.jar generate \
    -i $SPEC_DIR/swagger.yaml -l swagger -o $SPEC_DIR

# now generates javascript client 
# usePromise option is disabled 
# until webida-service-api replaces callbacks with promise. 

java -jar swagger-codegen-cli.jar generate \
    -i $SPEC_DIR/swagger.yaml -l javascript \
    -t $CODEGEN_TEMPLATE_DIR -o $API_DIR 

# build with webpack 
cd $API_DIR
npm install
webpack --progress -p 
