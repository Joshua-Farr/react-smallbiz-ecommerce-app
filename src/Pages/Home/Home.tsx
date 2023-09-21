import Header from "../../components/Header/Header";
import { Card } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import "./Home.css";

export default function Home() {
  const data = [
    { name: "Jan.", Revenue: 350, amt: 400 },
    { name: "Feb.", Revenue: 200, amt: 200 },
    { name: "Mar.", Revenue: 260, amt: 100 },
    { name: "Apr.", Revenue: 200, amt: 100 },
    { name: "May", Revenue: 35, amt: 100 },
    { name: "Jun.", Revenue: 200, amt: 100 },
    { name: "Jul.", Revenue: 300, amt: 100 },
    { name: "Aug.", Revenue: 200, amt: 100 },
    { name: "Sept", Revenue: 350, amt: 100 },
    { name: "Oct.", Revenue: 200, amt: 100 },
    { name: "Nov.", Revenue: 200, amt: 100 },
    { name: "Dec.", Revenue: 14, amt: 100 },
  ];

  const orderData = [
    { name: "Mon.", Orders: 350, amt: 400 },
    { name: "Tue.", Orders: 200, amt: 200 },
    { name: "Wed.", Orders: 260, amt: 100 },
    { name: "Thr.", Orders: 200, amt: 100 },
    { name: "Fri", Orders: 35, amt: 100 },
    { name: "Sat.", Orders: 200, amt: 100 },
    { name: "Sun.", Orders: 300, amt: 100 },
  ];

  const avgRevenue = [
    { name: "Mon.", Revenue: 12, amt: 400 },
    { name: "Tue.", Revenue: 43, amt: 200 },
    { name: "Wed.", Revenue: 32, amt: 100 },
    { name: "Thr.", Revenue: 21, amt: 100 },
    { name: "Fri", Revenue: 34, amt: 100 },
    { name: "Sat.", Revenue: 43, amt: 100 },
    { name: "Sun.", Revenue: 21, amt: 100 },
  ];

  const refundData = [
    { name: "Mon.", Refunds: 0, amt: 400 },
    { name: "Tue.", Refunds: 3, amt: 200 },
    { name: "Wed.", Refunds: 5, amt: 100 },
    { name: "Thr.", Refunds: 1, amt: 100 },
    { name: "Fri", Refunds: 8, amt: 100 },
    { name: "Sat.", Refunds: 10, amt: 100 },
    { name: "Sun.", Refunds: 1, amt: 100 },
  ];

  const siteVisitsData = [
    { name: "Mon.", Visits: 3, amt: 400 },
    { name: "Tue.", Visits: 6, amt: 200 },
    { name: "Wed.", Visits: 8, amt: 100 },
    { name: "Thr.", Visits: 5, amt: 100 },
    { name: "Fri", Visits: 12, amt: 100 },
    { name: "Sat.", Visits: 9, amt: 100 },
    { name: "Sun.", Visits: 6, amt: 100 },
  ];

  const npsData = [
    { name: "Mon.", NPS: 4.5, amt: 400 },
    { name: "Tue.", NPS: 4.9, amt: 200 },
    { name: "Wed.", NPS: 4.8, amt: 100 },
    { name: "Thr.", NPS: 5, amt: 100 },
    { name: "Fri", NPS: 3.9, amt: 100 },
    { name: "Sat.", NPS: 4.3, amt: 100 },
    { name: "Sun.", NPS: 4.65, amt: 100 },
  ];

  return (
    <div className="store-section-wrapper home">
      <Header />
      <div className="card-grid total-revenue-card">
        <Card className="data-card">
          <p className="card-title">Total Revenue</p>
          <ResponsiveContainer
            width="90%"
            height="90%"
            className="responsive-container"
          >
            <LineChart
              data={data}
              style={{
                fontSize: ".75rem",
                fontStyle: "inherit",
              }}
              className="line-chart"
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <Line
                type="monotone"
                dataKey="Revenue"
                stroke="#8884d8"
                strokeWidth="3"
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="data-card small">
          <p className="small-card-title">New Orders</p>
          <ResponsiveContainer
            width="90%"
            height="90%"
            className="responsive-container"
          >
            <BarChart
              data={orderData}
              style={{
                fontSize: ".75rem",
                fontStyle: "inherit",
              }}
              className="line-chart"
            >
              <XAxis dataKey="name" />

              <Bar dataKey="Orders" fill="#8884d8" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="data-card">
          <p className="small-card-title">Avg. Order Value</p>
          <ResponsiveContainer
            width="90%"
            height="90%"
            className="responsive-container"
          >
            <LineChart
              data={avgRevenue}
              style={{
                fontSize: ".75rem",
                fontStyle: "inherit",
              }}
              className="line-chart"
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <Line
                type="monotone"
                dataKey="Revenue"
                stroke="#8884d8"
                strokeWidth="3"
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card className="data-card">
          <p className="small-card-title">Total Refunds</p>
          <ResponsiveContainer
            width="90%"
            height="90%"
            className="responsive-container"
          >
            <LineChart
              data={refundData}
              style={{
                fontSize: ".75rem",
                fontStyle: "inherit",
              }}
              className="line-chart"
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <Line
                type="monotone"
                dataKey="Refunds"
                stroke="#8884d8"
                strokeWidth="3"
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card className="data-card">
          <p className="small-card-title">Daily Site Visits</p>
          <ResponsiveContainer
            width="90%"
            height="90%"
            className="responsive-container"
          >
            <LineChart
              data={siteVisitsData}
              style={{
                fontSize: ".75rem",
                fontStyle: "inherit",
              }}
              className="line-chart"
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <Line
                type="monotone"
                dataKey="Visits"
                stroke="#8884d8"
                strokeWidth="3"
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card className="data-card">
          <p className="small-card-title">Net Promoter Score</p>
          <ResponsiveContainer
            width="90%"
            height="90%"
            className="responsive-container"
          >
            <LineChart
              data={npsData}
              style={{
                fontSize: ".75rem",
                fontStyle: "inherit",
              }}
              className="line-chart"
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <Line
                type="monotone"
                dataKey="NPS"
                stroke="#8884d8"
                strokeWidth="3"
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
