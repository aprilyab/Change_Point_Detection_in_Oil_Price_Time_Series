from flask import Blueprint, jsonify, request
import pandas as pd

api_blueprint = Blueprint('api', __name__)

# Load datasets once
prices_df = pd.read_csv('../../data/processed//clean_brent_oil_prices.csv', parse_dates=['Date'])
change_points_df = pd.read_csv('../../data/processed//change_points_summary.csv',)
events_df = pd.read_csv('../../data/processed/brentoilevents.csv', parse_dates=['Date'])

@api_blueprint.route('/price-data')
def get_price_data():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    df = prices_df.copy()
    if start_date:
        df = df[df['Date'] >= pd.to_datetime(start_date)]
    if end_date:
        df = df[df['Date'] <= pd.to_datetime(end_date)]
    return jsonify(df.to_dict(orient='records'))

@api_blueprint.route('/change-points')
def get_change_points():
    return jsonify(change_points_df.to_dict(orient='records'))

@api_blueprint.route('/events')
def get_events():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    df = events_df.copy()
    if start_date:
        df = df[df['Date'] >= pd.to_datetime(start_date)]
    if end_date:
        df = df[df['Date'] <= pd.to_datetime(end_date)]
    return jsonify(df.to_dict(orient='records'))

