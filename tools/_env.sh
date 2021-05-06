#!/usr/bin/env fish

# Use Codelabs configuration
gcloud config configurations activate $GCLOUD_CONFIGURATION_NAME

# Set environment variables
set -x PROJECT_ID (gcloud config get-value core/project)
set -x SERVICE_ACCOUNT_NAME 'codelabs-natural-processing'
set -x SERVICE_ACCOUNT_EMAIL "$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com"
set -x GOOGLE_APPLICATION_CREDENTIALS "$PWD/key.json"

echo -n "
PROJECT_ID='$PROJECT_ID'
SERVICE_ACCOUNT_NAME='$SERVICE_ACCOUNT_NAME'
SERVICE_ACCOUNT_EMAIL='$SERVICE_ACCOUNT_EMAIL'
GOOGLE_APPLICATION_CREDENTIALS='$GOOGLE_APPLICATION_CREDENTIALS'
" > .env
