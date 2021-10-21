use std::collections::HashMap;

struct Solution();
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> Vec<i32> {
        let mut hash_map = HashMap::new();
        for num in nums.iter() {
            let count = hash_map.get_mut(num);
            match count {
                Some(v) => {
                    *v = *v + 1;
                }
                None => {
                    hash_map.insert(*num, 1);
                }
            }
        }
        let mut res = vec![];
        let max_bound = (nums.len() / 3) as i32;
        for (k, num) in hash_map.iter() {
            if *num > max_bound {
                res.push(*k)
            }
        }
        res
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(Solution::majority_element(vec![3, 2, 3]), [3])
    }
}
