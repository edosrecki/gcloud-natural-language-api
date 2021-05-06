#!/usr/bin/env fish

source (status dirname)"/_env.sh"

# Delete Service account
gcloud iam service-accounts delete $SERVICE_ACCOUNT_EMAIL

rm $GOOGLE_APPLICATION_CREDENTIALS

# Disable Natural Language API
gcloud services disable language.googleapis.com
