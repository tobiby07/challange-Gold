const knexLib = require('knex')
const knexConf = require('./knexfile')

const knex = knexLib(knexConf.development) 

module.exports = { 
    knex
}