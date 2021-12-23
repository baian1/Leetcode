use std::collections::HashMap;

pub struct Solution();
impl Solution {
    pub fn unhappy_friends(n: i32, preferences: Vec<Vec<i32>>, pairs: Vec<Vec<i32>>) -> i32 {
        let mut pairs_map = HashMap::new();
        for pair in pairs.iter() {
            pairs_map.insert(pair[0], pair[1]);
            pairs_map.insert(pair[1], pair[0]);
        }
        let mut res = 0;
        //遍历每一个人
        for i in 0..n {
            let pair_firend = pairs_map.get(&i).unwrap();
            let preference = preferences.get(i as usize).unwrap();
            for f in preference.iter() {
                if f == pair_firend {
                    break;
                }
                if Solution::is_better(
                    preferences.get(*f as usize).unwrap(),
                    i,
                    pairs_map.get(f).unwrap().clone(),
                ) {
                    res += 1;
                    break;
                }
            }
        }
        res
    }

    fn is_better(preference: &Vec<i32>, one: i32, two: i32) -> bool {
        let one = one;
        for data in preference.iter() {
            match data {
                n if one == *n => return true,
                n if two == *n => return false,
                _ => {}
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
        assert_eq!(
            Solution::unhappy_friends(
                4,
                arr_to_vec!([[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]]),
                arr_to_vec!([[0, 1], [2, 3]])
            ),
            2
        )
    }

    #[test]
    fn test_2() {
        assert!(Solution::is_better(&vec![1, 2], 1, 2))
    }
}
