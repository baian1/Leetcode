use std::collections::HashMap;

struct Solution();
impl Solution {
    pub fn shopping_offers(price: Vec<i32>, special: Vec<Vec<i32>>, needs: Vec<i32>) -> i32 {
        //过滤不需要的礼包
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
            .clone()
            .collect();

        let mut memo: HashMap<Vec<i32>, i32> = HashMap::new();
        fn dfs(
            price: &Vec<i32>,
            new_special: &Vec<Vec<i32>>,
            needs: Vec<i32>,
            memo: &mut HashMap<Vec<i32>, i32>,
        ) -> i32 {
            //有记录，直接返回
            if let Some(min_price) = memo.get(&needs) {
                return min_price.clone();
            }
            //直接买的最高价格
            let mut min_price: i32 = needs
                .iter()
                .enumerate()
                .map(|(index, count)| price[index] * count)
                .sum();

            for s in new_special {
                //购买一个个礼包的分支
                let next_needs = needs
                    .iter()
                    .enumerate()
                    .map(|(index, count)| {
                        let next_count = count - s[index];
                        if next_count >= 0 {
                            return Ok(next_count);
                        }
                        Err("礼包超限制")
                    })
                    .collect();

                if let Ok(next_needs) = next_needs {
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
