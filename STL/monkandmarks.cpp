#include<bits/stdc++.h>
using namespace std;

int main()
{
    map<int,multiset<string>> m;
    int n;
    cin>>n;
    for(int i=0;i<n;i++)
    {
        string name;
        int marks;
        cin>>name>>marks;
        m[-1*marks].insert(name);   //m[marks] is a set therefore .insert operation is used
    }
    
    // auto curr_it=--m.end();
    // while(true)
    // {
    //     auto &nam=(*curr_it).second;
    //     int mark=(*curr_it).first;
    //     for(auto names: nam)
    //     {
    //         cout<<names<<" "<<mark<<endl;
    //     }
    //     if(curr_it==m.begin()) break;
    //     curr_it--;
    // }

    for(auto &stu : m)
    {
        auto &nam=stu.second;
        for(auto names : nam)
        {
            cout<<names<<" "<<(stu.first)*-1<<endl;
        }
    }
}