pub struct Solution();
impl Solution {
    pub fn min_moves(nums: Vec<i32>) -> i32 {
        let min: i32 = nums.iter().min().unwrap().clone();
        let mut res = 0;

        for num in nums.iter() {
            res += num - min;
        }
        res
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(Solution::min_moves(vec![1, 2, 3]), 3)
    }

    #[test]
    fn test_2() {
        assert_eq!(Solution::min_moves(vec![1, 1, 1]), 0)
    }
}
