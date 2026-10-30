#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Error: No arguments provided."
    echo "Usage: $0 [project directory]"
    exit 1
fi

DIRECTORY=$1

if [ -d "$DIRECTORY/.venv" ]; then
    echo "Skipping venv creation"
else
    python3 -m venv "$DIRECTORY.venv"

    if [ $? -ne 0 ]; then
        echo "venv creation failed. View error above to find out why." 
        exit 1

    fi
fi

cd $DIRECTORY


source ./.venv/bin/activate

pip show fastAPI

if [ $? -ne 0 ]; then
    pip install "fastAPI[standard]"
else
    echo "fastAPI already installed"
fi

if [ pip show uvicorn -ne 0 ]; then
    pip install "uvicorn[standard]" 
else
    echo "uvicorn already installed"
fi

cd ./src

uvicorn main:app --reload