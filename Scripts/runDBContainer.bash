# If image is not on the local machine, this will pull the image down then run a container from it.
# If the image already exists locally, the command will just make the container.
# --name: container name
# -d: runs container in background
# -p 8000:3306 LEFT:RIGHT >> RIGHT is is the container's exposed port, LEFT is the port on my local computer that is "attached" to the container's exposed port.
# jwildermuth/affordability-db: the image that is used to create the container

docker run --name affordability-db -e MYSQL_ROOT_PASSWORD=complexpassword -d -p 8000:3306 jwildermuth/affordability-db
echo "Sleepy time for 20 seconds..." # "echo" is the bash equivalent of "console.log"
sleep 20 # Must wait for the mysql database to finish starting up

printf "Attempting to seed...\n\n\n" # "printf" like echo, but better (prints and formats a string)
docker exec affordability-db bash seedDB.bash # runs the "seedDB.bash" file inside the container

# contents of "seeDB.bash" >> the commands below need to be inside a script file because docker exec can not run a chained or quoted command
  # mysql --user="root" --password="complexpassword" < dump.sql

