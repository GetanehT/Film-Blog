#!/bin/bash

# Set the backup file name with current timestamp
BACKUP_FILE="/workspace/backup_$(date +'%Y-%m-%d_%H-%M-%S').sql"

# PostgreSQL connection string
DB_URL="postgresql://u0bgfaimj5q:lbNQ7WuJmLUv@ep-gentle-mountain-a23bxz6h-pooler.eu-central-1.aws.neon.tech/cling_slice_nutty_769424"

# Run the pg_dump command to create a backup
echo "Starting backup..."
pg_dump "$DB_URL" -f "$BACKUP_FILE"

# Check if the backup was successful
if [ $? -eq 0 ]; then
  echo "Backup completed successfully: $BACKUP_FILE"
else
  echo "Backup failed"
fi
