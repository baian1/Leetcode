pub struct Solution();
impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        nums.iter()
            .enumerate()
            .fold(0, |sum, (index, value)| sum + index as i32 + 1 - value)
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(Solution::missing_number(vec![3, 0, 1]), 2)
    }
}
