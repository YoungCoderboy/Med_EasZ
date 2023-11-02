#include<bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> v={1,2,3,4,5};
    for(int &value:v)
    {
        cout<<value<<" ";  //These values are just copies of the original if you make changes in it there will be no changes in the original if wwe use reffrences it will then make changes in the original values
    }

    cout<<endl;
    vector<pair<int,int>> p={{1,2},{3,4},{5,6}};
    for(pair<int,int> &value:p)
    {
        cout<<value.first<<" "<<value.second<<endl;
    }

    //auto keyword for automatically determining datatypes
    for(auto &value:p)
    {
        cout<<value.first<<" "<<value.second<<endl;
    }

    /*lumsum way
    vector<int> v={1,2,3,4,5,6};
    vector<int> :: iterator it;
    for(it=v.begin();it!=v.end();++it)  //it++ moves the iterator one place forward
    {
        cout<<(*it)<<" ";
    }
    */

   cout<<endl;
   vector<int> u={1,2,3,4,5,6};
   for(auto it=u.begin();it!=u.end();++it)  //it++ moves the iterator one place forward
    {
        cout<<(*it)<<" ";
    }


    
}