struct Solution {}

impl Solution {
    pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
        let mut dp: Vec<i32> = vec![0];
        for i in 1..(amount + 1) {
            let mut min = i32::MAX;
            for coin in &coins {
                let index: usize = match i - coin {
                    n if n >= 0 => n as usize,
                    _ => continue,
                };
                let v = dp.get(index);
                match v {
                    Some(value @ 0..=i32::MAX) => {
                        min = min.min(*value);
                    }
                    _ => {
                        continue;
                    }
                }
            }
            if min == i32::MAX {
                dp.push(-1);
                continue;
            }
            dp.push(min + 1)
        }
        dp.get(amount as usize).unwrap_or(&-1).clone()
    }
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(Solution::coin_change(vec![1, 2, 5], 11), 3);
    }

    #[test]
    fn test_2() {
        assert_eq!(Solution::coin_change(vec![2], 4), 2);
    }

    #[test]
    fn test_3() {
        assert_eq!(Solution::coin_change(vec![186, 419, 83, 408], 6249), 20);
    }
    #[test]
    fn test_not_find() {
        assert_eq!(Solution::coin_change(vec![2], 3), -1);
    }
}
