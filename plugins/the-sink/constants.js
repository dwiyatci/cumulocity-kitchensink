/**
 * Created by glenn on 15.01.18.
 */

(function () {
  'use strict';

  angular
    .module('c8y.kitchensink.theSink')
    .constant('theSinkConstants', {
      EXAMPLE_WIDGETS: [
        {
          name: 'Recent Alarms', // each widget is uniquely identified by the `name` prop
          title: 'Recent alarms',
          _x: 0, _y: 0, _width: 4, _height: 4, // we play by 12-column grid
          config: {} // widget config goes here
        },
        {
          name: 'Map',
          title: 'Device locations',
          _x: 4, _y: 0, _width: 8, _height: 4,
          config: {}
        },
        // any other built-in or custom widgets...
      ],
      EXAMPLE_DATAPOINTS: [
        {
          __active: true,
          __target: {
            id: '145075',
            name: 'temperature simulator #1'
          },
          color: '#3366cc',
          fragment: 'c8y_Temperature',
          label: 'T',
          lineType: 'line', // possible values: 'line', 'points', 'linePoints', 'bars'
          min: 0,
          max: 100,
          renderType: 'max', // other possible values: 'min', 'max', 'area'
          series: 'T',
          unit: '°C'
        },
        {
          __active: true,
          __target: {
            id: '145075',
            name: 'temperature simulator #1'
          },
          color: '#dc3912',
          fragment: 'c8y_Temperature',
          label: 'T1',
          lineType: 'line',
          min: 0,
          max: 100,
          renderType: 'max',
          series: 'T1',
          unit: '°C'
        },
        {
          __active: true,
          __target: {
            id: '145075',
            name: 'temperature simulator #1'
          },
          color: '#ff9900',
          fragment: 'c8y_Temperature',
          label: 'T2',
          lineType: 'linePoints',
          min: 0,
          max: 100,
          renderType: 'max',
          series: 'T2',
          unit: '°C'
        },
        {
          __active: true,
          __target: {
            id: '145075',
            name: 'temperature simulator #1'
          },
          color: '#109618',
          fragment: 'c8y_Temperature',
          label: 'T3',
          lineType: 'bars',
          min: 0,
          max: 25,
          renderType: 'min',
          series: 'T3',
          unit: '°C'
        }
      ]
    });
}());
