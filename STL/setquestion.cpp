/*
    print unique stirngs lexiographical order
*/

#include<bits/stdc++.h>
using namespace std;

int main()
{
    set<string> s;
    int n;
    cin>>n;
    for (int i=0;i<n;i++)
    {
        string t;
        cin>>t;
        s.insert(t);
    }
    
    //print
    for(auto &st:s)
    {
        cout<<st<<endl;
    }
}