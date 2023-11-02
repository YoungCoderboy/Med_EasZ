#include<bits/stdc++.h>
#include<vector>
using namespace std;

void print(set<string> &s)
{
    for(auto it=s.begin();it!=s.end();it++)
    {
        cout<<(*it)<<endl;
    }
}
int main()
{
    //By default sets store elements in ordered way
    //time complexity of sets is similar to there corresponding maps counter part
    set<string> s;
    s.insert("abc");
    s.insert("jkl");
    s.insert("bcd");
    auto it=s.find("abc");
    print(s);


}