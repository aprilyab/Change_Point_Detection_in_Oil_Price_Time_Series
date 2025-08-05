// src/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchPriceData = (startDate, endDate) => {
  let url = `${API_BASE}/price-data`;
  if (startDate || endDate) {
    url += '?';
    if (startDate) url += `start_date=${startDate}&`;
    if (endDate) url += `end_date=${endDate}`;
  }
  return axios.get(url).then(res => res.data);
};

export const fetchChangePoints = () => axios.get(`${API_BASE}/change-points`).then(res => res.data);

export const fetchEvents = (startDate, endDate) => {
  let url = `${API_BASE}/events`;
  if (startDate || endDate) {
    url += '?';
    if (startDate) url += `start_date=${startDate}&`;
    if (endDate) url += `end_date=${endDate}`;
  }
  return axios.get(url).then(res => res.data);
};
