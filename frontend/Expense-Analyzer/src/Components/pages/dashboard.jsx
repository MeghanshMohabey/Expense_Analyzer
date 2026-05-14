import "../styles/dashboard.css";
import BarChart from "../Barchart";
import PieChart from "../piechart";
import LineChart from "../Line";
import { useState } from "react";
import Upload from "./upload";

function Dashboard() {
  const [analytics, setAnalytics] = useState(null);

  return (
    <div className="main-content">
      <div className="dashboard-container">
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="dashboard-card stat-card">
              <h5>Total Expense</h5>
              <h2 className="expense-text">
                ₹{analytics?.totalExpense || 0}
              </h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card stat-card">
              <h5>Total Savings</h5>
              <h2 className="saving-text">₹{analytics?.savings || 0}</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card stat-card">
              <h5>Top Category</h5>
              <h2 className="category-text">
                {analytics?.highestCategory || "N/A"}
              </h2>
            </div>
          </div>
        </div>

        
        <div className="mt-4">
          <Upload setAnalytics={setAnalytics} />
        </div>

        
        <div className="row mt-5 g-4">
          <div className="col-md-6">
            <div className="dashboard-card">
              <h4 className="chart-title">Expense Distribution</h4>
              <BarChart categoryData={analytics?.categoryData} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="dashboard-card">
              <h4 className="chart-title">Category Breakdown</h4>
              <PieChart categoryData={analytics?.categoryData} />
            </div>
          </div>
        </div>

        
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="dashboard-card">
              <h4 className="chart-title">Monthly Expense Trend</h4>
              <LineChart categoryData={analytics?.categoryData} />
            </div>
          </div>
        </div>

        
        <div className="dashboard-card insight-card mt-4">
          <h4>Smart Insights</h4>
          <div className="insight-text">
            {analytics?.insight || "Upload a bank statement to generate insights"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;