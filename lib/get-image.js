/* vakyòm
 * https://github.com/HEPL-RIA/vakyom
 *
 * Copyright (c) 2014 leny for HEPL RIA courses
 * Licensed under the MIT license.
 */

"use strict";

var http = require( "http" ),
    path = require( "path" ),
    fs = require( "fs" );

module.exports = function( sImageURL, fNext ) {
    var sImageName = path.basename( sImageURL ),
        sImagePath = process.cwd() + "/" + sImageName;
    http.get( sImageURL, function( oResponse ) {
        if( oResponse.statusCode !== 200 ) {
            return fNext && fNext( new Error( "URL_NOT_REACHABLE" ) );
        }
        oResponse.pipe( fs.createWriteStream( sImagePath ) );
        oResponse.on( "end", function() {
            return fNext && fNext( null, sImagePath );
        } );
    } );
};
