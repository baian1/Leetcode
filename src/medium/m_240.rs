pub struct Solution();
impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        if matrix.len() == 0 || matrix[0].len() == 0 {
            return false;
        }

        let (mut i, mut j) = (0, matrix[0].len() - 1);
        loop {
            let cur = matrix[i][j];
            if cur > target {
                if j == 0 {
                    break;
                }
                j -= 1;
            } else if cur < target {
                if i == matrix.len() - 1 {
                    break;
                }
                i += 1;
            } else {
                return true;
            }
        }
        false
    }
}

#[cfg(test)]
mod tests {
    use crate::arr_to_vec;

    use super::Solution;

    #[test]
    fn test_1() {
        assert!(Solution::search_matrix(
            arr_to_vec!([
                [1, 4, 7, 11, 15],
                [2, 5, 8, 12, 19],
                [3, 6, 9, 16, 22],
                [10, 13, 14, 17, 24],
                [18, 21, 23, 26, 30]
            ]),
            5
        ));
    }

    #[test]
    fn test_2() {
        assert!(Solution::search_matrix(arr_to_vec!([[-5]]), -5));
    }
}
