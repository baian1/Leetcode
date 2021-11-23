use std::{collections::HashMap, u8};

pub struct Solution();
impl Solution {
    pub fn original_digits(s: String) -> String {
        let mut c: HashMap<char, i32> = HashMap::new();
        for char in s.chars().into_iter() {
            let count = c.entry(char).or_insert(0);
            *count += 1;
        }

        let mut cnt = [0; 10];
        cnt[0] = *c.get(&'z').unwrap_or(&0);
        cnt[2] = *c.get(&'w').unwrap_or(&0);
        cnt[4] = *c.get(&'u').unwrap_or(&0);
        cnt[6] = *c.get(&'x').unwrap_or(&0);
        cnt[8] = *c.get(&'g').unwrap_or(&0);

        cnt[3] = *c.get(&'h').unwrap_or(&0) - cnt[8];
        cnt[5] = *c.get(&'f').unwrap_or(&0) - cnt[4];
        cnt[7] = *c.get(&'s').unwrap_or(&0) - cnt[6];

        cnt[1] = *c.get(&'o').unwrap_or(&0) - cnt[0] - cnt[2] - cnt[4];

        cnt[9] = *c.get(&'i').unwrap_or(&0) - cnt[5] - cnt[6] - cnt[8];

        let mut res = "".to_string();
        for i in 0..9 {
            for _j in 0..cnt[i] {
                let new = char::from(i as u8 + 48);
                res += &new.to_string();
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
        assert_eq!(Solution::original_digits("owoztneoer".to_string()), "012")
    }
}
