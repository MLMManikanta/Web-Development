#include <stdio.h>
#include <stdlib.h>

// Function to merge two sorted arrays
int* merge(int* arr1, int size1, int* arr2, int size2) {
    int* merged = (int*)malloc((size1 + size2) * sizeof(int));
    int i = 0, j = 0, k = 0;
    
    while (i < size1 && j < size2) {
        if (arr1[i] < arr2[j]) {
            merged[k++] = arr1[i++];
        } else {
            merged[k++] = arr2[j++];
        }
    }
    
    while (i < size1) {
        merged[k++] = arr1[i++];
    }
    
    while (j < size2) {
        merged[k++] = arr2[j++];
    }
    
    return merged;
}

// Function to merge an array of arrays
int* mergeArrays(int** arrays, int* sizes, int numArrays) {
    int* merged = arrays[0];
    int mergedSize = sizes[0];
    
    for (int i = 1; i < numArrays; i++) {
        merged = merge(merged, mergedSize, arrays[i], sizes[i]);
        mergedSize += sizes[i];
    }
    
    return merged;
}

int main() {
    int numArrays = 4;
    int* arrays[4];
    int sizes[4];
    
    int arr1[] = {1, 5, 9, 21};
    int arr2[] = {-1, 0};
    int arr3[] = {-124, 81, 121};
    int arr4[] = {3, 6, 12, 20, 150};
    
    arrays[0] = arr1;
    arrays[1] = arr2;
    arrays[2] = arr3;
    arrays[3] = arr4;
    
    sizes[0] = sizeof(arr1) / sizeof(arr1[0]);
    sizes[1] = sizeof(arr2) / sizeof(arr2[0]);
    sizes[2] = sizeof(arr3) / sizeof(arr3[0]);
    sizes[3] = sizeof(arr4) / sizeof(arr4[0]);
    
    int* merged = mergeArrays(arrays, sizes, numArrays);
    
    printf("Merged and sorted array:\n");
    for (int i = 0; i < sizes[0] + sizes[1] + sizes[2] + sizes[3]; i++) {
        printf("%d ", merged[i]);
    }
    printf("\n");
    
    free(merged);  // Free allocated memory
    
    return 0;
}
