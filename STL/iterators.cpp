#include<bits/stdc++.h>
#include<vector>
using namespace std;

int main()
{
    
    vector<int> v={1,2,3,4,5,6};
    for(int i=0;i<v.size();i++)
    {
        cout<<v[i]<<" ";
    }
    cout<<endl;
    
    vector<int> :: iterator it=v.begin();
    cout<<(*it)<<endl;
    cout<<(*(it+2))<<endl;
    
    for(it=v.begin();it!=v.end();++it)  //it++ moves the iterator one place forward
    {
        cout<<(*it)<<" ";
    }
    
    cout<<endl;
    vector<pair<int,int>> p={{1,2},{3,4},{5,6}};
    for(int i=0;i<p.size();i++)
    {
        cout<<p[i].first<<" "<<p[i].second<<endl;
    }
    vector<pair<int,int>> :: iterator m;
    for(m=p.begin();m!=p.end();m++)
    {
        cout<<(*m).first<<" "<<(*m).second<<endl;  //can also use (m->first) and (m->second)
    }

    //This syntax is only used for pairs
    for(m=p.begin();m!=p.end();m++)
    {
        cout<<(m->first)<<" "<<(m->second)<<endl;  //can also use (m->first) and (m->second)
    }
    
}