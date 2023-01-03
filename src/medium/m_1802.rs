pub struct Solution();
impl Solution {
    pub fn max_value(n: i32, index: i32, max_sum: i32) -> i32 {
        let max_sum = max_sum as i64;
        let mut range = [1, max_sum];
        while range[0] < range[1] {
            let max_value = (range[0] + range[1] + 1) / 2;
            let left = Solution::sum_to_border(max_value, index + 1);
            let right = Solution::sum_to_border(max_value, n - index);
            let cur_sum = left + right - i64::from(max_value);

            match cur_sum.cmp(&max_sum) {
                std::cmp::Ordering::Equal => {
                    range[0] = max_value;
                }
                std::cmp::Ordering::Greater => {
                    range[1] = max_value - 1;
                }
                std::cmp::Ordering::Less => {
                    range[0] = max_value;
                }
            }
        }
        return range[0] as i32;
    }
    fn sum_to_border(max_value: i64, len: i32) -> i64 {
        let min = max_value - i64::from(len) + 1;
        let mut sum: i64 = (i64::from(max_value) + min) * i64::from(len) / 2;
        // 需要补充<1部分到1
        if min < 1 {
            sum += (min + 0) * (min - 1) / 2 - min + 1
        }
        sum
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_sum_to_border() {
        assert_eq!(Solution::sum_to_border(10, 5), 40);
        assert_eq!(Solution::sum_to_border(10, 4), 34);

        assert_eq!(Solution::sum_to_border(3, 6), 9);
        assert_eq!(Solution::sum_to_border(10, 20), 65);
    }

    #[test]
    fn test_1() {
        assert_eq!(Solution::max_value(4, 2, 6), 2);
        assert_eq!(Solution::max_value(6, 1, 10), 3);
    }

    #[test]
    fn test_2() {
        assert_eq!(Solution::max_value(1, 0, 24), 24);
        assert_eq!(Solution::max_value(3, 0, 815094800), 271698267);
    }
}
