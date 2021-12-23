#[derive(Debug)]
struct Err();

fn main() -> Result<(), Err> {
    fn tt() -> Result<i32, Err> {
        return Ok(3);
    }

    let a = tt()?;
    dbg!(a);

    // Accordingly, by defining 2 values without references, references
    // can be retrieved via `ref` and `ref mut`.
    let value = 5;
    let mut_value = 6;

    // Use `ref` keyword to create a reference.
    match value {
        ref r => println!("Got a reference to a value: {:?}", r),
    }

    // Use `ref mut` similarly.
    match mut_value {
        mut m => {
            // Got a reference. Gotta dereference it before we can
            // add anything to it.
            m += 10;
            println!("We added 10. `mut_value`: {:?}", m);
        }
    }
    Ok(())
}
