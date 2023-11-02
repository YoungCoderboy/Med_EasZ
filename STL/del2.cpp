#include<bits/stdc++.h>
#include<vector>
using namespace std;

void print(set<string> &s)
{
    for(auto &value :s)
    {
        cout<<value<<endl;
    }
}
int main()
{
    //By default sets store elements in ordered way
    //time complexity of sets is similar to there corresponding maps counter part
    //set stores unique elements
    set<string> s;
    s.insert("abc");
    s.insert("jkl");
    s.insert("bcd");
    s.insert("abc");
    auto it=s.find("abc");
    if(it!=s.end())
    {
        s.erase(it);
    }
    s.erase("bcd"); 
    print(s);


}