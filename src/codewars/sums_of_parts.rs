pub fn parts_sums(nums: &[u64]) -> Vec<u64> {
    // 这里用数组，加快操作
    // 如果是vec会导致超时
    let mut res = vec![0; nums.len() + 1];
    let mut cur = 0;
    let mut index = nums.len();
    for num in nums.into_iter().rev() {
        index -= 1;
        cur += *num;
        res[index] = cur;
    }
    res
}
#[cfg(test)]
mod tests {
    use super::*;

    fn dotest(ls: Vec<u64>, expect: Vec<u64>) {
        let actual = parts_sums(&ls);
        assert_eq!(actual, expect);
    }

    #[test]
    fn example() {
        dotest(vec![], vec![0]);
        dotest(vec![0, 1, 3, 6, 10], vec![20, 20, 19, 16, 10, 0]);
        dotest(vec![1, 2, 3, 4, 5, 6], vec![21, 20, 18, 15, 11, 6, 0]);
        dotest(
            vec![
                744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358,
            ],
            vec![
                10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057,
                2580168, 2579358, 0,
            ],
        );
    }
}
