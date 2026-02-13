# 🐳 Guide Docker pour EmiShop2

Ce guide vous explique comment lancer le projet EmiShop2 facilement avec Docker, sans avoir besoin d'installer Node.js ou Angular sur votre machine.

## Prérequis

- **Docker Desktop** (ou Docker Engine + Docker Compose) installé sur votre machine.

## Lancer le projet

1. Ouvrez un terminal dans le dossier du projet.
2. Lancez la commande suivante :

```bash
docker-compose up -d --build
```

- L'option `-d` lance le conteneur en arrière-plan (détaché).
- L'option `--build` force la reconstruction de l'image (utile si vous avez fait des modifs).

3. Ouvrez votre navigateur et allez sur : **http://localhost:4200**

## Arrêter le projet

Pour arrêter le conteneur :

```bash
docker-compose down
```

## Dépannage

Si vous avez des erreurs, vous pouvez voir les logs avec :

```bash
docker-compose logs -f
```

## Structure Docker

- **Dockerfile** : Contient les instructions pour construire l'image (Build Node.js + Serveur Nginx).
- **nginx.conf** : Configuration du serveur web pour gérer le routing Angular.
- **docker-compose.yml** : Fichier pour orchestrer le lancement du conteneur.
