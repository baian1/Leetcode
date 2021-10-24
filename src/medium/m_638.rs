use std::{borrow::Borrow, collections::HashMap, ops::Add};

struct Solution();
impl Solution {
    pub fn shopping_offers(price: Vec<i32>, special: Vec<Vec<i32>>, needs: Vec<i32>) -> i32 {
        let new_special: Vec<Vec<i32>> = special
            .into_iter()
            .filter(|special| {
                if special[0..(special.len() - 1)].iter().sum::<i32>() == 0 {
                    return false;
                }
                if special[0..(special.len() - 1)]
                    .iter()
                    .enumerate()
                    .map(|(index, count)| count * price[index])
                    .sum::<i32>()
                    > special[special.len() - 1]
                {
                    return true;
                }
                true
            })
            // .map(|v| v.clone())
            .clone()
            .collect();

        let mut memo: HashMap<Vec<i32>, i32> = HashMap::new();
        fn dfs(
            price: &Vec<i32>,
            new_special: &Vec<Vec<i32>>,
            needs: Vec<i32>,
            memo: &mut HashMap<Vec<i32>, i32>,
        ) -> i32 {
            let mut min_price = 0;
            if let Some(min_price) = memo.get(&needs) {
                return min_price.clone();
            }
            //全部使用price来获取
            for (index, count) in needs.iter().enumerate() {
                min_price += price[index] * count
            }
            for s in new_special {
                //购买一个个礼包的分支
                let mut next_needs = needs.clone();
                let mut index = 0;
                let next_needs: Option<Vec<i32>> = loop {
                    let count = s[index];
                    if count > needs[index] {
                        break None;
                    }
                    next_needs[index] -= count;
                    index += 1;
                    if index >= needs.len() {
                        break Some(next_needs);
                    }
                };

                if let Some(next_needs) = next_needs {
                    let special_price = s[s.len() - 1]; //礼包价格
                    min_price =
                        min_price.min(dfs(price, new_special, next_needs, memo) + special_price);
                }
            }
            memo.insert(needs, min_price);
            min_price
        }
        dfs(&price, &new_special, needs, &mut memo)
    }
}

#[cfg(test)]
mod tests {
    use crate::arr_to_vec;

    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(
            Solution::shopping_offers(vec![2, 5], arr_to_vec!([[3, 0, 5], [1, 2, 10]]), vec![3, 2]),
            14
        )
    }
}
