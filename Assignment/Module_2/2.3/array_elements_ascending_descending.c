#include<stdio.h>
#include<conio.h>

void main(){
	
	int a[50], b[50], n1, n2, i, j, temp, choice;
	
	 printf("Enter size of first array: ");
    scanf("%d", &n1);

    printf("Enter elements of first array:\n");
    for(i=0;i<n1;i++){
        scanf("%d",&a[i]);
    }

    printf("Enter size of second array: ");
    scanf("%d", &n2);

    printf("Enter elements of second array:\n");
    for(i=0;i<n2;i++){
        scanf("%d",&b[i]);
    }

	 printf("\n1. Ascending Order\n2. Descending Order\n");
    printf("Enter your choice: ");
    scanf("%d",&choice);

    if(choice==1) // Ascending
    {
        for(i=0;i<n1;i++)
        {
            for(j=i+1;j<n1;j++)
            {
                if(a[i]>a[j])
                {
                    temp=a[i];
                    a[i]=a[j];
                    a[j]=temp;
                }
            }
        }

        for(i=0;i<n2;i++)
        {
            for(j=i+1;j<n2;j++)
            {
                if(b[i]>b[j])
                {
                    temp=b[i];
                    b[i]=b[j];
                    b[j]=temp;
                }
            }
        }
    }
    else if(choice==2) // Descending
    {
        for(i=0;i<n1;i++)
        {
            for(j=i+1;j<n1;j++)
            {
                if(a[i]<a[j])
                {
                    temp=a[i];
                    a[i]=a[j];
                    a[j]=temp;
                }
            }
        }

        for(i=0;i<n2;i++)
        {
            for(j=i+1;j<n2;j++)
            {
                if(b[i]<b[j])
                {
                    temp=b[i];
                    b[i]=b[j];
                    b[j]=temp;
                }
            }
        }
    }

    printf("\nSorted First Array:\n");
    for(i=0;i<n1;i++)
        printf("%d ",a[i]);

    printf("\nSorted Second Array:\n");
    for(i=0;i<n2;i++)
        printf("%d ",b[i]);

}
