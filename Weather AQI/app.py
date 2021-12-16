from logging import debug
from flask import Flask, render_template,request
import flask_monitoringdashboard as dashboard
import requests

from os import environ

app = Flask(__name__)
dashboard.bind(app)



content_list = []

@app.route('/Home')
def Home():
    return render_template('index.html')

@app.route('/', methods = ['GET'])
def homePage():
    print(environ.get('API'))
    return render_template('index.html')

@app.route('/displayCityMap',methods=['GET'])
def displayCityMap():

    city = request.args.get('city')
    print(environ.get('API')+'?city='+city)
    headers={environ.get('API_KEY'): environ.get('API_VALUE'),"Content-type": "application/json"}
    req = requests.get(environ.get('api')+'?city='+city,headers=headers)
    data = req.json()
    data['stations'][0]['city']=city
    print(data)
    return render_template('weatherinfo.html', 
    results = {
        "AQI":data['stations'][0]['AQI'], 
        "aqiInfo": {
            "pollutant": data['stations'][0]['aqiInfo']['pollutant'] ,
            "concentration": data['stations'][0]['aqiInfo']['concentration'],
            "category": data['stations'][0]['aqiInfo']['category']
        }, 
        "CO": data['stations'][0]['CO'], 
        "NO2":data['stations'][0]['NO2'], 
        "OZONE":data['stations'][0]['OZONE'], 
        "PM10": data['stations'][0]['PM10'], 
        "PM25": data['stations'][0]['PM25'], 
        "SO2": data['stations'][0]['SO2'],
        "city":data['stations'][0]['city']
    })


if (__name__ == '__main__'):
    app.run(debug = True)