#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* parent;
    struct TreeNode* left;
    struct TreeNode* right;
};

// Function to find the in-order successor of a given node
struct TreeNode* inorderSuccessor(struct TreeNode* root, struct TreeNode* node) {
    if (node->right) {
        node = node->right;
        while (node->left) {
            node = node->left;
        }
        return node;
    } else {
        struct TreeNode* parent = node->parent;
        while (parent != NULL && node == parent->right) {
            node = parent;
            parent = parent->parent;
        }
        return parent;
    }
}

int main() {
    // Create the sample binary tree
    struct TreeNode node6 = {6, NULL, NULL, NULL};
    struct TreeNode node4 = {4, NULL, &node6, NULL};
    struct TreeNode node5 = {5, &node4, NULL, NULL};
    struct TreeNode node2 = {2, NULL, &node4, &node5};
    struct TreeNode node3 = {3, NULL, NULL, NULL};
    struct TreeNode node1 = {1, NULL, &node2, &node3};

    // Set parent pointers
    node6.parent = &node4;
    node4.parent = &node2;
    node5.parent = &node2;
    node2.parent = &node1;
    node3.parent = &node1;

    struct TreeNode* tree = &node1;
    struct TreeNode* givenNode = &node5;

    struct TreeNode* successor = inorderSuccessor(tree, givenNode);

    if (successor) {
        printf("Successor: %d\n", successor->val);
    } else {
        printf("No successor\n");
    }

    return 0;
}
