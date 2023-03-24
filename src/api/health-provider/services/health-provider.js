'use strict';

/**
 * health-provider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health-provider.health-provider');
