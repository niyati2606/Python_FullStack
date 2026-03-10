#include<stdio.h>
#include<conio.h>

void main(){
	
	char ch;
	
	printf("Enter any Alphabet: ");
	scanf("%c", &ch);
	
	switch(ch){
		
		case 'a':
			printf("%c is Vowel"),ch;
			break;
		case 'A' :
			printf("%c is Vowel",ch);
			break;
		case 'e':
			printf("%c is Vowel"),ch;
			break;
		case 'E' :
			printf("%c is Vowel",ch);
			break;
		case 'i':
			printf("%c is Vowel"),ch;
			break;
		case 'I' :
			printf("%c is Vowel",ch);
			break;
		case 'o':
			printf("%c is Vowel",ch);
			break;
		case 'O' :
			printf("%c is Vowel",ch);
			break;
		case 'u':
			printf("%c is Vowel"),ch;
			break;
		case 'U' :
			printf("%c is Vowel",ch);
			break;			
		default	 :
			printf("%c is Constant",ch);
	}
	
}
