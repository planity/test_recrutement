## The problem

The problem consists in extracting data from a JSON file too big to be parsed / hold in memory as a whole.

The file is a valid JSON file, consisting in an array of objects. The structure of objects is not known, apart from the fact that they have an `id` and a `name` attributes.

The formatting of the file is not known: it may be a single line file, or formatted using a variety of whitespace options.

The problem consists in writing a Node.js program which must:

- accept an `id` as a command-line argument
- log to the console the `name` attribute of the object with the corresponding id.

To simulate low memory constraints, your program should work with `node --max_old_space_size=50`

## Example

````
> node --max_old_space_size=50 solution.js 62359
Damon Jerde // logged to the console
`````
