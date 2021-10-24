use std::collections::HashMap;

fn main() {
    let mut hash = HashMap::new();
    hash.insert(vec![1, 2], 3);
    hash.insert(vec![1, 2], 4);
    dbg!(hash);
    println!("Hello, world!");
}
