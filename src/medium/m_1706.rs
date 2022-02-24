// 球会落何处

pub fn find_ball(grid: Vec<Vec<i32>>) -> Vec<i32> {
    let max_row = grid[0].len() as i32;
    let mut cur: Vec<i32> = (0..max_row).collect();
    for row in grid {
        for ball in &mut cur {
            if *ball == -1 {
                continue;
            }
            let cell = row[(*ball) as usize];
            match cell {
                1 if *ball + 1 < max_row as i32 => {
                    let right_cell = row[(*ball + 1) as usize];
                    if right_cell == 1 {
                        *ball += 1;
                        continue;
                    }
                }
                -1 if *ball > 0 => {
                    let left_cell = row[(*ball - 1) as usize];
                    if left_cell == -1 {
                        *ball -= 1;
                        continue;
                    }
                }
                _ => {}
            }
            *ball = -1
        }
    }
    cur
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::arr_to_vec;

    #[test]
    fn one() {
        assert_eq!(
            find_ball(arr_to_vec!([
                [1, 1, 1, -1, -1],
                [1, 1, 1, -1, -1],
                [-1, -1, -1, 1, 1],
                [1, 1, 1, 1, -1],
                [-1, -1, -1, -1, -1]
            ])),
            vec![1, -1, -1, -1, -1]
        )
    }

    #[test]
    fn two() {
        assert_eq!(
            find_ball(arr_to_vec!([
                [1, 1, 1, 1, 1, 1],
                [-1, -1, -1, -1, -1, -1],
                [1, 1, 1, 1, 1, 1],
                [-1, -1, -1, -1, -1, -1]
            ])),
            vec![0, 1, 2, 3, 4, -1]
        )
    }
}
