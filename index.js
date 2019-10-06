#!/usr/bin/env node

const GeoCoder = require('geocoder_node');
const orderBy = require('lodash/orderBy');
const chalk = require('chalk');

const program = require('./options');

// default params
const {
  sourceLatitude = 53.339428,
  sourceLongitude = -6.257664,
  radius = 100,
  order = 'asc',
  unit = 'K',
  src = './customer.json',
} = program;

// dynamically loading file
const {data} = require(src);

const coder = new GeoCoder(unit);

const filteredPoints = data.filter((point) => {
  const {latitude, longitude} = point;
  const geoObj = {
    lat1: sourceLatitude,
    lon1: sourceLongitude,
    lat2: latitude,
    lon2: longitude,
    distance: radius,
  };
  return coder.checkPointsAtDistance(geoObj);
});
// structuring the response
const orderedPoints = orderBy(filteredPoints, ['user_id'], order).map(({user_id, name}) => ` ======= ${chalk.green('User id')} : ${chalk.red(user_id)} ======== ${chalk.yellow('Name')}: ${chalk.blue(name)} ==========`).join('\n');

console.log(orderedPoints);
