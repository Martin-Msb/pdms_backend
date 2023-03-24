'use strict';

/**
 * drug-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drug-type.drug-type');
