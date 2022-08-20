pub struct Solution();
impl Solution {
    pub fn first_uniq_char(s: String) -> char {
        let mut arr = [0; 26];
        for byte in s.bytes() {
            arr[(byte - b'a') as usize] += 1;
        }
        for byte in s.bytes() {
            if arr[(byte - b'a') as usize] == 1 {
                return char::from(byte);
            }
        }
        ' '
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(Solution::first_uniq_char("abaccdeff".to_string()), 'b')
    }
}
