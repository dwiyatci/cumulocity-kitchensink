/**
 * Created by glenn on 12.01.18.
 */

(function () {
  'use strict';

  angular
    .module('c8y.kitchensink.theSink')
    .factory('theSinkDataService', dataService);

  /* @ngInject */
  function dataService(
    c8yDevices,
    c8yDataPointSvc,
    c8yDeviceListColumns,
    c8yUserPreferences,
    c8yFilteringSortingInventoryQueries
  ) {
    const service = {
      getThreeDatapointsForFirstDevice,
      getFirstDeviceInTheList,
      getPossibleDatapointsFor,

      getDeviceColumns,
      getDeviceColumnsConfig,
      getDevicesFor
    };

    return service;

    ////////////

    async function getThreeDatapointsForFirstDevice() {
      const firstDevice = await getFirstDeviceInTheList();

      return _.take(getPossibleDatapointsFor(firstDevice), 3);
    }

    async function getFirstDeviceInTheList() {
      const devices = await c8yDevices.list();

      return _.head(devices);
    }

    async function getPossibleDatapointsFor(device) {
      const datapoints = await c8yDataPointSvc.listPossible(device);

      return datapoints;
    }

    async function getDeviceColumns() {
      return c8yDeviceListColumns.getParentDeviceColumns();
    }

    async function getDeviceColumnsConfig() {
      return c8yUserPreferences.get('all-devices-columns-config');
    }

    async function getDevicesFor({ columns, columnsConfig }) {
      const query = c8yFilteringSortingInventoryQueries.getQuery(columns, columnsConfig);

      return c8yDevices.listQuery(query, { withGroups: true });
    }
  }
}());
