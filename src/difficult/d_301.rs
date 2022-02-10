use std::convert::TryInto;

pub struct Solution();
impl Solution {
    pub fn remove_invalid_parentheses(s: String) -> Vec<String> {
        let mut res: Vec<String> = vec![];

        let (mut lremove, mut rremove) = (0, 0);
        for char in s.chars() {
            if char == '(' {
                lremove += 1
            } else if char == ')' {
                if lremove == 0 {
                    rremove += 1
                } else {
                    lremove -= 1
                }
            }
        }

        Self::helper(&mut res, &s, 0, 0, 0, lremove, rremove);

        res
    }

    fn helper(
        res: &mut Vec<String>,
        str: &str,
        start: usize,
        lcount: i32,
        rcount: i32,
        lremove: i32,
        rremove: i32,
    ) {
        let mut lcount = lcount;
        let mut rcount = rcount;

        if lremove == 0 && rremove == 0 {
            if Self::is_vaild(str) {
                res.push(str.to_string())
            }
            return;
        }
        for i in (start as usize)..str.len() {
            let i_char = str.chars().nth(i).unwrap();
            if i != start && i_char == str.chars().nth(i - 1).unwrap() {
                continue;
            }

            if lremove + rremove > (str.len() - i).try_into().unwrap() {
                return;
            }

            match i_char {
                '(' => {
                    if lremove > 0 {
                        Self::helper(
                            res,
                            &(str[..i].to_owned() + &str[(i + 1)..]),
                            i,
                            lcount,
                            rcount,
                            lremove - 1,
                            rremove,
                        )
                    }
                }
                ')' => {
                    if rremove > 0 {
                        Self::helper(
                            res,
                            &(str[..i].to_owned() + &str[(i + 1)..]),
                            i,
                            lcount,
                            rcount,
                            lremove,
                            rremove - 1,
                        )
                    }
                    lcount += 1;
                    rcount += 1;
                }
                _ => {}
            }

            if rcount > lcount {
                break;
            }
        }
    }

    fn is_vaild(s: &str) -> bool {
        let mut left = 0;
        let mut right = 0;
        for char in s.chars() {
            if char == '(' {
                left += 1;
            } else if char == ')' {
                right += 1;
            }
            if right > left {
                return false;
            }
        }
        if left != right {
            return false;
        }
        true
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(
            Solution::remove_invalid_parentheses("()())()".to_string()),
            vec!["(())()", "()()()"]
        )
    }
}
