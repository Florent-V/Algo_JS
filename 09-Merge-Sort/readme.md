# Merge Sort

Another common intermediate sorting algorithm is merge sort. Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

1) Recursively split the input array in half until a sub-array with only one element is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

As an aside, this will be the last sorting algorithm we cover here. However, later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap in its implementation.

Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!


Bien sûr ! Voici une explication du tri par fusion (Merge Sort) en Markdown :

---

# Tri par fusion (Merge Sort)

Le tri par fusion (ou "merge sort" en anglais) est un algorithme de tri efficace basé sur la technique de la division et de la conquête. Il divise le tableau en sous-tableaux plus petits, trie ces sous-tableaux, puis les fusionne pour obtenir le tableau trié final.

## Principe de base

Le tri par fusion divise récursivement le tableau en deux moitiés jusqu'à ce que chaque sous-tableau contienne un seul élément (ou soit vide). Ensuite, il fusionne ces sous-tableaux de manière à produire des sous-tableaux triés, jusqu'à ce que l'ensemble du tableau soit trié.

## Étapes détaillées

1. **Division** : Diviser le tableau en deux moitiés.
2. **Conquête** : Appliquer récursivement le tri par fusion aux deux moitiés pour les trier.
3. **Fusion** : Fusionner les deux moitiés triées pour former un tableau trié.

## Exemple

Supposons que nous ayons le tableau suivant : `[5, 2, 9, 1, 5, 6]`

1. **Division** :
   - `[5, 2, 9, 1, 5, 6]` devient `[5, 2, 9]` et `[1, 5, 6]`
   - `[5, 2, 9]` devient `[5]` et `[2, 9]`
   - `[2, 9]` devient `[2]` et `[9]`
   - `[1, 5, 6]` devient `[1]` et `[5, 6]`
   - `[5, 6]` devient `[5]` et `[6]`

2. **Conquête** (chaque tableau à un seul élément est déjà trié) :
   - `[5]`, `[2]`, `[9]`, `[1]`, `[5]`, `[6]`

3. **Fusion** :
   - `[2]` et `[9]` deviennent `[2, 9]`
   - `[5]` et `[2, 9]` deviennent `[2, 5, 9]`
   - `[5]` et `[6]` deviennent `[5, 6]`
   - `[1]` et `[5, 6]` deviennent `[1, 5, 6]`
   - `[2, 5, 9]` et `[1, 5, 6]` deviennent `[1, 2, 5, 5, 6, 9]`

## Pseudo-code

```python
def merge_sort(array):
    if len(array) <= 1:
        return array
    
    mid = len(array) // 2
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

# Exemple d'utilisation
array = [5, 2, 9, 1, 5, 6]
sorted_array = merge_sort(array)
print(sorted_array)
```

## Complexité

- **Temps dans le pire des cas** : \(O(n \log n)\) où \(n\) est le nombre d'éléments dans le tableau. Le tri par fusion divise le tableau en deux à chaque étape et effectue une fusion linéaire.
- **Temps dans le meilleur des cas** : \(O(n \log n)\) car la structure de l'algorithme reste la même, quelle que soit la disposition initiale des éléments.
- **Espace** : \(O(n)\) car le tri par fusion nécessite de l'espace supplémentaire pour les tableaux temporaires utilisés lors de la fusion.

## Avantages et inconvénients

- **Avantages** : Performances garanties \(O(n \log n)\), stable (préserve l'ordre des éléments égaux), bien adapté pour les listes de grande taille.
- **Inconvénients** : Utilise de la mémoire supplémentaire proportionnelle à la taille du tableau, ce qui peut être problématique pour de très grandes listes.

En résumé, le tri par fusion est une méthode de tri efficace et stable qui fonctionne bien pour les grandes listes, bien que sa consommation de mémoire supplémentaire puisse être un inconvénient dans certains cas.

---