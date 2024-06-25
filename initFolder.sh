#!/bin/bash

read -p "Entrez le numéro : " num
read -p "Entrez plusieurs mots en minuscule : " mots

# Capitaliser la première lettre de chaque mot
mots_capitalized=$(echo "$mots" | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2)); print}')

# Convertir les espaces en underscores pour le snake case
upper_snake_case=$(echo $mots_capitalized | tr ' ' '_')

# Convertir les espaces en underscores pour le snake case
snake_case=$(echo $mots | tr ' ' '_')

# Convertir les mots en kebab case
kebab_case=$(echo $mots | tr ' ' '-')
upper_kebab_case=$(echo "$mots_capitalized" | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1))tolower(substr($i,2)); print}' | tr ' ' '-')

# Convertir les mots en camel case
# Le premier mot reste en minuscule
camel_case=$(echo "${mots_capitalized}" | awk '{print tolower($1)}')$(echo "${mots_capitalized}" | awk '{for(i=2;i<=NF;i++) printf toupper(substr($i,1,1)) tolower(substr($i,2))}' | tr -d ' ')

# Convertir les mots en pascal case
pascal_case=$(echo "$mots_capitalized" | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2)); print}' | tr -d ' ')

echo "En kebab case : $kebab_case"
echo "En upper kebab case : $upper_kebab_case"

echo "En snake case : $snake_case"
echo "En upper snake case : $upper_snake_case"

echo "En camel case : $camel_case"
echo "En pascal case : $pascal_case"


# Créer le nom du dossier
folderName="${num}-${upper_kebab_case}"

# Créer le dossier
mkdir "${folderName}"

# Créer le fichier readme.md
echo "# ${mots_capitalized}" > "${folderName}/readme.md"

nouvelle_chaine=${chaine// /}
# Creer le fichier de classe
echo "class ${pascal_case} {
    constructor() {
    }
}" > "${folderName}/${pascal_case}.js"

# Créer le fichier nom.js
echo "function ${camel_case}() {}
module.exports = ${camel_case};" > "${folderName}/${kebab_case}.js"

# Créer le fichier run-nom.js
echo "const ${camel_case} = require('./${kebab_case}');" > "${folderName}/run-${kebab_case}.js"

# Créer le fichier nom.test.js
echo "const ${camel_case} = require('./${kebab_case}');" > "${folderName}/${kebab_case}.test.js"

echo "Le dossier ${folderName} et les fichiers ont été créés avec succès."