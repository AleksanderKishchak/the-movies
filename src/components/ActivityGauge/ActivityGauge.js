import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import SolidGauge from 'highcharts/modules/solid-gauge';
import HCMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';

HCMore(Highcharts);
SolidGauge(Highcharts);

function ActivityGauge({ value }) {
  // Settings for chart
  const options = {
    chart: {
      type: 'solidgauge',
      height: '100%',
      backgroundColor: 'none',
      className: 'activity',
      margin: [0, 0, 0, 0]
    },

    title: {
      text: ''
    },

    tooltip: {
      enabled: false
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: {
        // Track for Move
        outerRadius: '95%',
        innerRadius: '70%',
        backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }
    },

    yAxis: {
      min: 0,
      max: 10,
      lineWidth: 0,
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: true,
          backgroundColor: 'none',
          borderWidth: 0,
          defer: true,
          y: -14,
          x: -1,
          color: Highcharts.getOptions().colors[0],
          useHTML: true,
          style: {
            fontSize: '0.8rem'
          }
        },
        linecap: 'round',
        rounded: true
      }
    },

    series: [
      {
        name: 'Popularity',
        data: [
          {
            color: Highcharts.getOptions().colors[0],
            radius: '95%',
            innerRadius: '70%',
            y: value
          }
        ]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} allowChartUpdate={false} />;
}

ActivityGauge.propTypes = {
  value: PropTypes.number.isRequired
};

export default ActivityGauge;
