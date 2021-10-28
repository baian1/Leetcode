use std::collections::HashSet;

struct Solution();
impl Solution {
    fn count(mut n: usize) -> [u8; 10] {
        let mut ret = [0; 10];
        while n > 0 {
            ret[n % 10] += 1;
            n /= 10;
        }
        ret
    }
    pub fn reordered_power_of2(n: i32) -> bool {
        let target = Self::count(n as usize);
        (0..31)
            .map(|i| 1usize << i)
            .find(|&p| Self::count(p) == target)
            .is_some()
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(Solution::reordered_power_of2(1), true)
    }
}
