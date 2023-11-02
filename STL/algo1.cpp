// Algorithms
// for arrays v.begin()->v and v.end()->v+n

#include<bits/stdc++.h>
using namespace std;

int main()
{
    
    int n;
    cin>>n;
    vector<int> v(n);
    
    for(int i=0;i<n;i++)
    {
        cin>>v[i];
    }

    int min=*min_element(v.begin(),v.end()); //return iterator of the minimum element
    cout<<min<<endl;
    int max=*max_element(v.begin(),v.end()); //return iterator of the minimum element
    cout<<max<<endl;
    int sum=accumulate(v.begin(),v.end(),0); // 0 is the initial sumwe you want to add any number to the sum insert value of athat number
    cout<<sum<<endl;
    int cnt=count(v.begin(),v.end(),9);
    cout<<cnt<<endl;
    auto it=find(v.begin(),v.end(),2);
    if(it!=v.end())
    {
        cout<<(*it)<<endl;
    }
    else
    {
        cout<<"Element not found"<<endl;
    }
    reverse(v.begin(),v.end());
    for(auto val:v)
    {
        cout<<val<<" ";
    }
    cout<<endl; 

    //reversing a string
    // string s="Athag";
    // cout<<s<<endl;
    // reverse(s.begin()+2,s.end());
    // cout<<s<<endl;


}    