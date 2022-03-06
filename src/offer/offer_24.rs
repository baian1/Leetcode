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
    pub fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut cur = None;
        loop {
            if let Some(mut v) = head {
                head = v.next.take();
                v.next = cur;
                cur = Some(v);
            } else {
                break;
            }
        }
        cur
    }
}

#[cfg(test)]
mod tests {
    // use super::Solution;

    #[test]
    fn test_1() {}
}
