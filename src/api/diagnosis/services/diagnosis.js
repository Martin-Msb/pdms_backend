'use strict';

/**
 * diagnosis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::diagnosis.diagnosis');
