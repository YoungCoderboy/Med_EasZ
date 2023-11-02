//ordered sets
#include<bits/stdc++.h>
using namespace std;
void print(set<string> &s)
{
    for(string value:s)
    {
        cout<<value<<endl;
    }

//aliter


//     for(auto it=s.begin();it!=s.end();++it)
//     {
//         cout<<(*it)<<endl;
//     }
}

int main()
{
    set<string> s;
    s.insert("abc");
    s.insert("zdcf");
    s.insert("bcd");  //log(n) TC
    auto it=s.find("abc");
    s.erase(it);  //can take both iterator and values also
    print(s);

}