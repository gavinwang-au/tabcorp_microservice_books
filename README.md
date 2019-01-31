[![Build Status](https://travis-ci.org/mitni455/tabcorp_microservice_books.svg?branch=master)](https://travis-ci.org/mitni455/tabcorp_microservice_books)

# Tabcorp Microservices - Books API
The Books API is a microservice for managing Books as a Service using Swagger/OpenAPI, ExpressJs and NodeJs.

![CI/CD Architecture](https://i.ibb.co/CJxvzGP/cicd.png)


# Quick Start 
* Build: `docker build -t tabcorp_client_angular .`
* Run: `docker run -p 8080:10010 --name tabcorp_client_angular tabcorp_client_angular`

# CI/CD

*TravisCi* is used as our Continuous Integration service. 
*Spinakker by Netflix* is used as our Continuous Deployment pipelines. 

### Spinnaker
Pipelines available [online here](http://spinnaker-deck.tabcorp.kitset.io/#/applications/tabcorpmsbook/clusters)
![Spinnaker pipeline](https://i.ibb.co/m8cJNZX/Screen-Shot-2019-01-30-at-1-11-43-AM.png)
![Spinnaker pipeline](https://i.ibb.co/z4Xp8gq/Screen-Shot-2019-01-30-at-1-12-17-AM.png)

### Traefik 
Reverse Proxy available [online here](http://traefik.tabcorp.kitset.io/dashboard/status)
![Traefik](https://i.ibb.co/hD4qqDL/Screen-Shot-2019-01-30-at-1-12-23-AM.png)
