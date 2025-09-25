#!/bin/bash
DATE=$(date +%Y%m%d_%H%_M%S)
docker exec postgres pg_dump -U user mydb > backup_${DATE}.sql
echo "Backup created: backup_${DATE}.sql"
