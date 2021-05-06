#!/usr/bin/env fish

set DIR (status dirname)

source "$DIR/_env.sh"
source "$DIR/_node.sh"

# Enable Natural Language API
gcloud services enable language.googleapis.com

# Create Service account
gcloud iam service-accounts describe "$SERVICE_ACCOUNT_EMAIL" &> /dev/null

if test $status -eq 1
  gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME --display-name 'Google Codelabs - Natural Processing API'
end

if test ! -e $GOOGLE_APPLICATION_CREDENTIALS
  gcloud iam service-accounts keys create $GOOGLE_APPLICATION_CREDENTIALS --iam-account=$SERVICE_ACCOUNT_EMAIL
end
