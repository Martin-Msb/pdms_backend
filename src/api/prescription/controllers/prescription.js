'use strict';

/**
 * prescription controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::prescription.prescription');
