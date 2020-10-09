# When first pushing to dockerhub from a new machine
  # docker login --username jwildermuth
docker commit affordability-db jwildermuth/affordability-db:latest
docker push jwildermuth/affordability-db:latest
