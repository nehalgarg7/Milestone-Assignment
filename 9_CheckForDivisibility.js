function checkDivisibility(nums)
{
    for(let i=0; i<nums.length; i++)
    {
        if(nums[i]%3 === 0 && nums[i]%2 !==0 )
        {
            console.log(nums[i]);
        }
        else
        {
            continue;
        }
    }
}

const nums = [4, 9, 7, 15, 12];

checkDivisibility(nums);