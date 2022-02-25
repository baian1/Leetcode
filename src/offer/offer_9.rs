struct CQueue {
    stack: Vec<i32>,
    stack2: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl CQueue {
    fn new() -> Self {
        CQueue {
            stack: vec![],
            stack2: vec![],
        }
    }

    fn append_tail(&mut self, value: i32) {
        self.stack.push(value)
    }

    fn delete_head(&mut self) -> i32 {
        if let Some(r) = self.stack2.pop() {
            return r;
        }
        loop {
            if let Some(v) = self.stack.pop() {
                self.stack2.push(v);
            } else {
                break;
            }
        }
        if let Some(r) = self.stack2.pop() {
            return r;
        }
        -1
    }
}
