# Before start 

This project is made by two services: client & server. To start the proyect we will need:
- Docker, install windows version [here](https://docs.docker.com/desktop/install/windows-install/)
- Skaffold, install windows version [here](https://skaffold.dev/docs/install/#). You will to update you env variables
- Node.js. [Install](https://nodejs.org/en/download/)
- npm. It will be installed with Node.js

## Getting started

Once we have all our dependencies installed, we need to create our Docker images, to do so, we have to go to heach service
folder:

### Server service:

Once in `learned-todo` folder:

`cd server`

and then

`Docker build -t <your_repository_name/image_name>`

The repository name could be your Docker user, and the image name is a random name, for example:

`Docker build -t anthonyla/server-todo`

Once the image is build we can push it to our local Docker context:

`Docker push anthonyla/server-todo`

Now we need to build the image for the client service. Get back to the `learned-todo` folder:

`cd .. && cd client`

and then

`Docker build -t <your_repository_name/image_name>`

The repository name could be your Docker user, and the image name is a random name, for example:

`Docker build -t anthonyla/client-todo`

Once the image is build we can push it to our local Docker context:

`Docker push anthonyla/client-todo`

With the images already build, we can start our project. It's important to be placed in `learned-todo` folder:

`skaffold dev`

This will load and launch the `infra/k8s/ingress-serv.yaml` configuration.

Now you can go to your browser and type in the URL: `localhost`

This will show the TODO app:

![Alt text](./todo-image "a title")

### The application

If you want to create a new item, you have to type inside the first input and hit enter.

The second input is for filtering the list