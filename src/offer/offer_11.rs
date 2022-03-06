pub struct Solution();
impl Solution {
    pub fn min_array(numbers: Vec<i32>) -> i32 {
        let mut left = 0;
        let mut right = numbers.len() - 1;
        while left < right {
            let mid = (right + left) / 2;
            match numbers[mid] {
                // 注意比较都是与右侧进行比较
                v if v < numbers[right] => {
                    right = mid;
                }
                v if v > numbers[right] => {
                    left = mid + 1;
                }
                _ => right -= 1,
            }
        }
        numbers[right]
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert!(Solution::min_array(vec![2, 2, 2, 0, 1]) == 0)
    }

    #[test]
    fn test_2() {
        assert!(Solution::min_array(vec![3, 1, 1]) == 1)
    }

    #[test]
    fn test_3() {
        assert!(Solution::min_array(vec![3, 3, 1, 3]) == 1)
    }

    #[test]
    fn test_4() {
        assert!(Solution::min_array(vec![3, 1, 3]) == 1)
    }

    #[test]
    fn test_5() {
        assert!(Solution::min_array(vec![1, 3, 3]) == 1)
    }
}
