/* 
given n string print unique strings in lexiographcal order with their frequency
n<10^5  |s|<=100
*/

#include<bits/stdc++.h>
using namespace std;

int main()
{
    /*Important
        the element which needs to sorted keep it on the first place as the key are alwaysys returned in a sorted order
    /*

    /*
    map<int,string> m;  //created a map
    int n;
    cin>>n;  // taking input for hte size of map
    
    for(int i=0;i<n;i++)  //taking string input
    {
        string s;
        cin>>s;
        m[i]=s;
    }
    */

   //sirs solution
    map<string,int> m;
    int n;
    cin>>n;

    for(int i=0;i<n;i++)
    {
        string s;
        cin>>s;
        // m[s]=m[s]+1 or 
        m[s]++;
    }

    for(auto pr:m)
    {
        cout<<pr.first<<" "<<pr.second<<endl;
    }


}