from backend import create_app
from dotenv import dotenv_values

app = create_app()

port = dotenv_values(".env")["PORT"]


if __name__ == '__main__':
    from waitress import serve
    serve(app, port=port)
