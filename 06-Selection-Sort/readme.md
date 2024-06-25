# Selection Sort

Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Bien sûr ! Voici une explication du tri par sélection (Selection Sort) en Markdown :

---

# Tri par sélection (Selection Sort)

Le tri par sélection (ou "selection sort" en anglais) est un algorithme de tri simple mais inefficace pour les grandes listes. Voici comment il fonctionne :

## Principe de base

Le tri par sélection divise le tableau en deux parties : la partie triée et la partie non triée. Il trouve le plus petit (ou le plus grand) élément dans la partie non triée et l'échange avec le premier élément de cette partie non triée, agrandissant ainsi la partie triée.

## Étapes détaillées

1. On commence avec un tableau non trié.
2. On cherche le plus petit élément dans la partie non triée du tableau.
3. On échange ce plus petit élément avec le premier élément de la partie non triée.
4. On considère ensuite que cet élément fait partie de la partie triée.
5. On répète cette opération pour chaque élément suivant jusqu'à ce que toute la liste soit triée.

## Exemple

Supposons que nous ayons le tableau suivant : `[5, 2, 9, 1, 5, 6]`

1. On trouve le plus petit élément `1` et on l'échange avec `5` : `[1, 2, 9, 5, 5, 6]`.
2. On trouve le plus petit élément dans la partie non triée `2` et il est déjà à sa place : `[1, 2, 9, 5, 5, 6]`.
3. On trouve le plus petit élément dans la partie non triée `5` et on l'échange avec `9` : `[1, 2, 5, 9, 5, 6]`.
4. On trouve le plus petit élément dans la partie non triée `5` et on l'échange avec `9` : `[1, 2, 5, 5, 9, 6]`.
5. On trouve le plus petit élément dans la partie non triée `6` et on l'échange avec `9` : `[1, 2, 5, 5, 6, 9]`.
6. Le tableau est maintenant trié.

## Pseudo-code

```python
for i in range(len(array)):
    min_idx = i
    for j in range(i + 1, len(array)):
        if array[j] < array[min_idx]:
            min_idx = j
    array[i], array[min_idx] = array[min_idx], array[i]
```

## Complexité

- **Temps dans le pire des cas** : \(O(n^2)\) où \(n\) est le nombre d'éléments dans le tableau. Chaque passage dans la liste nécessite une recherche linéaire pour trouver le plus petit élément.
- **Temps dans le meilleur des cas** : \(O(n^2)\) car l'algorithme fait toujours les mêmes comparaisons, même si le tableau est déjà trié.
- **Espace** : \(O(1)\) car le tri par sélection est un algorithme en place, n'utilisant qu'une quantité constante de mémoire supplémentaire.

## Avantages et inconvénients

- **Avantages** : Simple à implémenter, effectue un nombre minimal d'échanges, ce qui peut être avantageux si les échanges sont coûteux en termes de performance.
- **Inconvénients** : Inefficace sur les grandes listes en raison de sa complexité quadratique, peu performant par rapport à d'autres algorithmes de tri comme le tri rapide (quick sort) ou le tri par fusion (merge sort).

En résumé, le tri par sélection est une méthode de tri facile à comprendre et à mettre en œuvre, mais il devient inefficace sur des ensembles de données plus grands en raison de sa complexité quadratique.

---