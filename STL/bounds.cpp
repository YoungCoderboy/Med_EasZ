//lower bound returns the value if present if not present it will give the next greater element in the sorted array
//upper bound always returns greater value
// both bounds have log(n) tc
// passing sets and maps it takes complexity of n instead of log(n)
// in case of map and set do s.lower_bound(rand());
#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int arr[n];

    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }

    sort(arr,arr+n);

    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }

    cout<<endl;

    int *pnt=lower_bound(arr,arr+n,9);  // starting point, end point, number whose lower bound is to be found
    if(pnt==(a+n))
    {
        cout<<"Not found"<<endl;
        return;
    }
    cout<<(*pnt)<<endl;




}