use std::collections::HashSet;

pub fn primes(n: u64) -> Vec<u64> {
    let mut primes_list = vec![];
    let mut is_primes = vec![true; n as usize];
    for num in 2..n {
        if *is_primes.get(num as usize).unwrap() == true {
            primes_list.push(num)
        }
        for prime in primes_list.iter() {
            if let Some(v) = is_primes.get_mut((prime * num) as usize) {
                *v = false;
                if num % prime == 0 {
                    break;
                }
            }
        }
    }
    primes_list
}

pub fn consecutive_k_primes(k: u64, min: u64, max: u64) -> Vec<u64> {
    let base = primes(max);
    let mut next = base.clone();
    let compute_next = |base2: Vec<u64>| -> Vec<u64> {
        let mut res = HashSet::new();
        for a in base2 {
            for b in &base {
                if a * b > max {
                    break;
                }
                res.insert(a * b);
            }
        }
        let mut res = res.iter().map(|&x| x).collect::<Vec<u64>>();
        res.sort();
        res
    };
    let mut k = k;
    while k > 1 {
        next = compute_next(next);
        k -= 1;
    }
    next.iter()
        .filter(|v| (*v).ge(&min))
        .map(|v| *v)
        .collect::<Vec<u64>>()
}

#[cfg(test)]
mod tests {
    macro_rules! assert_primes {
        ($n:expr, $expected:expr) => {
            assert_eq!(super::primes($n), $expected)
        };
    }

    #[test]
    fn one() {
        assert_primes!(5, vec![2, 3]);
        assert_primes!(
            100,
            vec![
                2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
                83, 89, 97
            ]
        );
    }

    #[test]
    fn two() {
        assert_eq!(super::consecutive_k_primes(3, 0, 20), vec![8, 12, 18, 20]);
        assert_eq!(
            super::consecutive_k_primes(5, 1000, 1100),
            vec![1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]
        );
        assert_eq!(super::consecutive_k_primes(12, 100000, 100100), vec![]);
    }
}
