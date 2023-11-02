//parenthesis matching
//we will use unordered map so that the code doesnt look much tedious <3


#include<bits/stdc++.h>
using namespace std;

unordered_map<char,int> m={{'[',-1},{'(',-2},{'{',-3},{']',1},{')',2},{'}',3}};
// m.insert({'s',1});
// m['[']=-1;
string isbalanced(string st)
{
    stack<char> s;
    //now traverse string and apply the logic
    for(char brackets : st) 
    {
        if(m[brackets]<0)  //opening bracket
        {
            s.push(brackets);
        }
        else
        {
            if(s.empty()) return "NO";
            char top=s.top();
            s.pop();
            if(m[top]+m[brackets]!=0)
            {
                return "NO";
            }
        }
    }
    if(s.empty()) return "YES";
    return "NO";
}

int main()
{
    string st;
    cin>>st;
    cout<<isbalanced(st)<<endl;

}