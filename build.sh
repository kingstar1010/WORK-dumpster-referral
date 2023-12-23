#!/bin/bash

BRANCH=$(git branch --show-current)
# Prefix with NEXT_PUBLIC to expose to the browser
NEXT_PUBLIC_BUILD_ENVIRONMENT=${NODE_ENV} # Set to node_env first, override based on branch if applicable

if [[ ${VERCEL_GIT_COMMIT_REF} == "prod" || ${BRANCH} == "prod" ]]; then
    NEXT_PUBLIC_BUILD_ENVIRONMENT="production"
elif [[ ${VERCEL_GIT_COMMIT_REF} == "dev" || ${BRANCH} == "dev" ]]; then
    NEXT_PUBLIC_BUILD_ENVIRONMENT="development"
fi

NODE_ENV=${NEXT_PUBLIC_BUILD_ENVIRONMENT} #Override NODE_ENV with whatever we choose too
echo "Vercel ref is ${VERCEL_GIT_COMMIT_REF}, Git branch is ${BRANCH}, Target is ${NEXT_PUBLIC_BUILD_ENVIRONMENT}"
export NEXT_PUBLIC_BUILD_ENVIRONMENT
export NODE_ENV
npx next build
