#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    int k;
    cin>>n>>k;
  
    multiset<long long> s;
    for(int i=0;i<n;i++)
    {
        long long x;
        cin>>x;
        s.insert(x);
    }
    // auto it=(s.end()-1);
    // cout<<(*it); 

    long long sum=0;
   
   for(int i=0;i<k;i++)
   {
        auto it=(--s.end());  //or s.end() and then --it but not s.end()-- because it will assign first and   then decrement the value
        long long max=(*it);
        sum+=max;
        int j=max/2;
        s.erase(it);
        s.insert(j);
   }

   cout<<sum;
}