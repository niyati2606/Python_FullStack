#include<stdio.h>
#include<conio.h>
#include<string.h>

void main() {
	
	char name[50];
	int i,length= 0;
	
	printf("Enter name : ");
	gets(name);
	
	printf("Name %s ",name);

	for(i=0; name[i] != '\0'; i++){
		length++;
	}
	
	printf("\nshName Length = %d",length);
		
	getch();
	
}
