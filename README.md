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
    DB2_DATABASE=
    DB2_HOSTNAME=
    DB2_PORT=
    DB2_USERNAME=
    DB2_PASSWORD=
    APP_SECRET=

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
