#include<bits/stdc++.h>
using namespace std;

void print(unordered_set <string> &s)
{
    for(auto &v:s)
    {
        cout<<v<<endl;
    }
}
int main()
{
    //mainly used when we just want to check the presence of an element in a set
    unordered_set <string> s;
    s.insert("abc");
    s.insert("def");
    s.insert("abc");
    s.insert("ghj");
    s.insert("jkl");
    s.insert("ghj");
    s.insert("ghj"); 
    s.insert("abc");

    print(s);
    
    auto it=s.find("abc");
    if(it!=s.end())
    {
        s.erase(it);
    }

    print(s);
    return 0;


}