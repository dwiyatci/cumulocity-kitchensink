/**
 * Created by glenn on 12.01.18.
 */

(function () {
  'use strict';

  angular
    .module('c8y.kitchensink.theSink')
    .component('c8yTheSink', {
      templateUrl: ':::PLUGIN_PATH:::/the-sink.html',
      bindings: {},
      controllerAs: 'vm',
      controller: Controller
    });

  /* @ngInject */
  function Controller(
    $q,
    $rootScope,
    c8yDevices,
    theSinkConstants,
    theSinkDataService
  ) {
    const {
      EXAMPLE_DATAPOINTS,
      EXAMPLE_WIDGETS
    } = theSinkConstants;
    const vm = this;

    _.assign(vm, {
      $onInit,
      chart: {
        datapoints: EXAMPLE_DATAPOINTS,
        dateFrom: moment('2018-06-09').format(),
        dateTo: moment('2018-06-10').format(),
        aggregation: 'HOURLY', // possible values are: 'NONE', 'MINUTELY, 'HOURLY', 'DAILY'
        onUpdateDates(dateFrom, dateTo) {
          // console.log(dateFrom, dateTo);
        },
        onDataChange(chart) {
          // console.log(chart);
        }
      },
      dashboard: {
        EXAMPLE_WIDGETS
      },
      list: {
        columns: [],
        columnsConfig: [],
        onColumnsConfigChanged(columnsConfig) {
          // console.log(columnsConfig);
        },
        items: [],
        onItemClick(item) {
          // console.log(item);
        },
        noItemsMessage: 'No devices to display.',
        onLoadMore() {
          console.log('// load more items here');
        }
      }
    });

    async function $onInit() {
      const { device, datapoints } = await $q.all({
        device: theSinkDataService.getFirstDeviceInTheList(),
        datapoints: theSinkDataService.getThreeDatapointsForFirstDevice()
      });

      // console.log(device);
      // console.log(datapoints);

      const { columns, columnsConfig } = await $q.all({
        columns: theSinkDataService.getDeviceColumns(),
        columnsConfig: theSinkDataService.getDeviceColumnsConfig()
      });

      console.dir(columns);
      // console.log(columnsConfig);

      const devices = await theSinkDataService.getDevicesFor({ columns, columnsConfig });

      // console.log(devices);

      const devicesWithProperName = _.map(devices, device => ({
        ...device,
        properName: c8yDevices.properName(device)
      }));

      _.assign(vm.list, {
        columns,
        columnsConfig,
        items: devicesWithProperName
      });

      $rootScope.$apply();
    }
  }
}());
