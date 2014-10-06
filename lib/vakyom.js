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
	sSelector;

// 1. Récupérer les arguments de la ligne de code
aArguments = process.argv.slice(2);

// 2. Récupérer le premier argument qui est une url
sUrl = aArguments.shift();

// 3. Considérer que les arguments qui suivent comme un sélecteur css
sSelector = aArguments.join(' ') || 'title';

console.log(sUrl);
console.log(sSelector);

// 4. Récupérer le contenu de l'url

// 5. Lui appliquer le sélecteur

// 6. Si notre sélecteur matche une image, on la télécharge, sinon on affiche le contenu de la balise
