use std::collections::HashSet;

struct Solution();
impl Solution {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut res: Vec<Vec<i32>> = vec![];
        let mut used = vec![false; nums.len()];
        let mut cur: Vec<i32> = vec![];
        Self::walk(&mut res, &mut cur, &nums, &mut used);
        res
    }

    fn walk(res: &mut Vec<Vec<i32>>, cur: &mut Vec<i32>, nums: &Vec<i32>, is_used: &mut Vec<bool>) {
        if cur.len() == nums.len() {
            res.push(cur.clone());
            return;
        }
        let mut c_used: HashSet<i32> = HashSet::new();
        for (index, num) in nums.iter().enumerate() {
            if is_used[index] == true {
                continue;
            }
            if c_used.insert(*num) {
                cur.push(*num);
                is_used[index] = true;
                Self::walk(res, cur, nums, is_used);
                cur.pop();
                is_used[index] = false;
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::arr_to_vec;

    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(
            Solution::permute(vec![1, 2, 3]),
            arr_to_vec!([
                [1, 2, 3],
                [1, 3, 2],
                [2, 1, 3],
                [2, 3, 1],
                [3, 1, 2],
                [3, 2, 1]
            ])
        )
    }
}
