#[macro_export]
macro_rules! arr_to_vec {
    ($a:expr) => {
        Vec::from($a.map(|v| Vec::from(v)))
    };
}
