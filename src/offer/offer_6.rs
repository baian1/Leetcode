// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

pub struct Solution();
impl Solution {
    pub fn reverse_print(head: Option<Box<ListNode>>) -> Vec<i32> {
        let mut res = vec![];
        let mut cur = head;
        loop {
            match cur {
                Some(v) => {
                    res.insert(0, v.val);
                    cur = v.next
                }
                None => {
                    break;
                }
            }
        }
        res
    }
}

#[cfg(test)]
mod tests {
    // use super::Solution;

    #[test]
    fn test_1() {}
}
