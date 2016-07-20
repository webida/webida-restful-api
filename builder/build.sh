#!/bin/bash 

API_DIR=.. 
SPEC_DIR=../api-spec
TEMPLATES_DIR=./templates

# backup original README.md & clob files to be generated
mv $API_DIR/README.md $API_DIR/README.md.tmp
./clear.sh

# generate json spec file 
java -jar swagger-codegen-cli.jar generate \
    -i $SPEC_DIR/swagger.yaml -l swagger -o $SPEC_DIR

# now generates javascript client 
# usePromise option is disabled, for client app's webida-service-api layer is not ready
# project name should be train-cased -
# project version is not differ
java -jar swagger-codegen-cli.jar generate \
    -i $SPEC_DIR/swagger.yaml -l javascript \
    -t $TEMPLATES_DIR -o $API_DIR

# rename generated README.md & restore original
cd $API_DIR
mv README.md README-API.md
mv README.md.tmp README.md

# building webpack bundle is not supported anymore. webida clients may build their own bundle
# with wrappers and 3rd-party libs.
# npm install
# webpack --progress -p
