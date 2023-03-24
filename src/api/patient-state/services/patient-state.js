'use strict';

/**
 * patient-state service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patient-state.patient-state');
