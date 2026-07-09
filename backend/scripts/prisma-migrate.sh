#!/bin/bash
# scripts/prisma-migrate.sh

# Применяет миграции к БД в dev-окружении.
# команда, синхронизирует схему (schema.prisma) с реальной структурой таблиц в БД, в dev-окружении. 
# Если в схеме есть изменения, которых нет в БД, то будет создана новая миграция.

# migrate dev сам вызывает generate после успешного применения —
# отдельный вызов prisma:generate после этого не нужен.
#
# Использование: ./scripts/prisma-migrate.sh
# С именем миграции: ./scripts/prisma-migrate.sh --name add_user_table

prisma migrate dev "$@"