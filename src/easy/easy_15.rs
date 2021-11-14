pub struct Solution();
impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        Self::three_sum_equal(nums, 0)
    }
    pub fn three_sum_equal(nums: Vec<i32>, equal: i32) -> Vec<Vec<i32>> {
        if nums.len() <= 2 {
            return vec![];
        }
        let mut nums = nums.clone();
        nums.sort();
        // nums.dedup();

        let mut res: Vec<Vec<i32>> = vec![];
        for (index, cur) in nums.iter().enumerate() {
            if index > nums.len() - 2 || (index > 0 && *cur == nums[index - 1]) {
                continue;
            }
            let mut i = index + 1;
            let mut j = nums.len() - 1;
            while i < j {
                match (nums[i] + nums[j] + cur).cmp(&equal) {
                    std::cmp::Ordering::Equal => {
                        res.push(vec![*cur, nums[i], nums[j]]);
                        i += 1;
                        j -= 1;

                        while i < nums.len() && nums[i] == nums[i - 1] {
                            i += 1;
                        }
                        while j > 0 && nums[j] == nums[j + 1] {
                            j -= 1;
                        }
                    }
                    std::cmp::Ordering::Less => {
                        i += 1;
                    }
                    std::cmp::Ordering::Greater => {
                        j -= 1;
                    }
                }
            }
        }
        res
    }
}

#[cfg(test)]
mod tests {
    use crate::arr_to_vec;

    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(
            Solution::three_sum(vec![-1, 0, 1, 2, -1, -4]),
            arr_to_vec!([[-1, -1, 2], [-1, 0, 1]])
        )
    }

    #[test]
    fn test_2() {
        assert_eq!(Solution::three_sum(vec![0, 0, 0]), arr_to_vec!([[0, 0, 0]]))
    }

    #[test]
    fn test_3() {
        assert_eq!(
            Solution::three_sum(vec![
                34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57, -6, 86,
                56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47, 61, 26, 1, 13,
                29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49
            ]),
            arr_to_vec!([
                [-82, -11, 93],
                [-82, 13, 69],
                [-82, 17, 65],
                [-82, 21, 61],
                [-82, 26, 56],
                [-82, 33, 49],
                [-82, 34, 48],
                [-82, 36, 46],
                [-70, -14, 84],
                [-70, -6, 76],
                [-70, 1, 69],
                [-70, 13, 57],
                [-70, 15, 55],
                [-70, 21, 49],
                [-70, 34, 36],
                [-66, -11, 77],
                [-66, -3, 69],
                [-66, 1, 65],
                [-66, 10, 56],
                [-66, 17, 49],
                [-49, -6, 55],
                [-49, -3, 52],
                [-49, 1, 48],
                [-49, 2, 47],
                [-49, 13, 36],
                [-49, 15, 34],
                [-49, 21, 28],
                [-43, -14, 57],
                [-43, -6, 49],
                [-43, -3, 46],
                [-43, 10, 33],
                [-43, 12, 31],
                [-43, 15, 28],
                [-43, 17, 26],
                [-29, -14, 43],
                [-29, 1, 28],
                [-29, 12, 17],
                [-14, -3, 17],
                [-14, 1, 13],
                [-14, 2, 12],
                [-11, -6, 17],
                [-11, 1, 10],
                [-3, 1, 2]
            ])
        )
    }

    #[test]
    fn test_4() {
        let res: Vec<Vec<i32>> = vec![];
        assert_eq!(Solution::three_sum(vec![-2, -3, 0, 0, -2]), res);
    }
}
