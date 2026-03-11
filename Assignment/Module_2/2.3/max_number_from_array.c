#include<stdio.h>
#include<conio.h>

int findMaxFromArray(int arr[], int n){
	
	int max = arr[0], i;
	
	for(i = 1; i < n; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	
	return max;
}


void main(){
	
	int array[100], i, n, max;
	
	printf("Enter Number of elements : ");
	scanf("%d",&n);
	
	printf("Enter %d elements :\n", n);
	
	for(i = 0; i < n ;i++){
		scanf("%d",&array[i]);
	}
	
	max = findMaxFromArray(array, n);
	
	printf("Maximum number from Array is %d", max);
		
	getch();
	
}
