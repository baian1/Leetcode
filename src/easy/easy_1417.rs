struct Solution();
impl Solution {
    pub fn reformat(s: String) -> String {
        let mut nums = vec![];
        let mut chars = vec![];
        for char in s.chars().into_iter() {
            match char {
                '0'..='9' => nums.push(char),
                'A'..='z' => chars.push(char),
                _ => {}
            }
        }

        let mut less;
        let mut more;
        let mut res = String::new();

        match nums.len() as i32 - chars.len() as i32 {
            0 => {
                //随意
                more = nums;
                less = chars;
            }
            -1 => {
                more = chars;
                less = nums;
                res.push(more.pop().unwrap());
            }
            1 => {
                more = nums;
                less = chars;
                res.push(more.pop().unwrap());
            }
            _ => return "".to_string(),
        }

        if more.len() - less.len() > 1 {
            return "".to_string();
        }

        loop {
            if less.len() == 0 {
                break;
            }
            res.push(less.pop().unwrap());
            res.push(more.pop().unwrap());
        }
        res
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    fn is_ok(value: String) -> bool {
        let mut count: Option<bool> = None;
        for char in value.chars().into_iter() {
            match char {
                '0'..='9' => match count {
                    Some(false) => count = Some(true),
                    Some(true) => return false,
                    None => count = Some(true),
                },
                'A'..='z' => match count {
                    Some(true) => count = Some(false),
                    Some(false) => return false,
                    None => count = Some(false),
                },
                _ => {}
            }
        }
        true
    }

    #[test]
    fn test_1() {
        let ok = is_ok(Solution::reformat("a0b1c2".to_string()));
        assert!(ok);
    }
}
