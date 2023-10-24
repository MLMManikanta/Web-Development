#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Define a structure for a node in the linked list
struct Node {
    char name[100]; // Assuming each name has a maximum length of 100 characters
    struct Node* next;
};

// Function to insert a new node at the beginning of the linked list
void insert(struct Node** head, char name[]) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed.\n");
        exit(1);
    }
    strcpy(newNode->name, name);
    newNode->next = *head;
    *head = newNode;
}

// Function to display the elements of the linked list in reverse order using recursion
void displayReverse(struct Node* head) {
    if (head == NULL) {
        return;
    }

    displayReverse(head->next);

    printf("%s", head->name);
    if (head->next != NULL) {
        printf(", ");
    }
}

int main() {
    int n;
    
    printf("Enter the number of names: ");
    scanf("%d", &n);
    
    if (n <= 0) {
        printf("Invalid number of names.\n");
        return 1;
    }

    struct Node* head = NULL;

    printf("Enter the names:\n");
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        insert(&head, name);
    }

    printf("Names in reverse order: ");
    displayReverse(head);
    printf("\n");

    // Free memory allocated for the linked list
    while (head != NULL) {
        struct Node* temp = head;
        head = head->next;
        free(temp);
    }

    return 0;
}
