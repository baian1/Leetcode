// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/rust
fn prod(n: u64) -> u64 {
    let mut n = n;
    let mut prod = 1;
    while n > 0 {
        prod *= n % 10;
        n /= 10;
    }
    prod
}

pub fn persistence(num: u64) -> u64 {
    let mut count = 0;
    let mut num = num;
    loop {
        match num {
            0..=9 => {
                break;
            }
            10.. => {
                count += 1;
            }
        }
        num = prod(num);
    }
    count
}

#[cfg(test)]
mod tests {

    #[test]
    fn sample_tests() {
        assert_eq!(super::persistence(39), 3);
        assert_eq!(super::persistence(4), 0);
        assert_eq!(super::persistence(25), 2);
        assert_eq!(super::persistence(999), 4);
    }
}
