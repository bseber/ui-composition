#!/bin/bash

cd child1
npm i

cd ../child2
npm i

cd ../container
npm i
npx webpack

cd ../composer
npm i
