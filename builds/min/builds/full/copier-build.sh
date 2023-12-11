#!/bin/sh

# Function to build an Angular project
build_angular_project () {
    build_dir=$1
    answers_file=$2

    # Remove existing build directory and create a new one
    rm -rf ./builds/$build_dir
    mkdir ./builds/$build_dir

    # Use Copier to set up the project
    copier copy -r HEAD . ./builds/$build_dir --trust --force --answers-file "../$answers_file"

    # Copy answers file
    cp ./builds/$build_dir/$answers_file ./builds/$answers_file

    # Install dependencies and build the project
    cd ./builds/$build_dir
    pnpm install          # or use yarn install if you use Yarn
    ng build             # or ng build --prod for a production build
    cd ../..
}

# Build full version
build_angular_project "full" ".copier-answers-full.yml"

# Build min version
build_angular_project "min" ".copier-answers-min.yml"

# Remove Git hooks (if necessary)
rm -rf ./.git/hooks/pre-commit
rm -rf ./.git/hooks/pre-push
