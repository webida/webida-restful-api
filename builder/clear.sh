#!/bin/bash -e

API_DIR=..

# cleanup output dir before generating files 
rm -rf $API_DIR/src
rm -rf $API_DIR/test
rm -rf $API_DIR/docs 

rm -f $API_DIR/api-spec/swagger.json
rm -f $API_DIR/api-spec/LICENSE.json
rm -f $API_DIR/LICENSE
rm -f $API_DIR/README-API.md
rm -f $API_DIR/package.json