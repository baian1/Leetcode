struct Solution();

impl Solution {
    pub fn partition_labels(s: String) -> Vec<i32> {
        let mut char_map: [i32; 26] = [0; 26];
        let s_bytes: Vec<u8> = s.bytes().collect();
        for (index, char) in s_bytes.iter().enumerate() {
            char_map[(char - 97) as usize] = index as i32;
        }
        let mut start = 0;
        let mut end = 0;
        let mut res = Vec::new();
        for (index, char) in s_bytes.iter().enumerate() {
            let end_index = (char.clone() - 97) as usize;
            if char_map[end_index] > end {
                end = char_map[end_index];
            }
            if index as i32 == end {
                res.push(end - start + 1);
                start = end + 1;
            }
        }

        res
    }
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(Solution::partition_labels("aabb".to_string()), vec![2, 2]);
    }
}
