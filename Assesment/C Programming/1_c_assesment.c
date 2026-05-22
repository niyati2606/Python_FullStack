#include <stdio.h>

int main(){
int choice, qty;
    float price = 0, amount, total = 0;
    char more;

    do
    {
        printf("\n-------- Menu --------\n");
        printf("1. Pizza   price = 180 rs/pcs\n");
        printf("2. Burger  price = 100 rs/pcs\n");
        printf("3. Dosa    price = 120 rs/pcs\n");
        printf("4. Idli    price = 50 rs/pcs\n");

 		// Ask to enter choice
        printf("Please Enter your choice: ");
        scanf("%d", &choice);

		 // Switch statement to determine selected item
        switch(choice)
        {
            case 1:
                printf("\nYou have selected Pizza.\n");
                price = 180;
                break;

            case 2:
                printf("\nYou have selected Burger.\n");
                price = 100;
                break;

            case 3:
                printf("\nYou have selected Dosa.\n");
                price = 120;
                break;

            case 4:
                printf("\nYou have selected Idli.\n");
                price = 50;
                break;

            default:
                printf("Invalid choice!\n");
                continue;
        }

        printf("Enter the quantity: ");
        scanf("%d", &qty);

         // Calculate amount for the selected item
        amount = price * qty;

        // Add current amount to total bill
        total = total + amount;

        // Display amount for current order
        printf("Amount : %.0f\n", amount);
        
        printf("Total Amount is = %.0f\n", total);

        printf("Do you want place more orders ? y & n : ");
        scanf(" %c", &more);

    } 
	
	// Loop will continue if user enters 'y' or 'Y'
    while(more == 'y' || more == 'Y');

    // Display final total amount
    printf("\nFinal Total Amount = %.0f\n", total);
    
    return 0;
}
