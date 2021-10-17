struct Solution();
impl Solution {
    pub fn find_complement(num: i32) -> i32 {
        let mut temp = num;
        let mut count = 0;
        loop {
            temp = temp >> 1;
            count += 1;
            if temp == 0 {
                break;
            }
        }

        return dbg!((2 as i32).pow(count)) - num - 1;
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(Solution::find_complement(5), 2)
    }
}
