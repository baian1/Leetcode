pub struct Solution();
impl Solution {
    pub fn max_count(m: i32, n: i32, ops: Vec<Vec<i32>>) -> i32 {
        let mut m = m;
        let mut n = n;
        ops.iter().for_each(|item| {
            let i = item[0];
            let j = item[1];
            m = i.min(m);
            n = j.min(n);
        });
        n * m
    }
}

#[cfg(test)]
mod tests {
    use crate::arr_to_vec;

    use super::Solution;

    #[test]
    fn test_1() {
        let res = Solution::max_count(3, 3, arr_to_vec!([[2, 2], [3, 3]]));
        assert_eq!(4, res);
    }
}
