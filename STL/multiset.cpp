#include<bits/stdc++.h>
using namespace std;

int main()
{
    multiset<string> s;
    s.insert("abc");  //O(1)
    s.insert("zdcf");
    s.insert("bcd");
    s.insert("abc");
    auto it=s.find("abc");  //O(1)
    if(it!=s.end())
    {
        s.erase(it);  //will one delete the first entry of abc if duplicates are present
    }
    //s.erase("abc"); will delete all the present entries of abc

    
}