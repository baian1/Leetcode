use std::{cell::RefCell, rc::Rc};

use crate::util::TreeNode;
pub struct Solution {}
impl Solution {
    pub fn find_bottom_left_value(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut res = (-1, None);
        Self::dfs(root.as_ref(), 0, &mut res);
        res.1.map_or(0, |v| v)
    }
    fn dfs(node: Option<&Rc<RefCell<TreeNode>>>, deep: i32, cur_v: &mut (i32, Option<i32>)) {
        if let Some(node) = &node {
            if deep > cur_v.0 {
                cur_v.0 = deep;
                cur_v.1 = Some(node.borrow().val);
            }
            Self::dfs(node.borrow().left.as_ref(), deep + 1, cur_v);
            Self::dfs(node.borrow().right.as_ref(), deep + 1, cur_v);
        }
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;
    use super::TreeNode;

    #[test]
    fn test1() {
        assert_eq!(
            Solution::find_bottom_left_value(TreeNode::new_tree(
                vec![2, 1, 3]
                    .iter()
                    .map(|v| if *v >= 0 { Some(*v) } else { None })
                    .collect()
            )),
            1
        )
    }
}
