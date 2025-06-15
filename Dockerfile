# Utilise l'image officielle de Node.js
FROM node:20

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Exposer le port sur lequel le serveur Express écoute
EXPOSE 3000

# Commande de démarrage
CMD ["node", "server.js"]
