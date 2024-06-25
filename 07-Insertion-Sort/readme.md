# Insertion Sort

The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Bien sûr ! Voici la réponse en Markdown :

---

# Tri par insertion (Insertion Sort)

Le tri par insertion (ou "insertion sort" en anglais) est un algorithme de tri simple et intuitif. Voici comment il fonctionne :

## Principe de base

Le tri par insertion construit le tableau trié élément par élément, en insérant chaque nouvel élément à sa place dans la partie déjà triée du tableau.

## Étapes détaillées

1. On commence avec un tableau non trié.
2. On considère le premier élément du tableau comme étant trié (un seul élément est toujours trié par définition).
3. On prend ensuite le deuxième élément et on l'insère à la bonne position par rapport au premier élément (ce qui nécessite de comparer et de déplacer les éléments si nécessaire).
4. On répète cette opération pour chaque élément suivant, en insérant chaque nouvel élément à sa position correcte dans la partie déjà triée du tableau.

## Exemple

Supposons que nous ayons le tableau suivant : `[5, 2, 9, 1, 5, 6]`

1. Initialement, la partie triée contient juste le premier élément `[5]`.
2. On prend le deuxième élément `2` et on l'insère dans la partie triée : `[2, 5]`.
3. Ensuite, on prend `9` et on l'insère à sa place : `[2, 5, 9]`.
4. On continue avec `1`, qui doit être inséré avant `2`, ce qui donne : `[1, 2, 5, 9]`.
5. Ensuite, on insère `5`, ce qui ne nécessite pas de déplacement, donc : `[1, 2, 5, 5, 9]`.
6. Enfin, on insère `6` entre `5` et `9`, ce qui donne le tableau final trié : `[1, 2, 5, 5, 6, 9]`.

## Pseudo-code

```python
for i in range(1, len(array)):
    key = array[i]
    j = i - 1
    while j >= 0 and key < array[j]:
        array[j + 1] = array[j]
        j -= 1
    array[j + 1] = key
```

## Complexité

- **Temps dans le pire des cas** : \(O(n^2)\) où \(n\) est le nombre d'éléments dans le tableau. Cela se produit lorsque le tableau est trié dans l'ordre inverse.
- **Temps dans le meilleur des cas** : \(O(n)\) lorsque le tableau est déjà trié.
- **Espace** : \(O(1)\) car le tri par insertion est un algorithme en place, n'utilisant qu'une quantité constante de mémoire supplémentaire.

## Avantages et inconvénients

- **Avantages** : Simple à implémenter, efficace pour les petites listes ou les listes qui sont déjà presque triées.
- **Inconvénients** : Inefficace sur les grandes listes non triées en raison de sa complexité quadratique dans le pire des cas.

En résumé, le tri par insertion est une méthode de tri facile à comprendre et à mettre en œuvre, qui fonctionne bien sur de petites données ou des données partiellement triées, mais devient inefficace sur des ensembles de données plus grands.

---