const { DBSCAN } = require('density-clustering');

const dbscanClustering = (data, eps, minPoints) => {
    const dbscan = new DBSCAN();
    const clusters = dbscan.run(data, eps, minPoints);
    const noise = dbscan.noise;
    return { clusters, noise };
};

module.exports = dbscanClustering;
