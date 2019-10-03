import * as d3 from "d3"


// chart settings
const COLORS = ['#3BA8F4', '#33B44E', '#999999', '#AAD6F8'];
const PI = Math.PI;

const chartSize = {
  WIDTH: 250,
  HEIGHT: 250
}

const chartRadius = chartSize.HEIGHT / 2;
const chartColors = d3.scaleOrdinal(COLORS);
const arcMinRadius = 10;
const arcPadding = 18;
const labelPaddingX = -5;

// render chart
function renderCircleChart(data) {

  // init chart
  let svg = d3
    .select('#circle-chart')
    .append('svg')
    .attr('width', chartSize.WIDTH)
    .attr('height', chartSize.HEIGHT)
    .append('g')
      .attr('transform', 'translate(' + chartSize.WIDTH / 2 + ',' + chartSize.HEIGHT / 2 + ')');

  // start

  let scale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value) * 1.1])
    .range([0, 1.65 * PI]);

  let keys = data.map((d, i) => d.name);

  //number of arcs
  const numArcs = keys.length;
  const arcWidth = (chartRadius - arcMinRadius - numArcs * arcPadding) / numArcs;

  let arc = d3.arc()
    .innerRadius((d, i) => getInnerRadius(i))
    .outerRadius((d, i) => getOuterRadius(i))
    .startAngle(0)
    .endAngle((d, i) => scale(d))

  let radialAxis = svg.append('g')
    .attr('class', 'r axis')
    .selectAll('g')
      .data(data)
      .enter().append('g');

  radialAxis.append('text')
    .attr('x', labelPaddingX)
    .attr('y', (d, i) => {
      return -getOuterRadius(i) + arcPadding / 2;
    })
    .text(d => d.value)
    .style('fill', (d, i) => chartColors(i));


  //data arcs
  let arcs = svg.append('g')
    .attr('class', 'data')
    .selectAll('path')
      .data(data)
      .enter().append('path')
      .attr('class', 'arc')
      .style('fill', (d, i) => chartColors(i))

  arcs.transition()
    .delay((d, i) => i * 200)
    .duration(1000)
    .attrTween('d', arcTween);

  function arcTween(d, i) {
    let interpolate = d3.interpolate(0, d.value);
    return t => arc(interpolate(t), i);
  }

  function getInnerRadius(index) {
    return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding);
  }

  function getOuterRadius(index) {
    return getInnerRadius(index) + arcWidth;
  }
}

export default renderCircleChart;
