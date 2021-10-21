use std::ops::Add;

#[derive(Debug)]
struct Complex<T: Add> {
    real: T,
    imag: T,
}

impl<T> Add for Complex<T>
where
    T: Add<Output = T>,
{
    type Output = Complex<T>;
    fn add(self, rhs: Self) -> Self::Output {
        Complex {
            real: self.real + rhs.real,
            imag: self.imag + rhs.imag,
        }
    }
}

fn main() {
    dbg!(
        Complex {
            real: (1, 2),
            imag: (2, 1)
        } + Complex {
            real: (1, 1),
            imag: (1, 2)
        }
    );
    println!("Hello, world!");
}
