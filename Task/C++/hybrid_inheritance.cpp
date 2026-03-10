#include<iostream>
using namespace std;

class A{
	
	public:
		void getA(){
			cout<<"\nClass A";
		}
};

class B : public A{
	//A is parent
	public:
		void getB(){
			cout<<"\nClass B";
		}
};

class C : public B{
	//B & A
	public:
		void getC(){
			cout<<"\nClass C";
		}
};

class D : public B{
	//D & A
	public:
		void getD(){
			cout<<"Class D";
		}
};

class E : public D, public C{
	
	public :
		void getE(){
			cout<<"Class E";
		}
};


int main(){
	
	
	E obj;
	
	obj.getD();
	obj.getE();
//	obj.getA();
	obj.getC();
//	obj.getB();
	return 0;
}
