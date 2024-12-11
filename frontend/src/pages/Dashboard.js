import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClusterVisualization from '../components/ClusterVisualization';

const Dashboard = () => {
    const [clusters, setClusters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/fraud/detect');
            setClusters(response.data.clusters);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Fraud Detection Dashboard</h1>
            <ClusterVisualization clusters={clusters} />
        </div>
    );
};

export default Dashboard;
