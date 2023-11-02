//inbuild sortings in cpp
//sort algorithm takes two inputs 1st is starting point and the next +1 of ending point
//a in itself is a pointer to the 0th index and a+n represents oone index after the last
#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    sort(a,a+n);
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }

}