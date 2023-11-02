//Algorithms 2
// Lambda function is a temproray function which is used instead of totally defining a function [](argumrnts){return avlues}(inputs)
#include<bits/stdc++.h>
using namespace std;

bool ispos(int x)
{
    return x>0;
}
int main()
{
    // cout<<[](int x,int y){return x+y;}(2,5)<<endl;
    auto sum=[](int x,int y){return x+y ;}; //now sum has been definned as a function
    cout<<sum(2,3)<<endl;
    
    int n;
    cin>>n;
    vector<int> v(n);
    
    for(int i=0;i<n;i++)
    {
        cin>>v[i];
    }
    
    cout<<all_of(v.begin(),v.end(),[](int x){return x>0;})<<endl; //return true if all are true else returns false
    // can also use
    cout<<all_of(v.begin(),v.end(),ispos)<<endl;  //return true if all are true else returnōs false

    cout<<any_of(v.begin(),v.end(),[](int x){return x>0;})<<endl; //return flase if all are false else returns true
    cout<<none_of(v.begin(),v.end(),[](int x){return x>0;})<<endl; //return true if none of the test case returns true

    

}    