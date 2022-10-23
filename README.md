# IBM project

## Local setup

- ### Clone this repo and go into the folder

- ### For `React` frontend

  - ```
    npm install
    npm start
    ```

- ### For `Flask` backend

  - ### Installing dependecies

    ```
       cd backend
       pip install -r ./requirements.txt
    ```

  - ### Create `.env` file inside backend folder with the following (_Don't share with anyone else_)

    ```
    DB2_DATABASE=bludb
    DB2_HOSTNAME=9938aec0-8105-433e-8bf9-0fbb7e483086c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud
    DB2_PORT=32459
    DB2_USERNAME=xgf82208
    DB2_PASSWORD=jWNdrPVt4ws4QQpe
    APP_SECRET=188%&6_81^3so6e2-$wb6g5(p-znf$$sv7m3-4=n7prk6ry

    ```

  - ### Run flask (in root directory)

    ```
    python main.py
    ```

---

## Docker commands

> Run all commands from the root directory

- ### Build the image

  ```
  docker build -f Dockerfile -t react-flask-app .
  ```

- ### Run the container
  ```
  docker run -d -p 3000:3000 react-flask-app
  ```
