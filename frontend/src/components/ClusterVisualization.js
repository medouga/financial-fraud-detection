import React, { useEffect } from 'react';
import * as d3 from 'd3';

const ClusterVisualization = ({ clusters }) => {
    useEffect(() => {
        const svg = d3.select("#cluster-viz");
        svg.selectAll("*").remove();

        clusters.forEach((cluster, index) => {
            svg.selectAll(`.cluster-${index}`)
                .data(cluster)
                .enter()
                .append("circle")
                .attr("cx", (d, i) => d[0] * 10)
                .attr("cy", (d, i) => d[1] * 10)
                .attr("r", 5)
                .attr("fill", d3.schemeCategory10[index]);
        });
    }, [clusters]);

    return <svg id="cluster-viz" width="600" height="400"></svg>;
};

export default ClusterVisualization;
