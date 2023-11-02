//monk and marks
//1.using comprator and 2.without comprator
//in comprator return what you want to do
//
#include<bits/stdc++.h>
using namespace std;

bool sol(map<string,int> &a, map<string,int> &b)
{
    if(a.second!=b.second)
    {
        return a.second>b.second;
    }
    else
    {
        return a.first<b.first;
    }
}

int main()
 {
    map<string,int> m;
    int n;
    cin>>n;
    for(int i=0;i<n;i++)
    {
        string s;
        cin>>s>>m[s];
    }
    sort(m.begin(),m.end(),sol);

    for(auto &pr: m)
    {
        cout<<pr.first<<" "<<pr.second<<endl;
    }
 }