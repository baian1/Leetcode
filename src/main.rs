#[derive(Debug)]
struct Err();

fn main() -> Result<(), Err> {
    fn tt() -> Result<i32, Err> {
        return Ok(3);
    }

    let a = tt()?;
    dbg!(a);
    Ok(())
}
