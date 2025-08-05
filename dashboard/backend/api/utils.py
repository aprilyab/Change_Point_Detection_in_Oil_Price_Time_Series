import pandas as pd
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '../../data/processed')

def load_prices():
    df = pd.read_csv(os.path.join(DATA_DIR, 'clean_brent_oil_prices.csv'))
    return df.to_dict(orient='records')

def load_events():
    df = pd.read_csv(os.path.join(DATA_DIR, 'brentoilevents.csv'))
    return df.to_dict(orient='records')

def load_change_points():
    df = pd.read_csv(os.path.join(DATA_DIR, 'change_points_summary.csv'))
    return df.to_dict(orient='records')
