#!/bin/bash

./install.sh episode
./install.sh location

cd composer;
yarn
cd ..

echo "Micro-fun ready."
echo "Press Ctrl+C to kill them all"
echo "............................."
./start.sh episode & ./start.sh location & cd composer; yarn dev & sleep 8; open http://localhost:8000 & wait