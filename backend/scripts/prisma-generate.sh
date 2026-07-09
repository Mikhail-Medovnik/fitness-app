#!/bin/bash
# scripts/prisma-generate.sh

# Удаляем старый клиент — иначе stale-файлы могут не перезаписаться
# при изменении структуры schema.prisma (проверено на практике)
rm -rf src/generated/prisma
prisma generate