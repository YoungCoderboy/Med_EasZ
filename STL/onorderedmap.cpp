/*
    Given n strings and q queriesin each query you are given string print frequency of the strings
*/
#include<bits/stdc++.h>
using namespace std;
int main()
{
    //unordered maps are initiated by using unordered_map<>
    unordered_map<string,int> m;
    int n;
    cin>>n;
    for(int i=0;i<n;i++)
    {
        string s;
        cin>>s;
        m[s]++;
    }
    int q;
    cin>>q;
    while(q--)
    {
        string s;
        cin>>s;
        cout<<m[s]<<endl;
    }


}