## Starting the app
```
./init.sh
npm run start
```
You can run the `init.sh` build script to perform the setup and then use `npm run start` to run the app locally.  
Note that the frontend runs on 'localhost:3000' and the backend runs on 'localhost:5000'.

## Backend initialization

```
npm install firebase
```


## Docker
In order to run the docker container for the frontend, use the following commands within the `client` directory:
```
docker build -t metanoia .
docker run -d -p 3000:3000 metanoia
```
