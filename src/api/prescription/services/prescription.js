'use strict';

/**
 * prescription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prescription.prescription');
