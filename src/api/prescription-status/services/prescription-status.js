'use strict';

/**
 * prescription-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prescription-status.prescription-status');
