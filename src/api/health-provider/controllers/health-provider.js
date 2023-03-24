'use strict';

/**
 * health-provider controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::health-provider.health-provider');
