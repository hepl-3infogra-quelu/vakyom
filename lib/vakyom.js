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

// 1. Récupérer les aArguments
aArguments = process.argv.slice(2);

// 2. Récupérer l'url
sUrl = aArguments.shift();

// 3. Créer le sélecteur CSS et mettre title par défaut
sSelector = aArguments.join(' ') || 'title';

console.log(sUrl);
console.log(sSelector);