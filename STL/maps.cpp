#include<bits/stdc++.h>
using namespace std;
int main()
{
    //most of these functions like erase find clear etc also work in pairs vectors also
    map<int,string> m;
    m[1]="abc";
    m[5]="cdc";
    m[3]="bce";
    m.insert({4,"bda"}); // time complexity of insertion also depends upon the datatype and size of the keys
    //it will be s.size()*log(n) s.size() is the size of the string

    /*
    map<int,string>:: iterator it;    //instead of this line udse auto keyword
    for(it=m.begin();it!=m.end();it++)
    {
        cout<<(*it).first<<" "<<(*it).second<<endl;
    }
    */

    //easy way
    for(auto &pr:m)
    {
        cout<<pr.first<<" "<<pr.second<<endl;
    }

    auto it=m.find(4);   //IT returns the iterator of the key if it is empty it will ppint to the pointer after the last input that is null
    if(it==m.end())   //TC of finnd is Olog(n)
    {
        cout<<"there is no value";
    }
    else
    {
        cout<<it->first<<" "<<it->second<<endl;
    }

    m.erase(3); //earse can be done by two ways key value or by iterator. TC O(log(n))
    m.erase(it);  //If we try to erase an element which is not present in the map we get segmentation fault

    /*
    if(it!=m.end())
    {
        m.erase(it); //will help to reduce segmentation fault
    }
    */

    for(auto &pr:m)
    {
        cout<<pr.first<<" "<<pr.second<<endl;
    }

    m.clear(); //will the delete the complete map


}
