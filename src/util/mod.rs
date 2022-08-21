use std::{cell::RefCell, ops::Deref, rc::Rc};

#[macro_export]
macro_rules! arr_to_vec {
    ($a:expr) => {
        Vec::from($a.map(|v| Vec::from(v)))
    };
}

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }

    pub fn new_tree(val: Vec<Option<i32>>) -> Option<Rc<RefCell<Self>>> {
        let mut node_list: Vec<Option<Rc<RefCell<TreeNode>>>> = vec![];
        for i in val.iter() {
            if let Some(num) = i {
                let node = TreeNode::new(*num);
                node_list.push(Some(Rc::new(RefCell::new(node))));
            } else {
                node_list.push(None)
            }
        }

        for index in 0..node_list.len() {
            let cur_node = node_list.get(index).and_then(|v| v.clone());
            cur_node.map(|cur_node| {
                let left_index = 2 * index + 1;
                let right_index = left_index + 1;
                let left = node_list.get(left_index).and_then(|v| v.clone());
                let right = node_list.get(right_index).and_then(|v| v.clone());
                let mut c = cur_node.deref().borrow_mut();
                c.left = left;
                c.right = right;
            });
        }

        node_list.remove(0).map(|node| node)
    }
}

#[cfg(test)]
mod tests {
    use super::TreeNode;

    #[test]
    fn get_tree_form_arr() {
        let data: Vec<Option<i32>> = (vec![1, 2, 3, -1, 0])
            .iter()
            .map(|v| if *v >= 0 { Some(*v) } else { None })
            .collect();
        println!("{:?}", &data);
        let node = TreeNode::new_tree(data).unwrap();
        assert_eq!(node.borrow().val, 1);
        assert_eq!(
            node.borrow()
                .left
                .as_ref()
                .map(|node| node.as_ref().borrow().val),
            Some(2)
        );
    }
}
