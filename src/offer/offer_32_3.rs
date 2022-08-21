pub struct Solution();
use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;

use super::utils::TreeNode;

impl Solution {
    pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        if root.is_none() {
            return vec![];
        }
        let mut res = vec![];
        let mut queue = VecDeque::from([]);
        queue.push_back(root);
        queue.push_back(None);

        let mut cur_line = vec![];
        let mut need_rev = false;
        loop {
            if let Some(node) = queue.pop_front().unwrap() {
                let br_node = node.borrow();
                cur_line.push(br_node.val);
                if br_node.left.is_some() {
                    queue.push_back(br_node.left.clone())
                }
                if br_node.right.is_some() {
                    queue.push_back(br_node.right.clone())
                }
            } else {
                queue.push_back(None);
                if need_rev == false {
                    res.push(cur_line);
                } else {
                    cur_line.reverse();
                    res.push(cur_line);
                }
                need_rev = !need_rev;
                cur_line = vec![];
                if queue.len() == 1 {
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
