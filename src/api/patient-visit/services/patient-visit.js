'use strict';

/**
 * patient-visit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patient-visit.patient-visit');
