#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    //pairs
    pair<int,string> p,q;  //declaration of its datatypes
    p={2,"abc"}; //1st way 
    q=make_pair(3,"abcd"); //second way
    cout<<p.first<<" "<<p.second<<endl;
    pair<int,string> &p1=p;  //assigning value of one pair toi another. Alwaysuse refrence
    
    //array of pair
    pair<int,int> p_array[3];
    p_array[0]={1,2};
    p_array[1]={2,3};
    p_array[2]={3,4};
     for(int i=0;i<3;i++)
     {
        cout<<p_array[i].first<<" "<<p.array[i].second<<endl;
     }

//Vectors

vector<int> v;
int n;
cin>>n;
for(int i=0;i<n;i++)
{
    int x;
    cin>>x;
    v.push_back(x);  //O(1) time complexity
}

void prinvec(vector<int>)
{
    cout<<"The size of array is"<<v.size<<endl;
    for(int i=0;i<v.size;i++)
    {
        cout<<v[i]<<" ";

    }
    cout<<endl;
}
}