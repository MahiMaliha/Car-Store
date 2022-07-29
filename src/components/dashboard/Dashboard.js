import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

import './Dashboard.css';
const Dashboard = () => {
const [data, setData] = useState([]);
        // Load Chart's Data:
        useEffect(() => {
                fetch('data.json')
                .then(res => res.json())
                .then(data => setData(data))
        }, [])

        return (
                <div class="brand-bg mt-5 pt-5 pb-5  ">
                        <div className="container pt-5">
                        <div className="row">
                                        {/* investment Vs revenue Line Chart */}
                        <div className="col-md-6">
                        <h3 class="brand-color text-center mb-4 mt-4">Month Wise sell</h3>
                        <div className="d-flex justify-content-center bg-dark p-5 chart">
                        <LineChart  width={350} height={350} data={data}>
                                <XAxis dataKey={'month'} stroke="white"></XAxis>
                                <YAxis stroke="white"></YAxis>
                                <Line dataKey={'sell'} stroke="gray"></Line>
                                <Tooltip />
                        </LineChart>
                        </div>
                </div>
                                        {/* investment Vs revenue Area Chart */}
                <div className="col-md-6">
                        <h3 class="brand-color text-center mb-4 mt-4">investment Vs revenue</h3>

                        <div class="d-flex justify-content-center bg-dark p-5 chart">
                        <AreaChart
                         width={350}
                         height={350}
                        data={data}
                        margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                        }}
                        >
                        <XAxis dataKey={'month'} stroke="white"></XAxis>
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="green" fill="gray" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#5D6D7E" fill="#B2BABB" />
                        </AreaChart>
                        </div>

                        </div>
                </div>
                <div className="row mt-5">
                                        {/* investment Vs revenue Bar Chart */}
                        <div className="col-md-6">
                        <h3 class="brand-color text-center mb-4 mt-5">investment Vs revenue</h3>
                        <div className="d-flex justify-content-center bg-dark p-5 chart">
                        <BarChart
                        width={350}
                        height={350}
                        data={data}
                        margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis />
                        <Tooltip />
                        <XAxis dataKey={'month'} stroke="white"></XAxis>
                        <Legend />
                        <Bar dataKey={"investment"} stackId="a" fill="#4D5656" />
                        <Bar dataKey={"revenue"} stackId="a" fill="gray" />
                        </BarChart>
                        </div>
                </div>
                        <div className="col-md-6">
                        <h3 class="brand-color text-center mb-4 mt-5">investment Vs revenue</h3>
                        <div className="d-flex justify-content-center bg-dark p-5 chart">
                        <PieChart width={350} height={350}>
                        <Pie data={data} dataKey={"investment"} cx="50%" cy="50%" outerRadius={60} fill="#5D6D7E" />
                        <Pie data={data} dataKey={"revenue"} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="gray" label />
                        <Tooltip />
                        </PieChart>
                        </div>
                </div>
                 </div>
                 </div>
                </div>
        );
};

export default Dashboard;