#include<bits/stdc++.h>
#include<vector>
using namespace std;

void prinvec(vector<pair<int,int>> &v)
{
    cout<<"The size of vector is "<<v.size()<<endl;
    for(int i=0;i<v.size();i++)
    {
        cout<<v[i].first<<" "<<v[i].second<<endl;
    }
}

void prinvect(vector<int> &v)
{
    cout<<"The size of vector is "<<v.size()<<endl;
    for(int i=0;i<v.size();i++)
    {
        cout<<v[i]<<" ";    
    }
    cout<<endl;
}

int main()
{
    vector<pair<int,int>> v={{1,2},{2,3},{3,4}};  //a vector which takes pair of integers as input
    prinvec(v);
    
    /*int n;
    cin>>n;
    for (int i=0;i<n;i++)
    {
        int x,y;
        cin>>x>>y;
        v.push_back({x,y});  //can also use v.push_back(make_pair(x,y))
    }
    prinvec(v);
    */
    
    /*
    int n;
    cin>>n;
    vector<int> g[n];
    for(int i=0;i<n;i++)
    {
        int a;
        cin>>a;
        for(int j=0;j<a;j++)  
        {
            int x;
            cin>>x;
            g[i].push_back(x);

        } 
    }

    for(int i=0;i<n;i++)
    {
        prinvect(g[i]);   //for printing an element seperately g[no][element no]
    }
    */

   //vector of vector
   vector<vector<int>> m; //like a dynamic 2d arrray
   int n;
   cin>>n;
   for(int i=0;i<n;i++)
   {
        int a;
        cin>>a;
        vector<int> temp;   //aliter v.push_back(vector<int> ())
        for(int j=0;j<a;j++)  
        {
            int x;
            cin>>x;
            temp.push_back(x);

        } 
        m.push_back(temp);

   }
   prinvect(m[i]);

}