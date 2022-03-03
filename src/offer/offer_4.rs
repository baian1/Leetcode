pub struct Solution();
impl Solution {
    pub fn find_number_in2_d_array(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        if matrix.is_empty() || matrix[0].is_empty() {
            return false;
        }
        let max_i = matrix.len();
        let max_j = matrix[0].len();
        let mut i = max_i - 1;
        let mut j = 0;

        loop {
            if i > 0 && matrix[i][j] > target {
                i -= 1;
                continue;
            }
            if j < max_j - 1 && matrix[i][j] < target {
                j += 1;
                continue;
            }
            if matrix[i][j] == target {
                return true;
            }
            break;
        }
        return false;
    }
}
#[cfg(test)]
mod tests {
    use crate::arr_to_vec;

    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(
            Solution::find_number_in2_d_array(
                arr_to_vec!([
                    [1, 4, 7, 11, 15],
                    [2, 5, 8, 12, 19],
                    [3, 6, 9, 16, 22],
                    [10, 13, 14, 17, 24],
                    [18, 21, 23, 26, 30]
                ]),
                5
            ),
            true
        );
    }

    #[test]
    fn test_2() {
        assert_eq!(
            Solution::find_number_in2_d_array(arr_to_vec!([[-5]]), -10),
            false
        )
    }
}
