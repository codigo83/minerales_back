FROM mongo:bionic

COPY minerals.json /tmp/minerals.json
COPY info.json /tmp/info.json
COPY seed.sh /tmp/seed.sh

RUN chmod +x /tmp/seed.sh

# Descomentar para resetear las colecciones
CMD ["sh", "-c", "/tmp/seed.sh"]