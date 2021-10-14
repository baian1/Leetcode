struct Solution();

impl Solution {
    pub fn number_of_weak_characters(mut properties: Vec<Vec<i32>>) -> i32 {
        properties.sort_by(|a, b| match a[0].cmp(&b[0]) {
            std::cmp::Ordering::Less => std::cmp::Ordering::Less.reverse(),
            std::cmp::Ordering::Greater => std::cmp::Ordering::Greater.reverse(),
            std::cmp::Ordering::Equal => a[1].cmp(&b[1]),
        });
        let mut count = 0;
        let mut max_def = properties[0][1];
        for propertie in properties.iter() {
            if propertie[1] < max_def {
                count += 1;
            } else {
                max_def = propertie[1];
            }
        }

        count
    }
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    macro_rules! vvv {
        ($a:expr) => {
            Solution::number_of_weak_characters(crate::arr_to_vec!($a))
        };
    }

    #[test]
    fn test_1() {
        assert_eq!(vvv!([[5, 5], [6, 3], [3, 6]]), 0);
    }

    #[test]
    fn test_2() {
        assert_eq!(vvv!([[5, 5], [6, 3], [3, 6]]), 0);
    }

    #[test]
    fn test_3() {
        assert_eq!(
            vvv!([
                [7, 7],
                [1, 2],
                [9, 7],
                [7, 3],
                [3, 10],
                [9, 8],
                [8, 10],
                [4, 3],
                [1, 5],
                [1, 5]
            ]),
            6
        );
    }
}
