const Joi = require( "@hapi/joi" );

module.exports = Joi.object( ).keys( {
  coordinates: Joi.array( ).length( 2 ).items( Joi.number( ) ),
  type: Joi.string( )
} ).unknown( false ).meta( { className: "GeoJson" } )
  .valid( null );
