use std::collections::HashMap;

pub struct Solution();
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> Vec<i32> {
        let mut hash_map = HashMap::new();
        for num in nums.iter() {
            let count = hash_map.entry(num).or_insert(0);
            *count += 1;
        }

        let max_bound = (nums.len() / 3) as i32;
        let res = hash_map
            .iter()
            .filter_map(|(k, v)| if *v > max_bound { Some(**k) } else { None })
            .collect();

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
