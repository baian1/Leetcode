// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/rust
pub fn order(sentence: &str) -> String {
    let mut list = sentence.split(" ").into_iter().collect::<Vec<&str>>();
    // list.sort_unstable_by_key(|a| {
    //     let mut index = 0;
    //     for c in a.as_bytes() {
    //         index = match *c as char {
    //             '1'..='9' => *c - 47,
    //             _ => 0,
    //         };
    //         if index > 0 {
    //             break;
    //         }
    //     }
    //     index
    // });
    list.sort_by_key(|s| s.chars().find(|c| c.is_digit(10)).unwrap());
    list.join(" ")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn returns_expected() {
        assert_eq!(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
        assert_eq!(order(""), "");
    }
}
