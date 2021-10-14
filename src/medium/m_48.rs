struct Solution();
impl Solution {
    pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
        let n = matrix.len();

        fn get_num_form_matrix(matrix: &Vec<Vec<i32>>, position: [usize; 2]) -> i32 {
            matrix
                .get(position[0])
                .unwrap()
                .get(position[1])
                .unwrap()
                .clone()
        }

        let max = n - 1;
        for i in 0..max {
            if i > max - i {
                break;
            }
            for j in i..max - i {
                // let lt_index = [i, j];
                // let rt_index = [j, n - i];
                // let rb_index = [n - i, n - j];
                // let lb_index = [n - j, i];
                let n = n - 1;
                let position = [[i, j], [j, n - i], [n - i, n - j], [n - j, i]];
                let temp = get_num_form_matrix(matrix, position[3]);
                let mut cur = get_num_form_matrix(matrix, position[0]);
                for index in 1..4 {
                    let next = get_num_form_matrix(matrix, position[index]);
                    matrix[position[index][0]][position[index][1]] = cur;
                    cur = next;
                }
                matrix[position[0][0]][position[0][1]] = temp;
            }
        }
    }
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;
    use crate::arr_to_vec;

    #[test]
    fn test_1() {
        let input = &mut arr_to_vec!([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        let res = &mut arr_to_vec!([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
        Solution::rotate(input);
        assert_eq!(input, res);
    }
}
