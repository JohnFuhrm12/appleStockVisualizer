# Apple Stock Visualizer

React app to visualize Apple stock with a candlestick chart and financial ratios as well as analyst estimates.
Ratios and estimates are pulled from a Flask API running on a Docker container

docker pull soester10/unlevered-flask-dummy-financials:latest

docker run -p 8000:5000 soester10/unlevered-flask-dummy-financials
