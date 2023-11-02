#include<bits/stdc++.h>
using namespace std;

// int main()
// {
//     unordered_set<string> s;
//     s.insert("abc");  //O(1)
//     s.insert("zdcf");
//     s.insert("bcd");
//     s.insert("abc");
//     auto it=s.find("abc");  //O(1)
// }

//given n strings print yes if string is present else print no

int main()
{
    int n;
    cin>>n;
    unordered_set<string> s;
    for(int i=0;i<n;i++)
    {
        string x;
        cin>>x;
        s.insert(x);
    }
    
    string st;
    cin>>st;
    auto it=s.find(st);  
    if(it!=NULL)    //aliter if(s.find(st)!=s.end())
    {
        cout<<"yes";
    }
    else
    cout<<"no";
}