# Quick Sort

Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

Bien sûr ! Voici une explication du tri rapide (Quick Sort) en Markdown :

---

# Tri rapide (Quick Sort)

Le tri rapide (ou "quick sort" en anglais) est un algorithme de tri efficace et populaire qui utilise une approche de division et de conquête. Voici comment il fonctionne :

## Principe de base

Le tri rapide divise le tableau en deux sous-tableaux, trie chaque sous-tableau de manière récursive, puis combine les résultats pour obtenir le tableau trié final.

## Étapes détaillées

1. On choisit un élément pivot dans le tableau.
2. On partitionne le tableau en déplaçant les éléments plus petits que le pivot à gauche et les éléments plus grands à droite.
3. On applique récursivement cette opération aux sous-tableaux gauche et droit jusqu'à ce que chaque sous-tableau contienne un seul élément ou soit vide.
4. On combine les sous-tableaux pour obtenir le tableau trié final.

## Exemple

Supposons que nous ayons le tableau suivant : `[5, 2, 9, 1, 5, 6]`

1. Choix du pivot (par exemple, le dernier élément) : `6`
2. Partitionnement : `[5, 2, 1, 5] | 6 | [9]`
3. Application récursive :
   - Pour le sous-tableau gauche `[5, 2, 1, 5]`, pivot `5` :
     - Partitionnement : `[2, 1] | 5 | [5]`
     - Application récursive :
       - Pour `[2, 1]`, pivot `1` :
         - Partitionnement : `[1] | 2`
   - Pour le sous-tableau droit `[9]`, rien à faire.
4. Combinaison des résultats : `[1, 2, 5, 5, 6, 9]`

## Pseudo-code

```python
def quick_sort(array):
    if len(array) <= 1:
        return array
    pivot = array[len(array) // 2]
    left = [x for x in array if x < pivot]
    middle = [x for x in array if x == pivot]
    right = [x for x in array if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

Cette version est peut efficace en mémoire du aux listes supplémentaires créées à chaque appel récursif. Une version en place de l'algorithme est également possible, mais plus complexe à implémenter.

## Complexité

- **Temps dans le pire des cas** : \(O(n^2)\) où \(n\) est le nombre d'éléments dans le tableau. Cela se produit lorsque le pivot choisi est le plus grand ou le plus petit élément à chaque partition.
- **Temps dans le meilleur des cas** : \(O(n \log n)\) en moyenne. Le tri rapide est très efficace pour les grandes listes en raison de sa complexité logarithmique.
- **Espace** : \(O(\log n)\) en utilisant la version en place de l'algorithme.

## Avantages et inconvénients

- **Avantages** : Très efficace en pratique, bonne performance sur les grandes listes, ne nécessite pas beaucoup de mémoire supplémentaire.
- **Inconvénients** : Performances dans le pire des cas quadratiques, choix du pivot crucial pour la performance.

En résumé, le tri rapide est une méthode de tri très efficace et largement utilisée, surtout pour les grandes listes. Bien que sa performance puisse être mauvaise dans le pire des cas, il est généralement très rapide et efficace avec un bon choix de pivot.

https://e-nsi.forge.aeif.fr/tris/04_rapides/02_rapide/

---