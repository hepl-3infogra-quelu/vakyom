#!/usr/bin/env node
/* vakyòm
 * https://github.com/HEPL-RIA/vakyom
 *
 * Copyright (c) 2014 leny for HEPL RIA courses
 * Licensed under the MIT license.
 */

"use strict";

var aArguments,
	sUrl,
	sSelector,
	jsdom = require('jsdom'),
	chalk = require('chalk');

// 1. Récupérer les arguments de la ligne de code
aArguments = process.argv.slice(2);

// 2. Récupérer le premier argument qui est une url
sUrl = aArguments.shift();

// 3. Considérer que les arguments qui suivent comme un sélecteur css
sSelector = aArguments.join(' ') || 'title';

// 4. Récupérer le contenu de l'url
jsdom.env(sUrl, function (oError, oWindow) {
	// On cherche si on a une erreur
	if (oError) {
		console.log(chalk.red.bold('Error: '), chalk.cyan(oError));
		process.exit(1);
	}
	
})

// 5. Lui appliquer le sélecteur

// 6. Si notre sélecteur matche une image, on la télécharge, sinon on affiche le contenu de la balise
