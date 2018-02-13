#!/bin/bash

cd child1
npm i

cd ../child2
npm i

cd ././child3-dynamic/
npm i
npx webpack

cd ../container
npm i
npx webpack

cd ../composer
npm i
