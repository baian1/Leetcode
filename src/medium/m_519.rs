use rand::Rng;
use std::{collections::HashMap, ops::Add};

pub struct Solution {
    matrix: (i32, i32),
    total: i32,
    map: HashMap<i32, i32>,
}
impl Solution {
    pub fn new(m: i32, n: i32) -> Self {
        return Solution {
            matrix: (m, n),
            map: HashMap::new(),
            total: m * n,
        };
    }

    pub fn flip(&mut self) -> Vec<i32> {
        let mut rng = rand::thread_rng();
        let x = rng.gen_range(0..self.total);
        self.total -= 1;
        let ttt = self.map.get(&self.total).unwrap_or(&self.total).clone();
        let idx = self.map.entry(x).or_insert(x);

        let n = self.matrix.1;
        let res = vec![*idx / n, *idx % n];

        *idx = ttt;
        return res;
    }

    pub fn reset(&mut self) {
        self.total = self.matrix.1 * self.matrix.0;
        self.map = HashMap::new()
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn test_1() {
        let mut solution = Solution::new(3, 1);
        solution.flip();
        solution.flip();
        solution.flip();
    }
}
