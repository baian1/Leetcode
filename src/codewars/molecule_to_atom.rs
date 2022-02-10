/**
 * https://www.codewars.com/kata/52f831fa9d332c6591000511/rust
 */
use thiserror::Error;

pub type Atom = (String, usize);
pub type Molecule = Vec<Atom>;

#[derive(Error, Debug)]
pub enum ParseError {
    Molecule,
    Parenthesis,
}
impl ParseError {
    fn as_str(&self) -> &'static str {
        match self {
            ParseError::Molecule => "Not a valid molecule",
            ParseError::Parenthesis => "Mismatched parenthesis",
        }
    }
}
impl std::fmt::Display for ParseError {
    fn fmt(&self, fmt: &mut std::fmt::Formatter<'_>) -> Result<(), std::fmt::Error> {
        match self {
            ParseError::Molecule => write!(fmt, "Not a valid molecule"),
            ParseError::Parenthesis => write!(fmt, "Mismatched parenthesis"),
        }
    }
}

pub fn parse_molecule(s: &str) -> Result<Molecule, &'static str> {
    println!("{}", s);
    let mut m = std::collections::HashMap::new();
    let mut stack = match stack(s) {
        Ok(it) => it,
        Err(err) => return Err(err.as_str()),
    };

    let uni: Vec<_> = unique(&stack);

    let mut n = Vec::new();
    while !stack.is_empty() {
        let v = stack.pop().unwrap();
        let c = v.chars().next().unwrap();
        if ('0'..='9').contains(&c) {
            let mut f: usize = v.parse().unwrap();
            if !n.is_empty() {
                f *= n.last().unwrap();
            }
            n.push(f);
        } else {
            match c {
                ']' | ')' | '}' => {}
                '[' | '(' | '{' => {
                    n.pop();
                }
                _ => {
                    let &f = n.last().or_else(|| Some(&1)).unwrap();
                    *m.entry(v.to_string()).or_insert(0) += f;
                }
            }
        }
    }
    let mut r = Molecule::new();
    for d in uni {
        let name = d.clone();
        let t = (name, m[&d]);
        r.push(t);
    }
    Ok(r)
}

fn unique(stack: &Vec<&str>) -> Vec<String> {
    let mut m = std::collections::HashSet::new();
    let mut r = Vec::new();
    for &v in stack {
        if !m.contains(v)
            && v != "("
            && v != ")"
            && v != "["
            && v != "]"
            && v != "{"
            && v != "}"
            && !v.parse::<usize>().is_ok()
        {
            m.insert(v);
            r.push(v.into());
        }
    }
    r
}

fn stack(s: &str) -> Result<Vec<&str>, ParseError> {
    let mut m = std::collections::HashMap::new();
    m.insert(')', '(');
    m.insert(']', '[');
    m.insert('}', '{');

    let b = s.as_bytes();
    let mut stack: Vec<&str> = Vec::new();
    let mut pair = Vec::new();
    let mut i = 0;
    while i < b.len() {
        match b[i] {
            b'0'..=b'9' => {
                let j = i;
                i += 1;
                while i < b.len() && (b'0'..=b'9').contains(&b[i]) {
                    i += 1;
                }
                if stack.is_empty() {
                    return Err(ParseError::Molecule);
                }
                let last = stack.pop().unwrap();
                let c = last.chars().next().unwrap();
                if ('A'..='Z').contains(&c) {
                    stack.push("(");
                    stack.push(last);
                    stack.push(")");
                } else {
                    stack.push(last);
                }
                let t = std::str::from_utf8(&b[j..i]).unwrap();
                stack.push(t);
            }
            b'A'..=b'Z' => {
                let j = i;
                i += 1;
                while i < b.len() && (b'a'..=b'z').contains(&b[i]) {
                    i += 1;
                }
                let t = std::str::from_utf8(&b[j..i]).unwrap();
                stack.push(t);
            }
            b'[' | b']' | b'(' | b')' | b'{' | b'}' => {
                let t = std::str::from_utf8(&b[i..i + 1]).unwrap();
                let c = t.chars().next().unwrap();
                match c {
                    '(' | '[' | '{' => {
                        pair.push(c);
                    }
                    ')' | ']' | '}' => {
                        if pair.is_empty() {
                            return Err(ParseError::Parenthesis);
                        }
                        let p = pair.pop().unwrap();
                        if m[&c] != p {
                            return Err(ParseError::Parenthesis);
                        }
                    }
                    _ => return Err(ParseError::Parenthesis),
                }
                stack.push(t);
                i += 1;
            }
            _ => {
                return Err(ParseError::Molecule);
            }
        }
    }
    if pair.len() != 0 {
        return Err(ParseError::Parenthesis);
    }
    Ok(stack)
}

#[cfg(test)]
mod tests {
    use super::{parse_molecule, Molecule};

    macro_rules! assert_parse {
        ($formula:expr, $expected:expr, $name:ident) => {
            #[test]
            fn $name() {
                super::assert_parse($formula, &$expected);
            }
        };
    }

    mod molecules {
        assert_parse!("H", [("H", 1)], hydrogen);
        assert_parse!("O2", [("O", 2)], oxygen);
        assert_parse!("H2O", [("H", 2), ("O", 1)], water);
        assert_parse!(
            "Mg(OH)2",
            [("Mg", 1), ("O", 2), ("H", 2)],
            magnesium_hydroxide
        );
        assert_parse!(
            "K4[ON(SO3)2]2",
            [("K", 4), ("O", 14), ("N", 2), ("S", 4)],
            fremys_salt
        );
    }

    #[test]
    fn errors() {
        assert_fail("pie", "Not a valid molecule");
        assert_fail("Mg(OH", "Mismatched parenthesis");
        assert_fail("Mg(OH}2", "Mismatched parenthesis");
    }

    fn assert_fail(formula: &str, msg: &str) {
        let result = parse_molecule(formula);
        dbg!(result.is_err());
        assert!(
            result.is_err(),
            "expected {} {:?} to fail, got {:?}",
            msg,
            formula,
            result.unwrap()
        );
    }

    fn assert_parse(formula: &str, expected: &[(&str, usize)]) {
        let mut expected = expected
            .into_iter()
            .map(|&(name, usize)| (name.to_owned(), usize))
            .collect::<Molecule>();
        let result = parse_molecule(formula);
        assert!(
            result.is_ok(),
            "expected {:?} to pass, got {:?}",
            formula,
            result
        );
        let mut actual = result.unwrap();
        actual.sort();
        expected.sort();
        assert_eq!(actual, expected);
    }
}
