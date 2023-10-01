#!/bin/bash

source .env

echo -e "deploy.sh"
echo -e "BEGET_HOST: $BEGET_HOST"
echo -e "WEBSITE_FOLDER: $WEBSITE_FOLDER"

scp dist.zip "$BEGET_HOST":~/"$WEBSITE_FOLDER"/public_html/website

ssh "$BEGET_HOST" << EOF
  cd ~/$WEBSITE_FOLDER/public_html/website

  unzip -o dist.zip && rm dist.zip

  echo -e "[success] website updated."
EOF

