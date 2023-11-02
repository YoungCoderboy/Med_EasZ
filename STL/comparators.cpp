//comparators functions are custom designed sorts
//inbuilt sorts swaps values when false is returned and doesnt swap if true is returned
// We can think of comprator logic as we return what we want
#include<bits/stdc++.h>
using namespace std;

// bool sis(int a,int b)  //sis stands for should i swap
// {
//     if(a>b)
//     {
//         return true;
//     }
//     return false;
// }

bool cmp(pair<int,int> a,pair<int,int> b)  //sis stands for should i swap
{
    if(a.first!=b.first)
    {
        if(a.first>b.first)
        {
            return false;
        }
        return true;
    }
    else
    {
        if(a.second<b.second)
        {
            return false;
        }
        return true;
    }
}

bool cmp2(pair<int,int> a,pair<int,int> b)
{
    if(a.first!=b.first)
    {
        return a.first<b.first;
    }
    else
    {
        return a.second>b.second;
    }
}

int main()
{
    int n;
    cin>>n;
    // vector<int> v(n);
    vector<pair<int,int>> v(n);
    for(int i=0;i<n;i++)
    {
        cin>>v[i].first>>v[i].second;
        // cin>>v[i];
    }

    // for(int i=0;i<n;i++)
    // {
    //     for(int j=i+1;j<n;j++)
    //     {
    //         if(sis(v[i],v[j]))
    //         {
    //             swap(v[i],v[j]);
    //         }
    //     }
    // }

    //using inbuilt sort with comparator
    sort(v.begin(),v.end(),cmp2);  //Third condition is for comparator

    for(int i=0;i<n;i++)
    {
        // cout<<v[i]<<" ";
        cout<<v[i].first<<" "<<v[i].second<<endl;
    }

}