use std::collections::HashSet;

struct Solution();
impl Solution {
    pub fn reordered_power_of2(n: i32) -> bool {
        let mut hash_set: HashSet<[i32; 10]> = HashSet::new();
        let mut a = 1;
        loop {
            if a > 1e9 as i32 {
                break;
            }
            hash_set.insert(Self::count_digits(a));
            a = a << 1;
        }

        !hash_set.insert(Self::count_digits(n))
    }

    fn count_digits(n: i32) -> [i32; 10] {
        let mut res = [0; 10];
        let mut n = n;
        loop {
            if n <= 0 {
                break;
            }
            let index = (n % 10) as usize;
            res[index] += 1;
            n /= 10;
        }
        res
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        assert_eq!(Solution::reordered_power_of2(1), true)
    }
}
