# 📈 Brent Oil Change Detection

**Change Point Analysis and Statistical Modelling of Time Series Data**  
 **Date**: 30 July – 05 August 2025


---

##  Business Objective

**Birhan Energies**, a leading data consultancy, is analyzing how political and economic events (e.g., sanctions, OPEC policy changes, wars) impact Brent oil prices. This involves detecting key change points in oil price time series data and communicating the results clearly to stakeholders such as investors, policy analysts, and energy companies.

---

##  Motivation

The oil market is volatile and influenced by global events. Understanding how and when price shifts occur can help:
- Investors optimize strategies and manage risks
- Policymakers ensure energy and economic stability
- Companies forecast and plan their operations more effectively

---

##  Data

- **Source**: Historical Brent oil daily prices from May 20, 1987 – September 30, 2022
- **Fields**:
  - `Date`: Daily entry (e.g., 20-May-87)
  - `Price`: Price in USD per barrel

---

##  Learning Outcomes

- **Technical Skills**:
  - Bayesian inference
  - PyMC modeling
  - Monte Carlo Markov Chains
  - Change point detection

- **Analytical Skills**:
  - Time series interpretation
  - Statistical reasoning
  - Hypothesis-driven event correlation

- **Communication**:
  - Reporting to policy stakeholders
  - Interactive dashboard presentation

---

##  Folder Structure

Change_Point_Detection_in_Oil_Price_Time_Series/
├── data/
│ ├── raw/ # Raw data files
│ └── processed/ # Cleaned datasets
├── notebooks/
│ ├── 01_eda.ipynb
│ ├── 02_modeling.ipynb
│ └── 03_dashboard.ipynb
├── scripts/
│ ├── preprocess.py
│ ├── model.py
│ └── utils.py
├── dashboard/
│ ├── backend/ # Flask API
│ └── frontend/ # React app
├── requirements.txt
├── .gitignore
└── README.md


---

##  Deliverables and Tasks

###  Task 1: Workflow and Model Understanding

- Define the data science workflow
- Conduct EDA to analyze trends and stationarity
- Research 10–15 historical events affecting oil prices
- Formulate assumptions and discuss correlation vs causality
- Create `event_data.csv` with event-date descriptions
- Deliverables:
  - A notebook for workflow and event analysis
  - A CSV of researched events
  - Mini-report (PDF or notebook summary)

---

###  Task 2: Change Point Modeling and Insight Generation

####  2.1 Core Analysis

- Implement a **Bayesian Change Point Model** with PyMC
- Detect structural changes in price behavior
- Link change points to geopolitical/economic events
- Quantify impact of detected events

####  2.2 Optional Extensions

- Introduce macroeconomic data (e.g., GDP, inflation)
- Explore advanced models (VAR, Markov Switching)

Deliverables:
- Modeling notebook/script
- Analysis report with plots and inferences
- Change point-to-event match table

---

###  Task 3: Interactive Dashboard Development

- Develop a Flask API to serve model results
- Create a React frontend with:
  - Time series visualizations
  - Event annotations
  - Date filtering & interactivity
- Optional:
  - Add real-time updates
  - Exportable insights and plots

Deliverables:
- `dashboard/` folder with working app
- Demo screenshots in report or README

---

##  Setup Instructions

### 1. Clone the Repository

git clone https://github.com/yourusername/Change_Point_Detection_in_Oil_Price_Time_Series.git
cd Change_Point_Detection_in_Oil_Price_Time_Series


 Contact
Author: Henok Yoseph
Email: henokapril@gmail.com
GitHub: https://github.com/aprilyab

