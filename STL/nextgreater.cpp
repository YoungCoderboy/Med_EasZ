// Check logic again and again 
//Next greater element using stack
// 4 5 2 25 7 8
// 5 25 25 -1 8  -1
//by using loops and arrays we can do it in n^2 tc but using stacks we can do it in n tc
#include<bits/stdc++.h> 
using namespace std;

vector<int> NGE(vector<int> v)
{
    vector<int> nge(v.size());
    stack<int> s;
    s.push(v[0]);
    for(int i=0;i<v.size();i++)
    {
        while(!s.empty() && v[i]>v[s.top()])    //humne stack indexes ka banaya hai
        {
            nge[s.top()]=i;
            s.pop();
        }
        s.push(i);  //pushing indexes
    }
    while(!s.empty())
    {
        nge[s.top()]=-1;
        s.pop();
    }
    return nge;

}
int main()
{
    int n;
    cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++)
    {
        cin>>v[i];
    }
    vector<int> nge=NGE(v);
    for(int i=0;i<n;i++)
    {
        cout<<v[i]<<" "<<(nge[i]==-1 ? -1:v[nge[i]])<<endl;
    }

}

// vector<int> Nge(vector<int> &v)
// {
//     vector<int> nge(v.size());
//     stack<int> s;
//     for(int i=0;i<v.size();i++)
//     {
//         while(!s.empty() && v[i]>v[s.top()])
//         {
//             v[s.top()]=i
//         }
//     }
// }