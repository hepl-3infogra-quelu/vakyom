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
	aTargets,
	jsdom = require('jsdom'),
	chalk = require('chalk'),
	getImage = require('./get-image.js');

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
		console.log(chalk.red.bold('[Error]'), chalk.cyan(oError));
		process.exit(1);
	}
	// 5. Lui appliquer le sélecteur
	// Récupération de l'objet récupéré par le querySelector pour le transformer en tableau grâce à slice
	aTargets = [].slice.call(oWindow.document.querySelectorAll(sSelector), 0);
	if (aTargets.length === 0) {
		console.log(chalk.yellow.bold('[WARNING] There\'s no element matching the given selector T_T'));
		process.exit(1);
	}
	console.log(
		chalk.underline('Results: '), 
		chalk.green.bold(aTargets.length), 
		'element' + (aTargets > 1 ? 's' : ''),
		'found for', 
		chalk.cyan.bold(sSelector), 
		'selector.', 
		'\n');

	aTargets.forEach(function($element) {
		// 6. Si notre sélecteur matche une image, on la télécharge, sinon on affiche le contenu de la balise
		if ($element.nodeName === 'IMG') {
			// TODO : Vérifier que l'URL est complète
			getImage( oWindow.location.href + $element.getAttribute('src'), function(oError, sImagePath) {
				if (oError) {
					console.log(chalk.red.bold('[Error when downloading image]'), chalk.cyan(oError));
					process.exit(1);
				}
				console.log(chalk.cyan.bold('~ Image saved to'), chalk.green(sImagePath.replace(process.cwd, '.')));
			});
		} else {
			console.log(chalk.cyan.bold('~'), $element.outerHTML);
		}
	});
})
