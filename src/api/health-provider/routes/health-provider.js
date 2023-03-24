'use strict';

/**
 * health-provider router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::health-provider.health-provider');
