use std::mem::{align_of, size_of};

fn main() {
    let array: [i32; 3] = [1, 2, 3];
    dbg!(size_of::<[i32; 3]>());
    dbg!(align_of::<[i32; 3]>());

    let tup = (5, String::from("hello"));
    // let (x, y) = tup;
    // println!("{},{}", x, y);
    // println!("{}", tup.0);
    // println!("{}", tup.1);
    println!("{:?}", tup);
}
