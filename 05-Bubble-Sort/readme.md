# Bubble Sort

This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Bien sûr ! Voici une explication du tri à bulles (Bubble Sort) en Markdown :

---

# Tri à bulles (Bubble Sort)

Le tri à bulles (ou "bubble sort" en anglais) est un algorithme de tri simple qui compare et échange les éléments adjacents pour les placer dans le bon ordre. Voici comment il fonctionne :

## Principe de base

Le tri à bulles parcourt le tableau à plusieurs reprises, et à chaque passage, il compare les éléments adjacents et les échange s'ils sont dans le mauvais ordre. Chaque passage "bulle" le plus grand élément restant vers sa position finale.

## Étapes détaillées

1. On commence avec un tableau non trié.
2. On compare chaque paire d'éléments adjacents et on les échange si le premier élément est plus grand que le second.
3. À la fin de chaque passage, le plus grand élément parmi ceux non triés "bulle" à la fin de la liste.
4. On répète ce processus jusqu'à ce que le tableau soit trié.

## Exemple

Supposons que nous ayons le tableau suivant : `[5, 2, 9, 1, 5, 6]`

1. Premier passage :
   - Comparer `5` et `2`, échanger : `[2, 5, 9, 1, 5, 6]`
   - Comparer `5` et `9`, ne pas échanger : `[2, 5, 9, 1, 5, 6]`
   - Comparer `9` et `1`, échanger : `[2, 5, 1, 9, 5, 6]`
   - Comparer `9` et `5`, échanger : `[2, 5, 1, 5, 9, 6]`
   - Comparer `9` et `6`, échanger : `[2, 5, 1, 5, 6, 9]`
2. Deuxième passage :
   - Comparer `2` et `5`, ne pas échanger : `[2, 5, 1, 5, 6, 9]`
   - Comparer `5` et `1`, échanger : `[2, 1, 5, 5, 6, 9]`
   - Comparer `5` et `5`, ne pas échanger : `[2, 1, 5, 5, 6, 9]`
   - Comparer `5` et `6`, ne pas échanger : `[2, 1, 5, 5, 6, 9]`
3. Troisième passage :
   - Comparer `2` et `1`, échanger : `[1, 2, 5, 5, 6, 9]`
   - Comparer `2` et `5`, ne pas échanger : `[1, 2, 5, 5, 6, 9]`
   - Comparer `5` et `5`, ne pas échanger : `[1, 2, 5, 5, 6, 9]`
4. Le tableau est maintenant trié.

## Pseudo-code

```python
def bubble_sort(array):
    n = len(array)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
                swapped = True
        if not swapped:
            break
```

## Complexité

- **Temps dans le pire des cas** : \(O(n^2)\) où \(n\) est le nombre d'éléments dans le tableau. Chaque passage nécessite une comparaison entre chaque paire d'éléments adjacents.
- **Temps dans le meilleur des cas** : \(O(n)\) lorsque le tableau est déjà trié. Dans ce cas, il ne fait qu'un seul passage pour vérifier que le tableau est trié.
- **Espace** : \(O(1)\) car le tri à bulles est un algorithme en place, n'utilisant qu'une quantité constante de mémoire supplémentaire.

## Avantages et inconvénients

- **Avantages** : Simple à comprendre et à implémenter, efficace pour les petites listes ou les listes presque triées.
- **Inconvénients** : Inefficace sur les grandes listes en raison de sa complexité quadratique, moins performant que d'autres algorithmes de tri comme le tri rapide (quick sort) ou le tri par fusion (merge sort).

En résumé, le tri à bulles est une méthode de tri facile à comprendre et à mettre en œuvre, qui fonctionne bien sur de petites données ou des données presque triées, mais devient inefficace sur des ensembles de données plus grands.

---