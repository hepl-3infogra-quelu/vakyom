#!/usr/bin/env node
/* vakyòm
 * https://github.com/HEPL-RIA/vakyom
 *
 * Copyright (c) 2014 leny for HEPL RIA courses
 * Licensed under the MIT license.
 */

"use strict";

// including dependencies
var chalk = require( "chalk" ),
    jsdom = require( "jsdom" ),
    aArguments,
    sURL,
    sSelector;

// get arguments, slide them before
aArguments = process.argv.slice( 2 );

// get URL (the first argument)
sURL = aArguments.shift()

// assume all the rest arguments are a css selector
sSelector = aArguments.join( " " ) || "title";

// fetch the URL
jsdom.env( sURL, function( oError, oWindow ) {
    var $targets, $element, i = -1;
    if( oError ) {
        console.log( chalk.bold.red( "[ERROR] An error occuring:", oError.code ) );
        process.exit( 1 );
    }
    $targets = [].slice.call( oWindow.document.querySelectorAll( sSelector ), 0 );
    if( $targets.length === 0 ) {
        console.log( chalk.bold.yellow( "[WARNING] There's no element matching the given selector :(" ) );
        process.exit( 1 );
    }
    console.log( chalk.underline.white( "Results:" ), chalk.bold.green( $targets.length ), "element" + ( $targets.length > 1 ? "s" : "" ) + " found for", chalk.cyan( sSelector ), "selector.", "\n" );
    for( ; $element = $targets[ ++i ] ; ) {
        console.log( chalk.bold.cyan( "•" ), $element.outerHTML );
    }
} );
