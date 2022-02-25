pub struct MinStack {
    main_stack: Vec<i32>,
    sub_stack: Vec<i32>,
}

/**
 * Your MinStack object will be instantiated and called as such:
 * let obj = MinStack::new();
 * obj.push(x);
 * obj.pop();
 * let ret_3: i32 = obj.top();
 * let ret_4: i32 = obj.min();
 */

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MinStack {
    /** initialize your data structure here. */
    pub fn new() -> Self {
        MinStack {
            main_stack: vec![],
            sub_stack: vec![],
        }
    }

    pub fn push(&mut self, x: i32) {
        self.main_stack.push(x);
        if let Some(v) = self.sub_stack.last() {
            if x <= *v {
                self.sub_stack.push(x)
            }
        } else {
            self.sub_stack.push(x)
        }
    }

    pub fn pop(&mut self) {
        let v = self.main_stack.pop().unwrap_or(-1);
        if Some(&v) == self.sub_stack.last() {
            self.sub_stack.pop();
        }
    }

    pub fn top(&self) -> i32 {
        *self.main_stack.last().unwrap()
    }

    pub fn min(&self) -> i32 {
        *self.sub_stack.last().unwrap_or(&-1)
    }
}

#[test]
fn one() {
    let mut obj = MinStack::new();
    obj.push(-2);
    obj.push(0);
    obj.push(-3);
    assert_eq!(obj.min(), -3);
    obj.pop();
    assert_eq!(obj.top(), 0);
    assert_eq!(obj.min(), -2);
}
