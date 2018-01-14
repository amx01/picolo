# Read me

# install these packages
pip install pandas numpy tensorflow sklearn matplotlib flask flask_restful flask_jsonpify

# run python3 to start the predict API

python3 tf_nn_predict.py


# Rest API runs at http://localhost:9001

# /POST http://localhost:9001/predict

# payload in JSON
# {"bet_price" : "1230"}

# response in JSON
# {"predict_price", "1209.0433"}