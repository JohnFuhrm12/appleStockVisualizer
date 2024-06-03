# Apple Stock Visualizer

React app to visualize Apple stock with a candlestick chart and financial ratios as well as analyst estimates.
Ratios and estimates are pulled from a Flask API running on a Docker container.

Link to Site: https://apple-stock-visualizer-kr5d.vercel.app/

Financial data is pulled from Flask, if the container is not running, it will pull from a local copy.

Stock data for the candlestick chart is pulled from the Alpha Vantage API, it is currently pulling IBM stock data (Free Demo Data) but can be changed to AAPL stock by using the free API key - limit is only 25 requests per day. For that reason the default will be IBM data.

# Docker Instructions

docker pull soester10/unlevered-flask-dummy-financials:latest

docker run -p 8000:5000 soester10/unlevered-flask-dummy-financials
