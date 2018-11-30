var merge = function(nums1, m, nums2, n) {
    while (m+n!==0){
        if(n<1||m<0){
            break;
        }
        if(nums1[m-1]>=nums2[n-1]){
            nums1[m+n-1]=nums1[m-1];
            m-=1;
        }
        else {
            nums1[n+m-1]=nums2[n-1];
            n-=1;
        }
    }
    return nums1;
};

const nums1=[0];
const m=0,n=1;
const nums2=[1];

console.log(merge(nums1, m, nums2, n));
