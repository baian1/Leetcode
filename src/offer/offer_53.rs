pub struct Solution();
impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let mut left = 0;
        let mut right = nums.len() - 1;
        let mut mid = (left + right) / 2;
        loop {
            if left >= right {
                break;
            }
            let value = nums[mid];
            match value {
                _ if value > mid as i32 => {
                    right = mid.max(1) - 1;
                }
                _ if value == mid as i32 => {
                    left = mid + 1;
                }
                _ => {}
            }
            mid = (right + left) / 2
        }
        nums[mid] + if nums[mid] == mid as i32 { 1 } else { -1 }
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn one() {
        assert_eq!(Solution::missing_number(vec![0, 1, 3]), 2)
    }

    #[test]
    fn two() {
        assert_eq!(Solution::missing_number(vec![0]), 1)
    }

    #[test]
    fn three() {
        assert_eq!(Solution::missing_number(vec![1]), 0)
    }

    #[test]
    fn four() {
        assert_eq!(Solution::missing_number(vec![1, 2]), 0)
    }
}
