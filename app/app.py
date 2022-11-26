from src import create_app
from src.database.database import *

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
else:
    pass
