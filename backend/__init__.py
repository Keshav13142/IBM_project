from dotenv import dotenv_values
from flask import Flask
import ibm_db

# Get the environment variables
config = dotenv_values("backend/.env")

# Connect to db
try:
    conn = ibm_db.pconnect(
        f"DATABASE={config['DB2_DATABASE']};HOSTNAME={config['DB2_HOSTNAME']};PORT={config['DB2_PORT']};SECURITY=SSL; SSLServerCertificate=backend/DigiCertGlobalRootCA.crt;UID={config['DB2_USERNAME']};PWD={config['DB2_PASSWORD']}", '', '')
    print("Connected to IBM_DB2 successfully!!")
    print(conn)
except:
    print("Failed to connect to Database!")


def create_app():
    # Tell flask to use the build directory of react to serve static content
    app = Flask(__name__, static_folder='../build', static_url_path='/')

    # Set the secret key for flask
    app.config['SECRET_KEY'] = config['APP_SECRET']

    # Import and register auth_router
    from .auth_router import auth
    app.register_blueprint(auth, url_prefix='/api/auth')

    # In production serve the index.html page at root
    @app.route("/")
    def home():
        return "Hello from flask"

    return app
