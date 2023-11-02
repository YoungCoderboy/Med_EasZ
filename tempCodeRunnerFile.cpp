#include<bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,x,y;
        cin>>n>>x;
        vector<int> v;
        for(int i=0;i<n;i++)
        {
            cin>>y;
            v.push_back(y);
        }

        vector<int> c = v;
        sort(c.begin(),c.end());
        //bs on c wrt to x

        //better to precompute sum
        vector<int> sum;
        int su = 0;
        for(int i=0;i<n;i++)
        {
            su+=c[i];
            sum.push_back(su);
        }

        int s=0,e=n-1,mid,cnt=0,ans;
        while(s<=e)
        {
            mid = s + ((e-s)/2);
            //use bs wrt to mid
            for(int i=0;i<mid;i++)
            {
                cnt+=c[i];
            }

            if(cnt > x)
            {
                //not feasible
                s = mid-1;
            }
            else
            {
                e = mid+1;
                ans = mid;
            }
            cnt = 0;
        }

        cout<<c[ans]<<endl;
    }
}