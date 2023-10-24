#include <stdio.h>
#include <stdlib.h>

struct BinaryTree {
    int value;
    struct BinaryTree* parent;
    struct BinaryTree* left;
    struct BinaryTree* right;
};

struct BinaryTree* findSuccessor(struct BinaryTree* root, struct BinaryTree* node) {
    if (node->right) {
        node = node->right;
        while (node->left) {
            node = node->left;
        }
        return node;
    } else {
        while (node->parent && node->parent->right == node) {
            node = node->parent;
        }
        return node->parent;
    }
}

int main() {
    int n;
    printf("Enter the number of nodes in the binary tree: ");
    scanf("%d", &n);

    struct BinaryTree* nodes = (struct BinaryTree*)malloc(n * sizeof(struct BinaryTree));

    printf("Enter the values of the nodes:\n");
    for (int i = 0; i < n; ++i) {
        int value;
        scanf("%d", &value);
        nodes[i].value = value;
        nodes[i].parent = NULL;
        nodes[i].left = NULL;
        nodes[i].right = NULL;
    }

    for (int i = 1; i < n; ++i) {
        int parentIndex;
        printf("Enter the parent index of node with value %d: ", nodes[i].value);
        scanf("%d", &parentIndex);
        
        // Establish parent-child relationship
        nodes[i].parent = &nodes[parentIndex];
        if (!nodes[parentIndex].left) {
            nodes[parentIndex].left = &nodes[i];
        } else {
            nodes[parentIndex].right = &nodes[i];
        }
    }

    int targetValue;
    printf("Enter the value of the node to find its successor: ");
    scanf("%d", &targetValue);

    struct BinaryTree* targetNode = NULL;
    for (int i = 0; i < n; ++i) {
        if (nodes[i].value == targetValue) {
            targetNode = &nodes[i];
            break;
        }
    }

    if (targetNode) {
        struct BinaryTree* result = findSuccessor(&nodes[0], targetNode);
        if (result) {
            printf("Successor: %d\n", result->value);
        } else {
            printf("No successor found.\n");
        }
    } else {
        printf("Node not found in the tree.\n");
    }

    free(nodes);
    return 0;
}
