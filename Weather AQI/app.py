from logging import debug
from flask import Flask, render_template
import requests

app = Flask(__name__)

content_list = []

@app.route('/', methods = ['GET'])

def basic():
    req = requests.get('https://www.breakingbadapi.com/api/characters')
    content = req.json()
    for data in content:
        content_list.append(data)
    return render_template('index.html', content_list = content_list)

if __name__ == '__main__':
    app.run(debug = True)