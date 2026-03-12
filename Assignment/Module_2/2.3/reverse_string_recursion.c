#include<stdio.h>
#include<conio.h>

void reverse(char str[], int start, int end){
	
	char temp;
	
	if(start >= end){
		return;
	}
	
	temp = str[start];
	str[start] = str[end];
	str[end] = temp;
	
	reverse(str, start + 1, end - 1);
}


void main(){
	
	char str[100];
	
	printf("Enter String : " );
	gets(str);
	
	reverse(str, 0, strlen(str) - 1);
	
	printf("Reverse string : %s", str);
	
	getch();
	
}
