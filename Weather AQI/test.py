import os
import unittest
from app import app
from unittest import mock

class BasicTests(unittest.TestCase):
    
    def setUp(self):
        self.app = app.test_client()
        self.assertEqual(app.debug, False)
 
    # executed after each test
    def tearDown(self):
        pass

#################################TESTS###############################################
    def test_main_page(self):
        response = self.app.get('/', follow_redirects=True)
        self.assertEqual(response.status_code, 200)

    def test_home_route(self):
        response = self.app.get('/Home', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
    
    @mock.patch.dict(os.environ, {"API":"https://api.ambeedata.com/latest/by-city","API_KEY":"x-api-key","API_VALUE":"e37a74250f26de78d2f12a622bfa1f75ae7c0b8ecd4c3f6d070dab0a686ab1c7"})
    def test_api(self):
        response = self.app.get('/displayCityMap',query_string={"city": "Mumbai"},follow_redirects=True)
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()